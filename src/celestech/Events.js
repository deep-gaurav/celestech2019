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
import {Transition, Slide} from '@material-ui/core';

import AccessTime from '@material-ui/icons/AccessTime';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

import quizosityPoster from './res/events/quizosity.jpg';
import codathonPoster from './res/events/codathon.jpg';
import junkyardPoster from './res/events/junkyardWars.jpg';
import treasureHuntPoster from './res/events/treasureHunt.jpg';
import uniconPoster from './res/events/unicon.jpg';
import itTambolaPoster from './res/events/it_tambola.jpg';

class Events extends Component{

    constructor(props){
        super(props);
        this.state={
            'events': [
                {
                    'poster':quizosityPoster,
                    'name':'Quizosity',
                    'shortDescription':"Placeholder text to be changed later. Quizority is a quiz event,. It's tech quiz with 3 rounds.... TO BE REPLACED..",
                    'longDescription':" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula ornare magna et aliquet. Nulla sed lorem dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend bibendum commodo. Suspendisse leo elit, consectetur nec arcu a, lacinia consectetur purus. Praesent congue nibh neque. Integer ornare euismod nunc sed tincidunt. Pellentesque enim erat, mattis venenatis scelerisque a, finibus in lorem. Nam vel tristique lorem, interdum viverra ex. Curabitur laoreet neque quis lectus porta, et tempor dui molestie. Morbi viverra est quis sollicitudin tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec elementum nisi non suscipit scelerisque. Duis a elementum nibh.  Nunc viverra vitae nisl non placerat. Nam aliquet erat sed auctor convallis. Curabitur hendrerit, turpis rhoncus lacinia pretium, odio est lobortis leo, in varius dui ante in justo. Nullam lacinia metus ac orci molestie tincidunt. Morbi congue tortor at cursus commodo. Suspendisse eu elementum massa. Vivamus quis vehicula dui. Nunc ex ipsum, tempor sed fermentum eget, rhoncus sed neque. Praesent sit amet quam orci. Praesent nec nisl eu lectus posuere molestie sit amet sit amet lorem. Nullam gravida eros eu sollicitudin mattis. Nunc faucibus feugiat gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo enim vel rutrum tincidunt. Ut quis mollis orci. ",
                    'schedule':"2019-02-27 10:30:00",

                    'open':false
                },
                {
                    'poster':codathonPoster,
                    'name':'Codathon',
                    'shortDescription':'Placeholder text to be changed later. Codathon is a coding competition event....... Some lorem ipsum to be replaced...',
                    'longDescription':" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula ornare magna et aliquet. Nulla sed lorem dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend bibendum commodo. Suspendisse leo elit, consectetur nec arcu a, lacinia consectetur purus. Praesent congue nibh neque. Integer ornare euismod nunc sed tincidunt. Pellentesque enim erat, mattis venenatis scelerisque a, finibus in lorem. Nam vel tristique lorem, interdum viverra ex. Curabitur laoreet neque quis lectus porta, et tempor dui molestie. Morbi viverra est quis sollicitudin tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec elementum nisi non suscipit scelerisque. Duis a elementum nibh.  Nunc viverra vitae nisl non placerat. Nam aliquet erat sed auctor convallis. Curabitur hendrerit, turpis rhoncus lacinia pretium, odio est lobortis leo, in varius dui ante in justo. Nullam lacinia metus ac orci molestie tincidunt. Morbi congue tortor at cursus commodo. Suspendisse eu elementum massa. Vivamus quis vehicula dui. Nunc ex ipsum, tempor sed fermentum eget, rhoncus sed neque. Praesent sit amet quam orci. Praesent nec nisl eu lectus posuere molestie sit amet sit amet lorem. Nullam gravida eros eu sollicitudin mattis. Nunc faucibus feugiat gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo enim vel rutrum tincidunt. Ut quis mollis orci. ",
                    'schedule':"2019-02-27 10:30:00",

                    'open':false
                },
                {
                    'poster':treasureHuntPoster,
                    'name':'Treasure Hunt',
                    'shortDescription':'Placeholder text to be changed later. Treasure Hunt is a finding competition... ....... Some lorem ipsum to be replaced...',
                    'longDescription':" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula ornare magna et aliquet. Nulla sed lorem dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend bibendum commodo. Suspendisse leo elit, consectetur nec arcu a, lacinia consectetur purus. Praesent congue nibh neque. Integer ornare euismod nunc sed tincidunt. Pellentesque enim erat, mattis venenatis scelerisque a, finibus in lorem. Nam vel tristique lorem, interdum viverra ex. Curabitur laoreet neque quis lectus porta, et tempor dui molestie. Morbi viverra est quis sollicitudin tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec elementum nisi non suscipit scelerisque. Duis a elementum nibh.  Nunc viverra vitae nisl non placerat. Nam aliquet erat sed auctor convallis. Curabitur hendrerit, turpis rhoncus lacinia pretium, odio est lobortis leo, in varius dui ante in justo. Nullam lacinia metus ac orci molestie tincidunt. Morbi congue tortor at cursus commodo. Suspendisse eu elementum massa. Vivamus quis vehicula dui. Nunc ex ipsum, tempor sed fermentum eget, rhoncus sed neque. Praesent sit amet quam orci. Praesent nec nisl eu lectus posuere molestie sit amet sit amet lorem. Nullam gravida eros eu sollicitudin mattis. Nunc faucibus feugiat gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo enim vel rutrum tincidunt. Ut quis mollis orci. ",
                    'schedule':"2019-02-27 10:30:00",

                    'open':false
                },
                {
                    'poster':itTambolaPoster,
                    'name':'IT Tambola',
                    'shortDescription':"Placeholder text to be changed later. IT Tambola is a number game. , .... TO BE REPLACED..",
                    'longDescription':" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula ornare magna et aliquet. Nulla sed lorem dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend bibendum commodo. Suspendisse leo elit, consectetur nec arcu a, lacinia consectetur purus. Praesent congue nibh neque. Integer ornare euismod nunc sed tincidunt. Pellentesque enim erat, mattis venenatis scelerisque a, finibus in lorem. Nam vel tristique lorem, interdum viverra ex. Curabitur laoreet neque quis lectus porta, et tempor dui molestie. Morbi viverra est quis sollicitudin tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec elementum nisi non suscipit scelerisque. Duis a elementum nibh.  Nunc viverra vitae nisl non placerat. Nam aliquet erat sed auctor convallis. Curabitur hendrerit, turpis rhoncus lacinia pretium, odio est lobortis leo, in varius dui ante in justo. Nullam lacinia metus ac orci molestie tincidunt. Morbi congue tortor at cursus commodo. Suspendisse eu elementum massa. Vivamus quis vehicula dui. Nunc ex ipsum, tempor sed fermentum eget, rhoncus sed neque. Praesent sit amet quam orci. Praesent nec nisl eu lectus posuere molestie sit amet sit amet lorem. Nullam gravida eros eu sollicitudin mattis. Nunc faucibus feugiat gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo enim vel rutrum tincidunt. Ut quis mollis orci. ",
                    'schedule':"2019-02-27 10:30:00",

                    'open':false
                },
                {
                    'poster':junkyardPoster,
                    'name':'Junkyard Wars',
                    'shortDescription':'Placeholder text to be changed later. junkyardWars is a junkyard scrap building competition....... Some lorem ipsum to be replaced...',
                    'longDescription':" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula ornare magna et aliquet. Nulla sed lorem dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend bibendum commodo. Suspendisse leo elit, consectetur nec arcu a, lacinia consectetur purus. Praesent congue nibh neque. Integer ornare euismod nunc sed tincidunt. Pellentesque enim erat, mattis venenatis scelerisque a, finibus in lorem. Nam vel tristique lorem, interdum viverra ex. Curabitur laoreet neque quis lectus porta, et tempor dui molestie. Morbi viverra est quis sollicitudin tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec elementum nisi non suscipit scelerisque. Duis a elementum nibh.  Nunc viverra vitae nisl non placerat. Nam aliquet erat sed auctor convallis. Curabitur hendrerit, turpis rhoncus lacinia pretium, odio est lobortis leo, in varius dui ante in justo. Nullam lacinia metus ac orci molestie tincidunt. Morbi congue tortor at cursus commodo. Suspendisse eu elementum massa. Vivamus quis vehicula dui. Nunc ex ipsum, tempor sed fermentum eget, rhoncus sed neque. Praesent sit amet quam orci. Praesent nec nisl eu lectus posuere molestie sit amet sit amet lorem. Nullam gravida eros eu sollicitudin mattis. Nunc faucibus feugiat gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo enim vel rutrum tincidunt. Ut quis mollis orci. ",
                    'schedule':"2019-02-27 10:30:00",

                    'open':false
                },
                {
                    'poster':uniconPoster,
                    'name':'Unicon',
                    'shortDescription':'Placeholder text to be changed later. Unicon is a gaming event ... ....... Some lorem ipsum to be replaced...',
                    'longDescription':" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula ornare magna et aliquet. Nulla sed lorem dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend bibendum commodo. Suspendisse leo elit, consectetur nec arcu a, lacinia consectetur purus. Praesent congue nibh neque. Integer ornare euismod nunc sed tincidunt. Pellentesque enim erat, mattis venenatis scelerisque a, finibus in lorem. Nam vel tristique lorem, interdum viverra ex. Curabitur laoreet neque quis lectus porta, et tempor dui molestie. Morbi viverra est quis sollicitudin tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec elementum nisi non suscipit scelerisque. Duis a elementum nibh.  Nunc viverra vitae nisl non placerat. Nam aliquet erat sed auctor convallis. Curabitur hendrerit, turpis rhoncus lacinia pretium, odio est lobortis leo, in varius dui ante in justo. Nullam lacinia metus ac orci molestie tincidunt. Morbi congue tortor at cursus commodo. Suspendisse eu elementum massa. Vivamus quis vehicula dui. Nunc ex ipsum, tempor sed fermentum eget, rhoncus sed neque. Praesent sit amet quam orci. Praesent nec nisl eu lectus posuere molestie sit amet sit amet lorem. Nullam gravida eros eu sollicitudin mattis. Nunc faucibus feugiat gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo enim vel rutrum tincidunt. Ut quis mollis orci. ",
                    'schedule':"2019-02-27 10:30:00",

                    'open':false
                }
            ]
        }
    }




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
						{this.state.events.map((event,index)=>(
							<Grid item style={{margin:"20px",maxWidth:"400px"}}>
							<Card evevation={8} >
								<CardActionArea onClick={()=>{
                                        event.open=true;
                                        this.state.events[index]=event;
                                        this.setState(
                                            this.state
                                        )
                                    }}>
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
									<Button color="primary" onClick={()=>{
                                        event.open=true;
                                        this.state.events[index]=event;
                                        this.setState(
                                            this.state
                                        )
                                    }}>
										Learn More
									</Button>
                                    <Dialog
                                        fullScreen
                                        open={event.open}
                                        
                                        onClose={()=>{
                                            event.open=false;
                                            this.state.events[index]=event;
                                            this.setState(
                                                this.state
                                            )
                                        }}
                                        scroll='body'
                                    >
                                        <AppBar position="fixed" >
                                            <Toolbar>
                                                <IconButton color="inherit" aria-label="Close" onClick={()=>{
                                                        event.open=false;
                                                        this.state.events[index]=event;
                                                        this.setState(
                                                            this.state
                                                        )
                                                    }}>
                                                    <CloseIcon />
                                                </IconButton>
                                                <Typography style={{flexGrow:1}} variant="h6" color="inherit">
                                                    {event.name}
                                                </Typography>
                                                {index!=0 && <IconButton color="inherit" onClick={()=>{
                                                        event.open=false;
                                                        this.state.events[index-1].open=true;
                                                        this.setState(
                                                            this.state
                                                        )
                                                    }}>
                                                    <NavigateBefore/>
                                                </IconButton>
                                                }
                                                {index!=this.state.events.length-1 && <IconButton color="inherit" onClick={()=>{
                                                        event.open=false;
                                                        this.state.events[index+1].open=true;
                                                        this.setState(
                                                            this.state
                                                        )
                                                    }}>
                                                    <NavigateNext/>
                                                </IconButton>
                                                }
                                            </Toolbar>
                                        </AppBar>
                                        <Grid container alignItems='flex-start' justify='center' style={{marginTop:"4em"}} spacing={12}>
                                            <Grid item>
                                            <Paper style={{margin:"10px"}}>
                                                <CardContent>
                                                    <img style={{display:"block",maxWidth:"100%"}} src={event.poster}/>
                                                </CardContent>
                                            </Paper>
                                            </Grid>
                                            <Grid item sm={4}>
                                                <Card style={{ margin:"10px"}}>
                                                    <CardContent>
                                                        <Grid container alignItems="center" justify="space-between" >
                                                        <Grid item>
                                                            <Typography
                                                                variant='h5'
                                                            >
                                                                {event.name}
                                                            </Typography>

                                                            <Typography variant="subheading" align="center">
                                                                <AccessTime/>    {event.schedule}
                                                            
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>

                                                            <Button variant="raised" color="primary">
                                                                Register
                                                                </Button>
                                                        </Grid>
                                                        </Grid>
                                                        <Divider/>
                                                        <Typography variant="body1">
                                                        {event.longDescription}
                                                        </Typography>
                                                        
                                                    </CardContent>
                                                </Card>

                                            </Grid>
                                        </Grid>
                                        
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
