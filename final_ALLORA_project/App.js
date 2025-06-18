import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StarryBackground from "./components/StarryBackground";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import LoginSignup from "./pages/LoginSignup";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { AuthProvider } from "./context/AuthContext"; // ✅ fixed path + curly brackets

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <StarryBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login-signup" element={<LoginSignup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}
export default App;
