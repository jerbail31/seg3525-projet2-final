import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function SignUp() {

    var path = '/Account';
    if (localStorage.getItem('fromPage') !== null) {
        path = ('/' + localStorage.getItem('fromPage'));
        localStorage.removeItem('fromPage', '');
    }

    const navigate = useNavigate();
    const CreateClick = () => {

        if (!validate()) {
            return;
        }

        localStorage.setItem('AccountName', document.getElementById('formBasicName').value);
        localStorage.setItem('AccountEmail', document.getElementById('formBasicEmail').value);
        localStorage.setItem('AccountPhone', document.getElementById('formBasicPhone').value);
        localStorage.setItem('AccountAddress', document.getElementById('formBasicAddress').value);
        localStorage.setItem('AccountPostal', document.getElementById('formBasicPostal').value);
        navigate(path);
    };

    const validate = () => {
        var valid = true;

        const AccountName = document.getElementById('formBasicName');
        if (AccountName.value === '') {
            valid = false;
            AccountName.classList.add('accountCreate-Invalid');
        }
        else {
            AccountName.classList.remove('accountCreate-Invalid');
        }

        const AccountEmail = document.getElementById('formBasicEmail');
        if (AccountEmail.value === '') {
            valid = false;
            AccountEmail.classList.add('accountCreate-Invalid');
        }
        else {
            AccountEmail.classList.remove('accountCreate-Invalid');
        }

        const AccountPhone = document.getElementById('formBasicPhone');
        if (AccountPhone.value === '') {
            valid = false;
            AccountPhone.classList.add('accountCreate-Invalid');
        }
        else {
            AccountPhone.classList.remove('accountCreate-Invalid');
        }

        const AccountAddress = document.getElementById('formBasicAddress');
        if (AccountAddress.value === '') {
            valid = false;
            AccountAddress.classList.add('accountCreate-Invalid');
        }
        else {
            AccountAddress.classList.remove('accountCreate-Invalid');
        }

        const AccountPostal = document.getElementById('formBasicPostal');
        if (AccountPostal.value === '') {
            valid = false;
            AccountPostal.classList.add('accountCreate-Invalid');
        }
        else {
            AccountPostal.classList.remove('accountCreate-Invalid');
        }

        const AccountPword = document.getElementById('formBasicPassword');
        if (AccountPword.value === '') {
            valid = false;
            AccountPword.classList.add('accountCreate-Invalid');
        }
        else {
            AccountPword.classList.remove('accountCreate-Invalid');
        }
        return valid;

    };

    const login = () => {
        localStorage.setItem('fromPage', path.replace('/', ''));
        navigate('/AccountLogin');
    }
    return (
        <div className="accountCreate">
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col>
                        <div className='accountCreate-form'>
                            <div className='accountLoginCreate-other'>
                                <span onClick={login}>Already have an account? Login</span>
                            </div>
                            <h4>Create an account</h4>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="name" placeholder="Chase" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="email@email.com" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPhone">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="phone" placeholder="613-123-4567" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="email" placeholder="123 Innes road" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPostal">
                                    <Form.Label>Postal Code</Form.Label>
                                    <Form.Control type="postal" placeholder="A0A 0A0" />
                                </Form.Group>


                                <div className='accountCreate-button'>
                                    <Button variant='warning' size="lg" onClick={CreateClick}>Create Account</Button>
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

export default SignUp;