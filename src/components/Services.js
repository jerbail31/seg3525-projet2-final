import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard.js';


function Services() {
  //translation
  const fr = {
    filter: 'Filtres',
    occurence: 'Occurrence',
    seasonal: 'Saisonnier',
    onex: 'Unique',
    type: 'Type de service',
    grass: 'Herbe',
    trim: 'Taille',
    aeration: 'Aération',
    leaf: 'Ramassage de feuilles',
    pricemsg: '*Les prix varient en fonction de la taille du terrain. Une estimation sera établie lors de la phase de réservation.',
    compare: 'Comparer les services sélectionnés',
    clear: 'Effacer les filtres',
    comparemsg: 'Cliquez sur les cartes de service pour sélectionner les services',
    nameBasicSeasonal:'Forfait saisonnier de base',
    nameAdvancedSeasonal:'Forfait saisonnier avancé',
    nameSuperSeasonal:'Forfait saisonnier supérieur',
    nameGrassOne:'Service de tonte',
    nameTrimOne:'Service de tonte et de taille',
    nameAerationOne:"Service d'aération",
    nameLeafOne:'Service de ramassage de feuilles',
  };
  const en = {
    filter: 'Filters',
    occurence: 'Occurrence',
    seasonal: 'Seasonal',
    onex: 'One-Time',
    type: 'Service Type',
    grass: 'Grass',
    trim: 'Trimming',
    aeration: 'Aeration',
    leaf: 'Leaf Removal',
    pricemsg: '*Prices vary according to yard size. An estimate will be determined during the booking phase.',
    compare: 'Compare selected services',
    clear: 'Clear Filters',
    comparemsg: 'Click on service cards to select services',
    nameBasicSeasonal:'Basic Seasonal Package',
    nameAdvancedSeasonal:'Advanced Seasonal Package',
    nameSuperSeasonal:'Super Seasonal Package',
    nameGrassOne:'One-Time Grass Service',
    nameTrimOne:'One-Time Grass and Trim Service',
    nameAerationOne:'One-Time Aeration Service',
    nameLeafOne:'One-Time Leaf Raking Service',
};
var word;
if (localStorage.getItem('lang') === 'FR') {
  word = fr;
}
else {
  word = en;
}

//Occurence rbl
const [selectedOccurence, setselectedOccurence] = useState('');

const handleRadioChange = (event) => {
  setselectedOccurence(event.target.value);
};

//ckb
const [isCheckedGrass, setIsCheckedGrass] = useState(false);
const [isCheckedTrim, setisCheckedTrim] = useState(false);
const [IsCheckedAeration, setIsCheckedAeration] = useState(false);
const [IsCheckedLeaf, setIsCheckedLeaf] = useState(false);

const handleCheckboxChangeGrass = () => {
  setIsCheckedGrass(!isCheckedGrass);
};

const handleCheckboxChangeTrim = () => {
  setisCheckedTrim(!isCheckedTrim);
};

const handleCheckboxChangeAeration = () => {
  setIsCheckedAeration(!IsCheckedAeration);
};
const handleCheckboxChangeLeaf = () => {
  setIsCheckedLeaf(!IsCheckedLeaf);
};

// id[0], occurence[1], type[2]{0:grass, 1:trim, 2:aeration, 3:leaf}
const yearGrass = ["cardYearGrass", "seasonal", [true, false, false, false]];
const yearTrim = ["cardYearTrim", "seasonal", [true, true, false, false]];
const yearFull = ["cardYearFull", "seasonal", [true, true, true, true]];
const oneGrass = ["cardOneGrass", "oneTime", [true, false, false, false]];
const oneTrim = ["cardOneTrim", "oneTime", [true, true, false, false]];
const oneAeration = ["cardOneAeration", "oneTime", [false, false, false, true]];
const oneLeaf = ["cardOneLeaf", "oneTime", [false, false, true, false]];


const serviceList = [yearGrass, yearTrim, yearFull, oneGrass, oneTrim, oneAeration, oneLeaf];
useEffect(() => {
  filterCards();
});

const clearFilterClick = () => {
  showAll();
  clearFilter();
}

const clearFilter = () => {
  setselectedOccurence('');
  setIsCheckedGrass(false);
  setisCheckedTrim(false);
  setIsCheckedLeaf(false);
  setIsCheckedAeration(false);
};

const filterCards = () => {
  for (var i = 0; i < serviceList.length; i++) {
    if (noFilters()) {
      document.getElementById(serviceList[i][0]).style.display = 'block';
    }
    else if (filterService(serviceList[i])) {
      document.getElementById(serviceList[i][0]).style.display = 'block';
    }
    else {
      document.getElementById(serviceList[i][0]).style.display = 'none';
    }
  }
};
const noFilters = () => {
  return (!(isCheckedGrass || isCheckedTrim || IsCheckedAeration || IsCheckedLeaf || !(selectedOccurence === '')));
}
const filterService = (service) => {
  if (!(selectedOccurence === '' || selectedOccurence === service[1])) {
    return false;
  }
  else if (isCheckedGrass || isCheckedTrim || IsCheckedAeration || IsCheckedLeaf) {
    if (isCheckedGrass) {
      if (service[2][0] === false) {
        return false;
      }
    }
    if (isCheckedTrim) {
      if (service[2][1] === false) {
        return false;
      }
    }
    if (IsCheckedAeration) {
      if (service[2][2] === false) {
        return false;
      }
    }
    if (IsCheckedLeaf) {
      if (service[2][3] === false) {
        return false;
      }
    }
  }
  return true;
}

const compareClick = () => {
  var noneSelected = true;
  for (var i = 0; i < serviceList.length; i++) {
    var parent = document.getElementById(serviceList[i][0]);
    var card = parent.firstChild;
    if (card.style.borderColor === 'rgb(59, 180, 75)') {
      parent.style.display = 'block';
      noneSelected = false;
    }
    else {
      parent.style.display = 'none';
    }
  }
  if (noneSelected) {
    showAll();
    document.getElementById('msgComapre').style.display = 'block';
  }
  else {
    document.getElementById('msgComapre').style.display = 'none';
  }
  clearFilter();
}

const showAll = () => {
  for (var i = 0; i < serviceList.length; i++) {
    var parent = document.getElementById(serviceList[i][0]);
    parent.style.display = 'block';
  }
}

return (
  <div className="services">
    <Container>
      <div className='title'>
        <h1>Services</h1>
      </div>
      <Row>
        <Col md={3}>
          <Card className='services-filter'>
            <Card.Body>
              <Form>
                <Row>
                  <Col className='services-filterTitle' md={4}>
                    <Card.Title>{word.filter}</Card.Title>
                  </Col>
                  <Col className='services-clearFilters' md={8}>
                    <Button variant='secondary' onClick={clearFilterClick}>{word.clear}</Button>
                  </Col>
                </Row>
                <div className='services-filterGroup'>
                  <Card.Subtitle>{word.occurence}</Card.Subtitle>
                  <div className='services-filterItems'>
                    <Form.Check
                      type="radio"
                      id="radioSeasonal"
                      label={word.seasonal}
                      value="seasonal"
                      checked={selectedOccurence === 'seasonal'}
                      onChange={handleRadioChange}
                    />

                    <Form.Check
                      type="radio"
                      id="radioOneTime"
                      label={word.onex}
                      value="oneTime"
                      checked={selectedOccurence === 'oneTime'}
                      onChange={handleRadioChange}
                    />
                  </div>
                </div>
                <div className='services-filterGroup'>
                  <Card.Subtitle>{word.type}</Card.Subtitle>
                  <div className='services-filterItems'>
                    <Form.Check
                      type="checkbox"
                      id="checkboxGrass"
                      label={word.grass}
                      checked={isCheckedGrass}
                      onChange={handleCheckboxChangeGrass}
                    />

                    <Form.Check
                      type="checkbox"
                      id="checkboxTrim"
                      label={word.trim}
                      checked={isCheckedTrim}
                      onChange={handleCheckboxChangeTrim}
                    />

                    <Form.Check
                      type="checkbox"
                      id="checkboxAeration"
                      label={word.aeration}
                      checked={IsCheckedAeration}
                      onChange={handleCheckboxChangeAeration}
                    />
                    <Form.Check
                      type="checkbox"
                      id="checkboxLeaf"
                      label={word.leaf}
                      checked={IsCheckedLeaf}
                      onChange={handleCheckboxChangeLeaf}
                    />
                  </div>
                </div>

                <Card.Text className='services-filterText'>
                  {word.pricemsg}
                </Card.Text>
              </Form>
            </Card.Body>
          </Card>
          <Button variant='success' onClick={compareClick} style={{ width: '100%' }}>{word.compare}</Button>
          <label id='msgComapre' className='services-msgCompare'>{word.comparemsg}</label>
        </Col>
        <Col md={9}>
          <Container id='cardContainer' className='services-cardContainer'>

            <ServiceCard id="cardYearGrass" title={word.nameBasicSeasonal} price='449.99$' includes={yearGrass[2]} times='season'></ServiceCard>
            <ServiceCard id="cardYearTrim" title={word.nameAdvancedSeasonal} price='499.99$' includes={yearTrim[2]} times='season'></ServiceCard>
            <ServiceCard id="cardYearFull" title={word.nameSuperSeasonal} price='599.99$' includes={yearFull[2]} times='season'></ServiceCard>
            <ServiceCard id="cardOneGrass" title={word.nameGrassOne} price='39.99$' includes={oneGrass[2]} times='one'></ServiceCard>
            <ServiceCard id="cardOneTrim" title={word.nameTrimOne} price='49.99$' includes={oneTrim[2]} times='one'></ServiceCard>
            <ServiceCard id="cardOneAeration" title={word.nameAerationOne} price='99.99$' includes={oneAeration[2]} times='one'></ServiceCard>
            <ServiceCard id="cardOneLeaf" title={word.nameLeafOne} price='99.99$' includes={oneLeaf[2]} times='one'></ServiceCard>


          </Container>
        </Col>
      </Row>
    </Container>
  </div>
);
}

export default Services;