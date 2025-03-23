import React from 'react';
import './Partners.css';

const Partners = () => {
    const partners = [
        { src: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_Entertainment_Group_logo.svg", alt: "Fox" },
        { src: "https://upload.wikimedia.org/wikipedia/en/d/dc/Lonely_Planet_logo.png", alt: "Lonely Planet" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Intuit_Logo.png", alt: "Intuit" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/3/32/Carvana_logo.png", alt: "Carvana" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Kiva_logo.png", alt: "Kiva" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Deva_Logo.png", alt: "Deva" },
    ];

    return (
        <section className="partners">
            {partners.map((partner, index) => (
                <img key={index} src={partner.src} alt={partner.alt} />
            ))}
        </section>
    );
};

export default Partners;
