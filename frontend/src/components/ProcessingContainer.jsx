import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProcessingContainer = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // useEffect(() => {
  //   // Get files from sessionStorage
  //   const storedFiles = sessionStorage.getItem("uploadedFiles");
  //   if (storedFiles) {
  //     setFiles(JSON.parse(storedFiles));
  //   } else {
  //     // If no files found, redirect back to upload page
  //     navigate("/");
  //     return;
  //   }
    
  //   // Simulate processing time
  //   const timer = setTimeout(() => {
  //     setIsProcessing(false);
  //   }, 3000);
    
  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Document Processing</h1>
      
      {isProcessing ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Processing your documents...</p>
          <p className="text-gray-500 mt-2">This may take a few moments.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <span className="text-green-500 text-5xl">✓</span>
            <h2 className="text-xl font-bold mt-2">Processing Complete!</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Summary Section */}
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="text-lg font-medium mb-2 text-orange-800">Summary</h3>
              <p className="text-gray-700">
                Your document summaries are ready. Click to view detailed summaries of your materials.
              </p>
              <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                View Summaries
              </button>
            </div>
            
            {/* Quiz Section */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-lg font-medium mb-2 text-blue-800">Quiz</h3>
              <p className="text-gray-700">
                Test your knowledge with quizzes generated from your documents.
              </p>
              <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Start Quiz
              </button>
            </div>
            
            {/* Formulas Section */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-lg font-medium mb-2 text-purple-800">Formulas</h3>
              <p className="text-gray-700">
                All formulas extracted from your documents are organized here for quick reference.
              </p>
              <button className="mt-4 w-full py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                View Formulas
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessingContainer;