import { DotDownloadLink } from "../../components/DotLink";
import ScrollingLine from "../../components/ScrollingLine";

const About = () => {
    return (
    <>
        <div className="container mx-auto relative mb-24">
            <div className="w-full grid grid-cols-2">
                <div className="col-span-1">
                    <h2 className="text-right mr-28 text-[7vw]">Web Developer</h2>
                </div>
                <div className="col-span-1">
                    <h2 className="text-left ml-28 text-[7vw]">Network Engineer</h2>
                </div>
            </div>
            <img src="/web.png" alt="Websites" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[400px]" />
        </div>

        <ScrollingLine height="70px" />

        <div className="container mx-auto my-10">
            <div className="grid grid-cols-3">
                <div className="col-span-1 px-10">
                    <div className="border-[1px] border-[var(--accent-color)] rounded-full w-full aspect-square p-2">
                        <div className="w-full h-full bg-gradient-to-tr from-[var(--accent-color)] to-[var(--accent-secondary-color)] rounded-full">
                            <img src="/zulqarnain.png" alt="Zulqarnain" className="w-full h-full rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 px-10">
                    <h6 className="text-[76px] font-['Rajdhani'] leading-[84px]">I craft digital experiences combining <p className="inline-block leading-[84px]">design, motion & development</p></h6>
                    <p className="my-10 text-[40px] text-[#BDBDBD] font-[sans-serif] leading-[48px]">
                    My creative journey began 5 years ago when I discovered a passion for everything that could be created through a computer. Curious and driven by the desire to learn and practice, I spent countless hours learning graphic and motion design, as well as web development, through online resources and personal projects. All of this naturally led me to pursue a diploma in Computer Information Technology, where I was able to further develop my skills and knowledge in the field. I am now eager to continue my studies in this field and then quickly apply my skills in a professional setting.
                    </p>
                    <div className="inline-block my-5">
                        <DotDownloadLink href={"/docs/Syed-Zulqarnain-Haider-Resume.pdf"} value={"Download CV"} />
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto">
            <div className="flex justify-between gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <div className="w-full h-[1px] bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <h2 className="text-[70px]">Talents</h2>
                </div>
                <div className="col-span-2">
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
        </div>

        <div className="container mx-auto">
            <div className="flex justify-between gap-5 items-center my-10">
                <p className="inline-block text-xl">About</p>
                <div className="w-full h-[1px] bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <h2 className="text-[70px]">Skills</h2>
                </div>
                <div className="col-span-2">
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
        </div>

        {/* Experience */}
    </>
    );
}

export default About;