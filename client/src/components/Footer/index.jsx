import { RevealUp } from "../Animations/Text";
import DotLink, { DotDownloadLink } from "../DotLink";


const Footer = () => {
    
    return (
        <footer className="container mx-auto py-10 px-10 xl:px-0">
            <div className="w-full py-24 border-[1px] border-[#444] flex flex-col justify-center items-center rounded-3xl">
                <h3 className="text-3xl xl:text-[46px] font-['Mango']">Looking for a new talent?</h3>
                <h2 className="text-4xl xl:text-[100px] hover:text-[var(--accent-color)] cursor-pointer duration-300 email-link my-5">Haidershahpak17@gmail.com</h2>
                <div className="flex gap-10 xl:gap-24">
                    <DotLink href={"https://www.linkedin.com/in/syed-zulqarnain-haider-151655247/"} value={"LinkedIn"} target={"new-tab"} />
                    <DotDownloadLink href={"/docs/Syed-Zulqarnain-Haider-Resume.pdf"} value={"Download CV"} />
                </div>
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-between items-center mt-10">
                <p className="text-lg xl:text-xl">© {new Date().getFullYear()} Zulqarnain H.</p>
                <p className="text-lg xl:text-xl"><span className="available-signal"></span> Available for a full-time position</p>
                <p className="text-lg xl:text-xl">Made by Zulqarnain H.</p>
            </div>
        </footer>
    )
}

export default Footer;