import React, { useEffect, useState } from 'react';
import alertify from 'alertifyjs'
import Accordion from 'react-bootstrap/Accordion';
import { Link, Redirect, } from 'react-router-dom';
import { useHistory , useLocation } from 'react-router-dom';
import { format, parseISO,differenceInMinutes } from 'date-fns';
// import {saveToStorage,getFromStorage} from '../API/Storage';

function Cart(props) {
    const history = useHistory();
    const location = useLocation();
    const idAdult = location.state?.id
    const idChirend = location.state?.idChirend || []
    const idBaby = location.state?.idBaby|| []
    const outboundTicketInfo = JSON.parse(sessionStorage.getItem('outboundTicketInfo'));
    const returnTicketInfo = JSON.parse(sessionStorage.getItem('returnTicketInfo')) || [];
    const Carts = {outboundTicketInfo,returnTicketInfo}
    console.log(Carts)
    // console.log(idAdult.length)
    // console.log(idAdult.length)
    console.log(idChirend)
    const currentTime = new Date().toISOString();
    // const timeStartISOString = outboundTicketInfo.flight.time_start;
    // const timeStartDate = parseISO(timeStartISOString);
    // const timeEndISOString = outboundTicketInfo.flight.time_end;
    // const timeEndDate = parseISO(timeEndISOString);
    //  const minutesDifference = differenceInMinutes(timeEndDate, timeStartDate);
    // const flightHours = Math.floor(minutesDifference / 60);
    // const flightMinutes = minutesDifference % 60;
    const [cart, setCart] = useState([])
    const [ticket, setTicket] = useState([])
    const [ticketReturn, setTicketReturn] = useState([])
    const [ticketChildren, setTicketChildren] = useState([])
    const [ticketChildrenReturn,setTicketChildrenReturn] = useState([])

    useEffect(() => {
        ticketAdultForms();
        ticketAdultFormsReturn();
        ticketChildrenForms();
        ticketChildrenFormsReturn();
      }, []);
    
    // Tạo các form thông tin người lớn
    const ticketAdultForms = () => {
      const forms = [];
        for (let i = 0; i < idAdult.length; i++) {
            console.log(Carts.outboundTicketInfo.flight.flight_id)
        forms.push({
            flight_id: Carts.outboundTicketInfo.flight.flight_id,
            customer_id: 1,
            passenger_id: idAdult[i],
            seat_id: Carts.outboundTicketInfo.flight.airplane.seat_id,
            create_at: currentTime,
            update_at: currentTime,
            departure_time: Carts.outboundTicketInfo.flight.time_start,
            arrival_time: Carts.outboundTicketInfo.flight.time_end,
            real_time_flight: Carts.outboundTicketInfo.flight.time_start - outboundTicketInfo.flight.time_end,
            ticket_status: "outbound",
            price: Carts.outboundTicketInfo.price,
            flag: "Adult"
        });
        console.log(forms)
      }
      setTicket(forms);
    };
    
    const ticketAdultFormsReturn = () => {
        const forms = [];
        if(returnTicketInfo !== null){
        for (let i = 0; i < idAdult.length; i++) {
            forms.push({
                flight_id: returnTicketInfo.flight.flight_id,
                customer_id: 1,
                passenger_id: idAdult[i],
                seat_id: returnTicketInfo.flight.airplane.seat_id,
                create_at: currentTime,
                update_at: currentTime,
                departure_time: returnTicketInfo.flight.time_start,
                arrival_time: returnTicketInfo.flight.time_end,
                real_time_flight: returnTicketInfo.flight.time_start - outboundTicketInfo.flight.time_end,
                ticket_status: "return",
                price: returnTicketInfo.price,
                flag: "Adult"
            });
          }
        setTicketReturn(forms);
    }else{
        setTicketReturn([])
    }
      };
      const ticketChildrenForms= () => {
        const forms = [];
        if(idChirend.length>0){
          for (let i = 0; i < idChirend.length; i++) {
          forms.push({
            flight_id: outboundTicketInfo.flight.flight_id,
            customer_id: 1,
            passenger_id: idChirend[i],
            seat_id: outboundTicketInfo.flight.airplane.seat_id,
            create_at: currentTime,
            update_at: currentTime,
            departure_time: outboundTicketInfo.flight.time_start,
            arrival_time: outboundTicketInfo.flight.time_end,
            real_time_flight: outboundTicketInfo.flight.time_start - outboundTicketInfo.flight.time_end,
            ticket_status: "outbound",
            price: outboundTicketInfo.price,
            flag: "Chirend"
          });
        }
        setTicketChildren(forms);
    }else{
        setTicketChildren([])
    }
      };
      const ticketChildrenFormsReturn = () => {
        const forms = [];
        if(idChirend.length>0 && returnTicketInfo !== null){
          for (let i = 0; i < idChirend.length; i++) {
          forms.push({
            flight_id: returnTicketInfo.flight.flight_id,
            customer_id: 1,
            passenger_id: idChirend[i],
            seat_id: returnTicketInfo.flight.airplane.seat_id,
            create_at: currentTime,
            update_at: currentTime,
            departure_time: returnTicketInfo.flight.time_start,
            arrival_time: returnTicketInfo.flight.time_end,
            real_time_flight: returnTicketInfo.flight.time_start - outboundTicketInfo.flight.time_end,
            ticket_status: "return",
            price: returnTicketInfo.price,
            flag: "Chirend"
          });
        }
        setTicketChildrenReturn(forms);
    }else{
        setTicketChildrenReturn([])
    }
      };
      
      console.log(ticket)
      console.log(`adutdre: ${ticketReturn}`)
      console.log(`child: ${ticketChildren}`)
      console.log(`childRe: ${ticketChildrenReturn}`)
    // const [total, setTotal] = useState()
    useEffect(() => {

        const fetchData = () => {

            if (Carts===null){
                setCart('')
                // setTotal("0")

            }else{
            
            setCart(Carts)
            // getTotal(listCart)
        }
        }

        fetchData()

    }, [])
    

    
    //Hàm này dùng để tính tổng tiền carts
    // function getTotal(outboundTicketInfo,returnTicketInfo) {
  
                
        const service_total = ((parseInt(outboundTicketInfo.totalSeat) * parseInt(outboundTicketInfo.price))*parseInt("3")/parseInt("100") + (parseInt(returnTicketInfo.totalSeat) * parseInt(outboundTicketInfo.price)))*parseInt("3")/parseInt("100")
        const ticket_total = ((parseInt(outboundTicketInfo.totalSeat) * parseInt(outboundTicketInfo.price)) + (parseInt(returnTicketInfo.totalSeat) * parseInt(outboundTicketInfo.price))) 
        const sum_total= service_total+ticket_total
        //     setTotal(`${sum_total}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'))
    // }

   
  
    //Hàm này dùng để redirect đến page checkout
    const [redirect, setRedirect] = useState(false)

    const onCheckout = async () => {

        const ticketData = {
            adults: ticket,
            adultsRe: ticketReturn,
            childrens: ticketChildren,
            childrensRe:ticketChildrenReturn
          };
          try {
            const id1 = []
            const id2 = []
            const idChildrens = []
            const idChildrensRE = []
            for (let i = 0; i < ticket.length; i++) {
                            console.log(ticket[i])

              const response = await fetch('https://localhost:7280/api/Tickets', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    flight_id: ticket[i].flight_id,
                    customer_id:ticket[i].customer_id,
                    passenger_id: ticket[i].passenger_id,
                    seat_id: ticket[i].seat_id,
                    create_at: ticket[i].create_at,
                    update_at:ticket[i].update_at,
                    departure_time: ticket[i].departure_time,
                    arrival_time: ticket[i].arrival_time,
                    real_time_flight: ticket[i].real_time_flight,
                    ticket_status: ticket[i].ticket_status,
                    price: ticket[i].price,
                    flag: ticket[i].flag
                }),
                
              });
              response
                .json()
                .then(data => {
                  id1.push(data.ticket_id)
                  })
              
            if (response.ok) {

              console.log(id1)
            } else {
              console.log('Posting passenger data failed:', response.statusText);
              alert('Posting passenger data failed:', response.statusText);
              return
            }
            }
          

            if (returnTicketInfo !== null) {
                for (let i = 0; i < ticketReturn.length; i++) {
                    console.log(ticketReturn[i])

            const response = await fetch('https://localhost:7280/api/Tickets', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    flight_id: ticketReturn[i].flight_id,
                    customer_id:ticketReturn[i].customer_id,
                    passenger_id: ticketReturn[i].passenger_id,
                    seat_id: ticketReturn[i].seat_id,
                    create_at: ticketReturn[i].create_at,
                    update_at:ticketReturn[i].update_at,
                    departure_time: ticketReturn[i].departure_time,
                    arrival_time: ticketReturn[i].arrival_time,
                    real_time_flight: ticketReturn[i].real_time_flight,
                    ticket_status: ticketReturn[i].ticket_status,
                    price: ticketReturn[i].price,
                    flag: ticketReturn[i].flag
                }),
                
            });
            response
                .json()
                .then(data => {
                id2.push(data.ticket_id)
                })
            
            if (response.ok) {

            console.log(id2)
            } else {
            console.log('Posting passenger data failed:', response.statusText);
            alert('Posting passenger data failed:', response.statusText);
            return
            }
            }
            }
          
            if (idChirend.length > 0) {
                for (let i = 0; i < ticketChildren.length; i++) {
                    console.log(ticketChildren[i])

            const response = await fetch('https://localhost:7280/api/Tickets', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    flight_id: ticketChildren[i].flight_id,
                    customer_id:ticketChildren[i].customer_id,
                    passenger_id: ticketChildren[i].passenger_id,
                    seat_id: ticketChildren[i].seat_id,
                    create_at: ticketChildren[i].create_at,
                    update_at:ticketChildren[i].update_at,
                    departure_time: ticketChildren[i].departure_time,
                    arrival_time: ticketChildren[i].arrival_time,
                    real_time_flight: ticketChildren[i].real_time_flight,
                    ticket_status: ticketChildren[i].ticket_status,
                    price: ticketChildren[i].price,
                    flag: ticketChildren[i].flag
                }),
                
            });
            response
                .json()
                .then(data => {
                idChildrens.push(data.ticket_id)
                })
            
            if (response.ok) {

            console.log(idChildrens)
            } else {
            console.log('Posting passenger data failed:', response.statusText);
            alert('Posting passenger data failed:', response.statusText);
            return
            }
            }
            }
            if (idChirend.length > 0  && returnTicketInfo !== null) {
                for (let i = 0; i < ticketChildrenReturn.length; i++) {
                    console.log(ticketChildrenReturn[i])

            const response = await fetch('https://localhost:7280/api/Tickets', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    flight_id: ticketChildrenReturn[i].flight_id,
                    customer_id:ticketChildrenReturn[i].customer_id,
                    passenger_id: ticketChildrenReturn[i].passenger_id,
                    seat_id: ticketChildrenReturn[i].seat_id,
                    create_at: ticketChildrenReturn[i].create_at,
                    update_at:ticketChildrenReturn[i].update_at,
                    departure_time: ticketChildrenReturn[i].departure_time,
                    arrival_time: ticketChildrenReturn[i].arrival_time,
                    real_time_flight: ticketChildrenReturn[i].real_time_flight,
                    ticket_status: ticketChildrenReturn[i].ticket_status,
                    price: ticketChildrenReturn[i].price,
                    flag: ticketChildrenReturn[i].flag
                }),
                
            });
            response
                .json()
                .then(data => {
                    idChildrensRE.push(data.ticket_id)
                })
            
            if (response.ok) {

            console.log(idChildrensRE)
            } else {
            console.log('Posting passenger data failed:', response.statusText);
            alert('Posting passenger data failed:', response.statusText);
            return
            }
            }
            }
            
            sessionStorage.setItem('ticketData', JSON.stringify(ticketData));    
            history.push({
              pathname: '/booking',
              state: {
            id1: id1,
              id2: id2,
              idChildren: idChildrens,
              idChildrensRE: idChildrensRE
                },
            });
          } catch (error) {
            console.error('Error posting passenger data:', error);
          }

        sessionStorage.setItem('Carts', JSON.stringify(Carts));
        console.log("oke")
        setRedirect(true)

    }
