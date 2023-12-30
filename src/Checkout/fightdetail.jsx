import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { format, parseISO,differenceInMinutes } from 'date-fns';
import air from "../Share/img/airplane-arrival_1f6ec.png"

function FlightDetail({ flight, Type }) {
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
        <CardGroup >
      <Card>
      <Card.Body>
      <Card.Title >
      <Row>
        <Col md="5">
          <Row>
            <Col className="d-flex justify-content-center align-items-center">{flight.location.start_location}</Col>
          </Row>
          <Row>
            <Col><small style={{ fontSize: '70%' }} className="text-muted d-flex justify-content-center align-items-center">{flight.location.start_airport}</small></Col>
          </Row>
          <Row>
            <Col><small className="text-muted d-flex justify-content-center align-items-center">{hours}:{minutes}</small></Col>
          </Row>
        </Col>
        <Col md="2">
          <Row>
            <Col><small className="d-flex justify-content-center align-items-center">{flightHours}h{flightMinutes}'</small></Col>
          </Row>
          <Row>
            <Col><Card.Img variant="bottom" src={air} fluid /></Col>
          </Row>
          <Row>
            <Col><small style={{ fontSize: '69.5%', margin: "0px", padding: "0px" }} className="text-muted text-muted d-flex justify-content-center align-items-center">bay thẳng</small></Col>
          </Row>
        </Col>
        <Col md="5">
          <Row>
            <Col className="d-flex justify-content-center align-items-center">{flight.location.end_location}</Col>
          </Row>
          <Row>
            <Col><small small style={{ fontSize: '70%' }} className="text-muted d-flex justify-content-center align-items-center">{flight.location.end_airport}</small></Col>
          </Row>
          <Row>
            <Col><small className="text-muted d-flex justify-content-center align-items-center">{hourss}:{minutess}</small></Col>
          </Row>
        </Col>
      </Row>
      </Card.Title>
        </Card.Body>
        <Card.Footer>
        <Row><Col md="4">Price: {Type === "price_economy"? flight.price_economy : flight.price_business} </Col>
        <Col md="4">Class: {Type === "price_economy"? "economy" : "business"} </Col>
        <Col md="4">Date: {format(new Date(flight.time_start), 'yyyy-MM-dd')}</Col></Row>
        </Card.Footer>
      </Card>
      </CardGroup>
      
      
    </div>
  );
}

export default FlightDetail;