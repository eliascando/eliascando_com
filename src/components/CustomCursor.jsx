import { useEffect, useRef } from 'react';
import '../css/CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const mouseRef = useRef({ x: 0, y: 0 });
    const requestRef = useRef(null);

    useEffect(() => {
        const onMouseMove = (event) => {
            mouseRef.current = { x: event.clientX, y: event.clientY };
        };

        window.addEventListener('mousemove', onMouseMove);

        const animate = () => {
            const { x: currentX, y: currentY } = positionRef.current;
            const { x: targetX, y: targetY } = mouseRef.current;

            // Smooth lerp
            const distX = targetX - currentX;
            const distY = targetY - currentY;

            positionRef.current.x = currentX + distX * 0.15;
            positionRef.current.y = currentY + distY * 0.15;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return <div className="custom-cursor" ref={cursorRef} />;
};

export default CustomCursor;
