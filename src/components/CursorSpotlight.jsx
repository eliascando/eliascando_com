import { useEffect, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition';
import '../css/CursorSpotlight.css';

const CursorSpotlight = () => {
    const { x, y } = useMousePosition();

    const [style, setStyle] = useState({});

    useEffect(() => {
        setStyle({
            background: `radial-gradient(600px at ${x}px ${y}px, rgba(100, 255, 218, 0.07), transparent 80%)`
        });
    }, [x, y]);

    return <div className="cursor-spotlight" style={style} />;
};

export default CursorSpotlight;
