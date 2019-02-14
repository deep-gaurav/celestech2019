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

import festImage from './res/fest2018.jpg';
//import './home.scss';

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: pink,
		error:red

	}
})

class Home extends Component{


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

						<div>
					<p

						align = 'center'
						style = {{color:'navy blue',margin:'0px',fontFamily:'inHuman',fontSize:"20vw"}}
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

						<Typography style={{color:"#000", fontSize:"6vmin",marginBottom:"2em"}} align="center" gutterBottom>
							Department of Computer Science


						<Typography style={{color:"#000", fontSize:"4vmin",marginBottom:"2em"}} align="center" gutterBottom>
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
					count_to = "2019-02-27 00:00:00"
				/>

				<div style = {{ backgroundColor:"white"}}>
					<div style={{padding:"20px"}}>
					<Card elevation={6}>
						<CardActionArea >
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
							<Button color="primary" >
								Learn More
							</Button>
						</CardActions>
					</Card>


					</div>
					
				</div>

			</div>
			)
	}

}


export default Home;