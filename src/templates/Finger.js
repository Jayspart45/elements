import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Finger() {
    const click = async () => {
        const api = 'https://p2nzd3xj7i.execute-api.ap-south-1.amazonaws.com/dev/element/post';
        try {
            const response = await axios.post(api);
            if (response.data) {
                console.log('Res: ', response.data.status);
            } else {
                console.log('Something went wrong');
            }
        } catch (e) {
            console.log('Exp: ', e);
        }
    };
    return (
        <div>
            <div className="container">
                <h2 className="display-1">Welcome</h2>
                <Link to="/hero" percentage='20' onClick={click}>
                    <div className="scan">
                        <div className="fingerprint"></div>
                        <h3>Scanning....</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}
