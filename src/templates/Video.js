import React from 'react';
// import ReactPlayer from 'react-player';
import video from './images/video.mp4';

export default function Video() {
    return (
        <div className="video">
            <video autoPlay loop controls src={video}></video>
        </div>
    );
}
