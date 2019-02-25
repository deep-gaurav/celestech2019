import React, {Component} from 'react';


import Picwik from './res/sponsors/Sponsors/Coverage Partner/picvik.jpg';

import Aspen from './res/sponsors/Sponsors/Educational Partners/Aspen Research.jpg';
import Landmark from './res/sponsors/Sponsors/Educational Partners/Landmark.jpg';
import Sanmacs from './res/sponsors/Sponsors/Educational Partners/Sanmacs.jpg';
import UniqueSiksha from './res/sponsors/Sponsors/Educational Partners/Unique Shiksha.jpg';

import DULatestInformation from './res/sponsors/Sponsors/Media Partners/Du latest Information.jpg';
import DUUnity from './res/sponsors/Sponsors/Media Partners/DU UNITY.jpg';
import DUUpdates from './res/sponsors/Sponsors/Media Partners/Du Updates.jpg';

import Midland from './res/sponsors/Sponsors/Publishing Partner/midland logo (Created).jpg';

import GrabOn from './res/sponsors/Sponsors/Savings Partner/GrabOn.png';

import Manacle from './res/sponsors/Sponsors/Technology Partner/Manacle.jpg';

import { Paper } from '@material-ui/core';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 

class Sponsor extends Component{

    sponsors = [
        {
            "name":"Picvik",
            "image":Picwik,
            "partner":"Coverage Partner"
        },
        {
            "name":"Aspen Research",
            "image":Aspen,
            "partner":"Educational Partner"
        },
        {
            "name":"Landmark Institure",
            "image":Landmark,
            "partner":"Educational Partner"
        },
        {
            "name":"Sanmacs",
            "image":Sanmacs,
            "partner":"Educational Partner"
        },
        {
            "name":"Unique Siksha",
            "image":UniqueSiksha,
            "partner":"Educational Partner"
        },
        {
            "name":"DU Latest Information",
            "image":DULatestInformation,
            "partner":"Media Partner"
        },
        {
            "name":"DU Unity",
            "image":DUUnity,
            "partner":"Media Partner"
        },
        {
            "name":"DU Updates",
            "image":DUUpdates,
            "partner":"Media Partner"
        },
        {
            "name":"Midland",
            "image":Midland,
            "partner":"Publishing Partner"
        },
        {
            "name":"GrabOn",
            "image":GrabOn,
            "partner":"Savings Partner"
        },
        {
            "name":"Manacle",
            "image":Manacle,
            "partner":"Technology Partner"
        }
    ]

    render() {

        return(
            <div style={{paddingTop:"7em"}}>
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
                                <img src={sponsor.image} style={{maxWidth:"400px"}}/>
                                <h2 className="legend">{sponsor.partner}</h2>
                            </div>
                        ))}
                    </Carousel>
                </Paper>
            </div>
        )
    }
}

export default Sponsor;