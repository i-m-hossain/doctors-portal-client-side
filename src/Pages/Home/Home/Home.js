import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import ExceptionalCare from '../ExceptionalCare/ExceptionalCare';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials/Testimonials';
import Navigation from '../../Shared/Navigation/Navigation';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ExceptionalCare></ExceptionalCare>
            <AppointmentBanner></AppointmentBanner>
            <Testimonials></Testimonials>
            <OurDoctors></OurDoctors>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;