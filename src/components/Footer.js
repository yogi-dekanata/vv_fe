import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>Customer</h5>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Product</h5>
                        <ul>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Best Sellers</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>People</h5>
                        <ul>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Our Team</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
