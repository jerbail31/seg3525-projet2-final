import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    const homeClick = () => {
        navigate('/seg3525-projet2-final');
    }

    return (
        <Container style={{ textAlign: 'center' }}>
            <Row>
                <Col md={3}></Col>
                <Col>
                    <div className='accountLogin-form'>
                        <h1 style={{ fontSize: '5rem' }}>404</h1>
                        <h2>Page Not Found</h2>
                        <Button style={{ marginTop: '25px' }} variant='warning' onClick={homeClick}>Back Home</Button>
                    </div>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    );
}

export default NotFound;