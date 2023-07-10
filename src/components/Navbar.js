import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';

function Navbar() {
  /*Navigation code*/
  const navigate = useNavigate();

  const homeClick = () => {
    navigate('/seg3525-projet2-final');
  }
  const serviceClick = () => {
    navigate('/seg3525-projet2-final/Services');
  }
  const accountClick = () => {
    navigate('/seg3525-projet2-final/AccountLogin');
  }

  /*Bold current page lbl*/
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    document.getElementsByClassName('navbar-services')[0].style.fontWeight = '';
    document.getElementsByClassName('navbar-account')[0].style.fontWeight = '';
    document.getElementsByClassName('navbar-home')[0].style.fontWeight = '';

    if (path === '/seg3525-projet2-final/Services') {
      document.getElementsByClassName('navbar-services')[0].style.fontWeight = 'bold';
    }
    else if (path === '/seg3525-projet2-final/Account') {
      document.getElementsByClassName('navbar-account')[0].style.fontWeight = 'bold';
    }
    else if (path === '/seg3525-projet2-final') {
      document.getElementsByClassName('navbar-home')[0].style.fontWeight = 'bold';
    }
  });

  /*tranlation language*/


  const switchLang = () => {
    lang = localStorage.getItem('lang');
    if (lang === 'EN') {
      lang = 'FR';
    }
    else {
      lang = 'EN';
    }
    localStorage.setItem('lang', lang);
    document.getElementById('lang').innerHTML = lang;
  }

  var lang;
  lang = localStorage.getItem('lang');
  if (lang === null) {
    lang = 'FR';
    localStorage.setItem('lang', 'EN');
  }

  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={homeClick}>Chase's Grass Cutting</div>
      <ul className="navbar-links">
        <li><label className='navbar-lbl navbar-home' onClick={homeClick}>Home</label></li>
        <li><label className='navbar-lbl navbar-services' onClick={serviceClick}>Services</label></li>
        <li><label className='navbar-lbl navbar-account' onClick={accountClick}>My account</label></li>
        <li className='navbar-icon' onClick={switchLang}><FaGlobe style={{fontSize:'1.5rem'}}></FaGlobe><label id='lang'>{lang}</label></li>
      </ul>
    </nav>
  );
};

export default Navbar;