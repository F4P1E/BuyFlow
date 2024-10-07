import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Product from "./components/Product";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // Initialize darkMode state

  // Custom product data with categories
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Custom Product",
      price: 29.99,
      category: "Electronics",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Custom Product",
      price: 49.99,
      category: "Fashion",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Custom Product",
      price: 19.99,
      category: "Home Appliances",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Custom Product",
      price: 39.99,
      category: "Electronics",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      title: "Custom Product",
      price: 99.99,
      category: "Fashion",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      title: "Custom Product",
      price: 59.99,
      category: "Home Appliances",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150",
      title: "Custom Product",
      price: 99.99,
      category: "Electronics",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/150",
      title: "Custom Product",
      price: 109.99,
      category: "Fashion",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/150",
      title: "Custom Product",
      price: 49.99,
      category: "Home Appliances",
    },
    {
      id: 10,
      image: "https://via.placeholder.com/150",
      title: "Custom Product",
      price: 39.99,
      category: "Electronics",
    },
  ];

  // Group products by category
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div
      className={`App ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Header />
      <section id="products" className="py-20">
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">{category}</h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-screen-xl">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <Product
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      price={product.price}
                    />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
