import React from 'react';
// import ReactPlayer from 'react-player';
import video from './images/video.mp4';

export default function Video() {
    return (
        <div>
            <video width="300px" height="300px" autoPlay loop controls src={video} />
        </div>
    );
}
