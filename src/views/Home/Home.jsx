import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="player">
      <div className="wrapper">
        <div className="details">
          <div className="now-playing">Playing my Music</div>
          <div className="track-art"></div>
          <div className="track-name">Track Name</div>
          <div className="track-artist">Track Artist</div>
        </div>
        <div className="slider_container">
          <div className="current-time">00:00</div>
          <input
            type="range"
            min="1"
            max="100"
            value="0"
            className="seek_slider"
            onchange="seekTo()"
          />
          <div className="total-duration">00:00</div>
        </div>
        <div className="slider_container">
          <i className="fa fa-volume-down"></i>
          <input
            type="range"
            min="1"
            max="100"
            value="99"
            className="volume_slider"
            onchange="setVolume()"
          />
          <i className="fa fa-volume-up"></i>
        </div>
        <div className="buttons">
          <div className="random-track" onclick="randomTrack()">
            <i className="fas fa-random fa-2x" title="random"></i>
          </div>
          <div className="prev-track" onclick="prevTrack()">
            <i className="fa fa-step-backward fa-2x"></i>
          </div>
          <div className="playpause-track" onclick="playpauseTrack()">
            <i className="fa fa-play-circle fa-5x"></i>
          </div>
          <div className="next-track" onclick="nextTrack()">
            <i className="fa fa-step-forward fa-2x"></i>
          </div>
          <div className="repeat-track" onclick="repeatTrack()">
            <i className="fa fa-repeat fa-2x" title="repeat"></i>
          </div>
        </div>

        <div id="wave">
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
