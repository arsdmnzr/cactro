import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import './index.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Partners />
        </div>
    );
};

export default App;
