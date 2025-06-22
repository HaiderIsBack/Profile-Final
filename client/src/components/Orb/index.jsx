import "./index.css";
import { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Helper to animate an element if it exists
const animate = (el, keyframes, options) => {
  if (el) el.animate(keyframes, options);
};

const Orb = () => {
  const location = useLocation();

  const parentOrbRef = useRef(null);
  const childOrbRef = useRef(null);
  const maskParagraphRef = useRef(null);

  // Store references to dynamically queried elements for cleanup
  const viewBtnsRef = useRef([]);
  const emailLinksRef = useRef([]);
  const hyperlinkElemsRef = useRef([]);
  const maskTextRef = useRef(null);

  // Mouse move handler
  const handleMouseMove = useCallback((e) => {
    const xPercent = (e.pageX / window.innerWidth) * 100;
    const yPercent = (e.pageY / window.innerHeight) * 100;

    animate(parentOrbRef.current, {
      top: `${yPercent}%`,
      left: `${xPercent}%`
    }, { duration: 1000, fill: "forwards" });

    animate(childOrbRef.current, {
      top: `${yPercent}%`,
      left: `${xPercent}%`
    }, { duration: 300, fill: "forwards" });
  }, []);

  // General hover handler for orb
  const handleHover = useCallback((label) => {
    const parent = parentOrbRef.current;
    const child = childOrbRef.current;

    animate(parent, {
      width: "100px",
      height: "100px",
      borderColor: "white"
    }, { duration: 300, fill: "forwards" });

    animate(child, {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0)"
    }, { duration: 100, fill: "forwards" });

    let orbContent = parent.querySelector(".orb-content");
    if (orbContent) orbContent.remove();

    orbContent = document.createElement("div");
    orbContent.className = "orb-content";
    orbContent.innerHTML = `<p>${label}</p>`;
    parent.appendChild(orbContent);
  }, []);

  // Unhover handler for orb
  const handleUnhover = useCallback(() => {
    const parent = parentOrbRef.current;
    const child = childOrbRef.current;
    const orbContent = parent?.querySelector(".orb-content");

    animate(parent, {
      width: "30px",
      height: "30px",
      borderColor: "#333"
    }, { duration: 200, fill: "forwards" });

    animate(child, {
      opacity: 1,
      transform: "translate(-50%, -50%) scale(1)"
    }, { duration: 100, fill: "forwards" });

    if (orbContent) {
      animate(orbContent, {
        opacity: 0,
        transform: "scale(0)"
      }, { duration: 200, fill: "forwards" });
      setTimeout(() => orbContent.remove(), 200);
    }
  }, []);

  // Handler for copying email
  const createEmailClickHandler = useCallback((emailText) => {
    return function handleEmailClick() {
      navigator.clipboard.writeText(emailText).then(() => {
        const orbContent = parentOrbRef.current?.querySelector(".orb-content");
        if (orbContent) {
          orbContent.innerHTML = "<p>Copied</p>";
          setTimeout(() => {
            orbContent.innerHTML = "<p>Copy</p>";
          }, 2000);
        }
      });
    };
  }, []);

  // Mask text hover handlers
  const handleMaskTextHover = useCallback(() => {
    animate(parentOrbRef.current, {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0)"
    }, { duration: 200, fill: "forwards" });

    animate(childOrbRef.current, {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0)"
    }, { duration: 100, fill: "forwards" });

    animate(maskParagraphRef.current, {
      opacity: 1,
      WebkitMaskSize: "40px"
    }, { duration: 200, fill: "forwards" });
  }, []);

  const handleMaskTextUnhover = useCallback(() => {
    animate(parentOrbRef.current, {
      opacity: 1,
      transform: "translate(-50%, -50%) scale(1)",
      width: "30px",
      height: "30px"
    }, { duration: 200, fill: "forwards" });

    animate(childOrbRef.current, {
      opacity: 1,
      transform: "translate(-50%, -50%) scale(1)"
    }, { duration: 100, fill: "forwards" });

    animate(maskParagraphRef.current, {
      opacity: 0,
      WebkitMaskSize: "0px"
    }, { duration: 200, fill: "forwards" });
  }, []);

  // Specialized hover handlers
  const handleViewMouseOver = useCallback(() => handleHover("View"), [handleHover]);
  const handleEmailLinkMouseOver = useCallback(() => handleHover("Copy"), [handleHover]);

  // Hyperlink hover handlers
  const handleHyperlinkMouseOver = useCallback(() => {
    animate(parentOrbRef.current, {
      width: "100px",
      height: "100px"
    }, { duration: 200, fill: "forwards" });

    animate(childOrbRef.current, {
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0)"
    }, { duration: 100, fill: "forwards" });
  }, []);

  const handleHyperlinkMouseOut = useCallback(() => {
    animate(parentOrbRef.current, {
      width: "30px",
      height: "30px"
    }, { duration: 200, fill: "forwards" });

    animate(childOrbRef.current, {
      opacity: 1,
      transform: "translate(-50%, -50%) scale(1)"
    }, { duration: 100, fill: "forwards" });
  }, []);

  // Attach all event listeners
  const attachEventListeners = useCallback(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // Cache queried elements for cleanup
    viewBtnsRef.current = Array.from(document.querySelectorAll(".view-btn"));
    emailLinksRef.current = Array.from(document.querySelectorAll(".email-link"));
    hyperlinkElemsRef.current = Array.from(document.querySelectorAll("a, .nav-links"));
    maskTextRef.current = document.querySelector(".mask-text");

    viewBtnsRef.current.forEach(btn => {
      btn.addEventListener("mouseover", handleViewMouseOver);
      btn.addEventListener("mouseout", handleUnhover);
    });

    emailLinksRef.current.forEach(link => {
      const emailText = link.innerText;
      const handleEmailClick = createEmailClickHandler(emailText);
      link.addEventListener("mouseover", handleEmailLinkMouseOver);
      link.addEventListener("mouseout", handleUnhover);
      link.addEventListener("click", handleEmailClick);
      link._handleEmailClick = handleEmailClick; // Store for cleanup
    });

    hyperlinkElemsRef.current.forEach(link => {
      link.addEventListener("mouseover", handleHyperlinkMouseOver);
      link.addEventListener("mouseout", handleHyperlinkMouseOut);
      link._hoverIn = handleHyperlinkMouseOver;
      link._hoverOut = handleHyperlinkMouseOut;
    });

    if (maskTextRef.current) {
      maskTextRef.current.addEventListener("mouseover", handleMaskTextHover);
      maskTextRef.current.addEventListener("mouseout", handleMaskTextUnhover);
    }
  }, [
    handleMouseMove,
    handleViewMouseOver,
    handleUnhover,
    handleEmailLinkMouseOver,
    createEmailClickHandler,
    handleHyperlinkMouseOver,
    handleHyperlinkMouseOut,
    handleMaskTextHover,
    handleMaskTextUnhover
  ]);

  // Detach all event listeners
  const detachEventListeners = useCallback(() => {
    window.removeEventListener("mousemove", handleMouseMove);

    viewBtnsRef.current.forEach(btn => {
      btn.removeEventListener("mouseover", handleViewMouseOver);
      btn.removeEventListener("mouseout", handleUnhover);
    });

    emailLinksRef.current.forEach(link => {
      link.removeEventListener("mouseover", handleEmailLinkMouseOver);
      link.removeEventListener("mouseout", handleUnhover);
      if (link._handleEmailClick) {
        link.removeEventListener("click", link._handleEmailClick);
        delete link._handleEmailClick;
      }
    });

    hyperlinkElemsRef.current.forEach(link => {
      if (link._hoverIn) {
        link.removeEventListener("mouseover", link._hoverIn);
        delete link._hoverIn;
      }
      if (link._hoverOut) {
        link.removeEventListener("mouseout", link._hoverOut);
        delete link._hoverOut;
      }
    });

    if (maskTextRef.current) {
      maskTextRef.current.removeEventListener("mouseover", handleMaskTextHover);
      maskTextRef.current.removeEventListener("mouseout", handleMaskTextUnhover);
    }
  }, [
    handleMouseMove,
    handleViewMouseOver,
    handleUnhover,
    handleEmailLinkMouseOver,
    handleMaskTextHover,
    handleMaskTextUnhover
  ]);

  useEffect(() => {
    let rafId;
    let timeoutId;
    
    rafId = requestAnimationFrame(() => {
      timeoutId = setTimeout(() => {
        attachEventListeners(); // will now see all new DOM elements
      }, 1500); // transition time for new elements to appear
    });

    return () => {
      detachEventListeners();
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [location.pathname, attachEventListeners, detachEventListeners]);

  // Reset orb animation on route change
  useEffect(() => {
    animate(parentOrbRef.current, {
      width: "30px",
      height: "30px"
    }, { duration: 200, fill: "forwards" });

    animate(childOrbRef.current, {
      opacity: 1,
      transform: "translate(-50%, -50%) scale(1)"
    }, { duration: 100, fill: "forwards" });
  }, [location.pathname]);

  return (
    <>
      <div className="orb" ref={parentOrbRef}></div>
      <div className="small-orb" ref={childOrbRef}></div>
      <div className="mask-paragraph" ref={maskParagraphRef}></div>
    </>
  );
};

export default Orb;
