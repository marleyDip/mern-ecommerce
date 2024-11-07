import React from 'react'
import './Home.css'
import Navbar from '../Shared/Navbar/Navbar';
import Hero from '../Hero/Hero';
import TopProducts from '../TopProducts/TopProducts';
import Footer from '../Shared/Footer/Footer';

const Home = () =>
{

    return (
        <div className='bg-brand bg-brand-container'>
            <Navbar />
            <div style={ { maxHeight: '400px' } } className="container hero-container my-5">
                <Hero />
            </div>
            <div className='container'>
                <TopProducts />
            </div>

            <Footer />
        </div>
    );
};

export default Home;