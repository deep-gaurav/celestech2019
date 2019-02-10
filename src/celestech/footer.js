import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Footer extends Component{
	render(){
		return(
			<div style={{width:'100%',height:"80px",backgroundColor:"#111",
				display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',flexWrap:'wrap'
		}}>
				<Typography align="center" style={{color:'#FFF'}}>
					Copyright © Techpioneers- Aryabhatta College
				</Typography>
			</div>
			)
	}
}

export default Footer;