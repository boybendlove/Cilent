import React, {useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import Row from 'react-bootstrap/Row';
import Image from '../Share/img/Image';
import { useHistory } from 'react-router-dom';
import Travel from './quangcao/quangcao';
// import airportsData from '../API/airports.json';
// import flightsData from '../API/flights.json';
import axios from "axios";
import { format, parseISO } from 'date-fns';

// const airports = airportsData.airports.map(airport => `${airport.name} (${airport.code})`);

const isDate = (date) => {
  return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

const ErrorLabel = (props) => {
  return (<label style={{ color: 'red' }}>{props.message}</label>)
}

function Home(props) {
  const [fights, setFights] = useState();
  const [airports,setAirports] = useState()
  // useEffect(() => {
    async function fetchData() {   
      const request = await axios.get('https://localhost:7280/api/Flights');
      console.log(request)
      setFights(request.data);
      const request2 = await axios.get('https://localhost:7280/api/Locations');
      setAirports(request2.data);
      console.log(request2)
      
      return request;   
        
      }
      console.log(fights)
      console.log(airports)
  // }, []);
  useEffect(() => {
    fetchData();
  }, []);
console.log(fights)

const airport = airports ? [...new Set(airports.map(airport => airport.start_location))] : [];

  let start_location, end_location;
  
  const [isReturn, setFlightType] = useState(true);
  const [status, setFormValid] = useState({ isValid: false });
  let invalidFields = {};
  
  // Sử dụng useHistory để điều hướng từ trang Home sang trang /shop
  const history = useHistory();
  

  const handleSubmit = (event, isReturn) => {
    console.log(fights)
    event.preventDefault();
    console.log("Mảng airports:", airports);
    invalidFields = {};
    const criteria = {
      start_location: start_location.state.text,
      end_location: end_location.state.text,
      time_start: event.target.dateOfDep.value,
      numberAdult: event.target.numberAdult.value,
      numberChildren: event.target.numberChildren.value,
      numberBaby: event.target.numberBaby.value,
      class: event.target.Class.value
    };

    console.log("Origin:", start_location?.state?.text);
    console.log("Destination:", end_location?.state?.text);
    if (!airport.includes(criteria.start_location)) {
      invalidFields.start_location = true;
    }
    if (!airport.includes(criteria.end_location) || criteria.start_location === criteria.end_location) {
      invalidFields.end_location = true;
    }
    if(!isDate(criteria.time_start)) {
      invalidFields.time_start = true;
    }
   
    console.log(criteria);
    
    
    if (event.target.flightType[1].checked) {
      const criteriaReturn = {
        start_location: end_location.state.text,
        end_location: start_location.state.text,
        time_start: event.target.dateOfReturn.value,
        numberAdult: event.target.numberAdult.value,
        numberChildren: event.target.numberChildren.value,
        numberBaby: event.target.numberBaby.value,
        class: event.target.Class.value};
        
        if(!isDate(criteriaReturn.time_start)) {
          invalidFields.time_start = true;
        }
        if(Object.keys(invalidFields).length > 0) {
          setFormValid({isValid: false, ...invalidFields});
          return;
        }
        setFormValid({ isValid: true });
        handleSearchFlightsReturn(criteriaReturn);
        handleSearchFlights(criteria);
        const searchResultsReturn = handleSearchFlightsReturn(criteriaReturn);
        console.log("aaaaaaa:", searchResultsReturn);
        const searchResults = handleSearchFlightsReturn(criteria);
        console.log("bbbb:",searchResults)
        history.push({
          pathname: '/shop',
          state: {
            searchResultsReturn: searchResultsReturn,
            criteriaReturn: criteriaReturn,
            searchResults: searchResults,
            criteria: criteria,
            isReturn: true
          },
        });
      
    }else{handleSearchFlights(criteria);
      if(Object.keys(invalidFields).length > 0) {
        setFormValid({isValid: false, ...invalidFields});
        return;
      }
      setFormValid({ isValid: true });
      const searchResults = handleSearchFlightsReturn(criteria);
          console.log("cccccc:",searchResults)
      // Chuyển dữ liệu tìm kiếm sang trang /shop
      history.push({
        pathname: '/shop',
        state: {
          searchResults: searchResults,
          criteria: criteria,
          isReturn: false
        },
      });
    }
    
     }
     
     const handleSearchFlightsReturn = (criteriaReturn) => {
      console.log(fights);
      try {
        console.log(criteriaReturn);
        const searchResultsReturn = fights.filter((flight) => {
          const { location, time_start, airplane } = flight;
          const {
            seat_total,
            seat_booked,
            total_business,
            total_economy,
            business_booked,
            economy_booked,
          } = airplane;
          console.log(location.start_location)
          console.log(location.end_location)
          if (
            location.start_location !== criteriaReturn.start_location ||
            location.end_location !== criteriaReturn.end_location
          ) {
            console.log("Origin or destination not matched");
            return false;
          }
          console.log("ok")
    console.log(format(new Date(time_start), 'yyyy-MM-dd'))
          if (
            criteriaReturn.time_start &&
            format(new Date(time_start), 'yyyy-MM-dd') !== criteriaReturn.time_start
          ) {
            console.log("Departure date not matched");
            return false;
          }
    
          const totalSeatsNeeded =
            (parseInt(criteriaReturn.numberAdult) || 0) +
            (parseInt(criteriaReturn.numberChildren) || 0);
          
          const availableSeats = seat_total - seat_booked;
          const availableBusinessSeats = total_business - business_booked;
          const availableEconomySeats = total_economy - economy_booked;
          
          if (availableSeats < totalSeatsNeeded) {
            console.log("Not enough available business seats");
            return false;
          }
          if (availableBusinessSeats < totalSeatsNeeded) {
            console.log("Not enough available business seats");
            return false;
          }
    
          if (availableEconomySeats < totalSeatsNeeded) {
            console.log("Not enough available economy seats");
            return false;
          }
    
          console.log("Flight passed all criteria");
          return true;
        });
    
        console.log("searchResultsReturn:", searchResultsReturn);
        return searchResultsReturn;
      } catch (error) {
        console.error("Error in handleSearchFlightsReturn:", error);
      }
    };
    
    const handleSearchFlights = (criteria) => {
      try {
        console.log(criteria);
        const searchResultsReturn = fights.filter((flight) => {
          const { location, time_start, airplane } = flight;
          const {
            seat_total,
            seat_booked,
            total_business,
            total_economy,
            business_booked,
            economy_booked,
          } = airplane;
    
          if (
            location.start_location !== criteria.start_location ||
            location.end_location !== criteria.end_location
          ) {
            console.log("Origin or destination not matched");
            return false;
          }
    
          if (
            criteria.time_start &&
            format(new Date(time_start), 'yyyy-MM-dd') !== criteria.time_start
          ) {
            console.log("Departure date not matched");
            return false;
          }
    
          const totalSeatsNeeded =
            (parseInt(criteria.numberAdult) || 0) +
            (parseInt(criteria.numberChildren) || 0);
          
          const availableSeats = seat_total - seat_booked;
          const availableBusinessSeats = total_business - business_booked;
          const availableEconomySeats = total_economy - economy_booked;
          
          if (availableSeats < totalSeatsNeeded) {
            console.log("Not enough available business seats");
            return false;
          }
          if (availableBusinessSeats < totalSeatsNeeded) {
            console.log("Not enough available business seats");
            return false;
          }
    
          if (availableEconomySeats < totalSeatsNeeded) {
            console.log("Not enough available economy seats");
            return false;
          }
    
          console.log("Flight passed all criteria");
          return true;
        });
    
        console.log("searchResultsReturn:", searchResultsReturn);
        return searchResultsReturn;
      } catch (error) {
        console.error("Error in handleSearchFlightsReturn:", error);
      }
    };
    const [isFormFixed, setIsFormFixed] = useState(false);
    const handleScroll = () => {
      const formHome = document.getElementById('formHome');
      if (formHome) {
        if (window.scrollY > 100) {
          setIsFormFixed(true);
        } else {
          setIsFormFixed(false);
        }
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
  return (
    <div className="page-holder">
      <div className="container">

        
          <section className={`pb-2 bg-cover bg-center align-items-center form-home ${isFormFixed ? 'enabled' : ''}`} style={{ padding: "1% 2% 1% 2%", backgroundImage: 'linear-gradient(to right, #5094fa , #92d2f7)' }}>
            <Form noValidate className={`form-home ${isFormFixed ? 'enabled' : ''}`} onSubmit={handleSubmit}>
              <header>
                <h2 className="h5 text-uppercase mb-4">Tìm vé máy bay</h2>
              </header>
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  checked={!isReturn}
                  type="radio"
                  label="One way"
                  name="flightType"
                  id="formHorizontalRadios1"
                  onChange={(e) => setFlightType(false)}
                />
                <Form.Check
                  inline
                  checked={isReturn}
                  type="radio"
                  label="round-trip"
                  name="flightType"
                  id="formHorizontalRadios2"
                  onChange={(e) => setFlightType(true)}
                />
              </div>
              <Row className="mb-12">
                <Form.Group as={Col} md="3" controlId="validationCustom01">
                  <Form.Label>Flying from</Form.Label>
                  <Typeahead
                     labelKey={(option) => option}
                     options={airport}
                     placeholder="Enter location"
                     ref={(ref) => start_location = ref}
                     selected={start_location}
                  />
                  
                  {status.start_location && <ErrorLabel message="Please enter a valid airport"></ErrorLabel>}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom02">
                  <Form.Label>Flying to</Form.Label>
                  <Typeahead
                    labelKey="destination"
                    options={airport}
                    placeholder="Enter Destination"
                    ref={(ref) => end_location = ref}
                    id="destination-menu"
                  />
                  {status.end_location && <ErrorLabel message="Please enter a valid airport but not same as origin"></ErrorLabel>}
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustomTotal">
                  <Form.Label>Adult</Form.Label>
                  <Form.Control
                    name='numberAdult'
                    type="Number"
                    placeholder="1"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Text muted>older 12 year old</Form.Text>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustomTotal">
                  <Form.Label>Children</Form.Label>
                  <Form.Control
                    name='numberChildren'
                    type="Number"
                    placeholder="0"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Text muted>from 2 to 11 year</Form.Text>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustomTotal">
                  <Form.Label>Baby (duoi 2)</Form.Label>
                  <Form.Control
                    name='numberBaby'
                    type="Number"
                    placeholder="0"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Text muted>under 2 years</Form.Text>
                </Form.Group>
              </Row>
              <Row className="mb-12" style={{marginBottom: "2%"}}>
                <Form.Group as={Col} md="3" controlId="formGridDateOfDep">
                  <Form.Label>Departure Date</Form.Label>
                  <Form.Control type="date" name="dateOfDep" placeholder="yyyy-mm-dd" required />
                  {status.departureDate && <ErrorLabel message="Please enter a valid departure date"></ErrorLabel>}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="formGridDateOfReturn">
                  <Form.Label>Return Date</Form.Label>
                  <Form.Control type="date" disabled={!isReturn} name="dateOfReturn" placeholder="yyyy-mm-dd" required />
                  {status.returnDate && <ErrorLabel message="Please enter a valid return date"></ErrorLabel>}
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationClass">
                  <Form.Label>Class</Form.Label><br></br>
                  <Form.Select style={{ width: "100%", height: "50%" }} name='Class' >
                    <option value="economy">economy</option>
                    <option value="business">business</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationClass">
                  <Button style={{ width: "100%", height: "100%", marginTop: "2%" }} type="submit">Submit form</Button>
                </Form.Group>
              </Row>
            </Form>
          </section>


      </div>
      <div style={{marginTop: "1%",marginBottom: "5%"}}>
      <Travel></Travel>
      </div>
      
    </div>
  );
}

export default Home;
