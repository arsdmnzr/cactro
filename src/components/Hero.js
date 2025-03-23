import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <h1>Slack is where the future works</h1>
            <p>
                Transform the way you work with one place for everyone and everything you need to get stuff done.
            </p>
            <div className="buttons">
                <button className="btn">Try for Free</button>
                <button className="btn google">Sign Up with Google</button>
            </div>
        </section>
    );
};

export default Hero;
