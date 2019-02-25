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
import {Transition, Grow,Zoom, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,Collapse, Popover, DialogContent,DialogTitle} from '@material-ui/core';
import Blur from 'react-css-blur';

import AccessTime from '@material-ui/icons/AccessTime';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

import quizosityPoster from './res/events/quizosity.jpg';
import codathonPoster from './res/events/codathon.jpg';
import junkyardPoster from './res/events/junkyardWars.jpg';
import treasureHuntPoster from './res/events/treasureHunt.jpg';
import uniconPoster from './res/events/unicon.jpg';
import itTambolaPoster from './res/events/it_tambola.jpg';

import quizosityBanner from './res/events/banner/Quizosity.jpg';
import codathonBanner from './res/events/banner/Codathon.jpg';
import junkyardBanner from './res/events/banner/Junkyard.jpg';
import treasureHuntBanner from './res/events/banner/TreasureHunt.jpg';
import uniconBanner from './res/events/banner/Unicon.jpg';
import itTambolaBanner from './res/events/banner/ITTambola.jpg';

import { Slider } from '@material-ui/lab';

import {Email as EmailIcon,Phone as PhoneIcon,CalendarToday as CalendarIcon,LocationOnRounded as LocationIcon, AccountBalanceWallet as BalanceIcon} from '@material-ui/icons';

class Events extends Component{

    DateFormat = { weekday: 'long', month: 'long', day: 'numeric' };

    constructor(props){
        super(props);
        this.state={
            'events': [

                {// IT Tambola
                    'poster':itTambolaPoster,
                    'banner':itTambolaBanner,
                    "name":"IT Tambola",
                    "price":"₹20/Ticket",
                    "link":()=>(window.open("https://docs.google.com/forms/d/e/1FAIpQLSdW7_pV5tNsQ0mHBrFn70R7QgfUh10gjSY6_w5blJvFtoSKjQ/viewform?usp=sf_link")),
                    "slogan":"Shot in the Dark",
                    "venue":"Conference Room",
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
                                <li>Deepak Tripathi <PhoneIcon/> +91 96439 29224</li>
                                <li>Chandranshu Gupta <PhoneIcon/> +91 91615 10390</li>
                            </ul>
                        }
                        ],
                    'schedule':"2019-02-27T10:30:00",
                    
                    'open':false
                },
                { //QUIZOSITY
                    'poster':quizosityPoster,
                    'banner':quizosityBanner,
                    'name':'Quizosity',
                    "price":"Free",
                    "link":()=>(window.open("https://docs.google.com/forms/d/e/1FAIpQLSdzfswBCGAF4AO7On_RykKayV6yRISY2T4O3tM67J52i6mrDQ/viewform?usp=sf_link")),
                    "slogan":"You know, You Grow",
                    'shortDescription':" Quizosity, the Tech quiz competition organised to test your knowledge as well as broaden your horizons. So get ready for the roller coaster ride into the intense world of computer science and technology.",
                    "venue":"Seminar Room",
                    "details":[

                         {
                             "name":"Format",
                             "value":<div>
                                <h4>Preliminary Round (Elimination Round)</h4>
                                <p>Each team will face 20 questions and have to write down the answers on a sheet of paper provided to them.
                                The qualifying teams will face the final round.</p>
                                <h4>Final Round</h4> 
                                Final round will comprise of two sub-rounds as follows:
                                <ul>
                                    <li>
                                        <h4>Round 1 (Infinite Bounce) </h4>
                                    </li>
                                    <li>
                                        <h4>Round 2 (Friend Unfriend)</h4>
                                    </li>
                                </ul>
                                Scores for both the rounds in the final round will be added to decide the winners.

                            </div>

                            
                         },
                         {
                             "name":"Rules",
                             "value":<ol>
                                 <li>Entries must be individually or in a team of maximum 2 members.</li>
                                 <li>Participants should carry valid ID cards of their college.</li>
                                 <li>The participants will not be allowed to use mobile or other electronic devices. </li>
                                 <li>Organizers have the right to disqualify any team on the basis of breaking rules and their decision shall abide.</li>
                                 <li>No entry or registration fee.</li>
                             </ol>
                         },
                         {
                             "name":"Contact",
                             "value":<ul>
                                <li>Raghav Jaggi<PhoneIcon/> +91 97173 67929</li>
                                <li>Aastha Goel <PhoneIcon/>+91 95996 51765</li>
                             </ul>

                         }
                         
                     ],
                    'schedule':"2019-02-27T12:00:00",

                    'open':false
                },
                {// JUNKYARD
                    'poster':junkyardPoster,
                    'banner':junkyardBanner,
                    "price":"Free",
                    'name':'Junkyard Wars',
                    "link":()=>(window.open("https://docs.google.com/forms/d/e/1FAIpQLSdLo2l5RtQheDI3S0_ydfCXk5WsbXOEy0es6vuIFeu57snD5A/viewform?usp=sf_link")),
                    "slogan":"Because Junk isn't just Junk",
                    'shortDescription':'Its time to showcase your engineering knowledge.You have to think reverse and assemble the machine in a limited time-frame.',
                    "details":[
                        {
                            "name":"Format",
                            "value":<div>
                                The event consist of two Round.
                                <h4>Round 1 / Elimination Round :</h4><br/>
                                <ol>
                                    <li>Consist 40 questions based on computer hardware.</li>
                                    <li>Questions are mixed of subjective and objective.</li>
                                    <li>Each team is provided with a Question sheet and Answer sheet.</li>
                                    <li>Time limit 20 minutes.</li>
                                    <li>For each wrong answer 1 point is deducted and 3 points will be rewarded to right answer.</li>
                                </ol>
                                <h4>Round 2 / Final Round :</h4>
                                <ol>
                                    <li>Those shortlisted from Elimination Round will take part in this Final Round.</li>
                                    <li>The finalist would have to assemble the machine along with that they have to set up the network using the given materials.</li>
                                    <li>On completion of machine 15 points will be rewarded.</li>
                                    <li>Final points awarded is based on the points scored in the game.</li>
                                    <li>Time limit 25 minutes.</li>
                                    <li>Team with highest point win the JUNKYARD WARS.</li>
                                    
                                </ol>
                            </div>
                        
                    },
                    {
                        "name":"Rules",
                        "value":
                            <ol>
                                <li>Participants should carry their valid ID card of their respective college.</li>
                                <li>To participate in this event he must register for event by paying Rs 50 per candidate fees.</li>
                                <li>Each team must have 2 members .</li>
                                <li>For Final Round teams have to be appear for Elimination Round.</li>
                                <li>The organisers reserve all rights to disqualify any team for usage of unfair means.</li>
                                <li>Teams have to complete each round in a given time limit , using only the materials provided.</li>
                            </ol>
                        
                    },
                    {
                        "name":"Contact",
                        "value":<ul>
                            <li>
                            Ujjwal Pratap Singh <PhoneIcon/> +91 95604 30897
                            </li>
                            <li>
                            Nitin Mahour <PhoneIcon/>+91 84481 43797
                            </li>
                        </ul>
                    }

                ],
                    "venue":"Room Number 9",
                    'schedule':"2019-02-27T10:00:00",

                    'open':false
                },

                { //CODATHON
                    'poster':codathonPoster,
                    'banner':codathonBanner,
                    'slogan':"Ready,Set,Code",
                    "price":"Free",
                    "venue":"Old Computer Lab",
                    "link":()=>(window.open("https://docs.google.com/forms/d/e/1FAIpQLSfChYz1j6Eo3C840c-vX9l69GsQ6arQevFJF0ZMUHYuMmcpkQ/viewform?usp=sf_link")),
                    'name':'Codathon',
                    'shortDescription':<p>Are you ready to test your programming skills? Then join us on 27nd of feb
                    for Codathon at Aryabhatta College. A competition designed to test your understanding
                    and skills in programming and problem solving, Codathon will push your programming
                    expertise to it limits. So what are you waiting for? Register now and unleash the coder
                    inside you.</p>,
                    "details":[
                        {
                            "name":"Format",
                            "value":
                            <div><b>Prelims</b>
                            <ul>
                            <li>
                            Each team will be provided with a Question Sheet consisting of 20 questions
                            and an answer sheet.
                            </li>
                            <li>Questions will be based on following themes: finding output and general
                            programming concepts..
                            </li>
                            <li>{"1\u20444"} marks are deducted for wrong answers.</li>
                            <li>Marks are awarded as mentioned in the question sheet along questions for
                            correct answers.</li>
                            <li>Participants will be given 45 minutes to complete this round.
                            </li>
                            </ul>
                            <b>Finals:</b>
                            <ul>
                            <li>Final round will consist of three questions out of which the participants have to
                            attempt two.</li>
                            <li>Teams are permitted to write the code in C/C++/python using the available
                            resources.</li>
                            <li>Time Limit for this round is 60 minutes.</li>
                            <li>Team with the highest points wins the Event.</li>
                            </ul>
                            </div>
                        },
                        {
                            "name":"Rules",
                            "value": <ol>
                                <li>Participants should carry their valid ID card of their respective college.</li>
                                <li>Each team can have at most 2 members.</li>
                                <li>The organisers reserve all rights to disqualify any team for usage of
                                unfair means.</li>
                                <li>Question Paper with Answer Script.</li>
                                <li>Teams have to complete each round in a given time limit, using only the
                                materials provided.</li>
                            </ol>
                        },
                        {
                            "name":"Contact",
                            "value":<ol>
                                <li>Yash Sharma <PhoneIcon/>+91 97182 68388</li>
                                <li>Ishant Malik <PhoneIcon/>+91 97583 11272</li>
                                </ol>

                        },
                        

                        ],
                    'schedule':"2019-02-27T11:00:00",

                    'open':false
                },
                {//TREASURE HUNT
                    "name":"Chasse au Tresor",
                    "price":"₹50/Team",
                    "poster":treasureHuntPoster,
                    'banner':treasureHuntBanner,
                    "link":()=>(window.open("https://docs.google.com/forms/d/e/1FAIpQLSekGq3c1vnnYzwhpX8Yb0Fwy99Xq4gOruxCafuTMRu4IpQxZQ/viewform?usp=sf_link")),
                    "slogan":"Embrace the unknown, because it is there you will find your treasure",
                    "shortDescription":<p>
                        Whether it’s too cold to play outside ,a birthday party,or just an ordinary day,
Treasure hunts are a great and easy way to keep everyone entertained. They offer a huge amount of everlasting. Fun and will improve their physical and intellectual
Development.
                    </p>,
                    "venue":"Ground",
                    "schedule":"2019-02-27T12:00:00",
                    "details":[
                        {
                            "name":"Format",
                            "value":<div>
                                <b>Preliminary Round</b>
                                <p>
                                Each team will have to compete in a task in order to win their way through this round to the main hunt. Only 12 teams will be allowed to pass through.
                                </p>
                                <b>Final Hunt</b>
                                <ul>
                                    <li>
                                        <b>Part 1</b>
                                        <p>Teams have to complete some tasks in order to proceed to the next stage

The 8 teams that will complete the given tasks in the fastest time will be proceeded to the next round. The rest 4 teams would be eliminated.

The maximum time they would be given to complete this round would be max 45 minutes
                                        </p>

                                    </li>
                                    <li>
                                        <b>Part 2</b>
                                        <p> 8 teams that have have just cleared the first part will follow the procedure of solving clues.

Same as the previous round teams again will face an elimination round. In this round only the first fastest 4 teams are given the chance to compete in the next round. Rest 4 teams are eliminated. Then similarly 2 teams will be eliminated.


                                        </p>

                                    </li>
                                    <li>
                                        <b>Part 3</b>
                                        <p>  Top two teams will compete for the final clue and winner will be decided. 

                                        </p>

                                    </li>
                                </ul>
                            </div>
                        },
                        {
                            "name":"Rules",
                            "value":<div>
                                <ol>
                                <li>Only team entries are eligible.</li>

                                <li>Decision of the hunt is final.</li>

                                <li>If a team cheats at any stage during the hunt they will be disqualified right then and there.</li>


                                </ol>
                            </div>
                        },
                        {
                            "name":"Contact",
                            "value":<ul>
                                <li>
                                    Kshitij Jain <PhoneIcon/>+91 99994 77256
                                </li>

                                <li>
                                    Mehak Khazanchi <PhoneIcon/> +91 98738 84939
                                </li>
                            </ul>
                        }
                    ]
                },
                {//UNICON
                    "name":"Unicon",
                    "poster":uniconPoster,
                    'banner':uniconBanner,
                    "price":"Paid",
                    "link":"",
                    "slogan":"Unleash your gaming instinct",
                    "shortDescription":<p>
                        Lan Gaming is a platform for students to showcase their gaming skills in various games including PUBG- Mobile. 
                    </p>,
                    "venue":"New Lab",
                    "openPopup":false,
                    "popup":<div>
                        <Grid container direction="column">
                            <Grid item><Button variant="flat" onClick={()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSeWzQXGE7gDV2oCRwT9DL8QUOwG3EzSAckKJ6Ny5uCXqwweJQ/viewform?usp=sf_link")}}>PUBG</Button></Grid>
                            <Grid item><Button variant="flat" onClick={()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSfOHQHxwL8x7Hp8oz55JxO8WtSotFXfngT-D9XyN-cAmjMQ9w/viewform?usp=sf_link")}}>FIFA and TEKKEN</Button></Grid>
                        </Grid>
                    </div>,
                    "schedule":"2019-02-27T10:30:00",
                    "details":[
                        {
                            "name":"PUBG Mobile",
                            "value":<div>
                                 *Please note that There is also a registration fee of 100 INR for a DUO and 200 INR for a SQUAD.

                                <ul>
                                    <li>You are free to play with squads, duo or solo.</li>

                                    <li>No cheating (USE OF AIMBOTS, WALL HACKS, SPEEDHACKS, ETC.) All players will be closely monitored and if anyone is caught cheating, that player/team will be disqualified.</li>

                                    <li>Do not delay in registration, or check-in.</li>

                                    <li>Team killing is strictly prohibited and if anyone is seen fooling around with teammates using grenades, that player will be disqualified.</li>

                                </ul>
                            </div>
                        },
                        {
                            "name":"Tekken 7",
                            "value":<div>
                                *Please note that There is also a registration fee of ₹50/Player.

                                Game Settings

                                <ul>
                                    Game Version: PlayStation 4<br/>

                                    Rounds: Best of 3<br/>

                                    Timer: 60 seconds<br/>

                                    Winner must keep character<br/>

                                    Loser may switch<br/>

                                    Stage Select: Random<br/>

                                    Character Customizations: Off<br/>

                                    All base characters are allowed in the tournament.<br/>
                                </ul>
                            </div>
                        },
                        {
                            "name":"FIFA 18",
                            "value":<div>
                                *Please note that There is also a registration fee of ₹50/Player.

                                <b>Rules</b>
                                <ol>


                                        <li>All Clubs and International Teams can be used.</li>

                                        <li>FIFA 18 will be played on PS4.</li>

                                    <li>A total of 2 minutes per match will be provided to a player to set up his team settings, substitution and formation.</li>

                                    <li>Player cannot use his own custom player to play match.</li>

                                    <li>A player may bring his own controller to play a match .</li>

                                    <li>If player intentionally damages any equipment of setup (PC,laptop, tv screen or controller) he will be immediately disqualified and will have to pay the full cost of equipment.</li>

                                    <li>All games are played on the FIFA 18 Kick-Off mode.</li>

                                    <li>The Player named first always has to stand/sit on the left side facing the screen.</li>

                                    <li>The Player named first has to play with Home Team.</li>

                                    <li>No memory cards or saved games are permitted.</li>

                                    <li>Players are prohibited from wearing headsets and may not listen to any music during play.</li>

                                    <li>Controllers for each respective Supported Platform are supplied by PWNED. It is the responsibility of all Players to be familiar with the controller’s functions and mode of operation. If a controller is defective, a Player can pause the game and notify the referee. The referee will determine the controller status in making such a decision. If a Player plays with a defective controller, all results are nevertheless valid.</li>

                                    <li>Unnecessary pauses or delays are prohibited.</li>

                                    <li>Any action designed to disrupt the opposing Player's view of the field or ability to select controlled players is prohibited.</li>

                                    <li>Each game will begin play at its designated time, and as designated on site at the tournament.</li>

                                    <li>Players not present at the designated start time for any match will be disqualified, and their opponent shall be granted a 3-0 score. Players are encouraged to be in the designated play area 15 minutes prior to game time.</li>

                                    <li>Players will be shown their designated station, shall set up the game and immediately begin play. Each Player will have 2 minutes to configure controls, line-ups and settings in accordance with the rules described above under “Game-play settings”. Custom packages cannot be used, nor can anything else that is not available in the in-game pause menu.</li>

                                    <li>Players shall be responsible for keeping track of game situation so if a game is interrupted, the situation can be restored. In all situations possible, tournament referees will monitor the game situation so that it may be restored in the event of game interruptions.</li>

                                    <li>Players shall raise their hands at the end of the game so a referee can record their score. Only scores reported to the referee are official.</li>

                                    <li>No game interruptions, except for designated pauses to report scores (if any), will be allowed.</li>

                                </ol>
                                <b>Game-play Settings</b>
                                <ol>

• Difficulty Level: Legendary<br/>

• Half Length: 5 minutes, 6 minutes for quarter-finals, semi-finals and finals<br/>

• Injuries: On<br/>

• Offsides: On<br/>

• Time of Day: 08:00 PM<br/>

• Season: Spring<br/>

• Time/Score display: On<br/>

• Camera: Tele Broadcast<br/>

• Radar: 2D or 3D<br/>

• Home Auto Switching: User Settings<br/>

• Away Auto Switching: User Settings<br/>

• Volume Settings: Default<br/>

• Extra Time: extra time will be played in the event of a draw after regulation time. Penalties will decide the winner if after extra time the scores are level.<br/>

• Custom formations are not permitted. Custom tactics and set pieces are available.<br/>

                                </ol>
                                <b>Unfair Play</b>
                                <ul>


                                <li>Use of any cheat program</li>

                                <li>Intentional disconnection</li>

                                <li>Use of any settings exceeding standard and permitted settings</li>

                                <li>If the match is disrupted due to unnecessary chatting, the player may be given a warning or lose by default at the referee’s sole discretion.</li>

                                <li>Upon discovery of any player committing any violations regarded as unfair play, that player will be disqualified from the tournament.</li>

                                <li>During the course of any match, the operations staff and/or referee may determine other actions to be unfair play at any time.</li>


                                </ul>
                            </div>
                        },
                        {
                            "name":"Contact",
                            "value":<ul>
                                <li>Aman Saini <PhoneIcon/> +91 72910 65354</li>
                                <li>Akanksha <PhoneIcon/> +91 97116 82245</li>
                                <li>Utkarsh Raghav <PhoneIcon/> +91 97179 58327</li>
                                <li>Vinit Bhatt <PhoneIcon/> +91 98914 13058</li>
                            </ul>
                        }
                    ]
                }
            ]
        }
    }




