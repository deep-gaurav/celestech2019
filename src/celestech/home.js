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

import pink from '@material-ui/core/colors/pink';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

import Events from './Events';
import quizosityPoster from './res/events/quizosity.jpg';
import codathonPoster from './res/events/codathon.jpg';
import junkyardPoster from './res/events/junkyardWars.jpg';
import treasureHuntPoster from './res/events/treasureHunt.jpg';
import uniconPoster from './res/events/unicon.jpg';
import itTambolaPoster from './res/events/it_tambola.jpg';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import festImage from './res/fest2019.png';
//import './home.scss';

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: pink,
		error:red

	}
})

class Home extends Component{

	eventPoster=[
		quizosityPoster,
		codathonPoster,
		junkyardPoster,
		treasureHuntPoster,
		uniconPoster,
		itTambolaPoster
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

		let NavItems = ["Home","About","Events","Gallery","Sponsors","Contact"];
		let NavList = (
			<List>
				{NavItems.map((text,index)=>(
					<ListItem button key={text} >
						<ListItemText primary={text}/>
					</ListItem>))}
			</List>

		)

		return(
			<div>
					
				<Grid container justify="center" alignItems="center" direction="column" style = {{backgroundColor:'white',height:(this.state.height-80)+"px",width:"100%"}} >

						<div style={{paddingTop:"80px", width:"100%"}}>
					<p

						align = 'center'
						style = {{color:'#000080',margin:'0px',fontFamily:'HT',fontSize:"8vw"}}
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
						
					</p>
						</div>

						<Typography style={{font:"Verdana",fontWeight:"bold",color:"#000", fontSize:"8vmin",marginBottom:"2em"}} align="center" gutterBottom>
							Department of Computer Science


						<Typography style={{font:"Verdana",fontWeight:"bold",color:"#000", fontSize:"6vmin",marginBottom:"2em"}} align="center" gutterBottom>
							Aryabhatta College, University of Delhi
						</Typography>

						</Typography>
					<Button variant='outlined' color='secondary' style={{alignSelf:"center"}}>
						<Typography style={{fontSize:"3vmin",padding:"5px"}} align="center" color="secondary">
							Register
						</Typography>
					</Button>


				</Grid>
				<FlipClock
					count_to = "2019-02-27T00:00:00"
				/>

				<div style = {{ backgroundColor:"white"}}>
					<div style={{padding:"20px"}}>
					<Card  elevation={6} style={{position:"relative",zIndex:50}}>
						<CardActionArea >
							<Grid container justify="space-around" alignItems="center">
								<Grid item>
									<Card >
										<img style={{height:this.state.height*0.7}} src={festImage} component="img"/>
									</Card>
								</Grid>
							<Grid item xs={12} sm={12} md={6} lg={7} >
							<Card>
							<CardContent>
								<Typography
									variant="title"
									gutterBottom
								>
									Celestech - Aryabhatta College
								</Typography>
								<Typography variant="body1" style={{fontSize:"3vmin", minWidth:"100px"}}>
								"Celestech" is the annual fest organised by the Department of Computer Science, Aryabhatta College, University of Delhi. It involves multifarious technical and non-tech events attracting a huge crowd from across different colleges of the Delhi University every year.
Celestech is organized with the objective to provide a platform for the students to showcase their talent and skills with a competitive spirit. From amazing events including Codathon, Junkyard Wars, Quizosity, IT Tambola, LAN Gaming and multiple fun-filled games, we are coming back this February. Pen down the dates and get ready for a boisterous experience.
								</Typography>
							</CardContent>
							</Card>
							</Grid>

							</Grid>
						</CardActionArea>
						<CardActions>
							<Button color="primary" >
								Learn More
							</Button>
						</CardActions>
					</Card>

					</div>
					
				</div>
				<Carousel
					arrows
					slidesPerPage={parseInt(this.state.width/400)>0?parseInt(this.state.width/400):1}
					slidesPerScroll={1}
					infinite
					clickToChange
					centered
					animationSpeed={1500}
					autoPlay={2000}
				>
					{this.eventPoster.map((posterItem,index)=>(
						<Card elevation={10} style={{margin:"10px"}}>
							<CardMedia src={posterItem} component="img" style={{width:"100%"}}/>
						</Card>
					))}
				</Carousel>
			</div>
			)
	}

}


export default Home;