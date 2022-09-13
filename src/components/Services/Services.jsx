import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import styles from './Services.module.css';
import cardiologyIcon from '../../images/medical-icon_i-cardiology.png';
import checkupIcon from '../../images/bi_clipboard2-check-fill.png';
import dentalCareIcon from '../../images/Vector.png';
import opthalmologyIcon from '../../images/fluent_briefcase-medical-32-filled.png';

const cards = [
    {
        title: 'Cardiology',
        image: cardiologyIcon,
        content: 'Seduahag perspiciati under omnised atused error.'
    },
    {
        title: 'Monthly Check Up',
        image: checkupIcon,
        content: 'Seduahag perspiciati under omnised atused error.'
    },
    {
        title: 'Dental Care',
        image: dentalCareIcon,
        content: 'Seduahag perspiciati under omnised atused error.'
    },
    {
        title: 'Opthalmology',
        image: opthalmologyIcon,
        content: 'Seduahag perspiciati under omnised atused error.'
    },
];

const Services = () => {
    return (
        <div>
            <Container>
                <p className={styles.heading}>Our Services</p>
                <h2 className={styles.title}>Services For Your Health</h2>
                <div className='mx-auto my-5'>
                    <Row xs={1} md={3} lg={4}>
                        {
                            cards?.map((card, c_id) => (
                                <div className='p-2'>
                                    <Card className='bg-white shadow-sm p-3'>
                                        <div className='d-flex justify-content-between align-items-baseline'>
                                            <p className={styles.cardTitle}>{card.title}</p>
                                            <img className='img-fluid' src={card.image} alt="" />
                                        </div>
                                        <p className={styles.cardContent}>{card.content}</p>
                                        <p className={styles.button}>Explore Now</p>
                                    </Card>
                                </div>
                            ))
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Services;