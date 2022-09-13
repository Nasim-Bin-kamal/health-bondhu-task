import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Experiences.module.css';
import serviceImage from '../../images/Frame 23.png';

const Experience = () => {
    return (
        <div>
            <Container>
                <Row xs={1} md={2} lg={2} >
                    <Col xs={12} md={6} lg={7}>
                        <div>
                            <p className={styles.heading}>16+ Years Experiences </p>
                            <h2 className={styles.title}>We Are Always ensure Best Medical Treatment For Your Health</h2>
                            <p className={styles.description}>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                        <div>
                            <img className='img-fluid float-end' src={serviceImage} alt="" />
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Experience;