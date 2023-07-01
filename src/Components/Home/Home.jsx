import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='bg-gray-950 text-white'>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;