import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');
    const [priceRange, setPriceRange] = useState('All');

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log('Searching for:', query, 'Category:', category, 'Price Range:', priceRange);
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center w-full max-w-4xl mx-auto transition duration-300 ease-in-out">
            <input 
                type="text" 
                placeholder="Search for products..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                className="flex-grow border border-gray-300 rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
            />
            <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                className="border border-gray-300 rounded-l-none p-3 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out hover:border-green-500 focus:border-green-500 focus:outline-none"
            >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Books">Books</option>
                <option value="Beauty Products">Beauty Products</option>
                <option value="Sports & Outdoors">Sports & Outdoors</option>
                <option value="Toys & Games">Toys & Games</option>
                <option value="Health & Wellness">Health & Wellness</option>
                <option value="Groceries">Groceries</option>
            </select>
            <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)} 
                className="border border-gray-300 rounded-l-none p-3 bg-white dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out hover:border-green-500 focus:border-green-500 focus:outline-none"
            >
                <option value="All">All Prices</option>
                <option value="$0-$50">$0 - $50</option>
                <option value="$51-$100">$50 - $100</option>
                <option value="$101-$200">$100 - $200</option>
                <option value="$201+">$200+</option>
            </select>
            <button 
                type="submit" 
                className="bg-green-500 text-white p-3 rounded-r-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
