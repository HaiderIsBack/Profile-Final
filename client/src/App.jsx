import "./App.css";
import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import useScreenSize from "./hooks/useScreenSize";

import LenisScroll from "./components/LenisScroll";
import Orb from "./components/Orb";
import Nav from "./components/Nav";
import PageTransition from "./components/PageTransition";
import Footer from "./components/Footer";
import MemoryMonitor from "./components/MemoryMonitor";

import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));

const App = () => {
  const screenSize = useScreenSize();
  return (
    <main>
       <Router>
        <LenisScroll />
          {screenSize.width > 1024 && <Orb />}
          <Nav />
          <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          </Routes>
          <Footer />
          {import.meta.env.MODE === "development" && <MemoryMonitor />}
       </Router>
    </main>
  );
}

export default App;