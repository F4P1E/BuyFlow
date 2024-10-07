import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaCcVisa,
    FaCcMastercard,
    FaCcPaypal
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {/* About Us Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4">About BuyFlow</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        BuyFlow is your go-to marketplace for all your shopping needs, offering high-quality products across various categories. 
                        We aim to provide excellent service and a seamless shopping experience.
                    </p>
                    <a href="#about-us" className="text-green-500 hover:underline">Learn More</a>
                </div>

                {/* Customer Service Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Customer Service</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#faq" className="hover:underline">FAQs</a></li>
                        <li><a href="#returns" className="hover:underline">Return Policy</a></li>
                        <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                        <li><a href="#shipping" className="hover:underline">Shipping Info</a></li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
                    <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates, offers, and promotions.</p>
                    <form className="flex">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-grow p-2 rounded-l bg-gray-800 text-white focus:outline-none" 
                        />
                        <button 
                            type="submit" 
                            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-r"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mx-auto mt-12 px-6 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                {/* Social Media Icons */}
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                        <FaLinkedin />
                    </a>
                </div>

                {/* Payment Methods */}
                <div className="flex space-x-4">
                    <FaCcVisa className="text-gray-400" />
                    <FaCcMastercard className="text-gray-400" />
                    <FaCcPaypal className="text-gray-400" />
                </div>
            </div>

            <div className="container mx-auto mt-4 text-center text-gray-500 text-sm">
                <p>&copy; 2024 BuyFlow. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
