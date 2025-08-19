import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import PropertiesPage from "./components/pages/PropertiesPage";
import ContactPage from "./components/pages/ContactPage";
import "./App.css"; // Ensure global styles are imported

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}
