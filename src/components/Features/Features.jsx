import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './Features.module.css';
import featureImage from '../../images/Group 20.png';
import doctorSupportIcon from '../../images/Group 21.png';
import excSupportIcon from '../../images/Group 22.png';
import frndEnvIcon from '../../images/Group 23.png';
import nurseSupportIcon from '../../images/Group 24.png';

const featureCards = [
    {
        title: '24 Hours Doctor Support',
        icon: doctorSupportIcon,
        desc: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        title: 'Exclusive Supports',
        icon: excSupportIcon,
        desc: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        title: 'Friendly Environment',
        icon: frndEnvIcon,
        desc: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        title: '24 Hours Nurse Support',
        icon: nurseSupportIcon,
        desc: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
];


const Features = () => {
    return (
        <div className='mx-auto my-5'>
            <Container>
                <Row xs={1} md={2} lg={2} >

                    <Col xs={12} md={6} lg={5}>
                        <div>
                            <img className='img-fluid float-start' src={featureImage} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={7}>
                        <div>
                            <p className={styles.heading}>Our Hospital Feature </p>
                            <h2 className={styles.title}>Make An Appointment Easy And Fast Services </h2>
                            <Row xs={1} md={2} lg={2}>
                                {
                                    featureCards?.map((card, c_id) => (
                                        <Col className='p-2' key={c_id}>
                                            <Card className='bg-white shadow-sm p-3'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <p className={styles.cardTitle}>{card.title}</p>
                                                    <img className='img-fluid' src={card.icon} alt="" />
                                                </div>
                                                <p className={styles.cardDesc}>{card.desc}</p>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Features;