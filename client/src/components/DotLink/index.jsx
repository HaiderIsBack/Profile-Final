import "./index.css";
import { Link } from "react-router-dom";

const DotLink = ({ href, value, target }) => {
    const targetAction = target === "new-tab" ? "_blank" : "_self";
    return (
    <Link to={href} target={targetAction} className="link-dot-btn">
        <span className="link-dot"><span className="link-dot-arrow" style={{scale: "none", rotate: "none"}}></span></span>
        <p className="link-dot-text">
           <span className="hidden-text text-3xl">{value}</span>
           <span className="text-1 text-3xl">{value}</span>
           <span className="text-2 text-3xl">{value}</span>
        </p>
    </Link>
    );
}

const DotDownloadLink = ({ href, value }) => {
    return (
    <a href={href} download className="link-dot-btn">
        <span className="link-dot"><span className="link-dot-arrow" style={{scale: "none", rotate: "none"}}></span></span>
        <p className="link-dot-text">
           <span className="hidden-text text-3xl">{value}</span>
           <span className="text-1 text-3xl">{value}</span>
           <span className="text-2 text-3xl">{value}</span>
        </p>
    </a>
    );
}

export default DotLink;
export { DotDownloadLink };