import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:gap-14">
          {/* Left section with logo and description */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-16">
            <Link to="/" className="flex items-center mb-4">
              <img src="logo.svg" alt="SnapStudy Logo" className="h-12" />
              <span className="ml-2 text-xl font-bold">SnapStudy</span>
            </Link>
            <p className="text-gray-600 mb-4">
              AI-powered tool to summarize PDFs, generate quizzes, and extract key insights for quick learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="inline-block">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <Facebook className="w-5 h-5 text-orange-500 hover:text-red-600" />
                </div>
              </a>
              <a href="#" className="inline-block">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <Twitter className="w-5 h-5 text-orange-500 hover:text-red-600" />
                </div>
              </a>
              <a href="#" className="inline-block">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <Instagram className="w-5 h-5 text-orange-500 hover:text-red-600" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Right section with three columns */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><Link to="/summarization" className="text-gray-600 hover:text-gray-900">Summarization</Link></li>
                <li><Link to="/quiz-generator" className="text-gray-600 hover:text-gray-900">Quiz Generator</Link></li>
                <li><Link to="/key-insights" className="text-gray-600 hover:text-gray-900">Key Insights</Link></li>
                <li><Link to="/smart-study-tools" className="text-gray-600 hover:text-gray-900">Smart Study Tools</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/how-it-works" className="text-gray-600 hover:text-gray-900">How It Works?</Link></li>
                <li><Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><Link to="/become-partner" className="text-gray-600 hover:text-gray-900">Become Partner</Link></li>
                <li><Link to="/contribute" className="text-gray-600 hover:text-gray-900">Contribute Questions</Link></li>
                <li><Link to="/beta-testing" className="text-gray-600 hover:text-gray-900">Join Beta Testing</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-center">
            &copy; 2025 SnapStudy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;