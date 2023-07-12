import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';

function Navbar() {

  //translation
  const fr = {
    name:'Coupe de gazon par Chase',
    home:'Accueil',
    service:'Services',
    account:'Mon compte',
  };
  const en = {
    name:"Chase's Grass Cutting",
    home:'Home',
    service:'Services',
    account:'My Account',

  };
  var word;
  if(localStorage.getItem('lang') === 'FR'){
    word = fr;
  }
  else{
    word = en;
  }

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
    else if (path === '/seg3525-projet2-final' || path === '/seg3525-projet2-final/') {
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

    window.location.reload();
  }

  var displaylang;
  var lang = localStorage.getItem('lang');
  if (lang === null) {
    displaylang = 'FR';
    localStorage.setItem('lang', 'EN');
  }
  else if(lang === 'EN'){
    displaylang = 'FR';
  }
  else if(lang === 'FR'){
    displaylang = 'EN';
  }

  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={homeClick}>{word.name}</div>
      <ul className="navbar-links">
        <li><label className='navbar-lbl navbar-home' onClick={homeClick}>{word.home}</label></li>
        <li><label className='navbar-lbl navbar-services' onClick={serviceClick}>{word.service}</label></li>
        <li><label className='navbar-lbl navbar-account' onClick={accountClick}>{word.account}</label></li>
        <li className='navbar-icon' onClick={switchLang}><FaGlobe style={{fontSize:'1.5rem'}}></FaGlobe><label id='lang'>{displaylang}</label></li>
      </ul>
    </nav>
  );
};

export default Navbar;