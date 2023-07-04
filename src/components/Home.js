import { Container, Row, Col, Button } from 'react-bootstrap';
import cart from "./cart.png";
import { useNavigate } from 'react-router-dom';
import Reviews from './Reviews.js';

function Home() {

  const navigate = useNavigate();
  const navigateToAccount = () => {
    navigate('/seg3525-projet2/AccountLogin');
  };

  const navigateToServices = () => {
    navigate('/seg3525-projet2/Services');
  };


  return (
    <div className="home">
      <Container className="home-description">
        <Row>
          <Col md={6}>
            {/* Image */}
            <img src={cart} alt="cart" />
          </Col>
          <Col md={6}>
            {/* Content */}
            <div className='home-text'>
              <h4>
                Hello !
              </h4>
              <h4>
                I'm a local student with a summer grass cutting service.
                I have four years of lawn mowing experience around the community.
              </h4>
              <h4>I'm excited to work with new clients</h4>
              <p>-Chase</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="home-side home-thirdbox">
            <div>
              <h4>
                Already a client?
              </h4>
              <Button variant='warning' onClick={navigateToAccount}>View my account</Button>
            </div>
          </Col>
          <Col className="home-middle home-thirdbox">
            <Reviews></Reviews>
          </Col>
          <Col className="home-side home-thirdbox">
            <div>
              <h4>
                I offer one-time and seasonal services
              </h4>
              <Button variant='warning' onClick={navigateToServices}>View services</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;