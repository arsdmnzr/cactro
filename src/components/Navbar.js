import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <img 
                    src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" 
                    alt="Slack Logo" 
                    className="logo" 
                /><span>slack</span>
                <nav>
                    <a href="https://chatgpt.com/c/67de5917-e770-800f-a06b-77f22cc0dd82">Product</a>
                    <a href="https://chatgpt.com/c/67de5917-e770-800f-a06b-77f22cc0dd82">Enterprise</a>
                    <a href="https://chatgpt.com/c/67de5917-e770-800f-a06b-77f22cc0dd82">Resources</a>
                    <a href="https://chatgpt.com/c/67de5917-e770-800f-a06b-77f22cc0dd82">Pricing</a>
                </nav>
                <div className="actions">
                    <button className="btn">Sign In</button>
                    <button className="btn primary">Try for Free</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
