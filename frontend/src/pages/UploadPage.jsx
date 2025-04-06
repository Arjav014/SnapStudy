import React, { useState } from "react";

const UploadPage = () => {
  const [documents, setDocuments] = useState([]);
  const [combinedText, setCombinedText] = useState("");

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (!files.length) return;

    const formData = new FormData();
    for (let file of files) {
      formData.append("files", file);
    }

    try {
      const res = await fetch("http://localhost:3001/api/pdf/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setCombinedText(data.combinedText);
        setDocuments(data.metadata); // Set metadata array from backend
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading files");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Upload Your Documents</h2>
      <input
        type="file"
        multiple
        onChange={handleFileUpload}
        accept=".pdf,.docx"
        className="mb-6"
      />

      {documents.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Uploaded Files:</h3>
          <ul>
            {documents.map((doc, index) => (
              <li key={index} className="mb-2">
                📄 <strong>{doc.name}</strong> ({(doc.size / 1024 / 1024).toFixed(2)} MB)
              </li>
            ))}
          </ul>
        </div>
      )}

      {combinedText && (
        <div>
          <h3 className="text-lg font-medium mb-2">Combined Text (Preview):</h3>
          <div className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">
            {combinedText.slice(0, 1000)}...
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
