import React, {Component} from 'react';
import { Paper, Card, CardContent,CardActionArea,Grid, CardMedia, Typography, ExpansionPanel,ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';

import collegeImage from './res/aboutImages/college.jpg';
import techpioneers from './res/aboutImages/techpio.jpeg';
import celestech from './res/aboutImages/celes.jpeg';
import Divider from "@material-ui/core/es/Divider/Divider";

import KaroSambhavLogo from './res/events/karosambhav.png';

class KaroSambhav extends Component{
    poster=<ExpansionPanel>
    <ExpansionPanelSummary>
        Poster Making Competition
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
        
<br/>
<ol>
The details for the Poster Making Competition are as follows:<br/>
<li>Students from all courses are welcomed to bring their own tools and supplies for the poster making competition. </li>
<li>The posters need to be made on a standard poster size such as 18'' * 24''. </li>
<li>The theme for the poster making competition is 'E-waste'</li>
<li>The time limit for the poster making competition is 45 minutes.</li>
<li>The competition will be organized before the awareness programme and prizes for the winners will be distributed at the end of the awareness session. </li>
</ol>

    </ExpansionPanelDetails>
</ExpansionPanel>


    render() {
        return(
            <div style={{padding:"10px",paddingTop:"7em", backgroundColor:"white"}}>
                <Card raised style={{position:"relative",zIndex:50,margin:"8px",padding:"7px"}}>
				
						<CardContent>
							<Grid direction="column" container justify="center" alignItems="center">
								<Grid item>
									<img src={KaroSambhavLogo}/>
								</Grid>
								<Grid item>
									<Typography variant="title" align="center">
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
                                    The programme is also being supported by the Ministry of Environment, Forest and Climate Change (MoEFCC). \
                                    <br/><br/>
									E- Waste Collection Drive at Aryabhatta College -
									<ul>
										<li>26th February 2019: 12:30 - 2:30 pm</li>
										<li>27th February 2019: 11 am - 3 pm</li>
                                    </ul>
									Venue : Outside Multipurpose Hall
                                    <br/><br/>
                                    Awareness Drive by KARO SAMBHAV -
                                    <br/><b>Topic: Environmental Hazards of e-Waste</b>
                                    <ul>
                                        <li>28th February 2019: 12:00PM - 2:00 PM</li>
                                        <li>Venue: Conference Room</li>
                                    </ul>
                                    <br/><br/>
                                    <b>Objective of the awareness programme </b>
                                    <br/>                                
To aware the students and faculty members about: 
<ul>
<li> The scenario of E-waste and its management across India </li>
<li> Impacts of improper/informal ways of managing e-waste on environment and human health </li>
<li> Their roles and responsibilities under the e-waste management rules, 2016</li>
<li> What is EPR and a PRO?</li>
<li> Services offered by Karo Sambhav</li>
<li> Benefits of joining hands with Karo Sambhav</li>
</ul>

<ExpansionPanel>
    <ExpansionPanelSummary>
        Programm Facilitators
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
<div>
<ul style={{listStyle:"none"}}>
<li>Name: Dr. Bini Samal</li>
<li>Designation: Manager (EPR)</li>
<li>Description: She received her PhD and completed her masters in environment management from Forest Research Institute. As a specialist in the field of hazardous waste management, she has been instrumental in the development and management of Karo Sambhav's ecosystem. </li>
</ul>

<ul style={{listStyle:"none"}}>
<li>Name: Sakshe Vasudeva</li>
<li>Designation: Karo Sambhav Ambassador Programme Coordinator</li>
<li>Description: She has completed her masters in Environment studies and resource management from Teri School of advanced studies. Currently, she is working at Karo Sambhav as a coordinator for the 'Karo Sambhav Ambassador programme' and the 'RWA programme'. </li>
</ul>
</div>
    </ExpansionPanelDetails>
</ExpansionPanel>
									</Typography>
									
								</Grid>
							</Grid>
						</CardContent>
				</Card>
            </div>
        )
    }
}

export default KaroSambhav;