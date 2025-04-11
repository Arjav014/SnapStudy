import React, { useState } from "react";
import useFileStore from "../store/useFileStore";

const QuizModal = ({ isOpen, onClose }) => {
  const { processedData } = useFileStore();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  
  if (!isOpen || !processedData || !processedData.quiz) return null;

  const quiz = processedData.quiz;
  const currentQuestion = quiz[activeQuestion];

  const handleOptionSelect = (optionIndex) => {
    const optionKey = String.fromCharCode(65 + optionIndex); // Convert 0->A, 1->B, etc.
    setSelectedAnswers({
      ...selectedAnswers,
      [activeQuestion]: optionKey
    });
  };

  const handleNext = () => {
    if (activeQuestion < quiz.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setActiveQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
  };

  // Helper function to convert letter to index
  const letterToIndex = (letter) => {
    return letter.charCodeAt(0) - 65; // A->0, B->1, etc.
  };

  const calculateScore = () => {
    let score = 0;
    
    Object.keys(selectedAnswers).forEach(questionIndex => {
      const index = parseInt(questionIndex);
      const question = quiz[index];
      const selectedAnswer = selectedAnswers[index];
      
      // Check if the correct answer is a letter (A, B, C, D) or the full text
      if (question.answer.length === 1 && /[A-D]/.test(question.answer)) {
        // If it's a letter, compare directly
        if (selectedAnswer === question.answer) {
          score++;
        }
      } else {
        // If it's a full text answer or some other format,
        // we need to find which option it corresponds to
        const selectedOptionIndex = letterToIndex(selectedAnswer);
        const selectedOptionText = question.options[selectedOptionIndex];
        
        // Now compare the selected option text with the answer text
        if (selectedOptionText === question.answer) {
          score++;
        }
      }
    });
    
    return score;
  };

  const renderQuizContent = () => {
    if (showResult) {
      const score = calculateScore();
      const totalQuestions = quiz.length;
      const percentage = Math.round((score / totalQuestions) * 100);
      
      return (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Quiz Results</h3>
          <div className="text-5xl font-bold mb-4">
            {score} / {totalQuestions}
          </div>
          <div className="text-xl mb-6">
            Your score: {percentage}%
          </div>
          <div className="mb-6">
            {percentage >= 80 ? (
              <p className="text-green-600">Excellent! Great understanding of the material.</p>
            ) : percentage >= 60 ? (
              <p className="text-yellow-600">Good job! Review a few concepts to improve further.</p>
            ) : (
              <p className="text-red-600">You might need to revisit the material and try again.</p>
            )}
          </div>
          <button
            onClick={resetQuiz}
            className="py-2 px-6 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium"
          >
            Retry Quiz
          </button>
        </div>
      );
    }

    return (
      <>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-500">
              Question {activeQuestion + 1} of {quiz.length}
            </span>
            <span className="text-sm font-medium text-blue-500">
              {Object.keys(selectedAnswers).length} of {quiz.length} answered
            </span>
          </div>
          
          <h3 className="text-lg font-medium mb-4">
            {currentQuestion.question}
          </h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const optionKey = String.fromCharCode(65 + index); // Convert 0->A, 1->B, etc.
              const isSelected = selectedAnswers[activeQuestion] === optionKey;
              
              return (
                <div 
                  key={index}
                  className={`p-3 border rounded cursor-pointer transition ${
                    isSelected ? 'bg-blue-100 border-blue-300' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full border mr-3 ${
                      isSelected ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300'
                    }`}>
                      {optionKey}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={activeQuestion === 0}
            className={`py-2 px-4 rounded transition ${
              activeQuestion === 0 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-gray-500 text-white hover:bg-gray-600'
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={!selectedAnswers[activeQuestion]}
            className={`py-2 px-6 rounded transition font-medium ${
              !selectedAnswers[activeQuestion]
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {activeQuestion === quiz.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Quiz
          </h2>
        </div>

        <div
          className="max-h-96 overflow-y-auto pr-2"
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE 10+ */,
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              width: 0;
              height: 0;
              display: none;
            }
          `}</style>

          {/* Quiz content from processedData */}
          <div className="p-4 border border-gray-200 rounded">
            {quiz && quiz.length > 0 ? (
              renderQuizContent()
            ) : (
              <p className="text-gray-500 italic">No quiz questions available.</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-6 bg-red-600 text-white rounded hover:bg-red-700 transition font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;