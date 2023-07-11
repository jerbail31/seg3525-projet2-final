import { FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Header() {
  //account features
  const navigate = useNavigate();
  const accountClick = () => {
    navigate('/seg3525-projet2-final/Account');
  }
  const login = () => {
    navigate('/seg3525-projet2-final/AccountLogin');
  }
  const signUp = () => {
    navigate('/seg3525-projet2-final/SignUp');
  }

  const signOut = () => {
    localStorage.setItem('AccountName', '');
    localStorage.setItem('AccountEmail', '');
    localStorage.setItem('AccountPhone', '');
    localStorage.setItem('AccountAddress', '');
    localStorage.setItem('AccountPostal', '');
    navigate('/seg3525-projet2-final');
  }

  const name = localStorage.getItem('AccountName');
  var rawHTML;
  if (!((name === '') || (name=== null))) {
    rawHTML = (
      <div>
        <span onClick={signOut} className='header-signout'>sign out</span>
        <span>Welcome </span>
        <span className='header-lnk' onClick={accountClick} style={{ textDecoration: 'underline' }}>{name}</span>
      </div>
    );
  }
  else {
    rawHTML = (
      <div>
        <span className='header-lnk' onClick={login}>Login</span>
        <span>/</span>
        <span className='header-lnk' onClick={signUp}>Sign up</span>
      </div>
    );
  }

  //social info features
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
    <header className="header">
      <div className="header-left">
        <div className="header-item" onClick={emailClick}>
          <FaEnvelope />
          <span>chase@chasesgrass.com</span>
        </div>
        <div className="header-item" onClick={phoneClick}>
          <FaPhone />
          <span>613-413-9808</span>
        </div>
        <div className="header-item" onClick={facebookClick}>
          <FaFacebook />
          <span>Facebook</span>
        </div>
      </div>
      <div id='topRight' className="header-right" style={{ float: 'right' }}>
        {rawHTML}
      </div>
    </header>
  );
}

export default Header;