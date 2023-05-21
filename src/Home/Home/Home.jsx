import React from 'react';
import Banner from '../Banner/Banner';
import Tabes from '../Tabs/Tabs';
import Gallery from '../Gallery/Gallery';
import ForCollection from '../ForCollection/ForCollection';
import Offer from '../Offer/Offer';
import Testimonial from '../Testimonial/Testimonial';
import Questions from '../Questions/Questions';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <ForCollection></ForCollection>
            <Gallery></Gallery>
            <Tabes></Tabes>
            <Offer></Offer>
            <Testimonial></Testimonial>
            <Questions></Questions>
        </div>
    );
};

export default Home;