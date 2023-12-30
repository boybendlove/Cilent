import React from 'react';
import { useHistory } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoImage from '../Share/img/logo.png';
import Card from 'react-bootstrap/Card';
import "./select-fights.css"


function SelectFlights() {
  const history = useHistory();

  // Lấy thông tin vé máy bay từ sessionStorage
  const outboundTicketInfo = JSON.parse(sessionStorage.getItem('outboundTicketInfo'));
  const returnTicketInfo = JSON.parse(sessionStorage.getItem('returnTicketInfo'));

  const handleBack = () => {
    history.goBack(); // Quay lại trang trước
  };

  const handleContinue = () => {
    history.push('/passengers'); // Chuyển đến trang tiếp theo
  };
  // const selectedAircraft = aircraftsData.aircrafts.find(
  //   aircraft => aircraft.aircraftCode === outboundTicketInfo?.flight.aircraftCode
  // );
  // const selectedAircraftReturn = aircraftsData.aircrafts.find(
  //   aircraft => aircraft.aircraftCode === returnTicketInfo?.flight.aircraftCode
  // );
  return (
    <div className='container'>
      <div className='chieudi'>
      {outboundTicketInfo && (
        
        <Card>
        <Card.Header className='title' as="h3">Chiều đi</Card.Header><Card.Header as="h5"> Chuyến bay từ {outboundTicketInfo.flight.location.start_location} đến {outboundTicketInfo.flight.location.end_location} </Card.Header>
        <Card.Body>
        <Card.Title>
            <Row>
                <Col>Ngày bay: {outboundTicketInfo.flight.time_start}</Col>
            </Row>
            <Row>
                <Col md="4">{outboundTicketInfo.flight.location.start_airport}</Col>
                <Col md="1"><Card.Img variant="bottom" src={logoImage} fluid /></Col>
                <Col md="4">{outboundTicketInfo.flight.location.end_airport}</Col>
                <Col md="3">
                    <Row>Airbus: {outboundTicketInfo.flight.airplane.model}</Row>
                    <Row>Hãng: {outboundTicketInfo.flight.airplane.airplane_brand}</Row>
                </Col>
            </Row>
            <Row>
                <Col md="6">{outboundTicketInfo.Type === 'price_business' ? "Business" : "Economy"}</Col>
                <Col md="6">{outboundTicketInfo.totalSeat * outboundTicketInfo.price} VNĐ</Col>
            </Row>
        </Card.Title>
        <Card.Text>
          <Row style={{ backgroundImage: 'linear-gradient(to right, #fc0303 , #faf605)', paddingBottom: '2%', height: '30px', width: '103%' }}>
            <Col md="3">Tổng vé:{outboundTicketInfo.totalSeat}</Col>
            <Col md="3">Người lớn:{outboundTicketInfo.seatAdult}</Col>
            <Col md="3">Trẻ em:{outboundTicketInfo.seatChildren}</Col>
            <Col md="3">Em bé:{outboundTicketInfo.seatBaby}</Col>
          </Row>
        </Card.Text>
        </Card.Body>
        </Card>
      
      )}
    </div>
    <div className='chieudi'>
      {/* Hiển thị thông tin chiều về */}
      {returnTicketInfo && (
        <Card>
        <Card.Header className='title' as="h3">Chiều về</Card.Header><Card.Header as="h5"> Chuyến bay từ {returnTicketInfo.flight.location.start_location} đến {returnTicketInfo.flight.location.end_location}</Card.Header>
        <Card.Body>
        <Card.Title>
            <Row>
                <Col>Ngày bay: {returnTicketInfo.flight.time_start}</Col>
            </Row>
            <Row>
                <Col md="4">{returnTicketInfo.flight.location.start_airport}</Col>
                <Col md="1"><Card.Img variant="bottom" src={logoImage} fluid /></Col>
                <Col md="4">{returnTicketInfo.flight.location.end_airport}</Col>
                <Col md="3">
                    <Row>Airbus: {returnTicketInfo.flight.airplane.model}</Row>
                    <Row>Hãng: {returnTicketInfo.flight.airplane.airplane_brand}</Row>
                </Col>
            </Row>
            <Row>
                <Col md="6">{returnTicketInfo.Type === 'price_business' ? "Business" : "Economy"}</Col>
                <Col md="6">{returnTicketInfo.totalSeat * returnTicketInfo.price} VNĐ</Col>
            </Row>
        </Card.Title>
        <Card.Text>
          <Row style={{ backgroundImage: 'linear-gradient(to right, #fc0303 , #faf605)', paddingBottom: '2%', height: '30px', width: '103%' }}>
            <Col md="3">Tổng vé:{returnTicketInfo.totalSeat}</Col>
            <Col md="3">Người lớn:{returnTicketInfo.seatAdult}</Col>
            <Col md="3">Trẻ em:{returnTicketInfo.seatChildren}</Col>
            <Col md="3">Em bé:{returnTicketInfo.seatBaby}</Col>
          </Row>
        </Card.Text>
        </Card.Body>
        </Card>
      )}
      </div>
      {/* Thanh điều hướng */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button id='back' onClick={handleBack}>Quay lại</button>
        <button id='continue' onClick={handleContinue}>Tiếp tục</button>
      </div>
    </div>
  );
}

export default SelectFlights;
