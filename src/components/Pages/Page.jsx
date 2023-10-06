import React from 'react';
import { Row, Col, Container } from "react-bootstrap"
import Rectangle2605 from '../../assest/Rectangle 2605.png'
import Rectangle2606 from '../../assest/Rectangle 2606.png'
import './DataScience.css';
import GoToTop from './Top';


function Businessgoal() {
    return(
    <div>
        <div className='market-head' >
            <h1 className='spancloudmarket'>Business Goals and Objective</h1>
        </div>
        <div className='market'>
            <p>
            Georgetown Analytics and Technology will leverage the industry’s knowledge of its founding members to provide outstanding service to its customers.  The company will be developed with a “customer service and satisfaction first” mentality in an effort to build acceptance and a positive reputation in the local industry.
            </p>
            <GoToTop />
        </div>
    </div>
    )
}

function Company() {
    return(
    <>
        <div className='market-head' >
            <h1 className='spancloudmarket'>Company Summary & Analysis of Business</h1>
        </div>
        <div className='market'>
            <p>
            Georgetown Analytics and Technology is incorporated in Virginia with an operating office in Springfield, Virginia. Our staff consist of a small group of experienced data scientists and computer engineers, whose skills and experience collectively cover a very broad segment of the open systems and cloud computing..
            </p>
            <GoToTop />
        </div>
    </>
    )
}

function Services() {
    return(
    <>
        <div className='market-head' >
            <h1 className='spancloudmarket'>Services & Human Resources Requirements</h1>
        </div>
        <div className='market'>
            <p>
            Georgetown Analytics and Technology will offer several information technology support options, to include:
            </p>
            <Container>
                <Row>
                    <Col sm={6}>
                        <img src={Rectangle2605} alt='Rectangle2605' width={500} height={350}></img>
                        <p className='rectanglepara'>
                        Hourly support services
                        </p>
                    </Col>
                    <Col sm={6}>
                        <img src={Rectangle2606} alt='Rectangle2605' width={500} height={350}></img>
                        <p  className='rectanglepara'>
                        Federal government information technology services contracts
                        </p>
                    </Col>

                </Row>
            </Container>
            <p>
            Contracts and project work will be negotiated on a per-project basis. Web and ASP hosting will be negotiated on a per-system basis.
                </p>
                <GoToTop />
        </div>
    </>
    )
}

function Success() {
    return(
    <>
        <div className='market-head' >
            <h1 className='spancloudmarket'>Keys to Success</h1>
        </div>
        <div className='Success'>
           <ul>
            <li>
            Depth of knowledge
            </li>
            <li>
            Breadth of ability
            </li>
            <li>
            Development of a strong business relationship with customers to gain an understanding of their business and business needs 
            </li>
            <li>
            Ability to network in the industry
            </li>
           </ul>
         <GoToTop />
        </div>
    </>
    )
}


export { Businessgoal ,Company ,Services,Success};

