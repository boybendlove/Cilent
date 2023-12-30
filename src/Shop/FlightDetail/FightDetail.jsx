
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { format, parseISO } from 'date-fns';
import air from "../../Share/img/airplane-arrival_1f6ec.png"

function FlightDetails({ flight, flightHours, flightMinutes, Type }) {
    const timeStartISOString = flight.time_start;
  const timeStartDate = parseISO(timeStartISOString);
  const hours = timeStartDate.getHours().toString().padStart(2, '0');
  const minutes = timeStartDate.getMinutes().toString().padStart(2, '0');
const timeEndISOString = flight.time_end;
const timeEndDate = parseISO(timeEndISOString);
const hourss = timeEndDate.getHours().toString().padStart(2, '0');
  const minutess = timeEndDate.getMinutes().toString().padStart(2, '0');
  return (
    <div>
        <CardGroup style={{height: "auto",transitionDuration: "300ms",minHeight:"0px",boxSizing: "border-box",outline: "0",scrollBehavior: "smooth"}}>
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
         
           <Card.Text>
         {Type && Type === "price_business" ? (
            <div>
            <p style={{lineHeight: "1.0"}}>Bao gồm:</p>
            <p style={{lineHeight: "1.0"}}>Hành lý xách tay: 18kg</p>
            <p style={{lineHeight: "1.0"}}>Hành lý ký gửi: 60kg cho đường bay Úc, Kazakhstan; 40kg cho các đường bay còn lại và 01 bộ dụng cụ chơi golf (nếu có).</p>
            <p style={{lineHeight: "1.0"}}>Phòng chờ sang trọng</p>
            <p style={{lineHeight: "1.0"}}>Ưu tiên làm thủ tục trước chuyến bay</p>
            <p style={{lineHeight: "1.0"}}>Ưu tiên phục vụ hành lý</p>
            <p style={{lineHeight: "1.0"}}>Ưu tiên qua cửa an ninh (tùy theo điều kiện từng sân bay)</p>
            <p style={{lineHeight: "1.0"}}>Phục vụ đưa đón riêng ra tàu bay</p>
            <p style={{lineHeight: "1.0"}}>Thưởng thức ẩm thực tươi ngon suốt chuyến bay</p>
            <p style={{lineHeight: "1.0"}}>Bộ tiện ích (chuyến bay từ 04 tiếng trở lên)</p>
            </div>
         ) : (<div>
            <p style={{lineHeight: "1.0"}}>Bao gồm:</p>
            <p style={{lineHeight: "1.0"}}>Hành lý xách tay: 07kg</p>
            <p style={{lineHeight: "1.0"}}>Chưa bao gồm: </p>
            <p style={{lineHeight: "1.0"}}>Phòng chờ sang trọng</p>
            <p style={{lineHeight: "1.0"}}>Ưu tiên làm thủ tục trước chuyến bay</p>
            <p style={{lineHeight: "1.0"}}>Hành lý ký gửi (tùy chọn)</p>
            <p style={{lineHeight: "1.0"}}>Thay đổi chuyến bay, ngày bay, hành trình</p>
            <p style={{lineHeight: "1.0"}}>Chênh lệch tiền vé khi thay đổi (nếu có)</p>
            <p style={{lineHeight: "1.0"}}>Suất ăn</p>
            <p style={{lineHeight: "1.0"}}>Bộ tiện ích 3 trong 1</p>
            </div>)} 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Row><Col md="8">Price: {Type === "price_economy"? flight.price_economy : flight.price_business} </Col>
        <Col md="4">Class: {Type === "price_economy"? "economy" : "business"} </Col></Row>
        
        </Card.Footer>
      </Card>
      </CardGroup>
      
      
    </div>
  );
}

export default FlightDetails;
