import SearchBar from './SearchBar';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-green-500 to-green-400 text-white text-center py-24">
            <div className="container mx-auto">
                <h1 className="text-5xl font-extrabold leading-tight">Welcome to Our eCommerce Store</h1>
                <p className="mt-4 text-lg md:text-xl">Your one-stop shop for everything!</p>
                
                {/* Integrated SearchBar with styling adjustments */}
                <div className="mt-8">
                    <SearchBar />
                </div>

                <a 
                    href="#products" 
                    className="bg-white text-green-500 py-3 px-8 rounded-full font-semibold mt-6 inline-block shadow-lg hover:bg-gray-200 transition-colors"
                >
                    Shop Now
                </a>
            </div>
        </header>
    );
};

export default Header;
