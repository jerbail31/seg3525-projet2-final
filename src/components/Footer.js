import { Container, Row, Col } from 'react-bootstrap';
import icon from "./icon.png"
import { FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa';

function Footer() {
  const emailClick = () => {
    const mailtoLink = `mailto:${encodeURIComponent('chase@chasesgrass.com')}`;
    window.location.href = mailtoLink;
  };
  const phoneClick = () => {
    window.location.href = `tel:${'613-413-9808'}`;
  };
  const facebookClick = () => {
    window.open(`https://www.facebook.com`);
  };
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className='footer-left'>
            {/* Left-aligned text */}
            <img src={icon} alt="Logo" className="footer-icon"></img>
            <span>© 2023 Chase's Grass Cutting Service</span>
          </Col>
          <Col className="d-flex justify-content-end">
            {/* Right-aligned spans */}
            <div className="footer-item" onClick={emailClick}>
              <FaEnvelope />
              <span>chase@chasesgrass.com</span>
            </div>
            <div className="footer-item" onClick={phoneClick}>
              <FaPhone />
              <span>613-413-9808</span>
            </div>
            <div className="footer-item" onClick={facebookClick}>
              <FaFacebook />
              <span>Facebook</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;