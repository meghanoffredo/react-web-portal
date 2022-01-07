import React from 'react';

//import images from Media folder
import spotify from '../Media/spotify.jpeg';
import gmail from '../Media/gmail.jpeg';
import facebook from '../Media/facebook.png';
import instagram from '../Media/instagram.jpeg';
import twitter from '../Media/twitter.jpeg';
import nyt from '../Media/nyt.jpeg';
import play from '../Media/play-button.png';

export default class MediaApps extends React.Component {

    render() {
        return (
            <div className="apps-container">
                <div className="section-title">
                    <img
                        src={play}
                        alt="Play Button Icon" />
                    <h1>
                        App Library
                    </h1>
                </div>
                <div className="app-library">
                    <div className="app-group-1">
                        <figure 
                            className="app">
                            <a href="https://open.spotify.com" target="_blank" rel="noreferrer">
                                <img
                                src={spotify}
                                alt="Spotify" />
                            </a>
                            <figcaption>
                                Spotify
                            </figcaption>
                        </figure>
                        <figure 
                            className="app">
                            <a href="https://gmail.com" target="_blank" rel="noreferrer">
                                <img
                                src={gmail}
                                alt="Gmail" />
                            </a>
                            <figcaption>
                                Gmail
                            </figcaption>
                        </figure>
                        <figure 
                            className="app">
                            <a href="https://nyt.com" target="_blank" rel="noreferrer">
                                <img
                                src={nyt} 
                                alt="New York Times" />
                            </a>
                            <figcaption>
                                NY Times
                            </figcaption>
                        </figure>
                    </div>
                    <div className="app-group-2">
                        <figure 
                            className="app">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img
                                src={facebook}
                                alt="Facebook" />
                            </a>
                            <figcaption>
                                Facebook
                            </figcaption>
                        </figure>
                        <figure 
                            className="app">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <img
                                src={instagram}
                                alt="Instagram" />
                            </a>
                            <figcaption>
                                Instagram
                            </figcaption>
                        </figure>
                        <figure 
                            className="app">
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <img
                                src={twitter}
                                alt="Twitter" />
                            </a>
                            <figcaption>
                                Twitter
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        )
    }
}