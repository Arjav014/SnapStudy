import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const DocumentsContainer = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Get files from sessionStorage
    const storedFiles = sessionStorage.getItem("uploadedFiles");
    if (storedFiles) {
      setDocuments(JSON.parse(storedFiles));
    } else {
      // If no files found, redirect back to upload page
      navigate("/");
    }
  }, [navigate]);

  const handleAddMoreClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files.length === 0) return;

    const validFiles = Array.from(files).filter(file => {
      const fileType = file.type;
      return fileType === "application/pdf" || 
             fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    });

    if (validFiles.length === 0) {
      alert("Please upload only PDF or DOCX files.");
      return;
    }

    // Add new files to existing documents
    const newFiles = validFiles.map(file => ({
      name: file.name,
      type: file.type,
      size: file.size,
      lastModified: file.lastModified
    }));

    const updatedDocuments = [...documents, ...newFiles];
    setDocuments(updatedDocuments);
    
    // Update sessionStorage with all files
    sessionStorage.setItem("uploadedFiles", JSON.stringify(updatedDocuments));
  };

  const handleRemoveDocument = (index) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
    
    // Update sessionStorage with remaining files
    if (updatedDocuments.length === 0) {
      sessionStorage.removeItem("uploadedFiles");
      navigate("/");
    } else {
      sessionStorage.setItem("uploadedFiles", JSON.stringify(updatedDocuments));
    }
  };

  const handleProcessDocuments = () => {
    // Navigate to processing page
    navigate("/processing");
  };

  const getFileTypeIcon = (fileType) => {
    if (fileType === "application/pdf") {
      return "📄"; // PDF icon
    } else {
      return "📝"; // DOCX icon
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Documents</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {documents.map((doc, index) => (
          <div 
            key={`${doc.name}-${index}`}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{getFileTypeIcon(doc.type)}</span>
              <div className="flex-1 truncate">
                <p className="font-medium truncate">{doc.name}</p>
                <p className="text-sm text-gray-500">
                  {(doc.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <button 
                onClick={() => handleRemoveDocument(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
        
        {/* Add More Card */}
        <div 
          onClick={handleAddMoreClick}
          className="bg-white rounded-lg shadow-md p-4 border border-dashed border-orange-500 flex items-center justify-center cursor-pointer hover:bg-orange-50 transition"
        >
          <div className="text-center">
            <span className="text-4xl block text-orange-500 mb-2">+</span>
            <p className="text-orange-600 font-medium">Add More</p>
          </div>
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={handleFileInputChange}
      />
      
      {documents.length > 0 && (
        <div className="text-center">
          <button 
            onClick={handleProcessDocuments}
            className="px-8 py-3 bg-orange-500 text-white rounded-full cursor-pointer hover:bg-orange-600 transition border-none outline-none font-medium"
          >
            Process Documents
          </button>
        </div>
      )}
    </div>
  );
};

export default DocumentsContainer;