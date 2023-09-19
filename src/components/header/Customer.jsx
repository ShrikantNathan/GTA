//import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./Customer.css";
import icon from '../../assest/Tab-girl-img.png';
import robothandicon from '../../assest/Robot-hand-icon.png';


function Customer() {
   const [statistics, setStatistics] = useState({
      years_in_life_science: 0,
      countries_reached: 0,
      companies_onboarded: 0,
      satisfied_reach: 0,
      experienced: 0,
   });

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('http://20.185.69.17:3000/statistics/');
            const data = await response.json();
            console.log(data)
            setStatistics(data[0]);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };

      fetchData();
   }, []);

   // const {
   //    years_in_life_science,
   //    countries_reached,
   //    companies_onboarded,
   //    satisfied_reach,
   //    experienced,
   // } = statistics;
   return (
      <div className='Customer'>
         <div className='Cust'>
            <h1>We are a <span className='Analytics'>customer-focused</span><br /> organization</h1>
            <p className='para'>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one<br />
               of the longest-running lorem ipsum generators on the net.</p>
            <section>
               <Container>
                  <div>
                     <Col sm={6}>
                        <Row>
                           <hr></hr>
                           <Col sm={6} className='d-flex align-items-center '>
                              <span className='year'>{statistics.years_in_life_science}
                              </span><span className='sc'>years in the life <br /> sciences</span>
                           </Col>
                           <Col sm={6} className='d-flex align-items-center '>
                              <span className='year'>{statistics.countries_reached} </span><span className='count'>countries <br />  reached</span>
                           </Col>
                        </Row>
                     </Col>
                     <div className="image">
                        <Col sm={12}>
                           <img className="tab-girl-img" src={icon} alt="Tab-girl-img" width={320} height={320} />
                           <img className="robot-hand-icon" alt="Robot hand icon" src={robothandicon} width={150} height={150} />
                        </Col>
                     </div>
                     <Col sm={6}>
                        <Row>
                           <hr></hr>
                           <Col sm={6} className='d-flex align-items-center '>
                              <span className='year'>{statistics.companies_onboarded} </span><span className='count'>companies <br /> onboarded</span>
                           </Col>
                           <Col sm={6} className='d-flex align-items-center '>
                              <span className='year'>{statistics.satisfied_reach} </span><span className='count'>satisfied<br /> reached</span>
                           </Col>
                        </Row>
                     </Col>
                     <Col sm={6}>
                        <Row>
                           <hr></hr>
                           <Col sm={6} className='d-flex align-items-center '>
                              <span className='year'>{statistics.experienced} </span><span className='sc'>experienced</span>
                           </Col>
                           <hr></hr>
                        </Row>
                     </Col>
                  </div>
               </Container>
            </section>

         </div>

      </div>
   )
}


export default Customer