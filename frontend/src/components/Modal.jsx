import React from "react";

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  closeButtonColor = "bg-red-600 hover:bg-red-700",
  closeButtonText = "Close" 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
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

          {children}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className={`py-2 px-6 text-white rounded transition font-medium ${closeButtonColor}`}
          >
            {closeButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;