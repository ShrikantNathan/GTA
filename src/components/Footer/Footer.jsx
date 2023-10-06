import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css' 
import CopyFooter from "./Copyrights";
import {Link} from 'react-router-dom'



const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <section className="footer-top">
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <div className="footer-wraper-01">
                                    <b><h2>Keep in touch with us</h2></b>
                                    <h4>Contact us</h4>
                                    <p>800 Eisenhower Ave., Suite 220, Alexandria, Virginia 22314</p>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="footer-wraper-02">
                                    <h3>sales@gtanalytics.com</h3>
                                    <hr></hr>
                                    <h2>+1-580-439 8300</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <hr></hr>
                <section className="footer-down">
                    <Container>
                        <Row>
                            <Col sm={3}>
                                <p>About Company</p>
                                <p>Service</p>
                                <p>Mission</p>
                            </Col>
                            <Col sm={3}>
                                <p>Terms of use</p>
                                <p>Privacy Policy</p>

                            </Col>
                            <Col sm={6}>
                                <div className="footer-wraper-02">
                                    <h3>Subscribe</h3>
                                    <hr></hr>
                                    <p>Select topics and stay current with our latest insights</p>
                                    <div>
                                        <input type="text"
                                            className="fttext"
                                            placeholder="Your mail address" />
                                        <button className="text-btn">Subscribe</button>
                                        <div className="footer-social">
                                            <Link to="/"><i className="fab fa-facebook"></i></Link>
                                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
                <hr></hr>
                <CopyFooter />
            </footer>
        </div>

    );
}

export default Footer;