import React, {Component, Fragment} from 'react';
import {Col, Container,Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faYoutube,faGooglePlus,faInstagram, faCcVisa, faCcMastercard, faCcStripe, faCcPaypal, faCcAmex} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import headPhone from '../../images/headphones.svg'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="shadow-lg footerBg">
                    <Container>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <h3 className="logo mt-5">Novoair</h3>
                                <small className="footerDes">Got Questions ? Call us 09 AM - 06 PM !</small> <br/>
                                <img className="headphone" src={headPhone} alt=""/>
                                <span className=""> +88 01558911491</span>
                                <br/> <br/>
                                <div className="footer-icon">
                                    <a href="#"><FontAwesomeIcon className="socialIcon" icon={faFacebook}/></a>
                                    <a href="#"><FontAwesomeIcon className="socialIcon" icon={faYoutube}/></a>
                                    <a href="#"><FontAwesomeIcon className="socialIcon" icon={faGooglePlus}/></a>
                                    <a href="#"><FontAwesomeIcon className="socialIcon" icon={faInstagram}/></a>
                                </div>
                            </Col>

                            <Col lg={2} md={6} sm={12}>
                                <h1 className="footerTitle">Useful Links</h1>
                                <Link to="/coming"><p className="footerDes">Privacy Policy</p></Link>
                                <Link to="/coming"><p className="footerDes">Terms & Conditions</p></Link>
                                <Link to="/coming"><p className="footerDes">Tender</p></Link>
                            </Col>

                            <Col lg={2} md={6} sm={12}>
                                <h1 className="footerTitle">Travel Agents</h1>
                                <Link to="/coming"><p className="footerDes">Travel Agency Portal (TAP)</p></Link>
                                <Link to="/coming"><p className="footerDes">Online Travel Agency</p></Link>
                                <Link to="/coming"><p className="footerDes">Travel Agency Login</p></Link>
                                <Link to="/coming"><p className="footerDes">Booking Policy</p></Link>
                                <Link to="/coming"><p className="footerDes">ADM Policy</p></Link>
                            </Col>

                            <Col lg={2} md={6} sm={12}>
                                <h1 className="footerTitle">About</h1>
                                <Link to="/coming"><p className="footerDes">Careers</p></Link>
                                <Link to="/coming"><p className="footerDes">Citizen Charter</p></Link>
                                <Link to="/coming"><p className="footerDes">Contacts</p></Link>

                                <Link to="/coming"><p className="footerDes">Privacy Policy</p></Link>
                                <Link to="/coming"><p className="footerDes">FAQ</p></Link>
                            </Col>

                            <Col lg={2} md={6} sm={12}>
                                <h1 className="footerTitle">Account Info</h1>
                                <Link to="/coming"><p className="footerDes">My Account</p></Link>
                                <Link to="/coming"><p className="footerDes">Customer Service</p></Link>
                                <Link to="/coming"><p className="footerDes">Returns/Exchange</p></Link>
                                <Link to="/login"><p className="footerDes">Login/Register</p></Link>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="footer-border mt-3 py-3">
                        <div className="container">
                            <span className="copyright-info">© 2021 Novoair. All Rights Reserved.</span> <br/>
                            <span className="designer-info">Design & Develop by:</span>
                            <a className="design-by" href="http://mranainfo.com/" target="_blank"> Masud Rana</a>
                            <div className="payment-info">

                                <FontAwesomeIcon className="payment-icon" icon={faCcMastercard}/>
                                <FontAwesomeIcon className="payment-icon" icon={faCcVisa}/>
                                <FontAwesomeIcon className="payment-icon" icon={faCcStripe}/>
                                <FontAwesomeIcon className="payment-icon" icon={faCcPaypal}/>
                                <FontAwesomeIcon className="payment-icon" icon={faCcAmex}/>
                            </div>
                        </div>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;