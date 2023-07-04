import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function AccountLogin() {

    const navigate = useNavigate();
    const loginClick = () => {
        //add validation
        navigate('/seg3525-projet2/Account');
    };

    return (
        <div className="accountLogin">
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col>
                        <div className='accountLogin-form'>
                            <h4>Login to your account</h4>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="click login to access account. No validation" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <div className='accountLogin-button'>
                                    <Button variant='warning' size="lg" onClick={loginClick}>Login</Button>
                                </div>

                            </Form>
                        </div>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default AccountLogin;