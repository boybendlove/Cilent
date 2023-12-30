import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./passengers.css"

const sampleCountries = [
    { code: 'VN', name: 'Việt Nam', dialCode: '+84' },
    { code: 'US', name: 'United States', dialCode: '+1' },
    { code: 'CA', name: 'Canada', dialCode: '+1' },
    { code: 'GB', name: 'United Kingdom', dialCode: '+44' },
    { code: 'AU', name: 'Australia', dialCode: '+61' },
    { code: 'FR', name: 'France', dialCode: '+33' },
    { code: 'DE', name: 'Germany', dialCode: '+49' },
    { code: 'JP', name: 'Japan', dialCode: '+81' },
    { code: 'KR', name: 'South Korea', dialCode: '+82' },
    { code: 'CN', name: 'China', dialCode: '+86' },
    { code: 'IN', name: 'India', dialCode: '+91' },
    { code: 'RU', name: 'Russia', dialCode: '+7' },
    { code: 'BR', name: 'Brazil', dialCode: '+55' },
    { code: 'MX', name: 'Mexico', dialCode: '+52' },
    { code: 'SA', name: 'Saudi Arabia', dialCode: '+966' },
    { code: 'ZA', name: 'South Africa', dialCode: '+27' },
    { code: 'NG', name: 'Nigeria', dialCode: '+234' },
    { code: 'AR', name: 'Argentina', dialCode: '+54' },
    { code: 'ES', name: 'Spain', dialCode: '+34' },
    { code: 'IT', name: 'Italy', dialCode: '+39' },
  { code: 'ID', name: 'Indonesia', dialCode: '+62' },
  { code: 'TH', name: 'Thailand', dialCode: '+66' },
  { code: 'PH', name: 'Philippines', dialCode: '+63' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60' },
  { code: 'SG', name: 'Singapore', dialCode: '+65' },
  { code: 'MM', name: 'Myanmar', dialCode: '+95' },
  { code: 'KH', name: 'Cambodia', dialCode: '+855' },
  { code: 'LA', name: 'Laos', dialCode: '+856' },
  { code: 'BN', name: 'Brunei', dialCode: '+673' },
  { code: 'TL', name: 'Timor-Leste', dialCode: '+670' },
  ];

  function Passengers() {
    const history = useHistory();
    const outboundTicketInfo = JSON.parse(sessionStorage.getItem('outboundTicketInfo'));
  
    const [formCompleted, setFormCompleted] = useState({
      adults: Array(outboundTicketInfo.seatAdult).fill(false),
      children: Array(outboundTicketInfo.seatChildren).fill(false),
      babies: Array(outboundTicketInfo.seatBaby).fill(false)
    });
  
    const [adultForms, setAdultForms] = useState([]);
    const [childrenForms, setChildrenForms] = useState([]);
    const [babyForms, setBabyForms] = useState([]);
    // const [id, setID] = useState([]);
    // const [idChildren, setIdChildren] = useState([]);
    // const [idBaby, setIdBaby] = useState([]);
  
    useEffect(() => {
      generateAdultForms();
      generateChildrenForms();
      generateBabyForms();
    }, []);
  
  // Tạo các form thông tin người lớn
  const generateAdultForms = () => {
    const forms = [];
    for (let i = 0; i < outboundTicketInfo.seatAdult; i++) {
      forms.push({
        type: 'adult',
        gender: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        country: '',
        address: '',
        phoneNumber: '',
        email: '',
        card: '',
        agreement: false
      });
    }
    setAdultForms(forms);
  };

  // Tạo các form thông tin trẻ em
  const generateChildrenForms = () => {
    const forms = [];
    for (let i = 0; i < outboundTicketInfo.seatChildren; i++) {
      forms.push({
        type: 'children',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: ''
      });
    }
    setChildrenForms(forms);
  };

  // Tạo các form thông tin em bé
  const generateBabyForms = () => {
    const forms = [];
    for (let i = 0; i < outboundTicketInfo.seatBaby; i++) {
      forms.push({
        type: 'baby',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        accompanyingAdult: ''
      });
    }
    setBabyForms(forms);
  };

  // Gọi các hàm để tạo form
   const handleBack = () => {
    history.goBack(); // Quay lại trang trước
  };

  const handleFormChange =  (formType, index, field, value) => {
    const updatedForms = [...formType];
    updatedForms[index][field] = value;
    if (formType === adultForms) {
      setAdultForms(updatedForms);
    } else if (formType === childrenForms) {
      setChildrenForms(updatedForms);
    } else if (formType === babyForms) {
      setBabyForms(updatedForms);
    }
  
    // Kiểm tra xem tất cả trường trong form đã được điền
    const isFormCompleted = Object.values(updatedForms[index]).every(fieldValue => fieldValue !== '');
    
    // Cập nhật trạng thái formCompleted cho form tương ứng
    if (formType === adultForms) {
      setFormCompleted(prevState => ({
        ...prevState,
        adults: prevState.adults.map((completed, i) => i === index ? isFormCompleted : completed)
      }));
    } else if (formType === childrenForms) {
      setFormCompleted(prevState => ({
        ...prevState,
        children: prevState.children.map((completed, i) => i === index ? isFormCompleted : completed)
      }));
    } else if (formType === babyForms) {
      setFormCompleted(prevState => ({
        ...prevState,
        babies: prevState.babies.map((completed, i) => i === index ? isFormCompleted : completed)
      }));
    }
  };

  const handleContinue = async () => {
    const allAdultFormsCompleted = adultForms.every(form => {
      return Object.values(form).every(fieldValue => fieldValue !== '');
    });
  
    const allChildrenFormsCompleted = childrenForms.every(form => {
      return Object.values(form).every(fieldValue => fieldValue !== '');
    });
  
    const allBabyFormsCompleted = babyForms.every(form => {
      return Object.values(form).every(fieldValue => fieldValue !== '');
    });
  
    if (allAdultFormsCompleted && allChildrenFormsCompleted && allBabyFormsCompleted) {
      // Lưu thông tin dữ liệu từ các form vào formData
      const formData = {
        adults: adultForms,
        children: childrenForms,
        babies: babyForms
      };
      try {
        console.log(adultForms.map(form => ({first_name:form.firstName})))
        console.log(childrenForms)
        console.log(babyForms)
        const id1 = []
        const idChildren = []
        const idBaby = []
        for (let i = 0; i < adultForms.length; i++) {
          // const adultData = {
          //   customer_id: "",
          //   first_name: adultForms[i].firstName,
          //   last_name: adultForms[i].lastName,
          //   address: adultForms[i].address + adultForms[i].country,
          //   phone_number: adultForms[i].phoneCode + adultForms[i].phoneNumber,
          //   email: adultForms[i].email,
          //   sex: adultForms[i].gender,
          //   date_of_birth: adultForms[i].dateOfBirth,
          //   flag: 'yes'
          // };
          console.log(adultForms[i])
          // Gửi formData lên server
          const response = await fetch('https://localhost:7280/api/Passengers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            customer_id: "1",
            first_name: adultForms[i].firstName,
            last_name: adultForms[i].lastName,
            address: adultForms[i].address + `, ` + adultForms[i].country,
            phone_number:adultForms[i].phoneNumber,
            email: adultForms[i].email,
            sex: adultForms[i].gender,
            date_of_birth: adultForms[i].dateOfBirth,
            flag: 'adult'
            }),
            
          });
          response
            .json()
            .then(data => {
              id1.push(data.passenger_id)
              })
          
        if (response.ok) {
          // Lưu thông tin thành công vào sessionStorage
          console.log(id1)
  
          // Chuyển đến trang tiếp theo
          ;
        } else {
          console.log('Posting passenger data failed:', response.statusText);
          alert('Posting passenger data failed:', response.statusText);
          return
        }
        }
      
        // Nếu có childrenForms, lặp qua chúng
        if (childrenForms.length > 0) {
          for (let i = 0; i < childrenForms.length; i++) {
            // const childData = {
            //   customer_id: "",
            //   first_name: childrenForms[i].firstName,
            //   last_name: childrenForms[i].lastName,
            //   sex: childrenForms[i].gender,
            //   date_of_birth: childrenForms[i].dateOfBirth,
            //   flag: 'yes'
            // };
      
            // Gửi childData lên server
            const response = await fetch('https://localhost:7280/api/Passengers', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
              customer_id: "",
              first_name: childrenForms[i].firstName,
              last_name: childrenForms[i].lastName,
              sex: childrenForms[i].gender,
              date_of_birth: childrenForms[i].dateOfBirth,
              flag: 'children'
              }),
            });
            response
            .json()
            .then(data => {
              idChildren.push(data.passenger_id)
             })
            
        if (response.ok) {
          // Lưu thông tin thành công vào sessionStorage
          console.log(`child: ${idChildren}`)
  
          // Chuyển đến trang tiếp theo
          ;
        } else {
          console.log('Posting passenger data failed:', response.statusText);
          alert('Posting passenger data failed:', response.statusText);
          return
        }
          }
        }
      
        // Nếu có babyForms, lặp qua chúng
        if (babyForms.length > 0) {
          for (let i = 0; i < babyForms.length; i++) {
            const babyData = {
              customer_id: "",
              first_name: babyForms[i].firstName,
              last_name: babyForms[i].lastName,
              sex: babyForms[i].gender,
              date_of_birth: babyForms[i].dateOfBirth,
              flag: 'baby'
            };
      
            // Gửi babyData lên server
            const response = await fetch('https://localhost:7280/api/Passengers', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(babyData),
            });
            response
            .json()
            .then(data => {
              idBaby.push(data.passenger_id)
             })
            
        if (response.ok) {
          // Lưu thông tin thành công vào sessionStorage
          console.log(`baby: ${idBaby}`)
  
          // Chuyển đến trang tiếp theo
          ;
        } else {
          console.log('Posting passenger data failed:', response.statusText);
          alert('Posting passenger data failed:', response.statusText);
          return
        }
          }
        }
       
        sessionStorage.setItem('formData', JSON.stringify(formData));    
        history.push({
          pathname: '/booking',
          state: {
            id: id1,
          idChildren: idChildren,
          idBaby: idBaby
            },
        });
      } catch (error) {
        console.error('Error posting passenger data:', error);
      }
    } else {
      // Hiển thị thông báo yêu cầu điền đủ thông tin
      alert('Vui lòng điền đầy đủ thông tin trong tất cả các form trước khi tiếp tục.');
    }
  };
  

  return (
    <div className='container'>
      <h2>Thông tin hành khách</h2>

      {/* Hiển thị form thông tin người lớn */}
      {adultForms.map((form, index) => (
        <div key={index} className='container' style={{ border: '2px solid red', marginBottom: '2%' }}> 
          <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='gender'>Người lớn</Accordion.Header>
        <Accordion.Body>
            <Row>
            {/* Hiển thị các trường thông tin người lớn */}
  <Col md= "2">
    <input
      type="radio"
      name={`gender-${form.type}-${index}`}
      value="Nam"
      checked={form.gender === 'Nam'}
      onChange={(e) => handleFormChange(adultForms, index, 'gender', e.target.value)}
      required
    />
    <label>Nam</label>
    </Col>
    <Col md= "2">
    <input
      type="radio"
      name={`gender-${form.type}-${index}`}
      value="Nữ"
      checked={form.gender === 'Nữ'}
      onChange={(e) => handleFormChange(adultForms, index, 'gender', e.target.value)}
      required
    />
    <label>Nữ</label>
    </Col>
  <Col md= "2">
    <input
      type="radio"
      name={`gender-${form.type}-${index}`}
      value="Khác"
      checked={form.gender === 'Khác'}
      onChange={(e) => handleFormChange(adultForms, index, 'gender', e.target.value)}
      required
    />
    <label>Khác</label>
    </Col>
    </Row>
            <Row>
            <Col md="6">
                <Row>
              <label>Họ:</label>
              </Row>
              <Row>
              <input
                style={{width: "90%"}}
                type="text"
                name={`firstName-${form.type}-${index}`}
                value={form.firstName}
                onChange={(e) => handleFormChange(adultForms, index, 'firstName', e.target.value)}
                placeholder='Họ'
                required
              />
              </Row>
            </Col>
            <Col md="6">
                <Row>
              <label>Tên và tên đệm:</label>
              </Row>
              <Row>
              <input
                style={{width: "90%"}}
                type="text"
                name={`lastName-${form.type}-${index}`}
                value={form.lastName}
                onChange={(e) => handleFormChange(adultForms, index, 'lastName', e.target.value)}
                placeholder='Tên và tên đệm'
                required
              />
            </Row>
            </Col>
            </Row>
            
            <Row>
            <Col md="6">
                <Row>
              <label>Ngày sinh:</label>
              </Row>
              <Row>
              <input
              style={{width: "90%"}}
                type="date"
                name={`dateOfBirth-${form.type}-${index}`}
                value={form.dateOfBirth}
                onChange={(e) => handleFormChange(adultForms, index, 'dateOfBirth', e.target.value)}
                placeholder='Ngày sinh'
                required
              />
            </Row>
            </Col>
            <Col md="6">
                <Row>
            <label>Quốc gia:</label>
            </Row>
              <Row>
              <select
              style={{width: "90%", height: "31px"}}
                name={`country-${form.type}-${index}`}
                value={form.country}
                onChange={(e) => handleFormChange(adultForms, index, 'country', e.target.value)}
                required
              >
                <option value="Việt Nam">Việt Nam</option>
                {sampleCountries.map(country => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              </Row>
              </Col>
              </Row>

            

              <Row>
            <Col md="6">
                <Row>
              <label>Số điện thoại:</label>
              </Row>
              <Row>
              <select
              style={{width: "10%"}}
                name={`phoneCode-${form.type}-${index}`}
                value={form.phoneCode}
                onChange={(e) => handleFormChange(adultForms, index, 'phoneCode', e.target.value)}
                placeholder='Telephone*'
                required
              >
                <option value="+84">+84</option>
                {sampleCountries.map(country => (
                  <option key={country.code} value={country.dialCode}>
                    {country.dialCode}
                  </option>
                ))}
              </select>
              <input
              style={{width: "80%"}}
                type="tel"
                name={`phoneNumber-${form.type}-${index}`}
                value={form.phoneNumber}
                onChange={(e) => handleFormChange(adultForms, index, 'phoneNumber', e.target.value)}
                required
              />
            </Row>
            </Col>

            <Col md="6">
                <Row>
              <label>Email:</label>
                </Row>
                <Row>
              <input
              style={{width: "90%"}}
                type="email"
                name={`email-${form.type}-${index}`}
                value={form.email}
                onChange={(e) => handleFormChange(adultForms, index, 'email', e.target.value)}
                placeholder='email'
                required
              />
            </Row>
            </Col>
            </Row>
            <Row>
                <Col>
            <Row>  
              <label>Địa chỉ:</label>
              </Row>
              <Row> 
              <input
              style={{width: "95%"}}
                type="text"
                name={`address-${form.type}-${index}`}
                value={form.address}
                onChange={(e) => handleFormChange(adultForms, index, 'address', e.target.value)}
                placeholder='Địa chỉ'
              />
              </Row> 
              </Col>
            </Row>

            <Row>
                <Col>
            <Row>  
              <label>Thẻ hội viên:</label>
              </Row>
              <Row>
              <input
              style={{width: "95%"}}
                type="number"
                name={`card-${form.type}-${index}`}
                value={form.card}
                onChange={(e) => handleFormChange(adultForms, index, 'card', e.target.value)}
                placeholder='Roll number'
              />
            </Row> 
              </Col>
            </Row>

            <Row style={{marginTop: "2%", marginBottom: "3%"}}>
                <Col md="1">
                <input
                style={{width: "50px", height: "20px"}}
                type="checkbox"
                name={`agreement-${form.type}-${index}`}
                checked={form.agreement}
                onChange={(e) => handleFormChange(adultForms, index, 'agreement', e.target.checked)}
                required
              />
              </Col>
              <Col>
              <label>Cam kết thông tin là chính xác:</label>
              </Col>
            </Row>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
        </div>
      ))}

{outboundTicketInfo.seatChildren > 0 && (<div>
      {childrenForms.map((form, index) => (
        <div key={index}>
          <Accordion defaultActiveKey={['0']} alwaysOpen >
      <Accordion.Item eventKey="0" style={{ border: '2px solid red', marginBottom: '2%' }}>
        <Accordion.Header className='gender'>Trẻ em</Accordion.Header>
        <Accordion.Body>
        
        <Row>
            <Col md="6">
                <Row>
            <label>Họ:</label>
            </Row>
            <Row>
            <input
            style={{width: "90%"}}
              type="text"
              name={`childrenFirstName-${index}`}
              value={form.firstName}
              onChange={(e) => handleFormChange(childrenForms, index, 'firstName', e.target.value)}
              placeholder='Họ'
              required
            />
          </Row>
          </Col>
          <Col md="6">
                <Row>
            <label>Tên và tên đệm:</label>
            </Row>
            <Row>
            <input
            style={{width: "90%"}}
              type="text"
              name={`childrenLastName-${index}`}
              value={form.lastName}
              onChange={(e) => handleFormChange(childrenForms, index, 'lastName', e.target.value)}
              placeholder='Tên đệm và tên'
              required
            />
          </Row>
          </Col>
          </Row>

          <Row>
            <Col md="6">
                <Row>
            <label>Ngày sinh:</label>
            </Row>
            <Row>
            <input
            style={{width: "90%"}}
              type="date"
              name={`childrenBirthdate-${index}`}
              value={form.dateOfBirth}
              onChange={(e) => handleFormChange(childrenForms, index, 'dateOfBirth', e.target.value)}
              required
            />
          </Row>
          </Col>

          <Col md="6">
                <Row>
            <label>Giới tính:</label>
            </Row>
            <Row>
            <select
            style={{width: "90%",height: "31px",marginBottom: "3%"}}
              name={`childrenGender-${index}`}
              value={form.gender}
              onChange={(e) => handleFormChange(childrenForms, index, 'gender', e.target.value)}
              required
            >
              <option value=""></option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            </Row>
            </Col>
        </Row>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
        </div>
      ))}
      </div>)}
      {outboundTicketInfo.seatBaby > 0 && (<div>
      {/* Hiển thị form thông tin em bé */}
      {babyForms.map((form, index) => (
        <div key={index}>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0" style={{ border: '2px solid red', marginBottom: '2%' }}>
        <Accordion.Header className='gender'>Em bé</Accordion.Header>
        <Accordion.Body>
        <Row>
          <Col>
          <Row>
            <label>Bay cùng (tên người lớn):</label>
            </Row>
            <Row>
            <input
                style={{width: "95%"}}
              type="text"
              name={`babyAccompanyingAdult-${index}`}
              value={form.accompanyingAdult}
              onChange={(e) => handleFormChange(babyForms, index, 'accompanyingAdult', e.target.value)}
              required
            />
          </Row>
          </Col>
        </Row>

          <Row>
            <Col md="6">
            <Row>
            <label>Họ:</label>
            </Row>
            <Row>
            <input
            style={{width: "90%"}}
              type="text"
              name={`babyFirstName-${index}`}
              value={form.firstName}
              onChange={(e) => handleFormChange(babyForms, index, 'firstName', e.target.value)}
              placeholder='Họ'
              required
            />
          </Row>
        </Col>
        <Col md="6">
            <Row>
            <label>Tên và tên đệm:</label>
            </Row>
            <Row>
            <input
            style={{width: "90%"}}
              type="text"
              name={`babyLastName-${index}`}
              value={form.lastName}
              onChange={(e) => handleFormChange(babyForms, index, 'lastName', e.target.value)}
              placeholder='Tên đệm và tên'
              required
            />
          </Row>
          </Col>
        </Row>

        <Row>
            <Col md="6">
            <Row> 
            <label>Ngày sinh:</label>
            </Row>
            <Row>
            <input
            style={{width: "90%"}}
              type="date"
              name={`babyBirthdate-${index}`}
              value={form.dateOfBirth}
              onChange={(e) => handleFormChange(babyForms, index, 'dateOfBirth', e.target.value)}
              required
            />
          </Row>
          </Col>

          <Col md="6">
            <Row>
            <label>Giới tính:</label>
            </Row>
            <Row>
            <select
            style={{width: "90%",height: "31px", marginBottom: "3%"}}
              name={`babyGender-${index}`}
              value={form.gender}
              onChange={(e) => handleFormChange(babyForms, index, 'gender', e.target.value)}
              required
            >
              <option value=""></option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            </Row>
          </Col>
        </Row>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
        </div>
      ))}</div>)}

      {/* Thêm nút Quay lại và Tiếp tục */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "5%", marginBottom: "2%" }}>
        <button onClick={handleBack}>Quay lại</button>
        <button onClick={handleContinue}>Tiếp tục</button>
      </div>
    </div>
  );
}


export default Passengers;
