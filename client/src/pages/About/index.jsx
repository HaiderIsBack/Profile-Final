import "./index.css";
import { DotDownloadLink } from "../../components/DotLink";
import ScrollingLine from "../../components/ScrollingLine";
import { Gradient } from "../../assets/Gradient";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealUp ,LineSlideRight } from "../../components/Animations/Text";
import useScreenSize from "../../hooks/useScreenSize";

import { Helmet } from "react-helmet-async";

const About = () => {
    const screenSize = useScreenSize();
    const { scrollYProgress } = useScroll();
    const leftTrackX = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const rightTrackX = useTransform(scrollYProgress, [0, 1], [0, 250]);

    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");

        return () => {
            gradient.disconnect();
        };
    }, []);
    return (
    <>
        {/* SEO */}
        <Helmet>
            <title>About Zulqarnain H. | Web Developer from Lahore</title>
            <meta name="description" content="Learn more about Syed Zulqarnain Haider, a skilled Web Developer and Network Engineer with 3+ years of experience based in Lahore, Pakistan." />
            <meta name="keywords" content="About Syed Zulqarnain Haider, Web Developer in Lahore, ReactJS Developer, Network Engineer" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.syed-zulqarnain-haider.vercel.app/about" />
        </Helmet>
        {/* SEO */}

        <div className="container mx-auto relative my-5 xl:my-24">
            <img src="/web.png" alt="Websites" className="mx-auto xl:mx-0 xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 w-[250px] xl:w-[400px]" loading="lazy" />
            <div className="w-full grid grid-cols-2">
                <motion.div className="col-span-12 xl:col-span-1" style={{x: leftTrackX}}>
                    <h2 className="text-center font-['Mango'] pr-0 xl:pr-5 text-5xl xl:text-[10vw]">Web Developer</h2>
                </motion.div>
                <motion.div className="col-span-12 xl:col-span-1" style={{x: rightTrackX}}>
                    <h2 className="text-center font-['Mango'] pl-0 xl:pl-5 text-5xl xl:text-[10vw]">Network Engineer</h2>
                </motion.div>
            </div>
        </div>

        <ScrollingLine height="70px" />

        <section className="container mx-auto my-10">
            <div className="grid grid-cols-3 gap-y-5 xl:gap-y-0">
                <div className="col-span-3 xl:col-span-1 px-5 xl:px-10">
                    <div className="border-[1px] border-[var(--accent-color)] rounded-full w-[250px] xl:w-full aspect-square p-2 sticky top-0 mx-auto xl:mx-0">
                        <div className="w-full h-full relative">
                            <canvas id="gradient-canvas" data-transition-in className="rounded-full" />
                            <img src="/zulqarnain.png" alt="Zulqarnain" className="absolute top-0 left-0 w-full h-full rounded-full" loading="lazy" />
                        </div>
                    </div>
                </div>
                <div className="col-span-3 xl:col-span-2 px-5 xl:px-10 mt-5 xl:mt-0">
                    <h3 className="text-5xl xl:text-[76px] font-['Mango'] xl:leading-[74px]"><RevealUp fontFamily="Mango" lineHeight={screenSize.width < 1280 ? "48px" : "74px"}>I  craft  digital  experiences  combining</RevealUp> <p className="inline-block xl:leading-[64px]"><RevealUp lineHeight={screenSize.width < 1280 ? "48px" : "64px"}>design, motion & development</RevealUp></p></h3>
                    <p className="my-10 text-5xl xl:text-[55px] text-[#BDBDBD] font-['Mango'] leading-[55px]">
                    My creative journey began 5 years ago when I discovered a passion for everything that could be created through a computer. Curious and driven by the desire to learn and practice, I spent countless hours learning graphic and motion design, as well as web development, through online resources and personal projects. All of this naturally led me to pursue a diploma in Computer Information Technology, where I was able to further develop my skills and knowledge in the field. I am now eager to continue my studies in this field and then quickly apply my skills in a professional setting.
                    </p>
                    <div className="block xl:inline-block my-5 mx-auto xl:mx-0">
                        <DotDownloadLink href={"/docs/Syed-Zulqarnain-Haider-Resume.pdf"} value={"Download CV"} />
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto px-5 xl:px-0">
            <div className="flex gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <LineSlideRight />
            </div>
            <div className="grid grid-cols-3 gap-y-5 xl:gap-y-0">
                <div className="col-span-3 xl:col-span-1">
                    <h4 className="text-5xl xl:text-[70px] font-['Mango']"><RevealUp fontFamily="Mango">Talents</RevealUp></h4>
                </div>
                <div className="col-span-3 xl:col-span-2">
                    <div className="grid grid-cols-2">
                        <div className="col-span-2 xl:col-span-1">
                            <h5 className="text-[50px] font-light mb-2"><RevealUp>Product Design</RevealUp></h5>
                            <div className="flex flex-col mb-10">
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>UI/UX Design</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Prototyping</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>System Design</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Execution</RevealUp></p>
                            </div>
                            <h5 className="text-[50px] font-light mb-2"><RevealUp>Web Development</RevealUp></h5>
                            <div className="flex flex-col mb-10 xl:mb-0">
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Frontend Development</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Backend Development</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Motion Design</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Wordpress</RevealUp></p>
                            </div>
                        </div>
                        <div className="col-span-2 xl:col-span-1">
                        <h5 className="text-[50px] font-light mb-2"><RevealUp>Network Design</RevealUp></h5>
                            <div className="flex flex-col">
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Topology Prototyping</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Routing and Switching</RevealUp></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto px-5 xl:px-0">
            <div className="flex gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <LineSlideRight />
            </div>
            <div className="grid grid-cols-3 gap-y-5 xl:gap-y-0">
                <div className="col-span-3 xl:col-span-1">
                    <h4 className="text-5xl xl:text-[70px] font-['Mango']"><RevealUp fontFamily="Mango">Skills</RevealUp></h4>
                </div>
                <div className="col-span-3 xl:col-span-2">
                    <div className="flex items-center flex-wrap gap-y-0 xl:gap-y-5">
                        <h5 className="text-4xl xl:text-[50px]">HTML</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">CSS</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">JavaScript</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">Java</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">ReactJs</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">NodeJs</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">ExpressJs</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">TailwindCSS</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">C/C++</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">Python</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">GSAP</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">Framer Motion</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">WordPress</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">CCNA/CCNP</h5> <span className="dot"></span> 
                        <h5 className="text-4xl xl:text-[50px]">Cisco/Huawei Routing & Switching</h5>
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto px-5 xl:px-0">
            <div className="flex gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <LineSlideRight />
            </div>
            <div className="grid grid-cols-3 gap-y-5 xl:gap-y-0">
                <div className="col-span-3 xl:col-span-1">
                    <h4 className="text-5xl xl:text-[70px] font-['Mango']"><RevealUp fontFamily="Mango">Experience</RevealUp></h4>
                </div>
                <div className="col-span-3 xl:col-span-2 pt-3">
                    <div className="mb-5">
                        <h5 className="text-5xl xl:text-[70px] leading-[55px] mb-2">Web Developer</h5>
                        <p className="text-2xl xl:text-[30px] text-[#BDBDBD] mb-0 xl:mb-1">@King Solutions</p>
                        <div className="flex items-center gap-2 text-lg xl:text-[20px] text-[#BDBDBD]">
                            <p>2 February 2024</p>
                            <span className="right-arrow"></span>
                            <p>2 August 2024</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h5 className="text-5xl xl:text-[70px] leading-[55px] mb-2">Web Developer</h5>
                        <p className="text-2xl xl:text-[30px] text-[#BDBDBD] mb-0 xl:mb-1">@Sigma Engineering Services</p>
                        <div className="flex items-center gap-2 text-lg xl:text-[20px] text-[#BDBDBD]">
                            <p>2 September 2024</p>
                            <span className="right-arrow"></span>
                            <p>30 April 2025</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h5 className="text-5xl xl:text-[70px] leading-[55px] mb-2">Wordpress Developer</h5>
                        <p className="text-2xl xl:text-[30px] text-[#BDBDBD] mb-0 xl:mb-1">@AMG Advertising - {"[Remote]"}</p>
                        <div className="flex items-center gap-2 text-lg xl:text-[20px] text-[#BDBDBD]">
                            <p>7 May 2025</p>
                            <span className="right-arrow"></span>
                            <p>Present</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h5 className="text-5xl xl:text-[70px] leading-[48px] xl:leading-[55px] mb-2">NextJs Developer & Animator</h5>
                        <p className="text-2xl xl:text-[30px] text-[#BDBDBD] mb-0 xl:mb-1">@CodeNativeX - {"[Remote]"}</p>
                        <div className="flex items-center gap-2 text-lg xl:text-[20px] text-[#BDBDBD]">
                            <p>28 May 2025</p>
                            <span className="right-arrow"></span>
                            <p>Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto mb-52 px-5 xl:px-0">
            <div className="flex gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <LineSlideRight />
            </div>
            <div className="grid grid-cols-3 gap-y-5 xl:gap-y-0">
                <div className="col-span-3 xl:col-span-1">
                    <h4 className="text-5xl xl:text-[70px] font-['Mango']"><RevealUp fontFamily="Mango">Certifications</RevealUp></h4>
                </div>
                <div className="col-span-3 xl:col-span-2">
                    <div className="col-span-1 mb-5">
                        <a href="https://simpli-web.app.link/e/ezg4jzcikLb" target="_blank" className="inline-block group">
                            <h5 className="text-5xl xl:text-[70px] leading-[55px] group-hover:text-[var(--accent-color)] xl:block flex items-center duration-300 mb-2">MERN Stack <span className="link-chain"></span></h5>
                            <p className="text-2xl xl:text-[30px] text-[#BDBDBD] mb-0 xl:mb-1">@Simplilearn</p>
                            <div className="flex items-center gap-2 text-lg xl:text-[20px] text-[#BDBDBD]">
                                <p>July 2024</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 mt-10">
                        <a href="https://www.credly.com/badges/5282a9b4-5f8c-46bd-b4a5-b137a971046b/linked_in_profile" target="_blank" className="inline-block group">
                            <h5 className="text-5xl xl:text-[70px] leading-[55px] group-hover:text-[var(--accent-color)]  xl:block flex items-center duration-300 mb-2">Python Essentials 1 <span className="link-chain"></span></h5>
                            <p className="text-2xl xl:text-[30px] text-[#BDBDBD] mb-0 xl:mb-1">@Cisco</p>
                            <div className="flex items-center gap-2 text-lg xl:text-[20px] text-[#BDBDBD]">
                                <p>July 2024</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}

export default About;