import "./index.css";
import { DotDownloadLink } from "../../components/DotLink";
import ScrollingLine from "../../components/ScrollingLine";
import { Gradient } from "../../assets/Gradient";
import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
                    <div className="border-[1px] border-[var(--accent-color)] rounded-full w-full aspect-square p-2">
                        <div className="w-full h-full relative">
                            <canvas id="gradient-canvas" data-transition-in className="rounded-full" />
                            <img src="/zulqarnain.png" alt="Zulqarnain" className="absolute top-0 left-0 w-full h-full rounded-full" loading="lazy" />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 px-10">
                    <h6 className="text-[76px] font-['Mango'] leading-[84px]">I craft digital experiences combining <p className="inline-block leading-[84px]">design, motion & development</p></h6>
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
            <div className="flex justify-between gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <div className="w-full h-[1px] bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <h2 className="text-[70px] font-['Mango']">Talents</h2>
                </div>
                <div className="col-span-2 pt-5">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <h3 className="text-[50px] font-light">Product Design</h3>
                            <div className="flex flex-col mb-10">
                                <p className="text-2xl text-[#BDBDBD]">UI/UX Design</p>
                                <p className="text-2xl text-[#BDBDBD]">Prototyping</p>
                                <p className="text-2xl text-[#BDBDBD]">System Design</p>
                                <p className="text-2xl text-[#BDBDBD]">Execution</p>
                            </div>
                            <h3 className="text-[50px] font-light">Web Development</h3>
                            <div className="flex flex-col">
                                <p className="text-2xl text-[#BDBDBD]">Frontend Development</p>
                                <p className="text-2xl text-[#BDBDBD]">Backend Development</p>
                                <p className="text-2xl text-[#BDBDBD]">Motion Design</p>
                                <p className="text-2xl text-[#BDBDBD]">Wordpress</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                        <h3 className="text-[50px] font-light">Network Design</h3>
                            <div className="flex flex-col">
                                <p className="text-2xl text-[#BDBDBD]">Topology Prototyping</p>
                                <p className="text-2xl text-[#BDBDBD]">Routing and Switching</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto">
            <div className="flex justify-between gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <div className="w-full h-[1px] bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <h2 className="text-[70px] font-['Mango']">Skills</h2>
                </div>
                <div className="col-span-2 pt-5">
                    <div className="flex items-center flex-wrap">
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
            <div className="flex justify-between gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <div className="w-full h-[1px] bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <h2 className="text-[70px] font-['Mango']">Experience</h2>
                </div>
                <div className="col-span-2 pt-3">
                    <div className="my-5">
                        <h3 className="text-[70px] leading-[55px]">Web Developer</h3>
                        <p className="text-[30px] text-[#BDBDBD]">@King Solutions</p>
                        <div className="flex items-center gap-2 text-[24px] text-[#BDBDBD]">
                            <p>2 February 2024</p>
                            <span className="right-arrow"></span>
                            <p>2 August 2024</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-[70px] leading-[55px]">Web Developer</h3>
                        <p className="text-[30px] text-[#BDBDBD]">@Sigma Engineering Services</p>
                        <div className="flex items-center gap-2 text-[24px] text-[#BDBDBD]">
                            <p>2 September 2024</p>
                            <span className="right-arrow"></span>
                            <p>Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto mb-52">
            <div className="flex justify-between gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <div className="w-full h-[1px] bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <h2 className="text-[70px] font-['Mango']">Certifications</h2>
                </div>
                <div className="col-span-2">
                    <div className="col-span-1 my-5">
                        <a href="https://simpli-web.app.link/e/ezg4jzcikLb" target="_blank" className="inline-block group">
                            <h3 className="text-[70px] leading-[55px] group-hover:text-[var(--accent-color)] duration-300">MERN Stack <span className="link-chain"></span></h3>
                            <p className="text-[30px] text-[#BDBDBD]">@Simplilearn</p>
                            <div className="flex items-center gap-2 text-[24px] text-[#BDBDBD]">
                                <p>July 2024</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 mt-10">
                        <a href="https://www.credly.com/badges/5282a9b4-5f8c-46bd-b4a5-b137a971046b/linked_in_profile" target="_blank" className="inline-block group">
                            <h3 className="text-[70px] leading-[55px] group-hover:text-[var(--accent-color)] duration-300">Python Essentials 1 <span className="link-chain"></span></h3>
                            <p className="text-[30px] text-[#BDBDBD]">@Cisco</p>
                            <div className="flex items-center gap-2 text-[24px] text-[#BDBDBD]">
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