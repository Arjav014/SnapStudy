import React from "react";

const UploadBox = () => {
  return (
    <div
      className="border-2 border-orange-500 border-dashed rounded-lg p-6 bg-white max-w-[398px]"
      style={{ boxShadow: "2px 6px 4px 4px #C4C4C4" }}
    >
      <div className="text-center">
        <p className="text-gray-700 mb-2">
          Drop your pdf here or choose a file.
        </p>
        <p className="text-gray-600 text-sm mb-4">PDF & DOCX only.</p>
        <button className="px-6 py-3 bg-orange-500 text-white rounded-full cursor-pointer hover:bg-orange-600 transition inline-block border-none outline-none">
          Upload your file
        </button>
      </div>
    </div>
  );
};

export default UploadBox;
