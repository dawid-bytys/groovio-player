import React, { useState } from "react";
import "./Player.scss";

const Player = props => {
    const [isPlaying, setIsPlaying] = useState(false);

    const switchPlaying = () => {
        isPlaying ? setIsPlaying(false) : setIsPlaying(true);
    };

    return (
        <div className="Player">
            <div className="Player__top">
                <span className="Player__text">Player</span>
                <button className="Player__queue-btn-box">
                    <i className="fas fa-list-music Player__queue-btn"></i>
                </button>
            </div>
            <div className="Player__bottom">
                <div className="Player__controls">
                    <button className="Player__controls-btn-box Player__loop-btn-box">
                        <i className="fas fa-redo-alt fa-2x Player__loop-btn"></i>
                    </button>
                    <button className="Player__controls-btn-box Player__backward-btn-box">
                        <i className="fas fa-step-backward fa-2x Player__backward-btn"></i>
                    </button>
                    {isPlaying ? (
                        <button
                            onClick={switchPlaying}
                            className="Player__controls-btn-box Player__pause-btn-box"
                        >
                            <i className="far fa-pause-circle fa-5x Player__pause-btn"></i>
                        </button>
                    ) : (
                        <button
                            onClick={switchPlaying}
                            className="Player__controls-btn-box Player__play-btn-box"
                        >
                            <i className="far fa-play-circle fa-5x Player__play-btn"></i>
                        </button>
                    )}
                    <button className="Player__controls-btn-box Player__forward-btn-box">
                        <i className="fas fa-step-forward fa-2x Player__forward-btn"></i>
                    </button>
                    <button className="Player__controls-btn-box Player__shuffle-btn-box">
                        <i className="fas fa-random fa-2x Player__shuffle-btn"></i>
                    </button>
                </div>

                <div className="Player__lyrics"></div>
            </div>
        </div>
    );
};

export default Player;