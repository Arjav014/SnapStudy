import React from "react";
import Modal from "./Modal";
import useFileStore from "../store/useFileStore";

// Formats subscripts: F_AB → F<sub>AB</sub>, μ_s → μ<sub>s</sub>, etc.
const formatSubscripts = (text) => {
  if (!text) return "";

  return text
    .replace(/([A-Za-z0-9]')?_([A-Za-z0-9]+)/g, (match, base, sub) => {
      return `${base || ""}<sub>${sub}</sub>`;
    })
    .replace(/([a-z])([A-Z])/g, (match, lower, upper) => {
      return `${lower}<sub>${upper}</sub>`;
    });
};

const FormulaModal = ({ isOpen, onClose }) => {
  const { processedData } = useFileStore();
  const formulas = processedData?.formulas || [];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Extracted Formulas"
      closeButtonColor="bg-purple-600 hover:bg-purple-700"
    >
      <div className="p-4 border border-gray-200 rounded">
        <h3 className="font-medium text-lg mb-2">Formulas</h3>
        <p className="text-gray-700 mb-3">
          {formulas.length > 0
            ? "All formulas extracted from your documents are listed below for easy reference."
            : "No formulas present in this document"}
        </p>

        <div className="space-y-4">
          {formulas.map((item, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded">
              <p className="font-medium">{item.title}</p>
              <p
                className="font-mono"
                dangerouslySetInnerHTML={{
                  __html: formatSubscripts(item.formula),
                }}
              />
              <p
                className="text-sm text-gray-600 mt-1"
                dangerouslySetInnerHTML={{
                  __html: formatSubscripts(item.explanation),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default FormulaModal;
