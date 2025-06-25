import { useEffect, useRef, useState } from "react";
import "./index.css";
import { Link, useLocation } from 'react-router-dom';

import gsap from "gsap";

const Nav = () => {
    const [currentRoute, setCurrentRoute] = useState("/");
    const [isSticky, setIsSticky] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const location = useLocation();
    
    const headerRef = useRef(null);
    const prevScroll = useRef(null);

    useEffect(() => {
        setCurrentRoute(location.pathname);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            setIsSticky(currentScroll >= 0);

            if (currentScroll < prevScroll.current) {
                gsap.to(headerRef.current, {
                    y: "0%",
                    duration: 0.6,
                    ease: "power4.out",
                });
            } else {
                gsap.to(headerRef.current, {
                    y: "-100%",
                    duration: 0.6,
                    ease: "power4.out",
                });
            }
            prevScroll.current = currentScroll;
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);
    return (
    <>
        <header className={`bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-black z-20 ${
                isSticky ? "fixed top-0 left-0 right-0 shadow-lg" : "relative"}`} ref={headerRef}>
            <div className="navbar container mx-auto">
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
            </div>
        </header>
        <div style={{ height: isSticky ? `${headerHeight}px` : "0px" }} />
    </>
    )
}

export default Nav;