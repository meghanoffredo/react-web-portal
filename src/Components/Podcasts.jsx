import React from 'react';

import psa from '../Media/Podcasts/pod-save-america.jpeg';
import pstw from '../Media/Podcasts/pod-save-the-world.jpeg';
import daily from '../Media/Podcasts/the-daily.jpeg';
import todayexplained from '../Media/Podcasts/today-explained.jpeg';
import podcast from '../Media/podcast.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Podcasts extends React.Component {

    render() {
        return (
            <div className="podcast-carousel-container">
              <div className="section-title">
                    <img
                        src={podcast}
                        alt="Podcast Button Icon" />
                    <h1>
                        Podcasts
                    </h1>
                </div>
              
            <Carousel showThumbs={true} showArrows={true}>
                  <div>
                    <a 
                      href="https://podcasts.google.com/u/1/feed/aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vcG9kLXNhdmUtYW1lcmljYQ?sa=X&ved=2ahUKEwiZoKLzgfD0AhUUaRoKHa2vCxQQ9sEGegQIARAD"
                      target="_blank"
                      rel="noreferrer">
                    <img 
                      src={psa}
                      alt="Pod Save America Podcast"/>
                    </a>
                  </div>
                  <div>
                    <img 
                    src={pstw}
                    alt="Pod Save the World Podcast" />
                  </div>
                  <div>
                    <img 
                    src={daily}
                    alt="The Daily Podcast" />
                  </div>
                  <div>
                    <img 
                    src={todayexplained}
                    alt="Today Explained" />
                  </div>
            </Carousel>

            </div>
        );
      }
  };
