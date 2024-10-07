import React, { useState } from 'react';
import { 
    SunIcon, 
    MoonIcon, 
    ShoppingCartIcon, 
    UserIcon, 
    StarIcon, 
    TagIcon, 
    CogIcon, 
    ChatIcon, 
    InformationCircleIcon, 
    MailIcon, 
    BellIcon, 
    MenuIcon, 
    XIcon 
} from '@heroicons/react/outline'; // Import necessary icons
import logo from '../assets/Logo/BuyFlow.jpeg';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
            <div className="container mx-auto flex justify-between items-center py-3 px-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img 
                        src={logo} 
                        alt="BuyFlow Logo" 
                        className="h-10 w-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" 
                    />
                </div>

                {/* Centered Navigation Links (Icons Only) */}
                <ul className="flex space-x-6 mx-auto">
                    <li>
                        <a href="#products" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                            <TagIcon className="h-5 w-5" aria-label="Products" />
                        </a>
                    </li>
                    <li>
                        <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                            <CogIcon className="h-5 w-5" aria-label="Features" />
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                            <ChatIcon className="h-5 w-5" aria-label="Testimonials" />
                        </a>
                    </li>
                    <li>
                        <a href="#about-us" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                            <InformationCircleIcon className="h-5 w-5" aria-label="About Us" />
                        </a>
                    </li>
                    <li>
                        <a href="#footer" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                            <MailIcon className="h-5 w-5" aria-label="Contact" />
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                        {menuOpen ? (
                            <XIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        ) : (
                            <MenuIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        )}
                    </button>
                </div>

                {/* Register/Login, VIP Register, Cart, Notification Icons, Dark Mode Toggle */}
                <div className="flex items-center space-x-3">
                    {/* Search Bar */}
                    <div className="hidden md:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
                        />
                    </div>

                    {/* Register/Login Icon */}
                    <a 
                        href="/login" 
                        className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                    >
                        <UserIcon className="h-5 w-5" aria-label="Register/Login" />
                    </a>

                    {/* VIP Register Icon */}
                    <a 
                        href="/vip-register" 
                        className="text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors"
                    >
                        <StarIcon className="h-5 w-5" aria-label="VIP Register" />
                    </a>

                    {/* Cart Icon */}
                    <div className="relative">
                        <ShoppingCartIcon className="h-5 w-5 text-gray-700 dark:text-gray-300 cursor-pointer hover:text-green-500 dark:hover:text-green-400 transition-colors" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                    </div>

                    {/* Notification Icon */}
                    <div className="relative">
                        <BellIcon className="h-5 w-5 text-gray-700 dark:text-gray-300 cursor-pointer hover:text-green-500 dark:hover:text-green-400 transition-colors" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">5</span>
                    </div>

                    {/* Dark Mode Toggle */}
                    <button 
                        onClick={() => setDarkMode(!darkMode)} 
                        className="p-2 rounded focus:outline-none bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <SunIcon className="h-5 w-5 text-yellow-500" />
                        ) : (
                            <MoonIcon className="h-5 w-5 text-blue-500" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col space-y-4 items-center bg-gray-100 dark:bg-gray-900 p-4">
                        <li>
                            <a href="#products" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="#about-us" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#footer" className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
