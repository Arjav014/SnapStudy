import React from "react";
import useFileStore from "../store/useFileStore";

const SummaryModal = ({ isOpen, onClose }) => {
  const { processedData } = useFileStore();
  
  if (!isOpen) return null;

  // Function to render markdown-like content with proper formatting
  const renderFormattedContent = (text) => {
    if (!text) return null;

    // Split by double newlines to separate paragraphs
    const paragraphs = text.split("\n\n");
    
    return paragraphs.map((paragraph, index) => {
      // Check if paragraph is a heading
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <h3 key={index} className="font-bold text-lg mt-4 mb-2">
            {paragraph.replace(/^\*\*|\*\*$/g, '')}
          </h3>
        );
      }
      
      // Check if paragraph is a subheading
      if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
        return (
          <h4 key={index} className="font-medium text-md mt-3 mb-2">
            {paragraph.replace(/^\*|\*$/g, '')}
          </h4>
        );
      }
      
      // Format bullet points
      if (paragraph.includes("*   ")) {
        const items = paragraph.split("*   ").filter(item => item.trim());
        return (
          <ul key={index} className="list-disc pl-5 mb-3">
            {items.map((item, i) => (
              <li key={i} className="mb-1">{item.trim()}</li>
            ))}
          </ul>
        );
      }
      
      // Regular paragraph
      return (
        <p key={index} className="text-gray-700 mb-3">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Document Summary
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

          {/* Summary content from processedData */}
          <div className="p-4 border border-gray-200 rounded">
            {processedData && processedData.summary ? (
              renderFormattedContent(processedData.summary)
            ) : (
              <p className="text-gray-500 italic">No summary available.</p>
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

export default SummaryModal;