// console.log(total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'))
    return (
        <div className="container">
            <section style={{ backgroundImage: 'linear-gradient(to right, #fc0303, #faf605' }} className="py-5 bg-light">
                <div className="container">
                    <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="h2 text-uppercase mb-0">Booking</h1>
                        </div>
                        {/* <div className="col-lg-6 text-lg-right">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                                    <li className="breadcrumb-item active" aria-current="page">Cart</li>
                                </ol>
                            </nav>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="py-5">
                <h2 className="h5 text-uppercase mb-4">Ticket Booking</h2>
                <div className="row">
                    <div className="col-lg-8 mb-4 mb-lg-0">
                    <div className="table-responsive mb-4">
            <table className="table">
                <thead style={{ borderBottom: '2px solid black' }} className="bg-light">
                    <tr className="text-center">
                        <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Start location</strong></th>
                        <th className="border-0" scope="col"> <strong className="text-small text-uppercase">End location</strong></th>
                        <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Time Start</strong></th>
                        <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Seat</strong></th>
                        <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Price</strong></th>
                        <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Taxes and services</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {outboundTicketInfo && (<tr style={{ borderBottom: '2px solid black' }} className="text-center" >
                                <td className="align-middle border-0">
                                    <div className="media align-items-center justify-content-center">
                                        {outboundTicketInfo.flight.location.start_location}
                                    </div>
                                </td>
                                <td className="align-middle border-0">
                                    <div className="media align-items-center justify-content-center">
                                    {outboundTicketInfo.flight.location.end_location}
                                    </div>
                                </td>
                                
                                <td className="align-middle border-0">
                                {outboundTicketInfo.flight.time_start}
                                </td>
                                <td className="align-middle border-0">
                                        <div className="quantity justify-content-center">
                                            {outboundTicketInfo.totalSeat}
                                        </div>
                                </td>
                                <td className="align-middle border-0">
                                    <p className="mb-0 small">{(parseInt(outboundTicketInfo.totalSeat) * parseInt(outboundTicketInfo.price)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} VND</p>
                                </td>
                                <td className="align-middle border-0">
                                <p className="mb-0 small">{(parseInt("3")/parseInt("100") * parseInt(outboundTicketInfo.totalSeat) * parseInt(outboundTicketInfo.price)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} VND</p>
                                </td>
                            </tr>)}
                            {returnTicketInfo && (<tr className="text-center" >
                                <td className="align-middle border-0">
                                    <div className="media align-items-center justify-content-center">
                                        {returnTicketInfo.flight.location.start_location}
                                    </div>
                                </td>
                                <td className="align-middle border-0">
                                    <div className="media align-items-center justify-content-center">
                                    {returnTicketInfo.flight.location.end_location}
                                    </div>
                                </td>
                                
                                <td className="align-middle border-0">
                                {returnTicketInfo.flight.time_start}
                                </td>
                                <td className="align-middle border-0">
                                        <div className="quantity justify-content-center">
                                            {returnTicketInfo.totalSeat}
                                        </div>
                                </td>
                                <td className="align-middle border-0">
                                    <p className="mb-0 small">{(parseInt(returnTicketInfo.totalSeat) * parseInt(returnTicketInfo.price)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} VND</p>
                                </td>
                                <td className="align-middle border-0">
                                <p className="mb-0 small">{( parseInt("3")/parseInt("100") * parseInt(returnTicketInfo.totalSeat) * parseInt(returnTicketInfo.price)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} VND</p>
                                </td>
                            </tr>)}
                </tbody>
                </table>
                </div>
                       
                        <div className="bg-light px-4 py-3">
                            <div className="row align-items-center text-center">
                                <div className="col-md-6 mb-3 mb-md-0 text-md-left">
                                    <Link className="btn btn-link p-0 text-dark btn-sm" to={`/shop`}>
                                        <i className="fas fa-long-arrow-alt-left mr-2"> </i>Continue shopping
                                    </Link>                
                                </div>
                                <div className="col-md-6 text-md-right">
                                    {
                                        redirect && <Redirect to={'/checkout'} />
                                    }
                                    <span className="btn btn-outline-dark btn-sm" onClick={onCheckout}>
                                        Procceed to checkout<i className="fas fa-long-arrow-alt-right ml-2"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-0 rounded-0 p-lg-4 bg-light">
                            <div className="card-body">
                                <h5 className="text-uppercase mb-4">Cart total</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Total service</strong><span className="text-muted small">{service_total} VND</span></li>
                                    <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Total ticket</strong><span className="text-muted small">{ticket_total} VND</span></li>
                                    <li className="border-bottom my-2"></li>
                                    <li className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span>{sum_total} VND</span></li>
                                    <li>
                                        <form>
                                            <div className="form-group mb-0">
                                                <input className="form-control" type="text" placeholder="Enter your coupon" />
                                                <button className="btn btn-dark btn-sm btn-block" type="submit"> <i className="fas fa-gift mr-2"></i>Apply coupon</button>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;