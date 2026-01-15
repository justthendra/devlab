"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

export default function CustomCursor() {
    const { theme } = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        const handleMouseOut = () => {
            setIsHovered(false);
        };

        // Hide cursor when leaving window
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);


        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    // Don't render on mobile or if disabled
    // The variables 'isMobile' and 'mounted' are not defined in the original context.
    // Assuming the intent was to replace the existing cursor rendering logic,
    // but without 'isMobile' or 'mounted', this line would cause an error.
    // For now, I will comment it out or remove it to maintain syntactical correctness.
    // If these variables are meant to be introduced, they need to be defined.
    // if (isMobile || !mounted) return null;

    return (
        <>
            {/* Main Dot - Follows instantly */}
            <motion.div
                className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] 
          ${theme === 'dark' ? 'bg-white mix-blend-difference' : 'bg-black'}
        `}
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Follower Ring - Smooth spring physics */}
            <motion.div
                className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border
          ${theme === 'dark' ? 'border-indigo-400' : 'border-black'}
        `}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovered ? 48 : 24,
                    height: isHovered ? 48 : 24,
                    opacity: isHovered ? 0.8 : 0.4,
                    backgroundColor: isHovered
                        ? (theme === 'dark' ? 'rgba(129, 140, 248, 0.1)' : 'rgba(0, 0, 0, 0.05)')
                        : 'transparent',
                }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 400,
                    mass: 0.5
                }}
            />
        </>
    );
}
