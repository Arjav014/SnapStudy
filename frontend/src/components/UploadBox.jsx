import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UploadBox = () => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
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

    // Get any existing files from sessionStorage
    let existingFiles = [];
    const storedFiles = sessionStorage.getItem("uploadedFiles");
    if (storedFiles) {
      existingFiles = JSON.parse(storedFiles);
    }

    // Add new files to existing files
    const newFiles = validFiles.map(file => ({
      name: file.name,
      type: file.type,
      size: file.size,
      lastModified: file.lastModified
    }));

    const allFiles = [...existingFiles, ...newFiles];
    
    // Update sessionStorage with all files
    sessionStorage.setItem("uploadedFiles", JSON.stringify(allFiles));
    
    // Navigate to the documents page
    navigate("/documents");
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 bg-white max-w-[398px] ${
        isDragging ? "border-orange-600 bg-orange-50" : "border-orange-500"
      }`}
      style={{ boxShadow: "2px 6px 4px 4px #C4C4C4" }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="text-center">
        <p className="text-gray-700 mb-2">
          Drop your pdf here or choose a file.
        </p>
        <p className="text-gray-600 text-sm mb-4">PDF & DOCX only.</p>
        <button 
          className="px-6 py-3 bg-orange-500 text-white rounded-full cursor-pointer hover:bg-orange-600 transition inline-block border-none outline-none"
          onClick={handleUploadClick}
        >
          Upload your file
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  );
};

export default UploadBox;