import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [ripples, setRipples] = useState([]);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = (e) => {
            setIsClicked(true);
            const newRipple = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY
            };
            setRipples(prev => [...prev, newRipple]);
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== newRipple.id));
            }, 600);
        };
        const handleMouseUp = () => setIsClicked(false);

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = 
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' || 
                target.closest('a') || 
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';
            
            setIsHovered(isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Click Ripples */}
            {ripples.map(ripple => (
                <motion.div
                    key={ripple.id}
                    initial={{ width: 0, height: 0, opacity: 0.5 }}
                    animate={{ width: 100, height: 100, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                        position: 'fixed',
                        left: ripple.x,
                        top: ripple.y,
                        border: '2px solid var(--primary)',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                        zIndex: 9998,
                        translateX: '-50%',
                        translateY: '-50%'
                    }}
                />
            ))}

            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: isHovered ? 60 : 20,
                    height: isHovered ? 60 : 20,
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    opacity: 0.3,
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    mixBlendingMode: 'difference'
                }}
                animate={{
                    scale: isClicked ? 0.5 : (isHovered ? 1.5 : 1),
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                animate={{
                    opacity: isClicked ? 0.8 : [1, 0.5, 1],
                    scale: isClicked ? 1.5 : [1, 1.2, 1]
                }}
                transition={{
                    opacity: { duration: 1.5, repeat: isClicked ? 0 : Infinity, ease: "easeInOut" },
                    scale: { duration: isClicked ? 0.1 : 1.5, repeat: isClicked ? 0 : Infinity, ease: "easeInOut" }
                }}
            />
        </>
    );
};

export default CustomCursor;
