import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './Testimonial.module.css';
import leftArrow from '../../images/Component 3.png';
import rightArrow from '../../images/Component 4.png';
import carouselImage from '../../images/Frame 14.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (

        <Button
            className={`d-flex justify-content-center align-items-center bg-transparent  border-0 `}
            onClick={onClick}
        >
            <img src={rightArrow} alt="" />
        </Button>
    );
}

const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (

        <Button

            className={`d-flex justify-content-center align-items-center bg-transparent border-0 `}

            onClick={onClick}
        >
            <img src={leftArrow} alt="" />
        </Button>
    );
}

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

const Testimonial = () => {
    return (
        <div className='mx-auto my-4 d-flex justify-content-center align-items-center'>
            <Container>
                <p className={styles.heading}>Testimonial</p>
                <h2 className={styles.title}>What they say?</h2>

                <Row xs={1} md={1} lg={1}>
                    <Col >
                        <Slider {...settings}
                            className='d-flex justify-content-center align-items-center'
                        >
                            <div>
                                <img className='img-fluid' src={carouselImage} alt="" />
                            </div>
                            <div>
                                <img className='img-fluid' src={carouselImage} alt="" />
                            </div>
                            <div>
                                <img className='img-fluid' src={carouselImage} alt="" />
                            </div>

                        </Slider>
                    </Col>
                </Row>
            </Container>





        </div>
    );
};

export default Testimonial;