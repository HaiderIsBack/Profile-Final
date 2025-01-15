import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Orb from "./components/Orb";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
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