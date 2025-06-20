import "./index.css";
import { DotDownloadLink } from "../../components/DotLink";
import ScrollingLine from "../../components/ScrollingLine";
import { Gradient } from "../../assets/Gradient";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealUp ,LineSlideRight } from "../../components/Animations/Text";

const About = () => {
    const { scrollYProgress } = useScroll();
    const leftTrackX = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const rightTrackX = useTransform(scrollYProgress, [0, 1], [0, 250]);

    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, []);
    return (
    <>
        <div className="container mx-auto relative my-24">
            <div className="w-full grid grid-cols-2">
                <motion.div className="col-span-1" style={{x: leftTrackX}}>
                    <h2 className="text-center font-['Mango'] pr-5 text-[10vw]">Web Developer</h2>
                </motion.div>
                <motion.div className="col-span-1" style={{x: rightTrackX}}>
                    <h2 className="text-center font-['Mango'] pl-5 text-[10vw]">Network Engineer</h2>
                </motion.div>
            </div>
            <img src="/web.png" alt="Websites" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[400px]" loading="lazy" />
        </div>

        <ScrollingLine height="70px" />

        <section className="container mx-auto my-10">
            <div className="grid grid-cols-3">
                <div className="col-span-1 px-10">
                    <div className="border-[1px] border-[var(--accent-color)] rounded-full w-full aspect-square p-2 sticky top-0">
                        <div className="w-full h-full relative">
                            <canvas id="gradient-canvas" data-transition-in className="rounded-full" />
                            <img src="/zulqarnain.png" alt="Zulqarnain" className="absolute top-0 left-0 w-full h-full rounded-full" loading="lazy" />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 px-10">
                    <h6 className="text-[76px] font-['Mango'] leading-[74px]"><RevealUp fontFamily="Mango" lineHeight="74px">I  craft  digital  experiences  combining</RevealUp> <p className="inline-block leading-[64px]"><RevealUp lineHeight="64px">design, motion & development</RevealUp></p></h6>
                    <p className="my-10 text-[55px] text-[#BDBDBD] font-['Mango'] leading-[55px]">
                    My creative journey began 5 years ago when I discovered a passion for everything that could be created through a computer. Curious and driven by the desire to learn and practice, I spent countless hours learning graphic and motion design, as well as web development, through online resources and personal projects. All of this naturally led me to pursue a diploma in Computer Information Technology, where I was able to further develop my skills and knowledge in the field. I am now eager to continue my studies in this field and then quickly apply my skills in a professional setting.
                    </p>
                    <div className="inline-block my-5">
                        <DotDownloadLink href={"/docs/Syed-Zulqarnain-Haider-Resume.pdf"} value={"Download CV"} />
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto">
            <div className="flex gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <LineSlideRight />
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <h2 className="text-[70px] font-['Mango']"><RevealUp fontFamily="Mango">Talents</RevealUp></h2>
                </div>
                <div className="col-span-2">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <h3 className="text-[50px] font-light mb-2"><RevealUp>Product Design</RevealUp></h3>
                            <div className="flex flex-col mb-10">
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>UI/UX Design</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Prototyping</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>System Design</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Execution</RevealUp></p>
                            </div>
                            <h3 className="text-[50px] font-light mb-2"><RevealUp>Web Development</RevealUp></h3>
                            <div className="flex flex-col">
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Frontend Development</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Backend Development</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Motion Design</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Wordpress</RevealUp></p>
                            </div>
                        </div>
                        <div className="col-span-1">
                        <h3 className="text-[50px] font-light mb-2"><RevealUp>Network Design</RevealUp></h3>
                            <div className="flex flex-col">
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Topology Prototyping</RevealUp></p>
                                <p className="text-2xl text-[#BDBDBD] leading-[25px]"><RevealUp lineHeight={"25px"}>Routing and Switching</RevealUp></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto">
            <div className="flex gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <LineSlideRight />
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <h2 className="text-[70px] font-['Mango']"><RevealUp fontFamily="Mango">Skills</RevealUp></h2>
                </div>
                <div className="col-span-2">
                    <div className="flex items-center flex-wrap gap-y-5">
                        <h6 className="text-[50px]">HTML</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">CSS</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">JavaScript</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">Java</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">ReactJs</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">NodeJs</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">ExpressJs</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">TailwindCSS</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">C/C++</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">Python</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">GSAP</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">Framer Motion</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">WordPress</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">CCNA/CCNP</h6> <span className="dot"></span> 
                        <h6 className="text-[50px]">Cisco/Huawei Routing & Switching</h6>
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto">
            <div className="flex gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <LineSlideRight />
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <h2 className="text-[70px] font-['Mango']"><RevealUp fontFamily="Mango">Experience</RevealUp></h2>
                </div>
                <div className="col-span-2 pt-3">
                    <div className="mb-5">
                        <h3 className="text-[70px] leading-[55px] mb-2">Web Developer</h3>
                        <p className="text-[30px] text-[#BDBDBD] mb-1">@King Solutions</p>
                        <div className="flex items-center gap-2 text-[20px] text-[#BDBDBD]">
                            <p>2 February 2024</p>
                            <span className="right-arrow"></span>
                            <p>2 August 2024</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-[70px] leading-[55px] mb-2">Web Developer</h3>
                        <p className="text-[30px] text-[#BDBDBD] mb-1">@Sigma Engineering Services</p>
                        <div className="flex items-center gap-2 text-[20px] text-[#BDBDBD]">
                            <p>2 September 2024</p>
                            <span className="right-arrow"></span>
                            <p>30 April 2025</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-[70px] leading-[55px] mb-2">Wordpress Developer</h3>
                        <p className="text-[30px] text-[#BDBDBD] mb-1">@AMG Advertising - {"[Remote]"}</p>
                        <div className="flex items-center gap-2 text-[20px] text-[#BDBDBD]">
                            <p>7 May 2025</p>
                            <span className="right-arrow"></span>
                            <p>Present</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-[70px] leading-[55px] mb-2">NextJs Developer & Animator</h3>
                        <p className="text-[30px] text-[#BDBDBD] mb-1">@CodeNativeX - {"[Remote]"}</p>
                        <div className="flex items-center gap-2 text-[20px] text-[#BDBDBD]">
                            <p>28 May 2025</p>
                            <span className="right-arrow"></span>
                            <p>Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto mb-52">
            <div className="flex gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <LineSlideRight />
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <h2 className="text-[70px] font-['Mango']"><RevealUp fontFamily="Mango">Certifications</RevealUp></h2>
                </div>
                <div className="col-span-2">
                    <div className="col-span-1 mb-5">
                        <a href="https://simpli-web.app.link/e/ezg4jzcikLb" target="_blank" className="inline-block group">
                            <h3 className="text-[70px] leading-[55px] group-hover:text-[var(--accent-color)] duration-300 mb-2">MERN Stack <span className="link-chain"></span></h3>
                            <p className="text-[30px] text-[#BDBDBD] mb-1">@Simplilearn</p>
                            <div className="flex items-center gap-2 text-[20px] text-[#BDBDBD]">
                                <p>July 2024</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 mt-10">
                        <a href="https://www.credly.com/badges/5282a9b4-5f8c-46bd-b4a5-b137a971046b/linked_in_profile" target="_blank" className="inline-block group">
                            <h3 className="text-[70px] leading-[55px] group-hover:text-[var(--accent-color)] duration-300 mb-2">Python Essentials 1 <span className="link-chain"></span></h3>
                            <p className="text-[30px] text-[#BDBDBD] mb-1">@Cisco</p>
                            <div className="flex items-center gap-2 text-[20px] text-[#BDBDBD]">
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