import React from 'react';
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import TopBanner from '../components/TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <Services />
        </div>
    );
};

export default Home;