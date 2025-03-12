import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundPattern from '../components/BackgroundPattern';
import DocumentsContainer from '../components/DocumentsContainer'; // Import the new container component

const DocumentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow relative">
        <BackgroundPattern />
        <div className="relative z-10">
          <DocumentsContainer />
        </div>
      </main>
    </div>
  );
};

export default DocumentsPage;