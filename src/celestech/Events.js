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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Particles from 'react-particles-js';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import {Transition, Slide, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';

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

    DateFormat = { weekday: 'long', month: 'long', day: 'numeric' };

    constructor(props){
        super(props);
        this.state={
            'events': [

                {
                    'poster':itTambolaPoster,
                    "name":"IT Tambola",
                    "slogan":"Shot in the Dark",
                    'shortDescription':"Tombola is the Italian version of Bingo. However, unlike the American version, where you can make Bingo horizontally, vertically, or diagonally, In Tombola, only horizontally counts.",
                    "details":[
                        {
                            "name":"Format",
                            "value":<ul>
                                <li>We will provide tickets to the participants with answers and numbers on the tickets.</li>
                                <li>Questions will be displayed randomly on the screen.</li>
                                <li>You have to cross out the correct answers if they are present in the tickets.</li>
                                    </ul>
                        },
                        {
                            "name":"Rules",
                            "value":<ul>
                                <li>Individual Participation.</li>
                                <li>There will be multiple winners.</li>
                                <li> No cheating will be entertained.</li>
                                <li>Volunteers/organizers decision will be the final.</li>
                                <li>The organizers reserve the right to change the rules as they deem fit.</li>
                                    </ul>
                        },
                        {
                            "name":"Contact",
                            "value":<ul>
                                <li>
                                    Deepak
                                </li>
                            </ul>
                        }
                        ],
                    'schedule':"2019-02-27 10:30:00",

                    'open':false
                },
                {
                    'poster':quizosityPoster,
                    'name':'Quizosity',
                    "slogan":"",
                    'shortDescription':"Placeholder text to be changed later. Quizority is a quiz event,. It's tech quiz with 3 rounds.... TO BE REPLACED..",
                    /* "format":false,
                    "rules":false,
                    "contact":false,*/
                    'schedule':"2019-02-27 10:30:00",

                    'open':false
                },
                {
                    'poster':codathonPoster,
                    'name':'Codathon',
                    'shortDescription':"Are you ready to test your programming skills? Then join us on 22nd of feb for codathon at Aryabhatta College. This is a competition designed to test your understanding and skills in programming and problem solving. So register now and unleash the coder inside you.",
                    "details":[
                        {
                            "name":"Format",
                            "value":
                            <div><ol>
                                <li>The event consist of three Rounds.</li>
                                <h4>Round1/Quiz Round-I:</h4><br/>
                                <li>Consist of 20 Objectives type questions based on General Computer Science.</li>
                                <li>Each team is provided with a Question sheet and Answer Sheet.</li>
                                <li>Time limit 20 minutes.</li>
                                <li>For each right answer 1 point will be rewarded with no negative marking.</li>
                                </ol>
                                <ol>
                                    <h4>Round 2 / Quiz Round – II :</h4>
                                    <li>Consist 25 questions based on Output and Error Detection in C/C++ Code</li>
                                    <li>All Questions are objective.</li>
                                    <li>Each team is provided with a Question sheet and Answer sheet.</li>
                                    <li>Time limit 40 minutes.</li>
                                    <li>For each wrong answer 1 point is deducted and 3 points will be rewarded to right answer.</li>
                                </ol>

                                <ol>
                                    <h4>Round 3 / Final Coding Round :</h4>
                                    <li>Final round will consist of two questions out of which the participants have to attempt one.</li>
                                    <li>This a coding round. Teams will have to write code in C or C++ using the available resources.</li>
                                    <li>Time limit 1 Hour + 15 Bonus minutes.</li>
                                    <li>Team with highest point will win the CODATHON.</li>
                                    
                                </ol>
                            </div>
                        },
                        {
                            "name":"Rules",
                            "value": <ol>
                                <li> Participants should carry their valid ID card of their respective college.</li>
                                <li> Each team can have at most 2 members.</li>
                                <li>The organisers reserve all rights to disqualify any team for usage of unfair means.</li>
                                <li>Teams have to complete each round in a given time limit, using only the materials provided.</li>
                            </ol>
                        },
                        {
                            "name":"Prizes",
                            "value":"Rs 6000"            
                            },
                        {
                            "name":"Student Cordinators",
                            "value":<ol>
                                    <li>Yash Sharma – 9718268388</li>
                                    <li>Ishant Malik – 8630252808</li>
                                </ol>

                        }

                        ],
                    'schedule':"2019-02-27 10:30:00",

                    'open':false
                },
                {
                    'poster':treasureHuntPoster,
                    'name':'Treasure Hunt',
                    'slogan':'Embrace the unknown, because it is there you will find your treasure',
                    'shortDescription':'“Embrace the unknown, because it is there you will find your treasure”',
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
            <div style={{padding:"10px",backgroundColor:"white"}}>

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
								<CardActionArea >
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
                                        <AppBar position="fixed" style={{backgroundColor:"#0007"}} >
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
                                                            <Typography variant="h6">
                                                                {event.slogan}
                                                            </Typography>

                                                            <Typography variant="subheading" align="center">
                                                                <AccessTime/>    {new Date(event.schedule).toLocaleDateString("en-US",this.DateFormat)}

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
                                                            {event.shortDescription}
                                                        </Typography>
                                                        {
                                                            event.details!=undefined && 
                                                            event.details.map((detail,index)=>(
                                                                
                                                                <ExpansionPanel >
                                                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                                                        <Typography variant="title">
                                                                            {detail.name}
                                                                        </Typography>
                                                                    </ExpansionPanelSummary>
                                                                    <ExpansionPanelDetails>
                                                                        {detail.value}
                                                                    </ExpansionPanelDetails>
                                                                </ExpansionPanel>
                                                            ))
                                                        }
                                                        
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
