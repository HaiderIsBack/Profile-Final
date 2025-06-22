import "./index.css";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DotLink from "../../components/DotLink";
import ScrollSlider from "../../components/ScrollSlider";
import { Gradient } from "../../assets/Gradient";
import { RevealUp, LineSlideLeft, LineSlideRight } from "../../components/Animations/Text";
import useScreenSize from "../../hooks/useScreenSize";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

import { Helmet } from "react-helmet-async";

const SplitTextReveal = ({ children, className = '' }) => {
    const elRef = useRef(null);

    useGSAP(() => {
        const split = SplitText.create(elRef.current, {
            types: "lines",
            mask: true,
            autoSplit: true,
            lineClass: "line",
        });

        gsap.from(split.lines, {
            y: 200,
            stagger: 0.1,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
                trigger: elRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        return () => {
            split.revert(); // Clean up the SplitText instance
        }
    }, { scope: elRef });
    return <span ref={elRef} className={className}>{children}</span>;
};

const Home = () => {
    const screenSize = useScreenSize();
    const { scrollYProgress } = useScroll();
    const leftTrackX = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rightTrackX = useTransform(scrollYProgress, [0, 1], [0, 200]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const gradient = new Gradient();
        gradient.initGradient('#gradient-canvas');

        return () => {
            gradient.disconnect();
        };
    }, []);

    return (
    <>
        {/* SEO */}
        <Helmet>
            <title>Zulqarnain H. | Web Developer & Network Engineer</title>
            <meta name="description" content="Syed Zulqarnain Haider is a Web Developer and Network Engineer based in Lahore, Pakistan with over 3 years of experience in web development and network administration." />
            <meta name="keywords" content="Syed Zulqarnain Haider, zulqarnain, Web Developer, Web, ReactJs, GSAP, javascript" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.syed-zulqarnain-haider.vercel.app/" />
        </Helmet>
        {/* SEO */}

        <div className="hero">
            <div className="grid grid-cols-12 gap-5 xl:gap-0">
                <motion.div className="col-span-12 xl:col-span-4 relative text-center xl:text-right flex flex-col justify-center pr-0 xl:pr-5 duration-200 select-none" style={{x: leftTrackX}}>
                    <h2 className="text-5xl xl:text-[64px] leading-[58px] -mb-[1.3rem] xl:-mb-[1rem]"><RevealUp lineHeight={"45px"}>ZULQARNAIN H.</RevealUp></h2>
                    <p className="text-md xl:text-xl"><RevealUp lineHeight={"25px"}>based in Lahore, Pakistan</RevealUp></p>
                    <p className="text-md xl:text-xl flex justify-center xl:justify-end items-baseline -mt-[10px] xl:-mt-[1rem]"><span className="available-signal"></span> <RevealUp lineHeight={"25px"}>Available for a full-time position</RevealUp></p>
                </motion.div>
                <div className="col-span-12 xl:col-span-4 flex justify-center items-center">
                    <div className="border-[1px] border-[var(--accent-color)] rounded-full w-[250px] md:w-[380px] xl:w-full aspect-square p-2">
                        <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 1, ease: "easeInOut" }}
                        className="w-full h-full relative">
                            <canvas id="gradient-canvas" data-transition-in className="rounded-full" />
                            <img src="/zulqarnain.png" alt="Zulqarnain" className="absolute top-0 left-0 w-full h-full rounded-full" loading="lazy" />
                        </motion.div>
                    </div>
                </div>
                <motion.div className="col-span-12 xl:col-span-4 flex flex-col justify-center pl-5 duration-200 select-none text-center xl:text-left" style={{ x: rightTrackX }}>
                    <h2 className="text-5xl xl:text-[64px] leading-[58px]"><RevealUp lineHeight={"58px"}>Web Developer</RevealUp></h2>
                    <h2 className="text-5xl xl:text-[64px] leading-[58px] -mt-[1.8rem] xl:mt-[-1rem]"><RevealUp lineHeight={"58px"}>& Network Engineer</RevealUp></h2>
                </motion.div>
            </div>
        </div>
        
        <MaskedTextSection />
        <div className="flex justify-center mt-5 mb-36">
            <DotLink href={"/about"} value={"Learn More"} />
        </div>

        <div className="w-full grid grid-cols-12 align-middle">
            <div className="col-span-3 xl:col-span-4 px-5 xl:px-10">
                <LineSlideLeft />                
            </div>
            <div className="col-span-6 xl:col-span-4 flex justify-center items-center">
                <h2 className="text-lg xl:text-[49px] leading-5 xl:leading-10 -mt-[0.5rem] xl:mt-[-1rem]"><RevealUp lineHeight={"40px"}>Discover my creative expertise</RevealUp></h2>
            </div>
            <div className="col-span-3 xl:col-span-4 px-5 xl:px-10">
                <LineSlideRight />
            </div>
        </div>
        <h5 className="text-center font-['Rajdhani'] text-sm xl:text-[16px]">Checkout some of my projects by area of expertise</h5>
        <div className="scroll-slider-container">
            <div className="">
                <ScrollSlider text={"Web Development"} imgSrc={"/web.png"} offset="-30%" direction={"left"} />
            </div>
            <div className="w-full grid grid-cols-12">
                <div className="col-span-4 xl:col-span-5 px-5 xl:px-10">
                    <LineSlideLeft />                    
                </div>
                <div className="col-span-4 xl:col-span-2 flex justify-center">
                    <h2 className="text-sm xl:text-[25px] leading-[5px] text-gray-400">Click here to view projects</h2>
                </div>
                <div className="col-span-4 xl:col-span-5 px-5 xl:px-10">
                    <LineSlideRight />
                </div>
            </div>
            <ScrollSlider text={"Network Administration"} imgSrc={"/router.png"} offset="-40%" direction={"right"} />
            <div className="w-full grid grid-cols-12">
                <div className="col-span-4 xl:col-span-5 px-5 xl:px-10">
                    <LineSlideLeft />                    
                </div>
                <div className="col-span-4 xl:col-span-2 flex justify-center">
                    <h2 className="text-sm xl:text-[25px] leading-[5px] text-gray-400">Click here to view projects</h2>
                </div>
                <div className="col-span-4 xl:col-span-5 px-5 xl:px-10">
                    <LineSlideRight />
                </div>
            </div>
            <ScrollSlider text={"Game Development"} imgSrc={"/controller2.png"} offset="-20%" direction={"left"} />
        </div>
    </>
    );
}

