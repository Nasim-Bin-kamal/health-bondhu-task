import React from 'react';
import { Col, Container, Row, Accordion } from 'react-bootstrap';
import styles from './FaqSection.module.css';
import faqImage from '../../images/Frame 21.png';
import solutionIcon from '../../images/Group 28.png';

const accordians = [
    {
        eventKey: '1',
        heading: 'Get Your General Answer',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae asperiores reprehenderit quis voluptatum impedit blanditiis sapiente ullam aliquid alias temporibus.'
    },
    {
        eventKey: '2',
        heading: 'Will I always see my own doctor?',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae asperiores reprehenderit quis voluptatum impedit blanditiis sapiente ullam aliquid alias temporibus.'
    },
    {
        eventKey: '3',
        heading: 'What is one Medical’s care?',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae asperiores reprehenderit quis voluptatum impedit blanditiis sapiente ullam aliquid alias temporibus.'
    },
    {
        eventKey: '4',
        heading: 'What is evidence based medicine?',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae asperiores reprehenderit quis voluptatum impedit blanditiis sapiente ullam aliquid alias temporibus.'
    },
    {
        eventKey: '5',
        heading: 'What is an academic medical center?',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae asperiores reprehenderit quis voluptatum impedit blanditiis sapiente ullam aliquid alias temporibus.'
    },
];

const FaqSection = () => {
    return (
        <div className='mx-auto mb-5'>
            <Container>
                <Row xs={1} md={2} lg={2} >

                    <Col xs={12} md={6} lg={5}>
                        <div>
                            <p className={styles.heading}>FAQ Questions</p>
                            <h2 className={styles.title}>Get Your General Answer</h2>
                            <div>
                                {
                                    accordians?.map((accordion, a_id) => (
                                        <Accordion defaultActiveKey="0" flush key={a_id} className={styles.accordion}>
                                            <Accordion.Item eventKey={accordion.eventKey}>
                                                <Accordion.Header>{accordion.heading}</Accordion.Header>
                                                <Accordion.Body>{accordion.desc}</Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={7}>
                        <div className={styles.mainDiv} >
                            <div >
                                <img className='img-fluid float-end' src={faqImage} alt="" />
                            </div>

                            <div className={`d-flex justify-content-center align-items-center p-2 bg-white rounded-3 ${styles.childDiv}`}>
                                <img className='img-fluid me-3' src={solutionIcon} alt="" />
                                <p className={styles.content}>Get Solutions From Our Experts</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default FaqSection;