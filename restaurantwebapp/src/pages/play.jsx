import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom"
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
import { FaMapLocationDot } from "react-icons/fa6";

export const Play = () => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [restaurants, setRestaurants] = useState([])
    
    const getLocation = () => {
        if(navigator.geolocation) {
            setLoading(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude } = position.coords;
                    setLocation({latitude, longitude});
                    setLoading(false);
                },
                (err) => {
                    setError('Unable to retrieve your location');
                    setLoading(false);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };
    

    return (
        <div>
            <div className='start'><p>Let's Get Started!</p></div>
            <div className='location-dot'><FaMapLocationDot size={42}/></div>
            <div>
                {!location && !loading && (
                    <button onClick={getLocation} className="get-location-button">
                        Share My Location
                    </button>
                )}
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {location && (
                    <div>
                        <p>Your location: {location.latitude}, {location.longitude}</p>
                        <button>Proceed</button>
                    </div>
                )}
            </div>
        </div>
    );
};