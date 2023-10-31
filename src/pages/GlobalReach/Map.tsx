import './Map.css';
import World from '@svg-maps/world';
import { SVGMap } from 'react-svg-map';
import { countries } from './countries';

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
        // const greenland = document.querySelector('[name="Greenland"]');
        // if (greenland) {
        //     greenland.classList.add('testclass');
        // }

        // setting color for countries in the list

        for (let i = 0; i < countries.length; i++) {
            const country = document.querySelector(
                `[name="${countries[i].Country}"]`,
            );
            if (country) {
                country.classList.add('country');
            }
        }

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
            if (countries.find((country) => country.Country === location)) {
                val.classList.add('your-hover-class');
            }
        }
        return () => {
            // Clean up the class on component unmount or when hover ends
            if (val) {
                val.classList.remove('your-hover-class');
            }
        };
    }, [locId, location]);

    const handleMouseOver = (e) => {
        if (
            countries.find(
                (country) => country.Country === e.target.attributes.name.value,
            )
        ) {
            setLocation(e.target.attributes.name.value);
            setLocId(e.target.id);
        }
    };

    const handleMouseOut = () => {
        setLocation(null);
        setLocId(null);
    };
    const getLocationClassName = () => {};
    const style = {
        left: mousePosition.x,
        top: mousePosition.y,
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
                <div className="tooltip-main">{location}</div>
                {/* <div className="tooltip-arrow"></div> */}
            </div>
        </div>
    );
};

export default Map;
