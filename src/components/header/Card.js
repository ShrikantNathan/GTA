import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Card.css';
import { Link } from 'react-router-dom';

function Card() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://20.185.69.17:3000/cards/');
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className='e-card'>
        <h1 className='heading'>
          Comprehensive<span className='Analytics'>Service</span>
          <br />
          Offerings
        </h1>
        <section>
          <Container className='cardsize'>
            <Row>
              {cards.map((card, index) => (
                <Col key={index} sm={12} md={4}>
                  <Link to={card.link} className='text-decoration-none'>
                    <div className='Card'>
                      <div className='cardlist'>
                        <img src={card.image} alt='group' className='card-img' />
                        <h3>
                          <span className='textwrapper'>{card.title}</span>
                        </h3>
                        <hr className='card-hr' />
                        <p>{card.description}</p>
                        <div className='learn'>Learn more</div>
                      </div>
                    </div>
                  </Link>
                  
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <h1 className='heading'>
        Georgetown <span className='Analytics'>Analytics</span> and <br />{' '}
        <span className='Analytics'>Technology</span>
      </h1>
      <section className='lst'>
        <Container style={{ textAlign: '-webkit-center' }}>
          <Row>
            <Col sm={12} md={4}>
              <div className='tech'>
                <Link className='nav-link' to='/Organization'>
                  <h3>
                    Organization & <br />
                    Executive Summary
                    <hr className='tech-hr' />
                  </h3>
                </Link>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className='tech'>
                <Link className='nav-link' to='/Market'>
                  <h3>
                    The Market <br />
                    Analytics
                    <hr className='tech-hr' />
                  </h3>
                </Link>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className='tech'>
                <Link className='nav-link' to='/Businessgoal'>
                  <h3>
                    Business Goals & <br />
                    Objective
                    <hr className='tech-hr' />
                  </h3>
                </Link>
              </div>
            </Col>
          </Row>
          <Row className='row2'>
            <Col sm={12} md={4}>
              <div className='tech'>
                <Link className='nav-link' to='/Company'>
                  <h3>
                    Company Summary &<br /> Analysis of Business
                    <hr className='tech-hr' />
                  </h3>
                </Link>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className='tech'>
                <Link className='nav-link' to='/Success'>
                  <h3>
                    Keys to Success
                    <hr className='tech-hr' />
                  </h3>
                </Link>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className='tech'>
                <Link className='nav-link' to='/Services'>
                  <h3>
                    Services & Human <br />Resources Requirements
                    <hr className='tech-hr' />
                  </h3>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    </section>
  );
}

export default Card;
