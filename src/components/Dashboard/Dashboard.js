import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />
            <div className="container mt-5">
            <h1 className='fs-4'>Dashboard</h1>
            </div>
            <footer/>
        </section>
    );
};

export default Dashboard;