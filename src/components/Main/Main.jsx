import React from 'react';
import './Main.scss';

//Components import
import TopArtists from '../TopArtists/TopArtists';
import Player from '../Player/Player';
import Genres from '../Genres/Genres';
import TopCharts from '../TopCharts/TopCharts';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';

const Main = () => {
    return (
        <div className='Main'>
            <div className='Main__upper'>
                <div className="Main__header">
                    <Search />
                    <Profile />
                </div>
            </div>

            <div className='Main__tiles-box'>
                <TopArtists />
                <Player />
                <Genres />
                <TopCharts />
            </div>
        </div>
    );
};

export default Main;
