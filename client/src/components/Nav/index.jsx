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
        <motion.header className="navbar relative container mx-auto"
            initial={{y: "-100%"}}
            animate={{y: 0}}
            transition={{duration: 1, delay: 1, ease: "backOut"}}
            >
            <div className="logo">
                <Link to="/" className="link-btn">
                    <h1 className="link-text">
                        <span className="hidden-text text-2xl xl:text-5xl">ZULQARNAIN H.</span>
                        <span className="text-1 text-2xl xl:text-5xl">ZULQARNAIN H.</span>
                        <span className="text-2 text-2xl xl:text-5xl">ZULQARNAIN H.</span>
                    </h1>
                </Link>
            </div>
            <nav>
                <menu>
                    <li>
                        <Link to="/" className={`link-btn nav-links ${currentRoute === "/" ? "active" : ""}`}>
                            <p className="link-text">
                                <span className="hidden-text text-sm xl:text-[22px]">Home</span>
                                <span className="text-1 text-sm xl:text-[22px]">Home</span>
                                <span className="text-2 text-sm xl:text-[22px]">Home</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className={`link-btn nav-links ${currentRoute === "/projects" ? "active" : ""}`}>
                            <p className="link-text">
                                <span className="hidden-text text-sm xl:text-[22px]">Projects</span>
                                <span className="text-1 text-sm xl:text-[22px]">Projects</span>
                                <span className="text-2 text-sm xl:text-[22px]">Projects</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={`link-btn nav-links ${currentRoute === "/about" ? "active" : ""}`}>
                            <p className="link-text">
                                <span className="hidden-text text-sm xl:text-[22px]">About</span>
                                <span className="text-1 text-sm xl:text-[22px]">About</span>
                                <span className="text-2 text-sm xl:text-[22px]">About</span>
                            </p>
                        </Link>
                    </li>
                </menu>
            </nav>
        </motion.header>
    )
}

export default Nav;