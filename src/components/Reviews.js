import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [reviews, setReviews] = useState([['Awesome Service', 'Joe'], ['Great value', 'Anonymous'], ["Had this service for 2 years. Worth every dollar!", "Biscuit"]]);

  const handlePreviousPage = () => {
    if (parseInt(currentPage) === 0) {
      setCurrentPage(reviews.length - 1);
    }
    else {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (parseInt(currentPage) === reviews.length - 1) {
      setCurrentPage(0);
    }
    else {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    //fill review
    document.getElementById('review').innerHTML = '"' + reviews[parseInt(currentPage)][0] + '"';
    document.getElementById('reviewer').innerHTML = "-" + reviews[parseInt(currentPage)][1];
  });

  //review modal
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleSubmit = () => {
    const newReview = document.getElementById('modalReview');
    const newName = document.getElementById('modalName');
    var valid = true;
    if (newReview.value === '' || invalidReviewCheck(newReview.value)) {
      valid = false;
      newReview.style.borderColor = 'red';
    }
    else{
      newReview.style.borderColor = '#dee2e6';
    }

    if (newName.value === '') {
      valid = false;
      newName.style.borderColor = 'red';
    }
    else{
      newName.style.borderColor = '#dee2e6';
    }

    if (valid) {
      const newRow = [newReview.value, newName.value];
      setReviews(prevReviews => [...prevReviews, newRow]);
    }
    else {
      return;
    }
    closeModal();
  };

  //returns true if invalid
  const invalidReviewCheck = (string) => {
    if(string.length > 50){
      return true;
    }
    
    /*checks for 20 concecutive chars*/
    let consecutiveChars = 0;

    for (let i = 0; i < string.length; i++) {
      if (string[i] !== ' ') {
        consecutiveChars++;
        if (consecutiveChars >= 20) {
          return true;
        }
      } else {
        consecutiveChars = 0;
      }
    }

    return false;
  };

  return (
    <div className="Reviews">
      <Container>
        <Row>
          <div className='reviews-main'>
            <Col md={1}>
              <FaArrowLeft className='reviews-arrowLeft reviews-arrow' onClick={handlePreviousPage} size={24}></FaArrowLeft>
            </Col>
            <Col md={10}>
              <h4 id='review'>Review</h4>
            </Col>
            <Col md={1}>
              <FaArrowRight className='reviews-arrowRight reviews-arrow' onClick={handleNextPage} size={24}></FaArrowRight>
            </Col>
          </div>
        </Row>
        <Row>
          <Col>
            <label id='reviewer' className='reviews-reviewer'>name</label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant='warning' onClick={openModal}>Write a public review</Button>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Write a public review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Review:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='Review'
                      id='modalReview'
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder='Name'
                      id='modalName'
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Submit Review</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyComponent;
