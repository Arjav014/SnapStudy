import FeatureList from './FeatureList';
import studentImage from '../assets/images/student-image2.svg';

const ToolsSection = () => {
  const features = [
    "Summarize multiple PDFs instantly",
    "Generate AI-powered quizzes for revision",
    "Extract key formulas and concepts",
    "Enhance your study with smart insights"
  ];

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <div className="absolute -z-10 w-full h-full">
              <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-100 rounded-md opacity-70"></div>
              <div className="absolute bottom-20 left-10 w-14 h-14 bg-pink-100 rounded-md opacity-70"></div>
            </div>
            <img 
              src={studentImage} 
              alt="Happy student with laptop" 
              className="w-full h-auto relative z-10"
            />
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Powerful Tools to Boost Your Study
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            SnapStudy helps you revise faster by summarizing PDFs, creating quizzes, and extracting key insights from your study materials.
          </p>
          
          <FeatureList features={features} />
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;