import React from 'react';
import Banner from '../Banner/Banner';
import Tabes from '../Tabs/Tabs';
import Gallery from '../Gallery/Gallery';
import ForCollection from '../ForCollection/ForCollection';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ForCollection></ForCollection>
            <Gallery></Gallery>
            <Tabes></Tabes>
            <Offer></Offer>
        </div>
    );
};

export default Home;