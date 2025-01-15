import "./index.css";

const ScrollingLine = ({ height }) => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="line" style={{ height }}></div>
        </div>
    );
}

export default ScrollingLine;