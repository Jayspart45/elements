import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Finger from './Finger';
import Video from './Video';

export default function Admin() {
    const per = '20';

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Finger />} />

                    <Route exact path="/hero" element={<Hero />} />
                    <Route exact path="/Video" element={<Video />} />
                </Routes>
            </Router>
        </div>
    );
}
