import UploadBox from './UploadBox';
import studentImage from '../assets/images/student-image1.svg';

const Hero = () => {
  return (
    <section className="py-12 px-8 max-w-7xl mx-auto my-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="block">Revise Smarter, Not</span>
            <span className="block mt-5">Harder with SnapStudy!</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Upload your study materials and get AI-generated summaries and quizzes
            for quick and effective revision. Simplify your exam prep in minutes!
          </p>
          <UploadBox />
        </div>
        
        <div className="relative">
          <div className="absolute -z-10 w-full h-full">
            <div className="absolute top-10 right-10 w-16 h-16 bg-pink-100 rounded-md opacity-70"></div>
            <div className="absolute top-20 left-1/4 w-12 h-12 bg-yellow-100 rounded-md opacity-70"></div>
            <div className="absolute bottom-20 right-1/3 w-10 h-10 bg-green-100 rounded-md opacity-70"></div>
            <div className="absolute bottom-40 left-10 w-14 h-14 bg-blue-100 rounded-md opacity-70"></div>
          </div>
          <img 
            src={studentImage} 
            alt="Student studying with laptop" 
            className="w-full h-auto relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;