import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Waypoint from 'react-waypoint';
import Button from '@material-ui/core/Button';
import FlipClock from './flipclock';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Particles from 'react-particles-js';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';

import quizosityPoster from './res/events/quizosity.jpg';
import codathonPoster from './res/events/codathon.jpg';
import junkyardPoster from './res/events/junkyardWars.jpg';
import treasureHuntPoster from './res/events/treasureHunt.jpg';
import uniconPoster from './res/events/unicon.jpg';
import itTambolaPoster from './res/events/it_tambola.jpg';

class Events extends Component{

    events = [
		{
			'poster':quizosityPoster,
			'name':'Quizosity',
			'shortDescription':"Placeholder text to be changed later. Quizority is a quiz event,. It's tech quiz with 3 rounds.... TO BE REPLACED.."
		},
		{
			'poster':codathonPoster,
			'name':'Codathon',
			'shortDescription':'Placeholder text to be changed later. Codathon is a coding competition event....... Some lorem ipsum to be replaced...'
		},
		{
			'poster':treasureHuntPoster,
			'name':'Treasure Hunt',
			'shortDescription':'Placeholder text to be changed later. Treasure Hunt is a finding competition... ....... Some lorem ipsum to be replaced...'
		},
				{
			'poster':itTambolaPoster,
			'name':'IT Tambola',
			'shortDescription':"Placeholder text to be changed later. IT Tambola is a number game. , .... TO BE REPLACED.."
		},
		{
			'poster':junkyardPoster,
			'name':'Junkyard Wars',
			'shortDescription':'Placeholder text to be changed later. junkyardWars is a junkyard scrap building competition....... Some lorem ipsum to be replaced...'
		},
		{
			'poster':uniconPoster,
			'name':'Unicon',
			'shortDescription':'Placeholder text to be changed later. Unicon is a gaming event ... ....... Some lorem ipsum to be replaced...'
		}
	]


    render()
    {
        return (
            <div style={{padding:"10px",backgroundColor:"black"}}>

                <div style={{height:"10vh"}}></div>
                
                <Paper >
						<Typography
							variant = "display1"
							align = "center"
							gutterBottom
						>
							EVENTS
						</Typography>
						<Grid container spacing={16} justify="center">
						{this.events.map((event,index)=>(
							<Grid item style={{margin:"20px",maxWidth:"400px"}}>
							<Card evevation={8} >
								<CardActionArea>
									<CardMedia image={event.poster} height="150" style={{width:"100%",objectFit:"none"}} title = {event.name} component="img"/>

									<CardContent>
										<Typography
											variant="title"
											gutterBottom
										>
											{event.name}
										</Typography>
										<Typography variant="p">
											{event.shortDescription}
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button color="primary" onClick={()=>{console.log("dhfdf");}}>
										Learn More
									</Button>
                                    <Dialog
                                        fullScreen

                                    >
                                        <AppBar >
                                            <Toolbar>
                                                <IconButton aria-label="Close">
                                                    <CloseIcon />
                                                </IconButton>
                                                <Typography variant="h6" color="inherit">
                                                    {event.name}
                                                </Typography>
                                            </Toolbar>
                                        </AppBar>
                                    </Dialog>
									<Button color="secondary">
										Register
									</Button>
								</CardActions>
							</Card>
							</Grid>
							))}
						</Grid>
					</Paper>
            </div>
        )

    }

}
export default Events;
