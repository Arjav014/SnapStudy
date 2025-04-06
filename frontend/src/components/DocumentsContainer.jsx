import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFileStore from "../store/useFileStore";
import toast from "react-hot-toast";
import { getExtractedData } from "../services/getExtractedData";

const DocumentsContainer = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const { files, addFile, removeFile } = useFileStore();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    if(files.length === 0){
      navigate("/");
    } else {
      setDocuments(files);
    }
  }, [files, navigate]);

  const handleFileInputChange = async (e) => {
    const newFile = e.target.files[0];
    if(!newFile) return;

    const isValid = newFile.type === "application/pdf";

    if (!isValid) {
      toast.error("Only PDF files are allowed.");
      return;
    }

    const formData = new FormData();
    formData.append("file", newFile);

    try {
      const response = await fetch("http://localhost:3001/api/pdf/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      addFile(result.metadata);
      toast.success("File uploaded successfully!");
    } catch (error) {
      console.error("Error adding new file:",error);
      toast.error("Failed to upload file.");
    }
  };

  const handleRemoveDocument = async (index) => {
    const fileToRemove = documents[index];
    
    if (!fileToRemove || !fileToRemove.id) {
      toast.error("Invalid file.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3001/api/pdf/delete/${fileToRemove.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete file.");
      }

      removeFile(fileToRemove.id);
      toast.success("File removed successfully!");
    } catch (error) {
      console.error("Error deleting file:", err);
      toast.error("Could not delete the file.");
    }
  };

  const handleProcessDocuments = async () => {
    getExtractedData(files);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Documents</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {documents.map((doc, index) => (
          <div 
            key={doc.id}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">📄</span>
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
          onClick={() => fileInputRef.current.click()}
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
        accept=".pdf,application/pdf"
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