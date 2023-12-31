import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Booking() {
  const navigate = useNavigate();

  const navServices = () => {
    navigate('/Services');
  };

  //for modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate('/');
  };
  const handleMyAccount = () => {
    navigate('/Account');
  };

  const book = () => {
    if (!validate()) {
      return;
    }

    //show confirm modal
    setShow(true);
  }

  const validate = () => {
    var valid = true;

    const AccountName = document.getElementById('name');
    if (AccountName.value === '') {
      valid = false;
      AccountName.classList.add('accountCreate-Invalid');
    }
    else {
      AccountName.classList.remove('accountCreate-Invalid');
    }

    const AccountEmail = document.getElementById('email');
    if (AccountEmail.value === '') {
      valid = false;
      AccountEmail.classList.add('accountCreate-Invalid');
    }
    else {
      AccountEmail.classList.remove('accountCreate-Invalid');
    }

    const AccountPhone = document.getElementById('phone');
    if (AccountPhone.value === '') {
      valid = false;
      AccountPhone.classList.add('accountCreate-Invalid');
    }
    else {
      AccountPhone.classList.remove('accountCreate-Invalid');
    }

    const AccountAddress = document.getElementById('address');
    if (AccountAddress.value === '') {
      valid = false;
      AccountAddress.classList.add('accountCreate-Invalid');
    }
    else {
      AccountAddress.classList.remove('accountCreate-Invalid');
    }

    const AccountPostal = document.getElementById('postal');
    if (AccountPostal.value === '') {
      valid = false;
      AccountPostal.classList.add('accountCreate-Invalid');
    }
    else {
      AccountPostal.classList.remove('accountCreate-Invalid');
    }

    return valid;
  };

  const setPrice = () => {
    if (addressIsValid()) {
      if (selectedYard === 'full') {
        document.getElementById('price').innerHTML = localStorage.getItem('selectedServicePrice');
      }
      else {
        var pricestr = localStorage.getItem('selectedServicePrice');
        var price = pricestr.substring(0, pricestr.length - 1);

        price = price * (2 / 3);
        price = Math.round(price * 100) / 100;
        price = price + '$';

        document.getElementById('price').innerHTML = price;
      }
    }
    else {
      document.getElementById('price').innerHTML = 'Enter your address to get your price';
    }
  };
  const addressValidate = () => {
    //validate address here

    setPrice();
  };
  const addressIsValid = () => {
    if (document.getElementById('address').value === '') {
      return false;
    }

    return true;
  };

  const [selectedYard, setSelectedYard] = useState('full');

  const handleYardChange = (event) => {
    setSelectedYard(event.target.value);
  };

  const addLoggedInInfo = () => {
    if (localStorage.getItem('AccountName') !== '' && localStorage.getItem('AccountName') !== null) {
      document.getElementById('name').value = localStorage.getItem('AccountName');
      document.getElementById('email').value = localStorage.getItem('AccountEmail');
      document.getElementById('phone').value = localStorage.getItem('AccountPhone');
      document.getElementById('address').value = localStorage.getItem('AccountAddress');
      document.getElementById('postal').value = localStorage.getItem('AccountPostal');

      document.getElementById('personalInfoAccount').style.display = 'none';

      setPrice();
    }
  }

  useEffect(() => {
    setPrice();
    addLoggedInInfo();
  });

  const accountClick = () => {
    localStorage.setItem('fromPage', 'Booking');
    navigate('/AccountLogin');
  }

  const signUp = () => {
    localStorage.setItem('fromPage', 'Booking');
    navigate('/SignUp');
  }

  //service select
  const service = localStorage.getItem('selectedService');

  return (
    <div className="booking">
      <Container>
        <div className='title'>
          <h1>Book a Service</h1>
        </div>
        <div className='booking-container'>
        <div className='booking-presonalTitle'>
          <h5 style={{ marginBottom: '0' }}>Personal Information</h5>
          <div id='personalInfoAccount' className='booking-personalInfoAccount'>
            <span style={{ float: 'right' }} onClick={accountClick}>You have an account? Login here</span>
            <span onClick={signUp}>Don't have an account? Sign up here</span>
          </div>
        </div>
        <div className='booking-personalInfo'>
          <Row>
            <Col md={3}>
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Chase'
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="phone">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='613-xxx-xxxx'
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder='chase@chasegrass.com'
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Form.Group controlId="postal">
                <Form.Label>Postal Code:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='A1AA1A'
                />
              </Form.Group>
            </Col>
            <Col md={9}>
              <Form.Group>
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder='100 Innes road'
                  id='address'
                  onChange={addressValidate}
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <div className='booking-serviceHead'>
          <h5>Service Information</h5>
          <Button variant='warning' onClick={navServices}>
            Choose a different service
          </Button>
        </div>
        <div className='booking-serviceInfo'>
          <Row>
            <Col md={6}>
              <label className='booking-lbl'>Service:</label>
              <label>{service}</label>
            </Col>
            <Col md={6}>
              <label className='booking-lbl'>Price: </label>
              <label id='price'>Enter your address to get your price</label>
            </Col>
          </Row>
          <Row className='booking-yardRow'>
            <Col md={1}>
              <label className='booking-lbl'>Yard: </label>
            </Col>
            <Col>
              <Form>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Full yard"
                    name="Yards"
                    value="full"
                    checked={selectedYard === "full"}
                    onChange={handleYardChange}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    label="Front yard only"
                    name="Yards"
                    value="front"
                    checked={selectedYard === "front"}
                    onChange={handleYardChange}
                  />

                  <Form.Check
                    inline
                    type="radio"
                    label="Backyard only"
                    name="Yards"
                    value="back"
                    checked={selectedYard === "back"}
                    onChange={handleYardChange}
                  />
                </div>
              </Form>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <Button className='booking-btnbook' variant="success" onClick={book}>
              Book service
            </Button>
          </Col>
        </Row>
        </div>
      </Container>

      {/*Modal*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A confirmation has been sent to your email.
          Navigate to your account to view your purchase status and to chat with us. Payement will be done after the service.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Home Page
          </Button>
          <Button variant="success" onClick={handleMyAccount}>
            My Account
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Booking;