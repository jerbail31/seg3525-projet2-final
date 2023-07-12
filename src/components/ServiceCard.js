import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ id, title, includes, price, times }) => {

  //translation
  const fr = {
    book:'Réserver',
    median:'Prix médian : ',
    includes:'Le service inclus : ',
    grass:'Pelouse',
    grassF:' (Chaque 2 semaines)',
    trim:'Taille',
    trimF:' (Chaque mois)',
    leaf:'Ramassage de feuilles (10 sacs)',
    aeration:'Aération (printemps ou automne)',
  };
  const en = {
    book:'Book',
    median:'Median Price: ',
    includes:'The Service Includes: ',
    grass:'Grass',
    grassF:' (Biweekly)',
    trim:'Trimming',
    trimF:' (Monthly)',
    leaf:'Leaf Raking (10 bags)',
    aeration:'Aeration',
  };
  var word;
  if (localStorage.getItem('lang') === 'FR') {
    word = fr;
  }
  else {
    word = en;
  }
  //end of translation

  var includeObject = [];
  if(times === 'season'){
    if (includes[0] === true) {
      includeObject.push(word.grass + word.grassF);
    };
    if (includes[1] === true) {
      includeObject.push(word.trim + word.trimF);
    };
  }
  else if(times === 'one'){
    if (includes[0] === true) {
      includeObject.push(word.grass);
    };
    if (includes[1] === true) {
      includeObject.push(word.trim);
    };
  }
  if (includes[2] === true) {
    includeObject.push(word.leaf);
  };
  if (includes[3] === true) {
    includeObject.push(word.aeration);
  }

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
    navigate('/Booking');
  };

  const priceLabel = word.median + price;
  return (
    <div id={id} className="serviceCard-main">
      <Card className='serviceCard-card' onClick={cardClick}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className='serviceCard-includes'>
            <Card.Subtitle>{word.includes}</Card.Subtitle>
            <ul>
              {includeObject.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <Card.Subtitle className='serviceCard-price'>{priceLabel} </Card.Subtitle>
          <Button variant='success' className='serviceCard-button' onClick={book}> {word.book} </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomButton;