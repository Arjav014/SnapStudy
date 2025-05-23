import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocumentsPage from './pages/DocumentsPage';
import ProcessingPage from './pages/ProcessingPage';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/documents' element={<DocumentsPage />} />
        <Route path='/processing' element={<ProcessingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App