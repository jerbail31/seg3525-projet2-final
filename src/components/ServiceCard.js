import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ id, title, includes, price }) => {
  var includeObject = [];
  if (includes[0] === true) {
    includeObject.push('Grass (Biweekly)');
  };
  if (includes[1] === true) {
    includeObject.push('Trimming (Monthly)');
  };
  if (includes[2] === true) {
    includeObject.push('Leaf Raking (10 bags)');
  };
  if (includes[3] === true) {
    includeObject.push('Aeration (Spring or Fall)');
  };

  const cardClick = () => {
    var card = document.getElementById(id).firstChild;
    if(card.style.borderColor === 'rgb(59, 180, 75)'){
      card.style.borderColor = 'rgba(0, 0, 0, 0.175)';
      card.style.borderWidth = '1px';
    }
    else{
      card.style.borderColor = '#3BB44B';
      card.style.borderWidth = '2px';
    }
  };
  
  const navigate = useNavigate();
  const book = () => {
    localStorage.setItem('selectedService', title);
    localStorage.setItem('selectedServicePrice', price);
    navigate('/seg3525-projet2/Booking');
  };

  const priceLabel = 'Median Price: ' + price;
  return (
    <div id={id} className="serviceCard-main">
      <Card className='serviceCard-card' onClick={cardClick}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className='serviceCard-includes'>
            <Card.Subtitle>Service includes:</Card.Subtitle>
            <ul>
              {includeObject.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <Card.Subtitle className='serviceCard-price'>{priceLabel} </Card.Subtitle>
          <Button variant='success' className='serviceCard-button' onClick={book}> Book </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomButton;