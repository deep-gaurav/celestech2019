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
import Drawer from '@material-ui/core/Drawer';
import Particles from 'react-particles-js';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import {Link} from 'react-router-dom';
import { ListItemText, SvgIcon, withWidth } from '@material-ui/core';
import {SpeedDial,SpeedDialAction,SpeedDialIcon} from '@material-ui/lab';
import Share from '@material-ui/icons/Share';
import CameraEnhance from '@material-ui/icons/CameraEnhance';
import { grey, lightBlue } from '@material-ui/core/colors';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { blueGrey } from '@material-ui/core/es/colors';
import { light } from '@material-ui/core/styles/createPalette';

class Header extends Component{


    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            width:0,
            height:0,

            showAppBar:false,
            openDrawer:false,
            openSpeedDial:false,
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

        let NavItems = [
            {
                "name":"Home",
                "path":"/",
                "icon":"",
            },
            {
                "name":"Events",
                "path":"/events",
                "icon":""
            },
            {
                "name":"About",
                "path":"/about",
                "icon":""
            },
            {
                "name":"Gallery",
                "path":"/gallery",
                "icon":""
            },
            {
                "name":"Sponsors",
                "path":"/sponsor",
                "icon":""
            },
            {
                "name":"Contact",
                "path":"/contact",
                "icon":""
            },
            {
                "name":"Schedule",
                "path":"/schedule",
                "icon":""
            }
        ];
        let NavList = (
            <List>
                {NavItems.map((menuItem,index)=>(
                    <ListItem button key={menuItem.name} component={Link} onClick={()=>{
                        this.setState(
                            {
                                openDrawer:false
                            }
                        )
                    }} to={menuItem.path}>
                            <ListItemText primary={menuItem.name}/>
                        
                    </ListItem>))}
            </List>

        )
        return(

            <div>
                <Fade in={true} timeout={700}>
                    <AppBar position='fixed' style= {{backgroundColor:'#FFFE'}}>
                        <Toolbar>
                            <Typography variant='title' style= {{flexGrow:1}}>
                                <Button component={Link} to="/" variant="text" style={{ padding:"0px", fontFamily:"HT",fontSize:"3vmax"}}>
                                    Celestech
                                </Button>
                            </Typography>
                            {
                                (this.props.width!="xs" && this.props.width!="sm") ? NavItems.map((navitem,index)=>(
                                    <Button to={navitem.path} variant="flat" component={Link}>
                                        {navitem.name}
                                    </Button>
                                )):
                                <IconButton style={{margin:10}} onClick={()=>{
                                        this.setState({
                                            openDrawer:true
                                        })
                                    }} >
                                    <MenuIcon/>
                                </IconButton>
                            }
                            
                        </Toolbar>

                    </AppBar>
                </Fade>
                <Drawer anchor ="right" open={this.state.openDrawer} onClose={(ev)=>{
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
                <div style={{position:"absolute",height:this.state.height,width:"100%"}}>
                    <MuiThemeProvider theme={createMuiTheme({"palette":{"primary":lightBlue}})}>
                    <SpeedDial 
                        ariaLabel="Social"
                        
                        icon= {<SpeedDialIcon icon={<SvgIcon>
    <path fill="#FFF" d="M12,6A3,3 0 0,0 9,9A3,3 0 0,0 12,12A3,3 0 0,0 15,9A3,3 0 0,0 12,6M6,8.17A2.5,2.5 0 0,0 3.5,10.67A2.5,2.5 0 0,0 6,13.17C6.88,13.17 7.65,12.71 8.09,12.03C7.42,11.18 7,10.15 7,9C7,8.8 7,8.6 7.04,8.4C6.72,8.25 6.37,8.17 6,8.17M18,8.17C17.63,8.17 17.28,8.25 16.96,8.4C17,8.6 17,8.8 17,9C17,10.15 16.58,11.18 15.91,12.03C16.35,12.71 17.12,13.17 18,13.17A2.5,2.5 0 0,0 20.5,10.67A2.5,2.5 0 0,0 18,8.17M12,14C10,14 6,15 6,17V19H18V17C18,15 14,14 12,14M4.67,14.97C3,15.26 1,16.04 1,17.33V19H4V17C4,16.22 4.29,15.53 4.67,14.97M19.33,14.97C19.71,15.53 20,16.22 20,17V19H23V17.33C23,16.04 21,15.26 19.33,14.97Z" />
                        </SvgIcon>} openIcon={<CloseIcon/>} />}
                        direction= 'left'
                        style = {{
                            position:"fixed",
                            bottom:"50%",
                            right:"-20px"
                        }}
                        open={this.state.openSpeedDial}
                        onMouseEnter={()=>{
                            this.setState(
                                {
                                    openSpeedDial:true
                                }
                            )
                        }}
                        onMouseLeave={()=>{
                            this.setState(
                                {
                                    openSpeedDial:false
                                }
                            )
                        }}
                        onClose={()=>{
                            this.setState(
                                {
                                    openSpeedDial:false
                                }
                            )
                        }}
                        onClick={()=>{
                            this.setState(
                                {
                                    openSpeedDial:!this.state.openSpeedDial
                                }
                            )
                        }}
                    >
                        <SpeedDialAction
                            key="facebook"
                            icon={<SvgIcon >    <path fill="blue" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" /></SvgIcon>}
                            tooltipOpen
                            tooltipTitle="Facebook"
                            tooltipPlacement="top"
                            onClick = {()=>{window.open("https://facebook.com/techpioneersofficial")}}
                        />
                        <SpeedDialAction
                            key="instagram"
                            icon={<SvgIcon>
                                    <path fill="#880000" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                            </SvgIcon>}
                            tooltipOpen
                            tooltipTitle="Instagram"
                            tooltipPlacement="top"
                            onClick = {()=>{window.open("https://instagram.com/techpioneersofficial")}}
                        />    
                    </SpeedDial>
                    </MuiThemeProvider>
                </div>
                <Particles height={(this.state.height)+'px'} style={{position:'fixed',zIndex:0}}
                           params= {{
                            "particles": {
                                "number": {
                                  "value": 80,
                                  "density": {
                                    "enable": true,
                                    "value_area": 800
                                  }
                                },
                                "color": {
                                  "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
                                },
                                "shape": {
                                  "type": "circle",
                                  "stroke": {
                                    "width": 0,
                                    "color": "#b6b2b2"
                                  }
                                },
                                "opacity": {
                                  "value": 0.7211089197812949,
                                  "random": false,
                                  "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                  }
                                },
                                "size": {
                                  "value": 8.017060304327615,
                                  "random": true,
                                  "anim": {
                                    "enable": true,
                                    "speed": 12.181158184520175,
                                    "size_min": 0.1,
                                    "sync": true
                                  }
                                },
                                "line_linked": {
                                  "enable": true,
                                  "distance": 150,
                                  "color": "#BBB",
                                  "opacity": 0.7,
                                  "width": 1
                                },
                                "move": {
                                  "enable": true,
                                  "speed": 1,
                                  "direction": "none",
                                  "random": false,
                                  "straight": false,
                                  "out_mode": "bounce",
                                  "bounce": false,
                                  "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                  }
                                }
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



            </div>
        )
    }
}

export default withWidth()(Header);
