import React from 'react';
import '../Styling/Home.css';

import UserName from './UserName';
import Clock from './Clock';
import ToDoItems from './ToDos/ToDoItems';
import MediaApps from './MediaApps';
import Podcasts from './Podcasts';
import Weather from './Weather';

import { Link } from 'react-router-dom';

import home from '../Media/home.png';

// custom greeting for user based on time of day locally
let welcome = '';
const today = new Date();
const hour = today.getHours();

if (hour < 12) {
    welcome = 'Good morning, ';
} else if (hour < 17) {
    welcome = 'Good afternoon, ';
} else {
    welcome = 'Good evening, ';
}

export default class Home extends React.Component {

    render() {
        return (
            <div 
                className="home-container">
                <Link 
                    to="/react-web-portal/" 
                    className="return-home">
                    <img
                        src={home}
                        alt="Return to Welcome Page" />
                </Link>
                <h1 
                    className="homeHeader">
                    {welcome} {<UserName />}
                </h1>
                <div>
                    <Clock />
                </div>
                <div className="weather">
                    <Weather />
                </div>
                <div> 
                    <ToDoItems />
                </div>
                <div>
                    <MediaApps />
                </div>
                <div>
                    <Podcasts />
                </div>
                <span className="footer">
                 Ⓒ MOO Creative 2022 | All Rights Reserved
                </span>
            </div>
        );
    }
}