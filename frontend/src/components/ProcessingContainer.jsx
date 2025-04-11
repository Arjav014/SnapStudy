import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFileStore from "../store/useFileStore";
import SummaryModal from "./SummaryModal";
import FormulaModal from "./FormulaModal";
import QuizModal from "./QuizModal";

const ProcessingContainer = () => {
  const navigate = useNavigate();
  const { files, processedData, processingStage } = useFileStore();
  const [isProcessing, setIsProcessing] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  useEffect(() => {
    if (!files || files.length === 0) {
      navigate("/");
    }
  }, [files, navigate]);

  useEffect(() => {
    if (processingStage === "complete" || processedData) {
      setIsProcessing(false);
    } else {
      setIsProcessing(true);
    }
  }, [processedData, processingStage]);

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

  // Functions to handle opening and closing the quiz modal
  const openQuizModal = () => {
    setIsQuizModalOpen(true);
  };

  const closeQuizModal = () => {
    setIsQuizModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {isProcessing ? (
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid mx-auto mb-4" />
          <p className="text-lg text-gray-700">
            {processingStage === "reading"
              ? "Reading the documents..."
              : "Processing your documents..."}
          </p>
          <p className="text-gray-500 mt-2">  
            {processingStage === "reading"
              ? "Extracting text from your files."
              : "Analyzing content and generating insights."}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-purple-600 py-6 px-4 text-center">
            <span className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <h2 className="text-2xl font-bold text-white">
              Processing Complete!
            </h2>
            <p className="text-white text-opacity-90 mt-1">
              Your document insights are ready to explore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Summary Section */}
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <div className="bg-orange-100 p-2 rounded-lg mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Summary</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Get comprehensive overviews of your document content,
                highlighting key points and main ideas.
              </p>
              <button
                className="w-full py-3 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium flex items-center justify-center"
                onClick={openModal}
              >
                View Summaries
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            {/* Quiz Section */}
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Quiz</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Test your understanding with automatically generated questions
                based on your document content.
              </p>
              <button
                className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium flex items-center justify-center"
                onClick={openQuizModal}
              >
                Start Quiz
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            {/* Formulas Section */}
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center mb-3">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Formulas
                </h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Access all mathematical formulas and equations extracted from
                your documents in one convenient place.
              </p>
              <button
                className="w-full py-3 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition font-medium flex items-center justify-center"
                onClick={openFormulaModal}
              >
                View Formulas
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <SummaryModal isOpen={isModalOpen} onClose={closeModal} />
      <FormulaModal isOpen={isFormulaModalOpen} onClose={closeFormulaModal} />
      <QuizModal isOpen={isQuizModalOpen} onClose={closeQuizModal} />
    </div>
  );
};

export default ProcessingContainer;
