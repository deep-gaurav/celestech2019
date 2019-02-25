import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
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

import KaroSambhav from './res/events/karosambhav.png';
import '@brainhubeu/react-carousel/lib/style.css';

import quizosityBanner from './res/events/banner/Quizosity.jpg';
import codathonBanner from './res/events/banner/Codathon.jpg';
import junkyardBanner from './res/events/banner/Junkyard.jpg';
import treasureHuntBanner from './res/events/banner/TreasureHunt.jpg';
import uniconBanner from './res/events/banner/Unicon.jpg';
import itTambolaBanner from './res/events/banner/ITTambola.jpg';

import festImage from './res/posteryellow2k19.jpg';
import { Link } from '@material-ui/core';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
import { LocationOn, Event } from '@material-ui/icons';

import Coverflow from 'react-coverflow';

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

	eventBanners=[
		quizosityBanner,
		codathonBanner,
		junkyardBanner,
		treasureHuntBanner,
		uniconBanner,
		itTambolaBanner
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
			<div className="FadeAnim">
					
				<Grid container justify="center" alignItems="center" direction="column" style = {{backgroundColor:'white',paddingTop:"6em",height:(this.state.height-80)+"px",width:"100%"}} >

					<Grid item
						style = {{color:'#000080',margin:'0px',fontFamily:'HT',fontSize:this.state.width<this.state.height?"12vw":"9vw"}}
					>
						<div style={{fontFamily:"ERASDEMI",fontWeight:"bold",color:"#000", maxWidth:"100%", fontSize:"6vmin"}} align="center">
						Department of Computer Science
						</div>
						<div style={{fontFamily:"ERASDEMI",fontWeight:"bold",color:"#000", maxWidth:"100%", fontSize:"4vmin"}} align="center">
						PRESENTS
						</div>
						<div style={{textShadow:"2px 2px black"}}>
						Celestech
						</div>
					</Grid>
				
					<Grid item container direction="column" alignItems="center" justify="flex-start">
					<Grid item>
						<Typography style={{fontFamily:"ERASDEMI",fontWeight:"bold",color:"#000", maxWidth:"100%", fontSize:"4vmin"}} align="center">
						The Annual Technical Fest
						</Typography>
					</Grid>
					<Grid item>

						<Typography variant="p" style={{fontFamily:"ERASDEMI",fontWeight:"bold",color:"#000", maxWidth:"100%", fontSize:"6vmin",marginBottom:"4vw"}} align="center" gutterBottom>
							Aryabhatta College

						<Typography style={{fontFamily:"ERASDEMI",fontWeight:"bold",color:"#000", fontSize:"6vmin",marginBottom:"3vw"}} align="center" gutterBottom>
							University of Delhi
						</Typography>
						</Typography>
					</Grid>
					<Grid item>


					<Button onClick={()=>{
						this.props.history.push("/events")
					}} variant='outlined' color='secondary' style={{alignSelf:"center"}}>
						<Typography variant="title" style={{fontSize:"4vmin",padding:"10px"}} align="center" color="secondary">
							Register
						</Typography>
					</Button>
					</Grid>
					</Grid>


				</Grid>
				<FlipClock
					count_to = "2019-02-27T00:00:00"
				/>

				<div style = {{ backgroundColor:"white"}}>
					<div style={{padding:"20px"}}>
					<Card  elevation={6} style={{position:"relative",zIndex:50
					
				}}>
						<CardActionArea onClick={()=>{
							const {history} = this.props;
							console.log(this.props)	
							history.push("/about")
						}}>
							<Grid container style={{
						background:'linear-gradient(to bottom, rgb(252, 246, 210), rgb(251, 228, 178),#fcd59a)'}} justify="space-around" alignItems="center">
								<Grid item>
										<img style={{height:this.state.height*0.7}} src={festImage} component="img"/>
									
								</Grid>
							<Grid item xs={12} sm={12} md={6} lg={7} >
							<Card raised>
							<CardContent
								style={{
									background:'linear-gradient(to bottom, rgb(251, 215, 158), rgb(252, 229, 179),#fbd79d)'
								}}
							>
								<Typography
									variant="title"
									style={{fontSize:"2em"}}
									gutterBottom
								>
									Celestech - Aryabhatta College
								</Typography>
								<Typography variant="body1" style={{fontSize:"1.5em", minWidth:"100px"}}>
								"Celestech" is the annual fest organised by the Department of Computer Science, Aryabhatta College, University of Delhi. It involves multifarious technical and non-tech events attracting a huge crowd from across different colleges of the Delhi University every year.
								</Typography>
							</CardContent>
							</Card>
							</Grid>

							</Grid>
						</CardActionArea>
					</Card>

					</div>
					
				</div>
				<Carousel
					slidesPerPage={parseInt(this.state.width/600)>0?parseInt(this.state.width/400):1}
					slidesPerScroll={1}
					infinite
					clickToChange
					centered
					animationSpeed={1500}
					autoPlay={2000}
				>
					{this.eventBanners.map((posterItem,index)=>(
						<Card elevation={10} style={{margin:"10px"}}>
							<CardActionArea onClick={()=>{
								this.props.history.push("/events")
							}}>
							<CardMedia src={posterItem} component="img" style={{width:"100%"}}/>
							</CardActionArea>
						</Card>
					))}
				</Carousel>
				
				<Card raised style={{position:"relative",zIndex:50,margin:"15px",padding:"10px"}}>
					<CardActionArea onClick={()=>{
						this.props.history.push('/karosambhav')
					}}>
						<CardContent>
							<Grid container justify="center" alignItems="stretch">
								<Grid item>
									<img src={KaroSambhav}/>
								</Grid>
								<Grid item md={9} container>
								<Grid item>
									<Typography variant="title">
									Awareness Programme on Environmental Hazards of e-waste
									</Typography>
									<Typography align="right">
										By- Karo Sambhav
									</Typography>
									<Divider/>
								</Grid>
								<Grid item>
									<Typography variant="p" style={{fontSize:"18px"}}>
									Karo Sambhav, one of India’s first authorised E-Waste Producer Responsibility Organisations, is organising awareness drives under the Ministry of Electronics and Information Technology’s (MeitY) “Awareness Programme on Environmental Hazards of e-waste through Digital India Initiative-Phase II” in association with Manufacturers Associate of Information Technology (MAIT).
									<br/>
									<Button variant="flat">Learn More</Button>
									</Typography>
									
								</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card raised style={{position:"relative",zIndex:50,padding:"10px",margin:"15px"}}>
				
				<CardContent>
					<Map center={[28.578821785799896,77.16215372085571]} zoom={15} width={this.state.width-"40px"} height={400}>
						<Marker anchor={[28.578821785799896,77.16215372085571]} payload={1} onClick={({ event, anchor, payload }) => {
							window.open("https://goo.gl/maps/Ap9YwN7bbBo");
						}} />
						
						<Overlay anchor={[28.578821785799896,77.16215372085571]} offset={[-20, 40]}>
							<Typography variant="title">
								<Event/>
								Celestech
							</Typography>
							<Typography variant="title">
								Aryabhatta College
							</Typography>
						</Overlay>
					</Map>
				</CardContent>
				</Card>
			</div>
			)
	}

}


export default withRouter(Home);