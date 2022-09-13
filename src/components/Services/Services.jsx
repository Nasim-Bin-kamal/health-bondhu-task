import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './Services.module.css';
import cardiologyIcon from '../../images/medical-icon_i-cardiology.png';
import checkupIcon from '../../images/bi_clipboard2-check-fill.png';
import dentalCareIcon from '../../images/Vector.png';
import opthalmologyIcon from '../../images/fluent_briefcase-medical-32-filled.png';

const cards = [
    {
        title: 'Cardiology',
        icon: cardiologyIcon,
        desc: 'Seduahag perspiciati under omnised atused error.'
    },
    {
        title: 'Monthly Check Up',
        icon: checkupIcon,
        desc: 'Seduahag perspiciati under omnised atused error.'
    },
    {
        title: 'Dental Care',
        icon: dentalCareIcon,
        desc: 'Seduahag perspiciati under omnised atused error.'
    },
    {
        title: 'Opthalmology',
        icon: opthalmologyIcon,
        desc: 'Seduahag perspiciati under omnised atused error.'
    },
];

const Services = () => {
    return (
        <div className='mx-auto mt-4'>
            <Container>
                <p className={styles.heading}>Our Services</p>
                <h2 className={styles.title}>Services For Your Health</h2>
                <div className='mx-auto my-5'>
                    <Row xs={1} md={3} lg={4}>
                        {
                            cards?.map((card, c_id) => (
                                <Col className='p-2' key={c_id}>
                                    <Card className='bg-white shadow-sm p-3'>
                                        <div className='d-flex justify-content-between align-items-baseline'>
                                            <p className={styles.cardTitle}>{card.title}</p>
                                            <img className='img-fluid' src={card.icon} alt="" />
                                        </div>
                                        <p className={styles.cardContent}>{card.desc}</p>
                                        <p className={styles.button}>Explore Now</p>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Services;