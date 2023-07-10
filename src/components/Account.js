import { Container, Table, Button } from 'react-bootstrap';
import ChatbotComponent from './Chatbot';
import { useNavigate } from 'react-router-dom';

function Account() {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.setItem('AccountName', '');
    localStorage.setItem('AccountEmail', '');
    localStorage.setItem('AccountPhone', '');
    localStorage.setItem('AccountAddress', '');
    localStorage.setItem('AccountPostal', '');
    navigate('/seg3525-projet2-final');
  }

  return (
    <div className="account">
      <Container>
        <div className='account-top'>
          <h3>Hi {'<Name>'}</h3>
          <Button variant='warning' onClick={signOut}>Sign out</Button>
        </div>
        <div className='account-service'>
          <h5>My service history</h5>
          <Table striped hover className='account-serviceTable'>
            <thead>
              <tr>
                <th>Service</th>
                <th>Purchased date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Seasonal Package</td>
                <td>2023-04-14</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Basic Seasonal Package</td>
                <td>2022-03-27</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>Basic One-time</td>
                <td>2021-08-11</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className='account-chat'>
          <h5>Chat with us</h5>
          <div className='account-chatbox'>
            <ChatbotComponent />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Account;