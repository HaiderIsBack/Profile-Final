import React from "react";
import { motion } from "framer-motion";

export const RevealUp = ({ children, lineHeight }) => {
    const text = React.Children.toArray(children).join("");
    const words = text.split(" ");
    return (
        <span className={`relative overflow-hidden inline-block ${"leading-["+lineHeight+"]"}`}>
            {words.map((word, i) => (
                <motion.span key={i} className={`inline-block mr-[6px] ${"leading-["+lineHeight+"]"}`}
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
}

export const RevealUpFromLeft = ({ children }) => {
    return (
        <div className="relative overflow-hidden">
            {
                children.split("").map((elem, i) => {
                    return (
                        <motion.span key={i} className="inline-block"
                        initial={{y: "100%", clipPath: "inset(0 0 100% 0)"}}
                        whileInView={{y: 0, clipPath: "inset(0 0 0% 0)"}}
                        viewport={{once: true}}
                        transition={{duration: 1.2, delay: 0.25 * i, ease: [0.83, 0, 0.17, 1]}}
                        >{elem === " " ? "\u00A0" : elem}</motion.span>
                    )
                })
            }
        </div>
    );
}

export const RevealUpFromRight = ({ children }) => {
    return (
        <div className="relative overflow-hidden">
            {
                children.split(" ").map((elem, i) => {
                    return (
                        <motion.span key={i} className="inline-block"
                        initial={{y: "100%", clipPath: "inset(0 0 100% 0)"}}
                        whileInView={{y: 0, clipPath: "inset(0 0 0% 0)"}}
                        viewport={{once: true}}
                        transition={{duration: 0.2, delay: 0.25 * i, ease: [0.83, 0, 0.17, 1]}}
                        >{elem === " " ? "\u00A0" : elem}</motion.span>
                    )
                })
            }
        </div>
    );
}
