import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchOverlay from "./components/SearchOverlay";
import { useState } from "react";

const App = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div>
      <Header onSearch={() => setOpenSearch(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <SearchOverlay open={openSearch} onClose={() => setOpenSearch(false)} />
    </div>
  );
};

export default App;
