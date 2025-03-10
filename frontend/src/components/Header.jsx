import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-4 px-8 my-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="logo.svg" alt="SnapStudy Logo" className="h-14" />
            <span className="ml-2 text-xl font-bold">SnapStudy</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/about" className="text-gray-700 hover:text-gray-900 px-2">About</Link>
          <Link to="/features" className="text-gray-700 hover:text-gray-900 px-2">Features</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-gray-900 px-2">Pricing</Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-gray-900 px-2">Testimonials</Link>
          <Link to="/help" className="text-gray-700 hover:text-gray-900 px-2">Help</Link>
        </nav>
        
        <div className="flex items-center space-x-4 min-w-fit">
          <Link to="/signin" className="text-gray-900 font-medium px-2">Sign In</Link>
          <Link to="/signup" className="px-6 py-2 bg-white text-orange-500 border border-orange-500 rounded-full font-medium hover:bg-pink-50 transition">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;