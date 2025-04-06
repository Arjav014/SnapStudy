import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFileStore from "../store/useFileStore";
import toast from "react-hot-toast"

const UploadBox = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const addFile = useFileStore((state) => state.addFile);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if(!file) return;

    const isPdf = file.type === "application/pdf";

    if(!isPdf){
      toast.error("Only PDF files are allowed");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsUploading(true);
      const response = await fetch("http://localhost:3001/api/pdf/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      const result = await response.json();
      addFile(result.metadata);
      toast.success("File uploaded successfully!");

      navigate("/documents");
    } catch (error) {
      console.error("Upload failed:",error);
      toast.error("Something went wrong while uploading.");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div
      className="border-2 border-dashed rounded-lg p-6 bg-white max-w-[398px] border-orange-500"
      style={{ boxShadow: "2px 6px 4px 4px #C4C4C4" }}
    >
      <div className="text-center">
        <p className="text-gray-700 mb-2">
          Drop your pdf here or choose a file.
        </p>
        <p className="text-gray-600 text-sm mb-4">PDF & DOCX only.</p>
        <button 
          className="px-6 py-3 bg-orange-500 text-white rounded-full cursor-pointer hover:bg-orange-600 transition inline-block border-none outline-none"
          onClick={() => fileInputRef.current.click()}
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : "Upload your file"}
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,application/pdf"
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  );
};

export default UploadBox;