const MaskedTextSection = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const size = isHovered ? 400 : 30;
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            const container = document.getElementById("mask-container");
            if (container) {
                const rect = container.getBoundingClientRect();
                setMousePos({
                    x: e.pageX - rect.left - window.scrollX,
                    y: e.pageY - rect.top - window.scrollY,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
        <div className="mask-text relative overflow-visible" id="mask-container">
            <p className="text-3xl xl:text-[64px]  xl:leading-[58px] pt-24 xl:pt-52 pb-24 xl:pb-52 px-5 xl:px-10"><SplitTextReveal>I am a full-stack Web Developer with a <span className="text-[var(--accent-color)]">3+ years</span> of experience with <span className="text-[var(--accent-color)]">enthusiasm</span> of learning new technologies and trends. The diversity of my skills allows me to approach design challenges from multiple perspectives.</SplitTextReveal></p>
            <motion.div className="text-4xl xl:text-[40px] hidden xl:block leading-[80px] mask-paragraph pt-24 xl:pt-52 pb-24 xl:pb-52 px-10"
            animate={{
                WebkitMaskPosition: `${mousePos.x - size / 2}px ${mousePos.y - size / 2}px`,
                WebkitMaskSize: `${size}px`
            }}
            transition={{
                type: "tween",
                ease: "backOut"
            }}
            
            >
                <p
                className="font-['Gulzar'] text-right select-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >میں ایک مکمل اسٹیک ویب ڈویلپر ہوں، جس کے پاس نئی ٹیکنالوجیز اور رجحانات سیکھنے کے جوش کے ساتھ 3+ سال کا تجربہ ہے۔ میری مہارتوں کا تنوع مجھے متعدد نقطہ نظر سے ڈیزائن کے چیلنجوں سے نمٹنے کی اجازت دیتا ہے۔</p>
            </motion.div>
        </div>
    );
}



export default Home;