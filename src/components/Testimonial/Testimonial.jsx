import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Testimonial.module.css';
import leftArrow from '../../images/Component 3.png';
import rightArrow from '../../images/Component 4.png';
import carouselImage from '../../images/Frame 14.png';

const Testimonial = () => {
    return (
        <div className='mx-auto my-4'>
            <Container>
                <p className={styles.heading}>Testimonial</p>
                <h2 className={styles.title}>What they say?</h2>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='cursor-pointer' src={leftArrow} alt="" />
                    <img src={carouselImage} alt="" />
                    <img src={rightArrow} alt="" />

                </div>
            </Container>

        </div>
    );
};

export default Testimonial;