import React from "react";

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Dot pattern */}
      <div 
        className="absolute inset-0 bg-repeat opacity-10" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)',
          backgroundSize: '20px 20px' 
        }}
      />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-[120px] opacity-20" />
      <div className="absolute top-3/4 right-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full blur-[150px] opacity-15" />
      <div className="absolute top-2/4 right-1/3 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-orange-300 to-amber-200 rounded-full blur-[100px] opacity-10" />
    </div>
  );
};

export default BackgroundPattern;