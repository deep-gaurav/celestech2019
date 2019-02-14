import React, {Component} from 'react';
import { Paper, Card, Grid, CardMedia, CardContent, Typography} from '@material-ui/core';

import collegeImage from './res/aboutImages/college.jpg';
import techpioneers from './res/aboutImages/techpio.jpeg';
import celestech from './res/aboutImages/celes.jpeg';
import Divider from "@material-ui/core/es/Divider/Divider";

class About extends Component{

    detail=[

        {
            "header":"ABOUT ARYABHATTA",
            "detail":<div>

                ARYABHATTA COLLEGE is located
                adjacent to the South Campus of the
                University of Delhi in the picturesque
                surroundings of the South Delhi section of
                the the Aravali range. <br/>
                Aryabhatta College is a recently
                established college of the University Of
                Delhi but it has already found its place
                amongst the oldest and emminent
                colleges of delhi university having its name
                mentioned regularly in leading
                newspapers and media.
                It has been a birthplace of various
                fests and events attracting a great crowd
                from all over the university.
            </div>,
            "image":collegeImage
        },
        {
            "header":"ABOUT TECHPIONEERS ",
            "detail":<div>
                The Computer Science Department of
                Aryabhatta College envisions at familiarizing
                and training students with the latest
                technologies in computer science. <br/>
                With this objective, the Computer Science Society,
                TechPioneers, was established in 2016, with its
                motto clearly depicted by the tagline
                ‘Excellence Bit by Bit’.<br/> The society serves as a
                comprehensive platform to bring Aryabhatta
                College as the pivotal point for activities in
                computer science and related domains.<br/>
                Since its inception, Techpioneers has been involved in
                various activities, organizing various
                seminars and inviting many eminent
                personalities.
            </div>,
            "image":techpioneers
        },
        

        {
            "header":"ABOUT CELESTECH",
            "detail":<div>
                "Celestech" is the annual fest organised by the Department of Computer Science, Aryabhatta College,
                University of Delhi. It involves multifarious technical and non-tech events
                attracting a huge crowd from across different colleges of the Delhi University every year.<br/>
                Celestech is organized with the objective to provide a
                platform for the students to showcase their talent and skills with a competitive spirit.
                From amazing events including Codathon, Junkyard Wars, Quizosity, IT Tambola, LAN Gaming
                and multiple fun-filled games, we are coming back this February. Pen down the dates and get
                ready for a boisterous experience.
            </div>,
            "image":celestech
        }

    ]

    render() {
        return(
            <div style={{padding:"10px",paddingTop:"4em", backgroundColor:"white"}}>
                <Paper>
                    <Grid container direction="column" justify="center" alignItems="center">
                    {
                        this.detail.map(
                            (ab1,index)=>(
                                <Grid item >
                                    <Card style={{position:"relative",maxWidth:"75vw", margin:"8px"}}>
                                    
                                        <CardMedia style={{display:"block",align:"center"}} src={ab1.image} component="img"/>
                                        <CardContent style={{fontSize:"3vmin",font:"happytimes"}}>
                                            <Typography style={{paddingBottom: "1.5vmax",fontSize:"5vmin",fontFamily:'ERASDEMI'}} variant='title'>
                                                {ab1.header}
                                            </Typography>
                                            {ab1.detail}
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        )
                    }
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default About;