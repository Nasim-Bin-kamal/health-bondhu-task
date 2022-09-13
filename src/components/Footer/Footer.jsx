import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Footer.module.css';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import google from '../../images/google.png';
import youtube from '../../images/youtube.png';

const Footer = () => {
    return (
        <div xs={1} md={4} lg={4} className={`mx-auto py-4 ${styles.footerSection}`}>
            <Container>
                <Row>
                    <Col xs={12} md={3} lg={3}>
                        <img src={logo} alt="" />
                        <p><small className={styles.desc}>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</small></p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <img className='img-fluid' src={facebook} alt="" />
                            <img className='img-fluid' src={instagram} alt="" />
                            <img className='img-fluid' src={google} alt="" />
                            <img className='img-fluid' src={twitter} alt="" />
                            <img className='img-fluid' src={youtube} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={3} lg={3} >
                        <p className={styles.footerTitle}>Quick Links</p>
                        <ul className={styles.quickNav}>
                            <li className={styles.navItem}>About us</li>
                            <li className={styles.navItem}>Our Pricing</li>
                            <li className={styles.navItem}>Our Gallery</li>
                            <li className={styles.navItem}>Appointment</li>
                            <li className={styles.navItem}>Privacy Policy</li>
                        </ul>

                    </Col>
                    <Col xs={12} md={3} lg={3}>

                        <ul className={`mt-4 ${styles.quickNav}`}>
                            <li className={styles.navItem}>Services</li>
                            <li className={styles.navItem}>Our Doctors</li>
                            <li className={styles.navItem}>Our Latest News</li>
                            <li className={styles.navItem}>Careers</li>
                            <li className={styles.navItem}>Contact Us</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={3} lg={3}>
                        <p className={styles.footerTitle}>Opening Hours</p>
                        <ul className={`${styles.quickNav}`}>
                            <li><span className={styles.appointmentDay}>Mon- Tue</span> <span className={styles.appointmentTime}>08.00 AM- 05.00PM</span></li>
                            <li><span className={styles.appointmentDay}>Wed- Thu</span> <span className={styles.appointmentTime}>09.00 AM- 06.00PM</span></li>
                            <li><span className={styles.appointmentDay}>Fri- Sat</span> <span className={styles.appointmentTime}>10.00 AM- 07.00PM</span></li>
                            <li><span className={styles.appointmentDay}>Sunday</span> <span className={styles.appointmentTime}>Emergency Only</span></li>
                            <li><span className={styles.appointmentDay}>Personal</span> <span className={styles.appointmentTime}>Mon- 5.00PM</span></li>
                        </ul>

                    </Col>
                    <p className={styles.copyright}>Copyright @222 Medicom All Rights Reserved</p>
                </Row>
            </Container>
        </div >
    );
};

export default Footer;