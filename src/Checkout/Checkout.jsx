import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import {saveToStorage,getFromStorage} from '../API/Storage';
import { useHistory , useLocation } from 'react-router-dom';
import './Checkout.css'
import FlightDetail from './fightdetail';




function Checkout(props) {
    const history = useHistory();
    const location = useLocation();
    const id1 = location.state?.id1
    const id2 = location.state?.id2 || []
    const idChildrens = location.state?.idChildrens|| []
    const idChildrensRE = location.state?.idChildrensRE|| []

    // const bookingAdultForms = () => {
    //     const forms = [];
    //       for (let i = 0; i < idAdult.length; i++) {
    //           console.log(Carts.outboundTicketInfo.flight.flight_id)
    //       forms.push({
    //           flight_id: Carts.outboundTicketInfo.flight.flight_id,
    //           customer_id: 1,
    //           passenger_id: idAdult[i],
    //           seat_id: Carts.outboundTicketInfo.flight.airplane.seat_id,
    //           create_at: currentTime,
    //           update_at: currentTime,
    //           departure_time: Carts.outboundTicketInfo.flight.time_start,
    //           arrival_time: Carts.outboundTicketInfo.flight.time_end,
    //           real_time_flight: Carts.outboundTicketInfo.flight.time_start - outboundTicketInfo.flight.time_end,
    //           ticket_status: "outbound",
    //           price: Carts.outboundTicketInfo.price,
    //           flag: "Adult"
    //       });
    //       console.log(forms)
    //     }
    //     setTicket(forms);
    //   };
    const PassengersData = JSON.parse(sessionStorage.getItem("formData"))
    console.log(PassengersData)
    const AdultData = PassengersData.adults
    const ChildrenData = PassengersData.children
    const BabyData = PassengersData.babies
    const [paymentMethod, setPaymentMethod] = useState('visa'); // Giá trị mặc định là 'visa'

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };
    const [carts, setCarts] = useState([])
    const Carts = JSON.parse(sessionStorage.getItem('Carts'))
    const FilghtGo = Carts.outboundTicketInfo
    const FilghtReturn = Carts.returnTicketInfo ? Carts.returnTicketInfo : [{}]
    const [total, setTotal] = useState(0)

    const [fullname, setFullname] = useState('')
    const [fullnameError, setFullnameError] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    const [emailRegex, setEmailRegex] = useState(false)

    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState(false)

    const [address, setAddress] = useState('')
    const [addressError, setAddressError] = useState(false)

    const [success, setSuccess] = useState(false)

    const [load, setLoad] = useState(false)


    //Hàm này dùng để gọi API và render số sản phẩm
    useEffect(() => {

        const fetchData = () => {


            setCarts(Carts)
            // getTotal(Carts)
        }

        fetchData()

    }, [])
    console.log(carts.outboundTicketInfo)
    const service_total = ((parseInt(Carts.outboundTicketInfo.totalSeat) * parseInt(Carts.outboundTicketInfo.price))*parseInt("3")/parseInt("100") + (parseInt(Carts.returnTicketInfo.totalSeat) * parseInt(Carts.outboundTicketInfo.price)))*parseInt("3")/parseInt("100")
    const ticket_total = ((parseInt(Carts.outboundTicketInfo.totalSeat) * parseInt(Carts.outboundTicketInfo.price)) + (parseInt(Carts.returnTicketInfo.totalSeat) * parseInt(Carts.outboundTicketInfo.price))) 
    const sum_total= service_total+ticket_total

    //Check Validation
    const handlerSubmit = () => {
        if (!fullname) {
            setFullnameError(true)
            setEmailError(false)
            setPhoneError(false)
            setAddressError(false)
            return
        } else {
            if (!email) {
                setFullnameError(false)
                setEmailError(true)
                setPhoneError(false)
                setAddressError(false)
                return
            } else {

                setPhoneError(false)
                setAddressError(false)
                setFullnameError(false)

                if (!validateEmail(email)) {
                    setEmailRegex(true)
                    setFullnameError(false)
                    setEmailError(false)
                    setPhoneError(false)
                    setAddressError(false)
                    return
                } else {
                    setEmailRegex(false)

                    if (!phone) {
                        setFullnameError(false)
                        setEmailError(false)
                        setPhoneError(true)
                        setAddressError(false)
                        return
                    } else {

                        setFullnameError(false)
                        setEmailError(false)
                        setPhoneError(false)
                        setAddressError(false)

                        if (!address) {
                            setFullnameError(false)
                            setEmailError(false)
                            setPhoneError(false)
                            setAddressError(true)
                        } else {
                            
                            console.log("Thanh Cong")

                            setLoad(!load)
                        }
                    }

                }

            }
        }
    }

    //Hàm này bắt đầu gửi Email xác nhận đơn hàng
    useEffect(() => {

        if (load) {

            // const sendMail = async () => {

                const params = {
                    to: email,
                    fullname: fullname,
                    phone: phone,
                    address: address,
                    total: total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                }



                console.log(params)

                
            //Dùng setTimeout delay 3s
            //Sau 4s nó sẽ thực hiện 
            setTimeout(() => {
                setSuccess(!success)
                setLoad(!load)
                alert("Xác thực thành công")
            }, 4000);
            
        }
    // }

    }, [load])

    const onChangeName = (e) => {
        setFullname(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <div>
            {
                load && (
                    <div className="wrapper_loader">
                        <div className="loader"></div>
                    </div>
                )
            }

            <div className="container">
                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                            <div className="col-lg-6">
                                <h1 className="h2 text-uppercase mb-0">Checkout</h1>
                            </div>
                            <div className="col-lg-6 text-lg-right">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item"><a href="cart.html">Booking</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Payments</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <Card>
      <Card.Header>Chiều đi</Card.Header>
      {AdultData.map((adult) => (
      <Card.Body>
     <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
      <Card.Title>
        <Accordion.Header><small>Vé của {adult.firstName} {adult.lastName}</small></Accordion.Header></Card.Title>
        <Card.Text>
        <Accordion.Body>
        <CardGroup>
      <Card>
      <Card.Body>
      <Card.Title >
          <Row>
            <Col md="4">
                  <Row><Col>Giới Tính: {adult.gender}</Col></Row>  
                  <Row><Col>Ngày sinh:{adult.dateOfBirth}</Col></Row>  
                  <Row><Col>Địa chỉ:{adult.address},{adult.country}</Col></Row>  
                  <Row><Col>Số điện thoại: {adult.phoneNumber}</Col></Row>  </Col>
            <Col md="8">
                <FlightDetail flight={FilghtGo.flight} Type={FilghtGo.Type}></FlightDetail>
            </Col>
          </Row>
          </Card.Title>
          </Card.Body>
          </Card>
          </CardGroup>
        </Accordion.Body>
        </Card.Text>
        </Accordion.Item>
      </Accordion>
        </Card.Body>))}
         {ChildrenData.map((children) => (
            <Card.Body>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
             <Accordion.Item eventKey="0">
             <Card.Title>
               <Accordion.Header><small>Vé của {children.firstName} {children.lastName}</small></Accordion.Header></Card.Title>
               <Card.Text>
               <Accordion.Body>
               <CardGroup >
             <Card>
             <Card.Body>
             <Card.Title >
                 <Row>
                   <Col md="4">
                         <Row><Col>Giới Tính: {children.gender}</Col></Row>  
                         <Row><Col>Ngày sinh:{children.dateOfBirth}</Col></Row>  
                    </Col>
                   <Col md="8">
                       <FlightDetail flight={FilghtGo.flight} Type={FilghtGo.Type}></FlightDetail>
                   </Col>
                 </Row>
                 </Card.Title>
                 </Card.Body>
                 </Card>
                 </CardGroup>
               </Accordion.Body>
               </Card.Text>
               </Accordion.Item>
             </Accordion>
               </Card.Body>
        ))}
         { BabyData.map((baby) => (

            <Accordion defaultActiveKey={['0']} alwaysOpen>
             <Accordion.Item eventKey="0">
               <Accordion.Header><small>Em bé {baby.firstName} {baby.lastName} đi cùng {baby.accompanyingAdult}</small></Accordion.Header>
               <Accordion.Body>
                  <Row>
                   <Col md="4">
                         <Row><Col>Giới Tính: {baby.gender}</Col></Row>  
                         <Row><Col>Ngày sinh:{baby.dateOfBirth}</Col></Row>  
                    </Col>
                   </Row>
                </Accordion.Body>
               </Accordion.Item>
             </Accordion>

        ))}
    </Card>
    <Card>
      <Card.Header>Chiều về</Card.Header>
      {AdultData.map((adult) => (
      <Card.Body>
     <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="1">
      <Card.Title>
        <Accordion.Header><small>Vé của {adult.firstName} {adult.lastName}</small></Accordion.Header></Card.Title>
        <Card.Text>
        <Accordion.Body>
        <CardGroup>
      <Card>
      <Card.Body>
      <Card.Title >
          <Row>
            <Col md="4">
                  <Row><Col>Giới Tính: {adult.gender}</Col></Row>  
                  <Row><Col>Ngày sinh:{adult.dateOfBirth}</Col></Row>  
                  <Row><Col>Địa chỉ:{adult.address},{adult.country}</Col></Row>  
                  <Row><Col>Số điện thoại: {adult.phoneNumber}</Col></Row>  </Col>
            <Col md="8">
                <FlightDetail flight={FilghtReturn.flight} Type={FilghtReturn.Type}></FlightDetail>
            </Col>
          </Row>
          </Card.Title>
          </Card.Body>
          </Card>
          </CardGroup>
        </Accordion.Body>
        </Card.Text>
        </Accordion.Item>
      </Accordion>
        </Card.Body>))}
         {ChildrenData.map((children) => (
            <Card.Body>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
             <Accordion.Item eventKey="1">
             <Card.Title>
               <Accordion.Header><small>Vé của {children.firstName} {children.lastName}</small></Accordion.Header></Card.Title>
               <Card.Text>
               <Accordion.Body>
               <CardGroup >
             <Card>
             <Card.Body>
             <Card.Title >
                 <Row>
                   <Col md="4">
                         <Row><Col>Giới Tính: {children.gender}</Col></Row>  
                         <Row><Col>Ngày sinh:{children.dateOfBirth}</Col></Row>  
                    </Col>
                   <Col md="8">
                       <FlightDetail flight={FilghtReturn.flight} Type={FilghtReturn.Type}></FlightDetail>
                   </Col>
                 </Row>
                 </Card.Title>
                 </Card.Body>
                 </Card>
                 </CardGroup>
               </Accordion.Body>
               </Card.Text>
               </Accordion.Item>
             </Accordion>
               </Card.Body>
        ))}
         { BabyData.map((baby) => (

            <Accordion defaultActiveKey={['0']} alwaysOpen>
             <Accordion.Item eventKey="1">
               <Accordion.Header><small>Em bé {baby.firstName} {baby.lastName} đi cùng {baby.accompanyingAdult}</small></Accordion.Header>
               <Accordion.Body>
                  <Row>
                   <Col md="4">
                         <Row><Col>Giới Tính: {baby.gender}</Col></Row>  
                         <Row><Col>Ngày sinh:{baby.dateOfBirth}</Col></Row>  
                    </Col>
                   </Row>
                </Accordion.Body>
               </Accordion.Item>
             </Accordion>

        ))}
    </Card>
                
                {!success && (<section className="py-5">
                    <h2 className="h5 text-uppercase mb-4">Billing details</h2>
                    <div className="row">
                        <div className="col-lg-8">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12 form-group">
                                        <label className="text-small text-uppercase" htmlFor="Fullname">Full Name:</label>
                                        <input className="form-control form-control-lg" value={fullname} onChange={onChangeName} type="text" placeholder="Enter Your Full Name Here!" />
                                        {fullnameError && <span className="text-danger">* Please Check Your Full Name!</span>}
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <label className="text-small text-uppercase" htmlFor="Email">Email: </label>
                                        <input className="form-control form-control-lg" value={email} onChange={onChangeEmail} type="text" placeholder="Enter Your Email Here!" />
                                        {emailError && <span className="text-danger">* Please Check Your Email!</span>}
                                        {emailRegex && <span className="text-danger">* Incorrect Email Format</span>}
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <label className="text-small text-uppercase" htmlFor="Phone">Phone Number: </label>
                                        <input className="form-control form-control-lg" value={phone} onChange={onChangePhone} type="text" placeholder="Enter Your Phone Number Here!" />
                                        {phoneError && <span className="text-danger">* Please Check Your Phone Number!</span>}
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <label className="text-small text-uppercase" htmlFor="Address">Address: </label>
                                        <input className="form-control form-control-lg" value={address} onChange={onChangeAddress} type="text" placeholder="Enter Your Address Here!" />
                                        {addressError && <span className="text-danger">* Please Check Your Address!</span>}
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <a className="btn btn-dark" style={{ color: 'white' }} type="submit" onClick={handlerSubmit}>Place order</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="card border-0 rounded-0 p-lg-4 bg-light">
                                <div className="card-body">
                                    <h5 className="text-uppercase mb-4">Your order</h5>
                                    <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Total service</strong><span className="text-muted small">{service_total} VND</span></li>
                                    <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Total ticket</strong><span className="text-muted small">{ticket_total} VND</span></li>
                                    <li className="border-bottom my-2"></li>
                                    <li className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span>{sum_total} VND</span></li>
                                    <li>
                                        <form>
                                            <div className="form-group mb-0">
                                            <label className="text-small text-uppercase">Select Payment Method:</label>
                                                <select
                                                    className="form-control form-control-lg"
                                                    value={paymentMethod}
                                                    onChange={(e) => handlePaymentMethodChange(e.target.value)}>
                                                    <option value="visa">Visa</option>
                                                    <option value="mastercard">MasterCard</option>
                                                    <option value="bankTransfer">Chuyển khoản</option>
                                                </select>
                                                
                                            </div>
                                        </form>
                                    </li>
                                    <li>
                                    {paymentMethod === 'visa' && (
                                        <section className="py-2">
                                        <h3 className="h5 text-uppercase">Visa Payment</h3>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-12 form-group">
                                                            <label className="text-small text-uppercase">Card Number:</label>
                                                            <input className="form-control form-control-lg" type="text" placeholder="Enter Card Number" />
                                                        </div>
                                                        <div className="col-lg-8 form-group">
                                                            <label className="text-small text-uppercase">Expiration Date:</label>
                                                            <input className="form-control form-control-lg" type="text" placeholder="MM/YY" />
                                                        </div>
                                                        <div className="col-lg-4 form-group">
                                                            <label className="text-small text-uppercase">CVV:</label>
                                                            <input className="form-control form-control-lg" type="text" placeholder="CVV" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </section>
                                    )}

                                    {paymentMethod === 'mastercard' && (
                                         <section className="py-2">
                                         <h3 className="h5 text-uppercase">MasterCard Payment</h3>
                                         <div className="row">
                                             <div className="col-lg-12">
                                                 <form>
                                                     <div className="row">
                                                         <div className="col-lg-12 form-group">
                                                             <label className="text-small text-uppercase">Card Number:</label>
                                                             <input className="form-control form-control-lg" type="text" placeholder="Enter Card Number" />
                                                         </div>
                                                         <div className="col-lg-8 form-group">
                                                             <label className="text-small text-uppercase">Expiration Date:</label>
                                                             <input className="form-control form-control-lg" type="text" placeholder="MM/YY" />
                                                         </div>
                                                         <div className="col-lg-4 form-group">
                                                             <label className="text-small text-uppercase">CVV:</label>
                                                             <input className="form-control form-control-lg" type="text" placeholder="CVV" />
                                                         </div>
                                                     </div>
                                                 </form>
                                             </div>                                           
                                         </div>
                                     </section>
                                    )}

                                    {paymentMethod === 'bankTransfer' && (
                                         <section className="py-2">
                                         <div className="row">
                                             <div className="col-lg-12">
                                                 <img src="" alt="" />
                                                 <div className="card  bg-light">
                                                     <div className="card-body">
                                                         <h5 className="text-uppercase">Bank Transfer</h5>
                                                         <p>Please transfer the total amount to the following bank account:</p>
                                                         <p>Bank:Your Bank Name</p>
                                                         <p>Account Number: Your Account Number</p>
                                                         <p>Account Name:Your Account Name</p>
                                                         <p>Reference: Order Number or Reference Code</p>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </section>
                                    )}
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)}

                {success && (<section className="py-5">
                    <div className="p-5">
                        <h1>You Have Successfully Ordered!</h1>
                        <p style={{ fontSize: '1.2rem' }}>Please Check Your Email.</p>
                    </div>
                </section>)}
            </div>
        </div>
    );
}

export default Checkout;