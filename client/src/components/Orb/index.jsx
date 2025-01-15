import "./index.css";

import { useEffect } from "react";

const Orb = () => {
    useEffect(() => {
      const orbMovement = (e) => {
        const parentOrb = document.querySelector(".orb");
        const childOrb = document.querySelector(".small-orb");

        const parentOrbPosition = {
          x: (e.pageX / window.innerWidth) * 100,
          y: (e.pageY / window.innerHeight) * 100,
        }

        const childOrbPosition = {
          x: (e.pageX / window.innerWidth) * 100,
          y: (e.pageY / window.innerHeight) * 100,
        }
  
        parentOrb.animate(
          {
            top: `${parentOrbPosition.y}%`,
            left: `${parentOrbPosition.x}%`,
          },
          { duration: 1000, fill: "forwards" }
        );
  
        childOrb.animate(
          {
            top: `${childOrbPosition.y}%`,
            left: `${childOrbPosition.x}%`,
          },
          { duration: 300, fill: "forwards" }
        );
      };
  
      const viewMouseOver = (e) => {
        const parentOrb = document.querySelector(".orb");
        const childOrb = document.querySelector(".small-orb");
        var orbContent = parentOrb.querySelector(".orb-content");
  
        // Animate orb size
        parentOrb.animate(
          {
            width: "100px",
            height: "100px",
            borderColor: "white",
          },
          { duration: 300, fill: "forwards" }
        );
        childOrb.animate(
        {
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0)",
        },
        { duration: 100, fill: "forwards" });
  
        // Add orb content
        if (!orbContent) {
          orbContent = document.createElement("div");
          orbContent.className = "orb-content";
          orbContent.innerHTML = "<p>View</p>";
          parentOrb.appendChild(orbContent);
        }else{
          orbContent.remove();
          orbContent = document.createElement("div");
          orbContent.className = "orb-content";
          orbContent.innerHTML = "<p>View</p>";
          parentOrb.appendChild(orbContent);
        }
      };
  
      const viewMouseOut = (e) => {
        const parentOrb = document.querySelector(".orb");
        const childOrb = document.querySelector(".small-orb");
        const orbContent = parentOrb.querySelector(".orb-content");
  
        // Animate orb size
        parentOrb.animate(
          {
            width: "30px",
            height: "30px",
            borderColor: "#333"
          },
          { duration: 200, fill: "forwards" }
        );
        childOrb.animate(
        {
          opacity: 1,
          transform: "translate(-50%, -50%) scale(1)",
        },
        { duration: 100, fill: "forwards" });
  
        // Animate and remove content
        if (orbContent) {
          orbContent.animate(
            {
              opacity: 0,
              transform: "scale(0)",
            },
            { duration: 200, fill: "forwards" }
          );
          setTimeout(() => orbContent.remove(), 200); // Remove after animation
        }
      };

      // Copy email funcs
      const emailMouseOver = (e) => {
        const parentOrb = document.querySelector(".orb");
        const childOrb = document.querySelector(".small-orb");
        var orbContent = parentOrb.querySelector(".orb-content");
  
        // Animate orb size
        parentOrb.animate(
          {
            width: "100px",
            height: "100px",
            borderColor: "white",
          },
          { duration: 300, fill: "forwards" }
        );
        childOrb.animate(
        {
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0)",
        },
        { duration: 100, fill: "forwards" });
  
        // Add orb content
        if (!orbContent) {
          const emailElem = document.querySelector(".email-link");
          const emailText = emailElem.innerText;

          const handleEmailCopy = () => {
            navigator.clipboard.writeText(emailText).then(() => {
              orbContent.innerHTML = "<p>Copied</p>";
              setTimeout(() => {
                orbContent.innerHTML = "<p>Copy</p>";
              }, 5000);    
            })
          }
          emailElem.addEventListener("click", handleEmailCopy);
          const orbContent = document.createElement("div");
          orbContent.className = "orb-content";
          orbContent.innerHTML = "<p>Copy</p>";
          parentOrb.appendChild(orbContent);
        }else{
          orbContent.remove();
          orbContent = document.createElement("div");
          orbContent.className = "orb-content";
          orbContent.innerHTML = "<p>Copy</p>";
          parentOrb.appendChild(orbContent);
        }
      };
  
      const emailMouseOut = (e) => {
        const parentOrb = document.querySelector(".orb");
        const childOrb = document.querySelector(".small-orb");
        const orbContent = parentOrb.querySelector(".orb-content");
  
        // Animate orb size
        parentOrb.animate(
          {
            width: "30px",
            height: "30px",
            borderColor: "#333"
          },
          { duration: 200, fill: "forwards" }
        );
        childOrb.animate(
        {
          opacity: 1,
          transform: "translate(-50%, -50%) scale(1)",
        },
        { duration: 100, fill: "forwards" });
  
        // Animate and remove content
        if (orbContent) {
          const emailElem = document.querySelector(".email-link");
          const emailText = emailElem.innerText;

          const handleEmailCopy = () => {
            navigator.clipboard.writeText(emailText.toLowerCase()).then(() => {
              orbContent.innerHTML = "<p>Copied</p>";
              setTimeout(() => {
                orbContent.innerHTML = "<p>Copy</p>";
              }, 2000);    
            })
          }
          emailElem.removeEventListener("click", handleEmailCopy);
          orbContent.animate(
            {
              opacity: 0,
              transform: "scale(0)",
            },
            { duration: 200, fill: "forwards" }
          );
          setTimeout(() => orbContent.remove(), 200); // Remove after animation
        }
      };
  
      // Hyperlink funcs
      const hyperLinkMouseOver = (e) => {
        const parentOrb = document.querySelector(".orb");
        const childOrb = document.querySelector(".small-orb");
  
        // Animate orb size
        parentOrb.animate(
          {
            width: "100px",
            height: "100px",
          },
          { duration: 200, fill: "forwards" }
        );
        childOrb.animate(
          {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(0)",
          },
          { duration: 100, fill: "forwards" }
        );
      }
  
      const hyperLinkMouseOut = (e) => {
        const parentOrb = document.querySelector(".orb");
        const childOrb = document.querySelector(".small-orb");
  
        // Animate orb size
        parentOrb.animate(
          {
            width: "30px",
            height: "30px",
          },
          { duration: 200, fill: "forwards" }
        );
        childOrb.animate(
          {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
          { duration: 100, fill: "forwards" }
        );
      }

      const maskTextMouseOver = (e) => {
        const parentOrb = document.querySelector(".orb");
        const childOrb = document.querySelector(".small-orb");

        const maskCircle = document.querySelector(".mask-paragraph");

        // Animate orb size
        parentOrb.animate(
          {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(0)",
          },
          { duration: 200, fill: "forwards" }
        );
        childOrb.animate(
          {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(0)",
          },
          { duration: 100, fill: "forwards" }
        );
        maskCircle.animate(
          {
            opacity: 1,
            WebkitMaskSize: "40px"
          },
          { duration: 200, fill: "forwards"
          }
        );
      }

      const maskTextMouseOut = (e) => {
        const parentOrb = document.querySelector(".orb");
        const childOrb = document.querySelector(".small-orb");

        const maskCircle = document.querySelector(".mask-paragraph");
  
        // Animate orb size
        parentOrb.animate(
          {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
            width: "30px",
            height: "30px",
            background: "transparent",
          },
          { duration: 200, fill: "forwards" }
        );
        childOrb.animate(
          {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
          { duration: 100, fill: "forwards" }
        );
        maskCircle.animate(
          {
            opacity: 0,
            WebkitMaskSize: "0px"
          },
          { duration: 200, fill: "forwards"
          }
        )
      }
  
      window.addEventListener("mousemove", orbMovement);
  
      const viewElems = document.querySelectorAll(".view-btn");
  
      viewElems.forEach((viewElem) => {
        viewElem.addEventListener("mouseover", viewMouseOver);
        viewElem.addEventListener("mouseout", viewMouseOut);
      });

      const emailLinks = document.querySelectorAll(".email-link");

      emailLinks.forEach((emailLink) => {
        emailLink.addEventListener("mouseover", emailMouseOver);
        emailLink.addEventListener("mouseout", emailMouseOut);
      });
  
      const hyperLinks = document.querySelectorAll("a, .nav-links");
  
      hyperLinks.forEach((hyperLink) => {
        hyperLink.addEventListener("mouseover", hyperLinkMouseOver);
        hyperLink.addEventListener("mouseout", hyperLinkMouseOut);
      });

      const maskText = document.querySelector(".mask-text");

      maskText.addEventListener("mouseover", maskTextMouseOver);
      maskText.addEventListener("mouseout", maskTextMouseOut);
  
      return () => {
        window.removeEventListener("mousemove", orbMovement);
  
        viewElems.forEach((viewElem) => {
          viewElem.removeEventListener("mouseover", viewMouseOver);
          viewElem.removeEventListener("mouseout", viewMouseOut);
        });

        emailLinks.forEach((emailLink) => {
          emailLink.removeEventListener("mouseover", emailMouseOver);
          emailLink.removeEventListener("mouseout", emailMouseOut);
        });
  
        hyperLinks.forEach((hyperLink) => {
          hyperLink.removeEventListener("mouseover", hyperLinkMouseOver);
          hyperLink.removeEventListener("mouseout", hyperLinkMouseOut);
        });

        maskText.removeEventListener("mouseover", maskTextMouseOver);
        maskText.removeEventListener("mouseout", maskTextMouseOut);
      };
    }, []);
  
    return (
      <>
        <div className="orb"></div>
        <div className="small-orb"></div>
      </>
    )
  }

export default Orb;