import React, { useState } from 'react';
import axios from 'axios';
import Cookie from "universal-cookie";

import './Main.scss';

//Components import
import TopArtists from '../TopArtists/TopArtists';
import Player from '../Player/Player';
import Genres from '../Genres/Genres';
import TopCharts from '../TopCharts/TopCharts';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';

//Content import
import anonImage from '../../content/anon.png';

const cookies = new Cookie();

const Main = () => {
    const [fetchedArtists, setFetchedArtists] = useState([]);
    const [fetchedTracks, setFetchedTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState('');
    const [currentArtist, setCurrentArtist] = useState('');

    let cancel_token;

    const getUniqueListBy = (arr, key) => {
        return [...new Map(arr.map((item) => [item[key], item])).values()];
    };

    const fetchData = async val => {
        try {
            cancel_token && cancel_token.cancel();

            cancel_token = axios.CancelToken.source();

            const options = {
                headers: {Authorization: "Bearer " + cookies.get("accessToken")},
                cancelToken: cancel_token.token
            };

            let artistArray = [];
            let trackArray = [];

            if (
                cookies.get("accessToken") &&
                val.length > 7 &&
                val.startsWith("artist:")
            ) {
                const artistRequest = await axios.get(
                    `https://api.spotify.com/v1/search?q=${val.substring(7)}&type=artist`,
                    options
                );
                const artistResponse = await artistRequest.data.artists.items;

                await artistResponse.forEach((el) => {
                    artistArray.push(el);
                });

                setFetchedArtists(getUniqueListBy(artistArray, "id"));
            } else if (
                cookies.get("accessToken") &&
                val.length > 6 &&
                val.startsWith("track:")
            ) {
                const trackRequest = await axios.get(
                    `https://api.spotify.com/v1/search?q=${val.substring(6)}&type=track`,
                    options
                );
                const trackResponse = await trackRequest.data.tracks.items;

                await trackResponse.forEach((el) => {
                    trackArray.push(el);
                });

                setFetchedTracks(getUniqueListBy(trackArray, "id"));
            } else {
                setFetchedArtists([]);
                setFetchedTracks([]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const fetchResult = async (id, type) => {
        const options = {
            headers: {Authorization: "Bearer " + cookies.get("accessToken")}
        };

        if (type === 'artist') {
            try {
                const request = await axios.get(`https://api.spotify.com/v1/artists/${id}`, options);
                const response = await request.data;
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                const request = await axios.get(`https://api.spotify.com/v1/tracks/${id}`, options);
                const response = await request.data;

                setCurrentTrack(response.preview_url)
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className='Main'>
            <div className='Main__upper'>
                <div className="Main__header">
                    <Search passData={value => fetchData(value)} />
                    <Profile />
                </div>
                {(() => {
                    switch (true) {
                        case fetchedTracks.length > 0:
                            return (
                                <div className="Main__results">
                                    {fetchedTracks.map((el, index) => {
                                        return (
                                            <div key={index} className="Main__result-box">
                                                <img src={el.album.images.length ? el.album.images[0].url : anonImage} alt="Result" className="Main__result-image" />
                                                <button onClick={() => fetchResult(el.id, 'track')} className="Main__result-btn">{el.name}</button>
                                            </div>
                                        )
                                    })}
                                </div>
                            );
                        case fetchedArtists.length > 0:
                            return (
                                <div className="Main__results">
                                    {fetchedArtists.map((el, index) => {
                                        return (
                                            <div key={index} className="Main__result-box">
                                                <img src={el.images.length ? el.images[0].url : anonImage} alt="Result" className="Main__result-image" />
                                                <button onClick={() => fetchResult(el.id, 'artist')} className="Main__result-btn">{el.name}</button>
                                            </div>
                                        )
                                    })}
                                </div>
                            );
                        default:
                            return null;
                    }
                })()}
            </div>

            <div className='Main__tiles-box'>
                <TopArtists />
                <Player currentTrack={currentTrack} />
                <Genres />
                <TopCharts />
            </div>
        </div>
    );
};

export default Main;
