import React from 'react';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Services/>
            <AppointmentBanner/>
        </div>
    );
};

export default Home;