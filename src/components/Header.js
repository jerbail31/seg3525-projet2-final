import { FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa';


function Header() {
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
    </header>
  );
}

export default Header;