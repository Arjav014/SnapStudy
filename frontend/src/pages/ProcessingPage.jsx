import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundPattern from '../components/BackgroundPattern';
import ProcessingContainer from '../components/ProcessingContainer'; // You'll need to create this

const ProcessingPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow relative">
        <BackgroundPattern />
        <div className="relative z-10">
          <ProcessingContainer />
        </div>
      </main>
    </div>
  );
};

export default ProcessingPage;