import "./index.css";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DotLink from "../../components/DotLink";
import ScrollSlider from "../../components/ScrollSlider";

const Home = () => {
    const { scrollYProgress } = useScroll();
    const leftTrackX = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rightTrackX = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
    <>
        <div className="hero">
            <div className="grid grid-cols-12">
                <motion.div className="col-span-4 relative text-right flex flex-col justify-center pr-5 hover:pr-10 duration-200 select-none" style={{x: leftTrackX}}>
                    <h2 className="text-[64px] leading-[58px]">ZULQARNAIN H.</h2>
                    <p className="text-xl">based in Lahore, Pakistan</p>
                    <p className="text-xl"><span className="available-signal"></span> Available for a full-time position</p>
                </motion.div>
                <div className="col-span-4 flex justify-center items-center">
                    <div className="border-[1px] border-[var(--accent-color)] rounded-full w-full aspect-square p-2">
                        <div className="w-full h-full bg-gradient-to-tr from-[var(--accent-color)] to-[var(--accent-secondary-color)] rounded-full">
                            <img src="/zulqarnain.png" alt="Zulqarnain" className="w-full h-full rounded-full" />
                        </div>
                    </div>
                </div>
                <motion.div className="col-span-4 flex flex-col justify-center pl-5 hover:pl-10 duration-200 select-none" style={{ x: rightTrackX }}>
                    <h2 className="text-[64px] leading-[58px]">Web Developer</h2>
                    <h2 className="text-[64px] leading-[58px]">& Network Engineer</h2>
                </motion.div>
            </div>
        </div>
        
        <MaskedTextSection />
        <div className="flex justify-center mb-36">
            <DotLink href={"/about"} value={"Learn More"} />
        </div>

        <div className="w-full grid grid-cols-12">
            <div className="col-span-4 px-10">
                <div className="w-full h-[1px] bg-gray-700"></div>                    
            </div>
            <div className="col-span-4 flex justify-center">
                <h2 className="text-[49px] leading-[10px]">Discover my creative expertise</h2>
            </div>
            <div className="col-span-4 px-10">
                <div className="w-full h-[1px] bg-gray-700"></div>
            </div>
        </div>
        <h5 className="text-center font-['Rajdhani'] text-[16px] mt-5">Checkout some of my projects by area of expertise</h5>
        <div className="scroll-slider-container">
            <div className="">
                <ScrollSlider text={"Web Development"} imgSrc={"/web.png"} offset="-30%" direction={"left"} />
            </div>
            <div className="w-full grid grid-cols-12">
                <div className="col-span-5 px-10">
                    <div className="w-full h-[1px] bg-gray-700"></div>                    
                </div>
                <div className="col-span-2 flex justify-center">
                    <h2 className="text-[25px] leading-[5px] text-gray-400">Click here to view projects</h2>
                </div>
                <div className="col-span-5 px-10">
                    <div className="w-full h-[1px] bg-gray-700"></div>
                </div>
            </div>
            <ScrollSlider text={"Network Administration"} imgSrc={"/router.png"} offset="-40%" direction={"right"} />
            <div className="w-full grid grid-cols-12">
                <div className="col-span-5 px-10">
                    <div className="w-full h-[1px] bg-gray-700"></div>                    
                </div>
                <div className="col-span-2 flex justify-center">
                    <h2 className="text-[25px] leading-[5px] text-gray-400">Click here to view projects</h2>
                </div>
                <div className="col-span-5 px-10">
                    <div className="w-full h-[1px] bg-gray-700"></div>
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
            <p className="text-[64px] leading-[58px] pt-52 pb-52 px-10">I am a full-stack Web Developer with a <span className="text-[var(--accent-color)]">3+ years</span> of experience with <span className="text-[var(--accent-color)]">enthusiasm</span> of learning new technologies and trends. The diversity of my skills allows me to approach design challenges from multiple perspectives.</p>
            <motion.div className="text-[40px] leading-[80px] mask-paragraph pt-52 pb-52 px-10"
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