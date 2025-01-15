import "./index.css";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className="navbar container mx-auto">
            <div className="logo">
                <Link to="/" className="link-btn">
                    <h1 className="link-text">
                        <span className="hidden-text">ZULQARNAIN H.</span>
                        <span className="text-1">ZULQARNAIN H.</span>
                        <span className="text-2">ZULQARNAIN H.</span>
                    </h1>
                </Link>
            </div>
            <nav>
                <menu>
                    <li>
                        <Link to="/" className="link-btn nav-links active">
                            <p className="link-text">
                                <span className="hidden-text">Home</span>
                                <span className="text-1">Home</span>
                                <span className="text-2">Home</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="link-btn nav-links">
                            <p className="link-text">
                                <span className="hidden-text">Projects</span>
                                <span className="text-1">Projects</span>
                                <span className="text-2">Projects</span>
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="link-btn nav-links">
                            <p className="link-text">
                                <span className="hidden-text">About</span>
                                <span className="text-1">About</span>
                                <span className="text-2">About</span>
                            </p>
                        </Link>
                    </li>
                </menu>
            </nav>
        </header>
    )
}

export default Nav;