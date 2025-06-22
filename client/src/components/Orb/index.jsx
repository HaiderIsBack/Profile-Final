import "./index.css";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Orb = () => {
  const location = useLocation();

  const parentOrbRef = useRef(null);
  const childOrbRef = useRef(null);
  const maskParagraphRef = useRef(null);

  const animate = (el, keyframes, options) => {
    if (el) el.animate(keyframes, options);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
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
    };

    const handleHover = (label) => {
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
    };

    const handleUnhover = () => {
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
    };

    const createEmailClickHandler = (emailText) => {
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
    }

    const handleMaskTextHover = () => {
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
    };

    const handleMaskTextUnhover = () => {
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
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleViewMouseOver = () => handleHover("View");
    const handleEmailLinkMouseOver = () => handleHover("Copy");

    const handleHyperlinkMouseOver = () => {
      animate(parentOrbRef.current, {
        width: "100px",
        height: "100px"
      }, { duration: 200, fill: "forwards" });

      animate(childOrbRef.current, {
        opacity: 0,
        transform: "translate(-50%, -50%) scale(0)"
      }, { duration: 100, fill: "forwards" });
    }

    const handleHyperlinkMouseOut = () => {
      animate(parentOrbRef.current, {
        width: "30px",
        height: "30px"
      }, { duration: 200, fill: "forwards" });

      animate(childOrbRef.current, {
        opacity: 1,
        transform: "translate(-50%, -50%) scale(1)"
      }, { duration: 100, fill: "forwards" });
    }
    // Cleanup event listeners

    const viewBtns = document.querySelectorAll(".view-btn");
    viewBtns.forEach(btn => {
      btn.addEventListener("mouseover", handleViewMouseOver);
      btn.addEventListener("mouseout", handleUnhover);
    });

    const emailLinks = document.querySelectorAll(".email-link");
    emailLinks.forEach(link => {
      const emailText = link.innerText;
      const handleEmailClick = createEmailClickHandler(emailText);
      link.addEventListener("mouseover", handleEmailLinkMouseOver);
      link.addEventListener("mouseout", handleUnhover);
      link.addEventListener("click", handleEmailClick);
      link._handleEmailClick = handleEmailClick; // Store for cleanup
    });

    const hyperlinkElems = document.querySelectorAll("a, .nav-links");
    hyperlinkElems.forEach(link => {
      link.addEventListener("mouseover", handleHyperlinkMouseOver);
      link.addEventListener("mouseout", handleHyperlinkMouseOut);

      link._hoverIn = handleHyperlinkMouseOver;
      link._hoverOut = handleHyperlinkMouseOut;
    });

    const maskText = document.querySelector(".mask-text");
    if (maskText) {
      maskText.addEventListener("mouseover", handleMaskTextHover);
      maskText.addEventListener("mouseout", handleMaskTextUnhover);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      viewBtns.forEach(btn => {
        btn.removeEventListener("mouseover", handleViewMouseOver);
        btn.removeEventListener("mouseout", handleUnhover);
      });
      emailLinks.forEach(link => {
        link.removeEventListener("mouseover", handleEmailLinkMouseOver);
        link.removeEventListener("mouseout", handleUnhover);
        if (link._handleEmailClick) {
          link.removeEventListener("click", link._handleEmailClick);
          delete link._handleEmailClick; // Clean up stored handler
        }
      });
      hyperlinkElems.forEach(link => {
        if (link._hoverIn) {
          link.removeEventListener("mouseover", link._hoverIn);
          delete link._hoverIn; // Clean up stored handler
        }
        if (link._hoverOut) {
          link.removeEventListener("mouseout", link._hoverOut);
          delete link._hoverOut; // Clean up stored handler
        }
      });
      if (maskText) {
        maskText.removeEventListener("mouseover", handleMaskTextHover);
        maskText.removeEventListener("mouseout", handleMaskTextUnhover);
      }
    };
  }, [location.pathname]);

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
