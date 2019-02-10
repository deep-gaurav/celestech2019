import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Waypoint from 'react-waypoint';
import Button from '@material-ui/core/Button';
import FlipClock from 'x-react-flipclock';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Particles from 'react-particles-js';

import pink from '@material-ui/core/colors/pink';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red'

import './home.css'

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
				<AppBar position='fixed' style= {{backgroundColor:'#FFFF'}}>
					<Toolbar>
						<Typography variant='title' style= {{flexGrow:1}}>
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
					<Particles height={(this.state.height-100)+'px'} style={{position:'fixed'}}
						params= {{
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


					<div className = "headDiv" style = {{backgroundColor:'black',height:(this.state.height-100)+"px",display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',flexWrap:'wrap'}} >

						<Typography
							className="titleText"
							align = 'center'
							style = {{color:'#FFF',margin:'20px',fontFamily:'inHuman',fontSize:"4em"}}
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
						<Button variant='outlined' color='secondary'>
							Register
						</Button>


					</div>

					<Card style = {{paddingTop:"30px",height:"70px"}}>
						<Typography
							variant = 'h5'
						>
							<FlipClock
								type="countdown"
								count_to = "2019-02-27 00:00:00"
							/>
						</Typography>
					</Card>

				
				<div style = {{height: this.state.height, backgroundColor:"#0000"}}>

				</div>
			</MuiThemeProvider>
			)
	}

}

export default Home;