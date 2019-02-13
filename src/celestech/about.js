import React, {Component} from 'react';
import { Paper, Card, CardActionArea, CardMedia, CardContent, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';

class About extends Component{

    detail=[
        {
            "title":"Celestech",
            "header":"About the fest",
            "detail":"LOTIDHVkjfdhbkjxnb vc",
            "image":false
        }
    ]

    render() {



        return(
            <div style={{padding:"10px",paddingTop:"4em", backgroundColor:"black"}}>
                <Paper>
                    {
                        this.detail.map(
                            (ab1,index)=>(
                                <Card>
                                    <CardActionArea>
                                        <CardMedia image={ab1.image}/>
                                        <CardContent>
                                            <Typography variant='title'>
                                                {ab1.title+" - "+ab1.header}
                                            </Typography>
<ExpansionPanel defaultExpanded>
    <ExpansionPanelSummary>
        description
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
        {ab1.detail}
    </ExpansionPanelDetails>
</ExpansionPanel>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                        )
                    }
                </Paper>
            </div>
        )
    }
}

export default About;