import React from "react";
import Header from "../Layout/Header";
import Choose from './Choose'
import WhoWeAre from './WhoWeAre';
import Services from './Services';
import Contact from './Contact';
import Partners from './Partners';
import Reviews from './Reviews';
import Footer from '../Layout/Footer';

function Home() {
    return (
        <>
            <Header />
            <WhoWeAre />
            <Choose />
            <Services />
            <Partners />
            <Contact />
            <Reviews />
            <Footer />
        </>
    )
}

export default Home;