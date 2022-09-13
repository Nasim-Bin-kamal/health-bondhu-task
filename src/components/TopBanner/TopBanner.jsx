import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './TopBanner.module.css';

const TopBanner = () => {
    return (
        <div>
            <Container className='mx-auto'>
                <Row xs={2} md={1} lg={1}>
                    <Col xs={12} md={7} lg={7}>
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
                    <Col xs={12} md={5} lg={5}>

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default TopBanner;