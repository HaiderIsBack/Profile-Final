import "./App.css";
import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Orb from "./components/Orb";
import Nav from "./components/Nav";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));

import Footer from "./components/Footer";

const App = () => {
  
  return (
    <div>
       <Router>
          <Orb />
          <Nav />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
       </Router>
    </div>
  );
}

export default App;