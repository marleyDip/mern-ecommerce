import React from 'react';

const Footer = () =>
{
    return (
        <section className='pb-2'>
            <p className='text-center'>&copy; <a  className='text-decoration-none text-muted' href="https://www.bing.com/search?q=md+sofian+hasan" target="_blank" rel="noreferrer"> Md Sofian Hasan</a> | {(new Date()).getFullYear()} </p>
        </section>
    );
};

export default Footer;