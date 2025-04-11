import React from "react";
import Modal from "./Modal";
import useFileStore from "../store/useFileStore";

const FormulaModal = ({ isOpen, onClose }) => {
  const { processedData } = useFileStore();
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
          All formulas extracted from your documents are listed below for easy
          reference.
        </p>

        <h4 className="font-medium text-md mt-4 mb-2">Mechanics Formulas</h4>
        <div className="bg-gray-50 p-3 rounded mb-3">
          <p className="font-medium">Newton's Second Law:</p>
          <p className="font-mono">F = ma</p>
          <p className="text-sm text-gray-600 mt-1">
            Force equals mass times acceleration
          </p>
        </div>
        <div className="bg-gray-50 p-3 rounded mb-3">
          <p className="font-medium">Kinetic Energy:</p>
          <p className="font-mono">KE = (1/2)mv²</p>
          <p className="text-sm text-gray-600 mt-1">
            Kinetic energy equals half of mass times velocity squared
          </p>
        </div>

        <h4 className="font-medium text-md mt-4 mb-2">
          Thermodynamics Formulas
        </h4>
        <div className="bg-gray-50 p-3 rounded mb-3">
          <p className="font-medium">Ideal Gas Law:</p>
          <p className="font-mono">PV = nRT</p>
          <p className="text-sm text-gray-600 mt-1">
            Pressure times volume equals number of moles times gas constant
            times temperature
          </p>
        </div>
        <div className="bg-gray-50 p-3 rounded mb-3">
          <p className="font-medium">Entropy Change:</p>
          <p className="font-mono">ΔS = q/T</p>
          <p className="text-sm text-gray-600 mt-1">
            Change in entropy equals heat transfer divided by temperature
          </p>
        </div>

        <h4 className="font-medium text-md mt-4 mb-2">
          Electromagnetic Formulas
        </h4>
        <div className="bg-gray-50 p-3 rounded">
          <p className="font-medium">Ohm's Law:</p>
          <p className="font-mono">V = IR</p>
          <p className="text-sm text-gray-600 mt-1">
            Voltage equals current times resistance
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default FormulaModal;
