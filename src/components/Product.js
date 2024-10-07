import React from 'react';

const Product = ({ image, title, price }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-1">${price.toFixed(2)}</p>
                <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
