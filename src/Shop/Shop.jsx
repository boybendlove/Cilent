import React, {useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from "axios";
import Image from 'react-bootstrap/Image';
import { format, parseISO,differenceInMinutes } from 'date-fns';
import "./shop.css"
import buniess from "../Share/img/Screenshot 2023-08-17 142138.png";
import eco from "../Share/img/Screenshot 2023-08-17 142155.png"
import FlightDetails from './FlightDetail/FightDetail.jsx';


const isDate = (date) => {
  return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

const ErrorLabel = (props) => {
  return (<label style={{ color: 'red' }}>{props.message}</label>)
}

function FlightCard({ flight, isReturn, criteria, hasReturnFlights }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandeds, setIsExpandeds] = useState(false);
  const [priceType,setPriceType] = useState();
  const [priceTypeReturn,setPriceTypeReturn] = useState();
  const [id2,setId2] = useState("");
  const [id3,setId3] = useState("");
  const cardStyle = isReturn === true
    ? { width: '30rem', marginBottom: '20px' }: { width: '50rem', marginBottom: '50px' }
     ;
  console.log(isReturn)
  console.log(hasReturnFlights)
  console.log(flight)
  console.log(priceType)
  console.log(priceTypeReturn)
  console.log(id2)
  console.log(id3)
  const handleBookTicket = (flight,id,Type) => {
    console.log(flight)
    const ticketInfo = {
      flight: flight,
      totalSeat: (parseInt(criteria.numberAdult) || 0) + (parseInt(criteria.numberChildren)|| 0),
      seatAdult:  (parseInt(criteria.numberAdult) || 0),
      seatChildren:  (parseInt(criteria.numberChildren) || 0),
      seatBaby:  (parseInt(criteria.numberBaby) || 0),
      Type: Type,
      price: Type === 'price_business' ? (parseInt(flight.price_business)):(parseInt(flight.price_economy))
    };
    console.log(hasReturnFlights)
    console.log(isReturn)
    console.log(Type)
    if (isReturn) {
      if(hasReturnFlights){
        if(`${id}`!==id3 || Type!==priceTypeReturn ){
          setIsExpandeds(true)
          sessionStorage.setItem('returnTicketInfo', JSON.stringify(ticketInfo));
          localStorage.setItem("Reid", JSON.stringify(id));
          localStorage.setItem("TypeRe", Type);
          const x = localStorage.getItem("Reid")
          const y = localStorage.getItem("TypeRe")
          setPriceTypeReturn(y)
          setId3(x)
          console.log("oke")}else{
            setIsExpandeds(false)
            localStorage.removeItem('Reid');
            localStorage.removeItem('TypeRe');
            sessionStorage.removeItem('returnTicketInfo')
            setPriceTypeReturn("")
            setId3("")
          }
        }
      else{
        if(`${id}`!==id2 || Type!==priceType ){
          setIsExpanded(true)
          sessionStorage.setItem('outboundTicketInfo', JSON.stringify(ticketInfo));
          localStorage.setItem("id", JSON.stringify(id));
          localStorage.setItem("Type", Type);
          const x = localStorage.getItem("id")
          const y = localStorage.getItem("Type")
          setPriceType(y)
          setId2(x)
          console.log("oke")}else{
            setIsExpanded(false)
            localStorage.removeItem('id');
            localStorage.removeItem('Type');
            sessionStorage.removeItem('outboundTicketInfo')
            setPriceType("")
            setId2("")
          }
       }} else {
        if(`${id}`!==id2 || Type!==priceType ){
          setIsExpanded(true)
          sessionStorage.setItem('outboundTicketInfo', JSON.stringify(ticketInfo));
          localStorage.setItem("id", JSON.stringify(id));
          localStorage.setItem("Type", Type);
          const x = localStorage.getItem("id")
          const y = localStorage.getItem("Type")
          setPriceType(y)
          setId2(x)
          console.log("oke")}else{
            setIsExpanded(false)
            localStorage.removeItem('id');
            localStorage.removeItem('Type');
            sessionStorage.removeItem('outboundTicketInfo')
            setPriceType("")
            setId2("")
          }
          
    }

    // Cập nhật biến trạng thái để hiển thị màu xanh trên nút đã chọn
    // setIsButtonSelected(true);
  };

  // const [isButtonSelected, setIsButtonSelected] = useState(false);
  const timeStartISOString = flight.time_start;
  const timeStartDate = parseISO(timeStartISOString);
  const hours = timeStartDate.getHours().toString().padStart(2, '0');
  const minutes = timeStartDate.getMinutes().toString().padStart(2, '0');
const timeEndISOString = flight.time_end;
const timeEndDate = parseISO(timeEndISOString);
const hourss = timeEndDate.getHours().toString().padStart(2, '0');
  const minutess = timeEndDate.getMinutes().toString().padStart(2, '0');
const minutesDifference = differenceInMinutes(timeEndDate, timeStartDate);
  const flightHours = Math.floor(minutesDifference / 60);
  const flightMinutes = minutesDifference % 60;
  return (
    <div>
      <div>
        
      <CardGroup>
    
    {/* <Card border="dark" style={width:"313.5%"}>
    </Card> */}
    
     <Card >
     <Card.Title ><Row><Col><small style={{ fontSize: '70%' }} className="text-muted d-flex justify-content-center align-items-center">{flight.airplane.name}</small></Col></Row>
     <Row className='d-flex justify-content-center align-items-center'>
      <Col md="5" style={{ fontSize: '97%' }}>{hours}:{minutes}</Col>
      <Col md="2" style={{ fontSize: '70%', margin: "0px", padding: "0px" }} className='d-flex justify-content-center align-items-center'>to</Col>
      <Col md="5" style={{ fontSize: '97%' }}>{hourss}:{minutess}</Col></Row>
     <Row><Col><small style={{ fontSize: '70%' }} className="text-muted d-flex justify-content-center align-items-center">{flight.airplane.logo_url} {flight.airplane.model} </small></Col></Row>
     </Card.Title>
       
     </Card>
     <Card  >
     <Card.Body onClick={() => handleBookTicket(flight, flight.flight_id, 'price_business')}>
          <Card.Title ><Row><Col className='d-flex justify-content-center align-items-center'>{flight.price_business}</Col></Row>
         <Row><Col style={{ fontSize: '70%', margin: "0px", padding: "0px" }} className='d-flex justify-content-center align-items-center'>Đã gồm thuế và phí</Col></Row> 
         
          </Card.Title>
      </Card.Body>
    </Card>
     <Card  >
     <Card.Body onClick={() => handleBookTicket(flight, flight.flight_id, 'price_economy')}>
     <Card.Title ><Row><Col className='d-flex justify-content-center align-items-center'>{flight.price_economy}</Col></Row>
         <Row><Col style={{ fontSize: '70%', margin: "0px", padding: "0px" }} className='d-flex justify-content-center align-items-center'>Đã gồm thuế và phí</Col></Row> 
         
          </Card.Title>
          
      </Card.Body>
      {/* <Row><Col>sddd</Col></Row>
      <Row><Col>sddd</Col></Row>
      <Row><Col>sddd</Col></Row>
      <Row><Col>sddd</Col></Row>
      <Row><Col>sddd</Col></Row> */}
    </Card>
    </CardGroup>
   </div>
   <div>
   {isExpanded && <FlightDetails flight={flight} flightHours={flightHours} flightMinutes={flightMinutes} Type={priceType}/>}
   {isExpandeds && <FlightDetails flight={flight} flightHours={flightHours} flightMinutes={flightMinutes} Type={priceTypeReturn}/>}
    </div>
   </div>
  );
}


function Shop(props) {

    const location = useLocation();
    const [criteria, setCriteria] = useState(location.state?.criteria || {});
    const [criteriaReturn, setCriteriaReturn] = useState(location.state?.criteriaReturn || {});
    const [resultss, setSearchResultss] = useState(location.state?.searchResultsReturn || []);
    const [results, setSearchResults] = useState(location.state?.searchResults || []);
    const history = useHistory();    
    console.log(results)
    console.log(criteria)
    console.log(resultss)
    console.log(criteriaReturn)
    
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
        const [isReturn, setFlightType] = useState(location.state?.isReturn);
        console.log(isReturn)
        const [status, setFormValid] = useState({ isValid: false });
        let invalidFields = {};
        // const hasReturnFlights = resultss.length > 0 ? true : false;
        // console.log(hasReturnFlights)
  const checkTicketSelection = () => {
    const outboundTicketInfo = sessionStorage.getItem('outboundTicketInfo');
    const returnTicketInfo = sessionStorage.getItem('returnTicketInfo');
  
    if (isReturn) {
      return outboundTicketInfo && returnTicketInfo ;
    } else {
      return outboundTicketInfo ;
    }
  };
      
        const handleSubmit = (event) => {
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
          if(Object.keys(invalidFields).length > 0) {
            setFormValid({isValid: false, ...invalidFields});
            return;
          }
          console.log(criteria);
          setFormValid({ isValid: true });
          
          if (event.target.flightType[1].checked) {
            const criteriaReturn = {
              start_location: end_location.state.text,
              end_location: start_location.state.text,
              time_start: event.target.dateOfReturn.value,
              numberAdult: event.target.numberAdult.value,
              numberChildren: event.target.numberChildren.value,
              numberBaby: event.target.numberBaby.value,
              class: event.target.Class.value};
              setCriteria(criteria);
              setCriteriaReturn(criteriaReturn)
              handleSearchFlightsReturn(criteriaReturn);
              handleSearchFlights(criteria);
              const searchResultsReturn = handleSearchFlightsReturn(criteriaReturn);
              console.log("aaaaaaa:", searchResultsReturn);
              const searchResults = handleSearchFlightsReturn(criteria);
              console.log("bbbb:",searchResults)
              setSearchResultss(searchResultsReturn);
              setSearchResults(searchResults)
            
          }else{handleSearchFlights(criteria);
            setCriteria(criteria)
            const searchResults = handleSearchFlightsReturn(criteria);
                console.log("cccccc:",searchResults)
                setSearchResults(searchResults)
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
          useEffect(() => {
            const handleScroll = () => {
              const ticketButton = document.getElementById('ticketButton');
              if (ticketButton) {
                if (window.scrollY > 200) {
                  ticketButton.classList.add('fixed');
                } else {
                  ticketButton.classList.remove('fixed');
                }
              }
            };
        
            window.addEventListener('scroll', handleScroll);
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
    return (
        <div >
     
        <Row>
          <Col md="3">
            <section className="py-5 bg-light" style={{ marginLeft: "10%", backgroundImage: 'linear-gradient(to right, #5094fa , #92d2f7)', padding: '2%', marginBottom: "5%" }}>
            <Form noValidate onSubmit={handleSubmit}>
              <div className="mb-3">
              <header>
                <h2 className="h5 text-uppercase mb-4">Tìm vé máy bay</h2>
              </header>
              </div>
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
             
                <Form.Group  md="3" controlId="validationCustom01">
                  <Form.Label>Flying from</Form.Label>
                  <Typeahead
                     labelKey={(option) => option}
                     options={airport}
                     placeholder="Enter Origin"
                     ref={(ref) => start_location = ref}
                     selected={start_location}
                  />
                  
                  {status.origin && <ErrorLabel message="Please enter a valid airport"></ErrorLabel>}
                </Form.Group>
               
                <Form.Group  md="3" controlId="validationCustom02">
                  <Form.Label>Flying to</Form.Label>
                  <Typeahead
                    labelKey="destination"
                    options={airport}
                    placeholder="Enter Destination"
                    ref={(ref) => end_location = ref}
                    id="destination-menu"
                  />
                  {status.destination && <ErrorLabel message="Please enter a valid airport but not same as origin"></ErrorLabel>}
                </Form.Group>
                <Row>
                <Form.Group  as={Col}  md="4" controlId="validationCustomTotal">
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
                <Form.Group  as={Col}  md="4" controlId="validationCustomTotal">
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
                <Form.Group as={Col}  md="4" controlId="validationCustomTotal">
                  <Form.Label>Baby</Form.Label>
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
                <Form.Group  md="3" controlId="formGridDateOfDep">
                  <Form.Label>Departure Date</Form.Label>
                  <Form.Control type="date" name="dateOfDep" placeholder="yyyy-mm-dd" required />
                  {status.departureDate && <ErrorLabel message="Please enter a valid departure date"></ErrorLabel>}
                </Form.Group>
          
                <Form.Group  md="3" controlId="formGridDateOfReturn">
                  <Form.Label>Return Date</Form.Label>
                  <Form.Control type="date" disabled={!isReturn} name="dateOfReturn" placeholder="yyyy-mm-dd" required />
                  {status.returnDate && <ErrorLabel message="Please enter a valid return date"></ErrorLabel>}
                </Form.Group>
            
                <Form.Group md="3" controlId="validationClass">
                  <Form.Label>Class</Form.Label><br></br>
                  <Form.Select style={{ width: "100%", height: "50%" }} name='Class' >
                    <option value="economy">economy</option>
                    <option value="business">business</option>
                  </Form.Select>
                </Form.Group>
            
                <Form.Group  md="3" controlId="validationClass">
                  <Button style={{ marginLeft: '25%', width: "50%", height: "50%", marginTop: "5%", backgroundImage: 'linear-gradient(26.73deg, #F9A51A 13.7%, #FBB612 29.8%, #FFDD00 66.81%)' }} type="submit">Submit form</Button>
                </Form.Group>
          
            </Form>
            </section>
            </Col>
            <Col md={isReturn ? "4" : "8"}>
            <section className="py-5">
              <h3>Chiều đi</h3>
              <Row>
         <Col md="4"></Col>
      
         <Col md="4">
      <Image style={{padding: "5px 5px 5px 5px" } } src={buniess} roundedCircle />
      </Col>
      <Col md="4">
     <Image style={{padding: "5px 5px 5px 5px" } } src={eco} roundedCircle />
     </Col>
      </Row>
            
              {results && results.length > 0 ? (
        <div >
            
          {results.map((flight) => ((
            <FlightCard key={flight.flight_id} flight={flight} isReturn={isReturn} criteria={criteria} hasReturnFlights={false} />
          )))}
        </div>
      ) : (
        <p>Không tìm thấy chuyến bay từ {criteria?.start_location} đến {criteria?.end_location} trong ngày {criteria?.time_start}</p>
      )}
      </section>
      </Col>
      {isReturn && (<Col md="4">
      <section className="py-5">
              <h3>Chiều về</h3>
              <Row>
         <Col md="4"></Col>
      
         <Col md="4">
      <Image style={{padding: "5px 5px 5px 5px" } } src={buniess} roundedCircle />
      </Col>
      <Col md="4">
     <Image style={{padding: "5px 5px 5px 5px" } } src={eco} roundedCircle />
     </Col>
      </Row>
              {results && results.length > 0 ? (
        <div >
          {resultss.map((flight) => ( (<div>
            <FlightCard key={flight.flight_id} flight={flight} isReturn={isReturn} criteria={criteriaReturn} hasReturnFlights={true}/>
          </div>
          )))}
         
  
        </div>
      ) : (
        <p>Không tìm thấy chuyến bay từ {criteriaReturn?.start_location} đến {criteriaReturn?.end_location} trong ngày {criteriaReturn?.time_start}</p>
      )}
      </section>
      </Col>)}
            
                
            </Row>
          
            <button
  className={`ticket-button ${checkTicketSelection() ? 'enabled' : ''}`}
  // disabled={ticketButtonEnabled === true}
  onClick={() => {
    if (checkTicketSelection()) {
      history.push('/select-fights');
    } else {
      alert('Vui lòng chọn vé trước khi đặt');
    }
  }}
>
  Đặt vé
</button>
            
        </div>
    );
}

export default Shop;