import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Navbar() {
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
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {  
    document.getElementsByClassName('navbar-services')[0].style.fontWeight = '';
    document.getElementsByClassName('navbar-account')[0].style.fontWeight = '';
    document.getElementsByClassName('navbar-home')[0].style.fontWeight = '';

    if (path === '/seg3525-projet2-final/Services') {
      document.getElementsByClassName('navbar-services')[0].style.fontWeight = 'bold';
    }
    else if (path === '/seg3525-projet2-final/Account' || path === '/seg3525-projet2-final/AccountLogin') {
      document.getElementsByClassName('navbar-account')[0].style.fontWeight = 'bold';
    }
    else if (path === '/seg3525-projet2-final') {
      document.getElementsByClassName('navbar-home')[0].style.fontWeight = 'bold';
    }
  });
  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={homeClick}>Chase's Grass Cutting</div>
      <ul className="navbar-links">
        <li><label className='navbar-home' onClick={homeClick}>Home</label></li>
        <li><label className='navbar-services' onClick={serviceClick}>Services</label></li>
        <li><label className='navbar-account' onClick={accountClick}>My account</label></li>
      </ul>
    </nav>
  );
};

export default Navbar;