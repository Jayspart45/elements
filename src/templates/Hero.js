import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Hero() {
    const [percent, setpercent] = useState(0);
    function updatepercentage() {
        console.log('Working');
        setpercent((percent) => (percent = 50));
    }
    function updatepercentage2() {
        console.log('Working');
        setpercent((percent) => (percent = 100));
        let circle = document.getElementById('circle');

        setTimeout(() => {
            window.location.href = './Video';
        }, 3000);
    }

    const fetchData = async () => {
        const api = 'https://p2nzd3xj7i.execute-api.ap-south-1.amazonaws.com/dev/element/get';
        let response;
        try {
            response = await axios.get(api);
            if (response.data) {
                console.log(response.data);
            } else {
                console.log('error');
            }
        } catch (error) {
            console.log(error);
        }
        let percent = response.data.data.Items[0].elements;
        console.log(percent);
        function responsefunct() {
            console.log('response');
            if (percent == 2) {
                updatepercentage();
            } else if (percent == 1) {
                updatepercentage2();
            }
        }
        responsefunct();
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container2">
            <div className="precent">
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id="circle"></circle>
                </svg>

                <div className="number">
                    <h2>
                        {percent}
                        <span>%</span>
                    </h2>
                </div>
            </div>
            <h2 className="text">Loading...</h2>
        </div>
    );
}
