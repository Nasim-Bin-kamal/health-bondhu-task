import React from 'react';
import Experience from '../components/Experience/Experience';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import TopBanner from '../components/TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <Services />
            <Experience />
        </div>
    );
};

export default Home;