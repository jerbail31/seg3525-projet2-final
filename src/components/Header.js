import { FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Header() {
  //translation
  const fr = {
    signed:'Connecté sous ',
    login:'Se connecter',
    signup:"S'enregistrer"
  };
  const en = {
    signed:'Logged in as ',
    login:'Login',
    signup:'Sign Up'
  };
  var word;
  if(localStorage.getItem('lang') === 'FR'){
    word = fr;
  }
  else{
    word = en;
  }


  //account features
  const navigate = useNavigate();
  const accountClick = () => {
    navigate('/Account');
  }
  const login = () => {
    navigate('/AccountLogin');
  }
  const signUp = () => {
    navigate('/SignUp');
  }

  const name = localStorage.getItem('AccountName');
  var rawHTML;
  if (!((name === '') || (name=== null))) {
    rawHTML = (
      <div>
        <span>{word.signed}</span>
        <span className='header-lnk' onClick={accountClick} style={{ textDecoration: 'underline' }}>{name}</span>
      </div>
    );
  }
  else {
    rawHTML = (
      <div>
        <span className='header-lnk' onClick={login}>{word.login}</span>
        <span> / </span>
        <span className='header-lnk' onClick={signUp}>{word.signup}</span>
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