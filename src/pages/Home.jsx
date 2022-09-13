import React from 'react';
import Experience from '../components/Experience/Experience';
import FaqSection from '../components/FaqSection/FaqSection';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import Testimonial from '../components/Testimonial/Testimonial';
import TopBanner from '../components/TopBanner/TopBanner';
import styles from './Home.module.css';
const Home = () => {
    return (
        <div className={styles.homePage}>
            <Header />
            <TopBanner />
            <Services />
            <Experience />
            <Features />
            <FaqSection />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;