import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProcessingContainer = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);
  
  // Functions to handle opening and closing the summary modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  // Functions to handle opening and closing the formula modal
  const openFormulaModal = () => {
    setIsFormulaModalOpen(true);
  };
  
  const closeFormulaModal = () => {
    setIsFormulaModalOpen(false);
  };

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
              <button 
                className="mt-4 w-full py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                onClick={openModal}
              >
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
              <button 
                className="mt-4 w-full py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                onClick={openFormulaModal}
              >
                View Formulas
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal/Popup for Combined Summary */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800">Combined Document Summary</h2>
            </div>
            
            <div 
              className="max-h-96 overflow-y-auto pr-2"
              style={{ 
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE 10+ */
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  width: 0;
                  height: 0;
                  display: none;
                }
              `}</style>
              
              {/* Combined summary content */}
              <div className="p-4 border border-gray-200 rounded">
                <h3 className="font-medium text-lg mb-2">Key Points</h3>
                <p className="text-gray-700 mb-3">
                  This summary combines insights from all your uploaded documents. It provides an integrated overview of the main themes, concepts, and important information.
                </p>
                
                <h4 className="font-medium text-md mt-4 mb-2">Main Themes</h4>
                <p className="text-gray-700 mb-3">
                  The documents collectively address several interconnected topics. The primary focus appears to be on [theme description here], with significant attention to [secondary theme]. Several documents emphasize the importance of [important concept].
                </p>
                
                <h4 className="font-medium text-md mt-4 mb-2">Critical Insights</h4>
                <p className="text-gray-700 mb-3">
                  Across all materials, important insights include the relationship between [concept A] and [concept B]. The analysis suggests that [key finding]. Additionally, multiple sources confirm [important fact or conclusion].
                </p>
                
                <h4 className="font-medium text-md mt-4 mb-2">Applications</h4>
                <p className="text-gray-700">
                  These concepts can be applied to [practical application]. The methodologies described are particularly relevant for [specific use case]. Further exploration is recommended in the areas of [recommendation].
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button 
                onClick={closeModal}
                className="py-2 px-6 bg-red-600 text-white rounded hover:bg-red-700 transition font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal/Popup for Formulas */}
      {isFormulaModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800">Extracted Formulas</h2>
            </div>
            
            <div 
              className="max-h-96 overflow-y-auto pr-2"
              style={{ 
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE 10+ */
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  width: 0;
                  height: 0;
                  display: none;
                }
              `}</style>
              
              {/* Formulas content */}
              <div className="p-4 border border-gray-200 rounded">
                <h3 className="font-medium text-lg mb-2">Formulas</h3>
                <p className="text-gray-700 mb-3">
                  All formulas extracted from your documents are listed below for easy reference.
                </p>
                
                <h4 className="font-medium text-md mt-4 mb-2">Mechanics Formulas</h4>
                <div className="bg-gray-50 p-3 rounded mb-3">
                  <p className="font-medium">Newton's Second Law:</p>
                  <p className="font-mono">F = ma</p>
                  <p className="text-sm text-gray-600 mt-1">Force equals mass times acceleration</p>
                </div>
                <div className="bg-gray-50 p-3 rounded mb-3">
                  <p className="font-medium">Kinetic Energy:</p>
                  <p className="font-mono">KE = (1/2)mv²</p>
                  <p className="text-sm text-gray-600 mt-1">Kinetic energy equals half of mass times velocity squared</p>
                </div>
                
                <h4 className="font-medium text-md mt-4 mb-2">Thermodynamics Formulas</h4>
                <div className="bg-gray-50 p-3 rounded mb-3">
                  <p className="font-medium">Ideal Gas Law:</p>
                  <p className="font-mono">PV = nRT</p>
                  <p className="text-sm text-gray-600 mt-1">Pressure times volume equals number of moles times gas constant times temperature</p>
                </div>
                <div className="bg-gray-50 p-3 rounded mb-3">
                  <p className="font-medium">Entropy Change:</p>
                  <p className="font-mono">ΔS = q/T</p>
                  <p className="text-sm text-gray-600 mt-1">Change in entropy equals heat transfer divided by temperature</p>
                </div>
                
                <h4 className="font-medium text-md mt-4 mb-2">Electromagnetic Formulas</h4>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium">Ohm's Law:</p>
                  <p className="font-mono">V = IR</p>
                  <p className="text-sm text-gray-600 mt-1">Voltage equals current times resistance</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button 
                onClick={closeFormulaModal}
                className="py-2 px-6 bg-purple-600 text-white rounded hover:bg-purple-700 transition font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessingContainer;