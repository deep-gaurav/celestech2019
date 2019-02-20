import React, {Component} from 'react';

import aspenLogo from './res/sponsors/aspen.jpg';
import grabonLogo from './res/sponsors/grabon.jpg';
import landmarkLogo from './res/sponsors/landmark.jpg';
import midlandLogo from './res/sponsors/midland.png';
import uniqueLogo from './res/sponsors/unique.gif';
import { Paper } from '@material-ui/core';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 

class Sponsor extends Component{

    sponsors = [
        {
            "name":"Aspen Research Services",
            "logo":aspenLogo
        },
        {
            "name":"GrabOn",
            "logo":grabonLogo
        },
        {
            "name":"Landmark Institue",
            "logo":landmarkLogo
        },
        {
            "name":"Midland - The Book Shop",
            "logo":midlandLogo
        },
        {
            "name":"Unique Siksha",
            "logo":uniqueLogo
        }
    ]

    render() {

        return(
            <div style={{paddingTop:"4em"}}>
                <Paper>
                    <Carousel
                        showArrows
                        infiniteLoop
                        autoPlay
                        stopOnHover={false}
                        interval={5000}
                    >
                        {this.sponsors.map((sponsor,index)=>(
                            <div>
                                <img src={sponsor.logo} style={{maxWidth:"400px"}}/>
                                <h2 className="legend">{sponsor.name}</h2>
                            </div>
                        ))}
                    </Carousel>
                </Paper>
            </div>
        )
    }
}

export default Sponsor;