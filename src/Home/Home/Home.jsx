import React from 'react';
import Banner from '../Banner/Banner';
import Tabes from '../Tabs/Tabs';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabes></Tabes>
        </div>
    );
};

export default Home;