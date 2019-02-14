import React, {Component} from 'react';
import { Paper, Card, Grid, CardActionArea, CardMedia, CardContent, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';

import collegeImage from './res/aboutImages/college.jpg';

class About extends Component{

    detail=[
        {
            "header":"About Aryabhatta College",
            "detail":<div>
                <p>ARYABHATTA COLLEGE comes into existence from the academic session 2014-15. It is an institution directly maintained by the University of Delhi. The college was formerly known as Ram Lal Anand College (Evening) and was established in 1973.

The working hours at the Aryabhatta College are 8:30 a.m. to 5:00 p.m. Classes shall commence at 8:30 a.m.

The College is located adjacent to the South Campus of the University of Delhi in the picturesque surroundings of the South Delhi section of the the Aravali range.

Aryabhatta College is a co-educational institution and conducts Humanities, Arts and Commerce courses at the undergraduate level. There are presently around 2200 students on the rolls of the College.</p>
            </div>,
            "image":collegeImage
        },
        {
            
            "header":"About the fest",
            "detail":"LOTIDHVkjfdhbkjxnb vc",
            "image":false
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
                                    <Card style={{maxWidth:"75vw", margin:"8px"}}>
                                    
                                        <CardMedia src={ab1.image} component="img"/>
                                        <CardContent>
                                            <Typography variant='title'>
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