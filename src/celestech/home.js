import React, { Component } from 'react';
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
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Particles from 'react-particles-js';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import pink from '@material-ui/core/colors/pink';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red'

import festImage from './res/fest2018.jpg';
import quizosityPoster from './res/events/quizosity.jpg';
import codathonPoster from './res/events/codathon.jpg';
import junkyardPoster from './res/events/junkyardWars.jpg';
import treasureHuntPoster from './res/events/treasureHunt.jpg';
import uniconPoster from './res/events/unicon.jpg';
import itTambolaPoster from './res/events/it_tambola.jpg';
//import './home.scss';

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: pink,
		error:red

	}
})

class Home extends Component{

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

	constructor(props){
		super(props);
		this.state = {
			width:0,
			height:0,

			showAppBar:false,
			openDrawer:false,
		}
	}


	componentDidMount(){
		this.updateWindowDimensions();

	}

	componentDidUnmount(){

	}

	updateWindowDimensions(){
		this.setState(
		{
			width:window.innerWidth,
			height:window.innerHeight
		})
	}

	render(){

		let NavItems = ["Home","About","Events","Gallary","Sponsors","Contact"];
		let NavList = (
			<List>
				{NavItems.map((text,index)=>(
					<ListItem button key={text}>
						<ListItemText primary={text}/>
					</ListItem>))}
			</List>

			)

		return(
			<MuiThemeProvider muiTheme  = {theme}>
				<Fade in={this.state.showAppBar} timeout={700}>
				<AppBar position='fixed' style= {{backgroundColor:'#FFF'}}>
					<Toolbar>
						<Typography variant='title' style= {{flexGrow:1, fontFamily:"inHuman",fontSize:"2em"}}>
							CelesTech
						</Typography>
						<IconButton style={{margin:10}} onClick={()=>{
							this.setState({
								openDrawer:true
							})
						}} >
							<MenuIcon/>
						</IconButton>
					</Toolbar>

					</AppBar>
				</Fade>
				<Drawer anchor ="bottom" open={this.state.openDrawer} onClose={(ev)=>{
					this.setState({
						openDrawer:false
					})}
				}>	
					<div
						tabIndex = {0}
						>
					{NavList}
					</div>
				</Drawer>
					<Particles height={(this.state.height)+'px'} style={{position:'fixed'}}
						params= {{
							"particles":{

							},
							"interactivity":{
								"events":{
									"onhover":{
										"enable":true,
										"mode": "repulse"
									}
								}
							}
						}}
					/>


					<div style = {{backgroundColor:'black',height:(this.state.height-80)+"px",width:this.state.width}} >

							<div>
						<Typography
							className="titleText"
							align = 'center'
							style = {{color:'#FFF',margin:'0px',fontFamily:'inHuman',fontSize:"20vw"}}
						>
							Celestech
							<Waypoint
								onEnter = {({previousPosition,currentPosition,event})=>{
									this.setState({
										showAppBar:false	
									});
								}}
								onLeave = {({previousPosition,currentPosition,event})=>{
									this.setState({
										showAppBar:true	
									});
								}}

							/>
							
						</Typography>
							</div>

							<Typography style={{color:"#FFF", fontSize:"2vw"}} align="center" gutterBottom>
								Department of Computer Science
							</Typography>


						<Button variant='outlined' color='secondary' style={{alignSelf:"center"}}>
							<Typography style={{fontSize:"20px",padding:"5px"}} align="center" color="secondary">
								Register
							</Typography>
						</Button>


					</div>
					<FlipClock
						count_to = "2019-02-27 00:00:00"
					/>

				<div style = {{ backgroundColor:"#000"}}>
					<div style={{padding:"20px"}}>
					<Card elevation={6}>
						<CardActionArea>
							<CardMedia image={festImage} height="150" style={{width:"100%",objectFit:"none"}} title = "Celestech" component="img"/>

							<CardContent>
								<Typography
									variant="title"
									gutterBottom
								>
									Celestech - Aryabhatta College
								</Typography>
								<Typography variant="p">
									Template text to be replace.
									Celestech is annual fest of Aryabhatta College hosted by the Computer Department Society 
									TechPioneers.. ....some more lorem ipsum to be replaced here........
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
					</div>
					<Paper style = {{margin:"10px"}}>
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
									<Button color="primary">
										Learn More
									</Button>
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
			</MuiThemeProvider>
			)
	}

}


export default Home;