import Header from "../components/Header";
import Hero from "../components/Hero";
import ToolsSection from "../components/ToolsSection";
import Footer from "../components/Footer";
import BackgroundPattern from "../components/BackgroundPattern";
import { useNavigate } from "react-router-dom";
import useFileStore from "../store/useFileStore";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const { files } = useFileStore();

  useEffect(() => {
    if (files && files.length > 0) {
      navigate("/documents");
    }
  }, [files, navigate]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow relative">
        <BackgroundPattern />
        <div className="relative z-10">
          <Hero />
          <ToolsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
