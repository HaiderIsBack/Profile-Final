import { useEffect } from "react";

import Lenis from "@studio-freight/lenis";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LenisScroll = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(() => lenis.raf);
        }
    }, []);

    return null;
}

export default LenisScroll;