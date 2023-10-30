import './Map.css';
import World from '@svg-maps/world';
import { SVGMap } from 'react-svg-map';

import 'react-svg-map/lib/index.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Map = () => {
    const [location, setLocation] = useState(null);
    const [locId, setLocId] = useState(null);

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            // console.log(e.clientX, e.clientY);
        });
        return () => {
            window.removeEventListener('mousemove', (e) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            });
        };
    }, []);

    useEffect(() => {
        const val = document.querySelector(`#${locId}`);
        if (val) {
            val.classList.add('your-hover-class');
            // console.log('Class Added');
            // val.style.fill = "red";
        }
        // console.log(locId);
        return () => {
            // Clean up the class on component unmount or when hover ends
            if (val) {
                val.classList.remove('your-hover-class');
                // console.log('Class Removed');
            }
        };
    }, [locId]);

    const handleMouseOver = (e) => {
        // console.log('Mouse Over');
        // console.log(e.target.attributes.name.value);
        setLocation(e.target.attributes.name.value);
        setLocId(e.target.id);
        // console.log(e.target.id);
    };

    const handleMouseOut = () => {
        setLocation(null);
        setLocId(null);
    };
    const getLocationClassName = () => {
        // console.log(location)
    };
    const style = {
        top: mousePosition.y,
        left: mousePosition.x,
    };

    return (
        <div className=" relative">
            <SVGMap
                map={World}
                locationClassName={getLocationClassName}
                onLocationMouseOver={handleMouseOver}
                onLocationMouseOut={handleMouseOut}
                className="map"
                id="map"
            />

            <div
                className={`tooltip ${location ? 'block' : 'hidden'} `}
                style={style}
            >
                {/* {console.log(mousePosition.x, mousePosition.y)} */}
                <div className="tooltip-main">{location}</div>
                {/* <div className="tooltip-arrow"></div> */}
            </div>
        </div>
    );
};

export default Map;
