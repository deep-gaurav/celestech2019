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
import { ListItemText } from '@material-ui/core';

class Header extends Component{
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
            }
        ];
        let NavList = (
            <List>
                {NavItems.map((menuItem,index)=>(
                    <ListItem button key={menuItem.name} component={Link} to={menuItem.path}>
                            <ListItemText primary={menuItem.name}/>
                        
                    </ListItem>))}
            </List>

        )
        return(

            <div>
                <Fade in={true} timeout={700}>
                    <AppBar position='fixed' style= {{backgroundColor:'#FFF9'}}>
                        <Toolbar>
                            <Typography variant='title' style= {{flexGrow:1}}>
                                <Button component={Link} to="/" variant="text" style={{ padding:"0px", fontFamily:"inHuman",fontSize:"2em"}}>
                                    Celestech
                                </Button>
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
                                    "number":{
                                        "value":this.state.width/15
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

export default Header;
