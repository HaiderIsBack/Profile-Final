import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const [currentRoute, setCurrentRoute] = useState("/");
    const location = useLocation();

    useEffect(() => {
        setCurrentRoute(location.pathname);
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <motion.header className="navbar relative container mx-auto">
            <div className="logo">
                <Link to="/" className="link-btn">
                    <h1 className="link-text">
                        <span className="hidden-text">ZULQARNAIN H.</span>
                        <span className="text-1">ZULQARNAIN H.</span>
                        <span className="text-2">ZULQARNAIN H.</span>
                    </h1>
                </Link>
            </div>
            <nav>
                <menu>
                    <li>
                        <Link to="/" className={`link-btn nav-links ${currentRoute === "/" ? "active" : ""}`}>
                            <p className="link-text">
                                <span className="hidden-text">Home</span>
                                <span className="text-1">Home</span>
                                <span className="text-2">Home</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={`link-btn nav-links ${currentRoute === "/projects" ? "active" : ""}`}>
                            <p className="link-text">
                                <span className="hidden-text">Projects</span>
                                <span className="text-1">Projects</span>
                                <span className="text-2">Projects</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={`link-btn nav-links ${currentRoute === "/about" ? "active" : ""}`}>
                            <p className="link-text">
                                <span className="hidden-text">About</span>
                                <span className="text-1">About</span>
                                <span className="text-2">About</span>
                            </p>
                        </Link>
                    </li>
                </menu>
            </nav>
        </motion.header>
    )
}

export default Nav;