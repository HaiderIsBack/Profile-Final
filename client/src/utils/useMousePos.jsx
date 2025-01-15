import { useEffect, useState } from "react"

const useMousePos = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePos = (e) => {
            setMousePos({ x: e.pageX, y: e.pageY });
        };

        window.addEventListener("mousemove", updateMousePos);

        return () => {
            window.removeEventListener("mousemove", updateMousePos);
        };
    }, []);

    return mousePos;
}

export default useMousePos;