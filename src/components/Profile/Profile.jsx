import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from "universal-cookie";

import "./Profile.scss";

const cookies = new Cookies();

const Profile = () => {
    const [profilePicture, setProfilePicture] = useState('');
    const [displayName, setDisplayName] = useState('');

    const fetchData = async () => {
        const request = await axios.get('/fetchData');
        const response = await request.data;

        setProfilePicture(response.images[0].url);
        setDisplayName(response.display_name);
    }

    useEffect(() => {
        cookies.get("accessToken") && fetchData();
    },[]);

    return (
        <div className="Profile">
            {!cookies.get("accessToken") ? (
                <button
                    className="Profile__login-btn"
                    onClick={() => (window.location = `${window.location.href}login`)}
                >
                    Login with Spotify
                </button>
            ) : (
                <button className="Profile__banner">
                    <div className="Profile__picture-box">
                        <img src={profilePicture} alt="Profile" className="Profile__picture" />
                    </div>
                    <div className="Profile__display-name-box">
                        <span className="Profile__display-name">{displayName}</span>
                    </div>
                </button>
            )}
        </div>
    );
};

export default Profile;