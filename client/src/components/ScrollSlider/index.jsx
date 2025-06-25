import "./index.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useScreenSize from "../../hooks/useScreenSize";

const ScrollSlider = ({ text, imgSrc, offset, direction }) => {
    const screenSize = useScreenSize();
    const scrollSliderRef = useRef(null);
    const dir = direction === "left" ? -1 : 1;
    const { scrollYProgress } = useScroll({
        target: scrollSliderRef,
        offset: ['start end', 'end start'],
    });
    const maxLeft = screenSize.width < 768 ? -250 : -150;
    const maxRight = screenSize.width < 768 ? 250 : 150;
    const x = useTransform(scrollYProgress, [0, 1], [maxLeft * dir, maxRight * dir]);
    return (
        <div className="relative scroll-slider view-btn overflow-hidden cursor-pointer py-24" ref={scrollSliderRef}>
            <motion.div className="relative flex whitespace-nowrap pointer-events-none" style={{left: offset, x}} transition={{ease: "easeInOut"}}>
                <ScrollSlide text={text} />
                <ScrollSlide text={text} />
                <ScrollSlide text={text} />
            </motion.div>
            <img src={imgSrc} alt={text} className="hidden lg:block scroll-slider-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] pointer-events-none" style={{filter: "drop-shadow(0px 0px 76px black)"}} loading="lazy" />
        </div>
    );
}

const ScrollSlide = ({ text }) => {
    return (
        <p className="flex items-center text-[84px] xl:text-[126px] font-['Mango'] gap-16 pr-16">
            {text} <span className="scroll-slider-dot"></span>
        </p>
    )
}

export default ScrollSlider;