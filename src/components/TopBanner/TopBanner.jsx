import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './TopBanner.module.css';
import bannerImage from '../../images/pose_2.png';
import elipse from '../../images/Ellipse 5.png';
import doctorsImage from '../../images/Group 3.png';
import line1 from '../../images/Rectangle 4.png'
import line2 from '../../images/Rectangle 5.png'
import ornament from '../../images/Ornament 19.png';

import { BsCheckCircle } from "react-icons/bs";

const TopBanner = () => {
    return (
        <div className='mx-auto my-5'>
            <Container className='mx-auto'>
                <Row xs={2} md={1} lg={1}>
                    <Col xs={12} md={6} lg={6}>
                        <h1 className={styles.title}>Your <span className={styles.health}>Health</span> Is Our Top <span className={styles.priority}>Priority</span></h1>
                        <p className={styles.subtitle}>There are many variations of passages of lpsum available, but the majority hae suffered.</p>
                        <Button className={`mt-2 ${styles.button}`}>Meet Our Specialist</Button>

                        <div className='mt-5'>
                            <Row>
                                <Col className='text-center'>
                                    <h3 className={styles.rate}>262k+</h3>
                                    <p className={styles.subtitle}>Recovered Patients</p>
                                </Col>
                                <Col className='text-center'>
                                    <h3 className={styles.rate}>96%</h3>
                                    <p className={styles.subtitle}>Satisfaction Rate</p>
                                </Col>
                                <Col className='text-center'>
                                    <h3 className={styles.rate}>86+</h3>
                                    <p className={styles.subtitle}>Expert Doctors</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className={styles.mainDiv}>
                            <img className='img-fluid' src={bannerImage} alt="" />
                            <div className={styles.subDiv}>
                                <img className='img-fluid' src={elipse} alt="" />
                            </div>

                            <Button className={`d-flex justify-content-center align-items-center ${styles.checkupButton}`}>
                                <BsCheckCircle className='fw-bold me-2 fs-6' />
                                Regular Checkup
                            </Button>


                            <Card className={styles.doctorsCard}>
                                <p className={styles.cardTitle}>Meet Our Doctors</p>
                                <img className='img-fluid' src={doctorsImage} alt="" />
                                <img className='my-1' src={line1} alt="" />
                                <img src={line2} alt="" />
                            </Card>
                            <img className={styles.ornament} src={ornament} alt="" />


                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default TopBanner;