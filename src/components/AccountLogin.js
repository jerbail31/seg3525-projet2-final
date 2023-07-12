import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';



function AccountLogin() {
    
    var path = '/Account';
    if(localStorage.getItem('fromPage') !== null){
        path = ('/' + localStorage.getItem('fromPage'));
        localStorage.removeItem('fromPage', '');
    }

    const navigate = useNavigate();
    const loginClick = () => {
        if (!validate()) {
            return;
        }

        localStorage.setItem('AccountName', 'user1');
        localStorage.setItem('AccountEmail', 'user1@email.com');
        localStorage.setItem('AccountPhone', '613-123-4567');
        localStorage.setItem('AccountAddress', '123 Place');
        localStorage.setItem('AccountPostal', 'A0A 0A0');
        navigate(path)
    };

    const validate = () => {
        var valid = true;

        const email = document.getElementById('formBasicEmail');
        if (email.value !== 'user@email.ca') {
            valid = false;
            email.classList.add('accountCreate-Invalid');
        }
        else {
            email.classList.remove('accountCreate-Invalid');
        }

        const password = document.getElementById('formBasicPassword');
        if (password.value !== 'user123') { 
            valid = false;
            password.classList.add('accountCreate-Invalid');
        }
        else {
            password.classList.remove('accountCreate-Invalid');
        }

        return valid;
    }

    //for logged in users
    useEffect(() => {
        if(localStorage.getItem('AccountName') !== '' && localStorage.getItem('AccountName') !== null){
            navigate('/Account');
        }
        
    });

    const signUp = () => {
        localStorage.setItem('fromPage', path.replace('/', ''));
        navigate('/SignUp');
    }

    return (
        <div className="accountLogin">
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col>
                        <div className='accountLogin-form'>    
                            <div className='accountLoginCreate-other'>
                                <span onClick={signUp}>Don't have an account? Sign up</span>
                            </div>
                            <h4>Login to your account</h4>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
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