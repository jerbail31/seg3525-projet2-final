import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Booking() {
  const navigate = useNavigate();

  const navServices = () => {
    navigate('/seg3525-projet2/Services');
  };

  //for modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    navigate('/seg3525-projet2');
  };
  const handleShow = () => {
    //add validation

    setShow(true);
  };
  const handleMyAccount = () => {
    navigate('/seg3525-projet2/Account');
  };

  const setPrice = () => {
    if (adressIsValid()) {
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
      document.getElementById('price').innerHTML = 'Enter your adress to get your price';
    }
  };
  const adressValidate = () => {
    setPrice();
  };
  const adressIsValid = () => {
    if (document.getElementById('adress').value === '') {
      return false;
    }

    return true;
  };

  const [selectedYard, setSelectedYard] = useState('full');

  const handleYardChange = (event) => {
    setSelectedYard(event.target.value);
  };

  useEffect(() => {
    setPrice();
  });

  //service select
  const service = localStorage.getItem('selectedService');

  return (
    <div className="booking">
      <Container className='booking-container'>
        <h5>Personal Information</h5>
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
                  id='adress'
                  onChange={adressValidate}
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
        <div className='booking-serviceHead'>
          <h5>Service Information</h5>
          <Button variant='success' onClick={navServices} style={{ backgroundColor: '#3BB44B' }}>
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
              <label id='price'>Enter your adress to get your price</label>
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
            <Button className='booking-btnbook' variant="success" onClick={handleShow}>
              Book service
            </Button>
          </Col>
        </Row>
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