    render()
    {
        return (
            <div style={{padding:"10px",backgroundColor:"white"}}>

                <div style={{height:"10vh"}}></div>
                
                <Paper style={{fontFamily:"HT"}}>
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
							<Card evevation={8} style={{position:"relative"}} 
                                raised={event.hovering}
                            >
								<CardActionArea onClick={()=>{
                                        event.open=true;
                                        this.state.events[index]=event;
                                        this.setState(
                                            this.state
                                        )
                                    }} 
                                    
                                    onMouseEnter={
                                        (element,mouseevent)=>{
                                            event.hovering=true;
                                            this.setState(
                                                this.state
                                            )
                                        }
                                    }
                                    onMouseLeave={
                                        (element,mouseevent)=>{
                                            event.hovering=false;
                                            this.setState(
                                                this.state
                                            )
                                        }
                                    }

                                    >
                                    <Blur radius={event.hovering?"5px":"0px"} transition="400ms">
									<CardMedia image={event.banner} height="150" style={{objectFit:"scale-down",height:"100%"}} title = {event.name} component="img"/>

									<CardContent>
										<Typography
											variant="title"
											gutterBottom
										>
											{event.name}
										</Typography>
										<Typography variant="p" style={{textOverflow: "ellipsis",height:"100px"}}>
											{event.shortDescription}
										</Typography>
									</CardContent>
                                    </Blur>
                                    <Zoom  in={event.hovering} timeout={400}>
                                    <Grid container justify="center" alignItems="center" style={{backgroundColor:"#0000",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}>
                                        <Grid item>
                                            <Button variant="raised" color="primary">
                                                Learn More
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    </Zoom>
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
                                                    <img style={{display:"block",width:"100%",maxWidth:"800px"}} src={event.poster}/>
                                                </CardContent>
                                            </Paper>
                                            </Grid>
                                            <Grid item sm={4}>
                                                <Card style={{ margin:"10px"}}>
                                                    <CardContent>
                                                        <Grid container alignItems="center" justify="space-between" >
                                                        <Grid xs={12} style={{width:"100%"}} alignItems="center" container justify="space-between" item>
                                                            <Grid  item>
                                                            <Typography
                                                                variant='title'
                                                                style={{fontSize:"1.4em"}}
                                                            >
                                                                {event.name}
                                                            </Typography>
                                                            </Grid>
                                                            <Grid item>

                                                            <Button variant="raised" color="primary" onClick={()=>{
                                                                if(event.popup){
                                                                    event.openPopup=true;
                                                                    this.setState(
                                                                        {
                                                                        }
                                                                    );
                                                                }else{
                                                                    event.link();
                                                                }
                                                            }}>
                                                                Register
                                                            </Button>
                                                            
                                                            </Grid>

                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography variant="headline" style={{fontSize:"1.2em"}}>
                                                                {event.slogan}
                                                            </Typography>
                                                        </Grid>

                                                            <Typography variant="subheading" align="left">
                                                                <CalendarIcon/>    {(new Date(event.schedule)).toLocaleString('en-us', { month: 'long', day: 'numeric',hour:"numeric",minute:"numeric"})}

                                                            </Typography>
                                                            <Typography variant="subheading" align="left">
                                                               <LocationIcon/> Venue : {event.venue}

                                                            </Typography>
                                                            <Typography variant="subheading" align="left">
                                                               <BalanceIcon/> Entry : {event.price}

                                                            </Typography>
                                                        </Grid>

                                                        <Divider/>
                                                        <Typography variant="body1" style={{margin:"15px"}}>
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
                                                        <Typography style={{padding:"10px"}}>
                                                        *Registrations will be confirmed on day of fest at registration desk.
                                                        </Typography>
                                                    </CardContent>
                                                </Card>

                                            </Grid>
                                                    
                                        </Grid>
                                        
                                    </Dialog>
                                    <Dialog
                                        open={event.openPopup}
                                        anchorEl={null}
                                        fullWidth
                                        onBackdropClick={()=>{
                                            event.openPopup=false;
                                            this.setState(
                                                {

                                                }
                                            )
                                        }}
                                    >
                                        <DialogTitle>

                                        <Typography
                                            variant="title"
                                            style={{padding:"10px"}}
                                        >
                                            Register in
                                        </Typography>
                                        </DialogTitle>
                                        <DialogContent>
                                        <Divider/>
                                        <div>
                                            {event.popup}
                                        </div>
                                        </DialogContent>
                                    </Dialog>
									<Button color="secondary" onClick={()=>{
                                                                if(event.popup){
                                                                    event.openPopup=true;
                                                                    this.setState(
                                                                        {
                                                                        }
                                                                    );
                                                                }else{
                                                                    event.link();
                                                                }
                                                            }}>
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
