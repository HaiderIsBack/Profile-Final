import { AnimatePresence, useMotionValue, useAnimation, motion, animate } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Custom_Ease } from '../Constants';
import { useEffect, useMemo, useState } from 'react';

const pathnames = {
  "/": "Home",
  "/projects": "Projects",
  "/about": "About",
};

const PageTransition = ({ children }) => {
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isFirstTime, setIsFirstTime] = useState(true);

    const countComplete = () => {
      setTimeout(() => {
        setIsTransitioning(false);
        setIsFirstTime(false);
      }, 500);
    }

    const textAnimationComplete = () => {
      setIsTransitioning(false);
      if (isFirstTime) {
        setIsFirstTime(false);
      }
    }

    useEffect(() => {
      setIsTransitioning(true);
    }, [location.pathname]);
    return (
      <>
        <AnimatePresence mode="wait">
            <div key={location.pathname}>
                <div className="transition-wrapper flex w-full h-screen fixed top-0 left-0 z-50 pointer-events-none">
                    {
                        [0, 0.1, 0.2, 0.3].map((delay, index) => (
                            <motion.div className='flex-1 bg-[#fb4566]'
                            key={index}
                            initial={{ height: "100%", top: 0 }}
                            animate={ isTransitioning ? {} : { height: 0, top: 0 } }
                            exit={{ height: "100%", top: 0 }}
                            transition={{ duration: 0.8, delay, ease: Custom_Ease }}
                            ></motion.div>
                        ))
                    }
                    <AnimatePresence mode='wait'>
                      { isFirstTime && isTransitioning && (<Count key='count' countComplete={countComplete} />) }
                      { !isFirstTime && isTransitioning && (<PathnameText key='text' pathname={location.pathname} textAnimationComplete={textAnimationComplete} />) }
                    </AnimatePresence>
                </div>
                {children}
            </div>
        </AnimatePresence>
      </>
    );
}

const Count = ({ countComplete }) => {
    const completeAnimation = useAnimation();
    const countValue = useMotionValue(0);
    const [count, setCount] = useState(0);
  
    // Animate countValue from 0 to 100
    useEffect(() => {
      const controls = animate(countValue, 100, {
        duration: 2,
        ease: Custom_Ease, // Your custom easing function
        onUpdate: (latest) => {
          if (Math.round(latest) !== count) {
            setCount(Math.round(latest));
          }
        },
      });
  
      return controls.stop;
    }, [countValue]);
  
    // Run complete animation when count reaches 100
    useEffect(() => {
      if (count === 100) {
        countComplete();
  
        completeAnimation.start({
          x: "-50%",
          y: "-200%",
          opacity: 0,
          transition: {
            type: "tween",
            duration: 0.5,
            ease: Custom_Ease,
          },
        });
      }
    }, [count, completeAnimation, countComplete]);
  
    return (
      <motion.h2
        animate={completeAnimation}
        initial={{ x: "-50%", y: "-50%", opacity: 1 }}
        className="text-4xl lg:text-[76px] font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
      >
        {count}%
      </motion.h2>
    );
};

const PathnameText = ({ pathname, textAnimationComplete }) => {
  return (
    <motion.h1 
    initial={{ x: "-50%", y: "100%", opacity: 0 }}
    animate={{ y: "-50%", opacity: 1, transition: { duration: 0.5, ease: Custom_Ease } }}
    exit={{ y: "-200%", opacity: 0, transition: { duration: 0.5, ease: Custom_Ease } }}
    onAnimationComplete={textAnimationComplete}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-4xl lg:text-[76px] font-bold text-white pointer-events-none">
      {pathnames[pathname] || "Home"}
    </motion.h1>
  );
}

export default PageTransition;