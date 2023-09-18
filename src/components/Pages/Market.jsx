import React from 'react'
import './DataScience.css'
import { Row, Col, Container } from "react-bootstrap"
import Rectangle2605 from '../../assest/Rectangle 2605.png'
import Rectangle2606 from '../../assest/Rectangle 2606.png'
import GoToTop from './Top'

const Market = () => {
    return (
        <>
            <div className='market-head' >
                <h1 className='spancloudmarket'>The Market</h1>
            </div>
            <div className='market'>
                <p>
                    Washington DC metro area is known as “Little Silicon Valley” due to its high percentage of technology companies. With its federal government environment and vast number of IT companies, Washington, DC promises to be a strong market into the foreseeable future.
                </p>
                <p>
                    Georgetown Analytics and Technology will utilize several procurement preference programs for small businesses set-asides, which restrict procurements to small businesses, to include:
                </p>
            
            <Container>
                <Row>
                    <Col sm={6}>
                        <img classname="Marketimage" src={Rectangle2605} alt='Rectangle2605' width={500} height={350}></img>
                        <p className='rectanglepara'>
                            The Service Disabled Veteran-Owned Small Business Program (SDVOSB), which encourages the use of SDVOSB businesses in prime and subcontracting activities. This combinationm provides a rich opportunity, bolstered by the current up-turn in the area and national economy.
                        </p>
                    </Col>
                    <Col sm={6}>
                        <img src={Rectangle2606} alt='Rectangle2605' width={500} height={350}></img>
                        <p  className='rectanglepara'>
                            The HUBZone (Historically Underutilized Business Zone) Program, through which procurements may be limited to HUBZone enrolled firms or directed to a specific HUBZone firm.
                        </p>
                    </Col>

                </Row>
            </Container>
            <GoToTop />
            </div>
        </>
    )
}

export default Market