import './Map.css';
import World from '@svg-maps/world';
import { SVGMap } from 'react-svg-map';

import 'react-svg-map/lib/index.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Map = ({ mouseCoordinates }) => {
    const [location, setLocation] = useState(null);
    const [locId, setLocId] = useState(null);

    useEffect(() => {
        const val = document.querySelector(`#${locId}`);
        if (val) {
            val.classList.add('your-hover-class');
            console.log('Class Added');
            // val.style.fill = "red";
        }
        console.log(locId);
        return () => {
            // Clean up the class on component unmount or when hover ends
            if (val) {
                val.classList.remove('your-hover-class');
                console.log('Class Removed');
            }
        };
    }, [locId]);

    const handleMouseOver = (e) => {
        console.log('Mouse Over');
        const pointedLocation = e.target.attributes.name.value;
        const pointedLocationId = e.target.attributes.id.value;
        setLocId(pointedLocationId);
        setLocation(pointedLocation);
        // console.log(pointedLocationId);
    };

    const handleMouseOut = () => {
        console.log('Mouse out');
        setLocation(null);
        setLocId(null);
    };

    const getLocationClassName = (location, index) => {
        // console.log(location)
    };

    const style = {
        top: mouseCoordinates.y - 30,
        left: mouseCoordinates.x - 40,
    };

    return (
        <div>
            <SVGMap
                map={World}
                locationClassName={getLocationClassName}
                onLocationMouseOver={handleMouseOver}
                onLocationMouseOut={handleMouseOut}
                className="map"
                id="map"
            />
            {location && (
                <>
                    <div className="tooltip" style={style}>
                        <div className="tooltip-main">
                            {location ? `${location}` : 'None'}
                        </div>
                        <div className="tooltip-arrow"></div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Map;
