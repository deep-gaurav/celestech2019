import React, {Component} from 'react';
import { Paper, TextField, Typography, Button, Fade, CircularProgress, DialogTitle,Dialog,DialogContent } from '@material-ui/core';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator';

class Contact extends Component{

    constructor(props){
        super(props);
        this.state={
            submitted:false,
            name:"",
            email:"",
            message:"",
            success:false,
            fail:false
        }
    }

    contact(){
        this.setState({ submitted: true });

        let name=this.state.name;
        let email=this.state.email;
        let message=this.state.message;

        let durl="http://localhost/php/PHP2/celestech/contact.php";
        let furl="https://www.celes19.tech/contact.php";
        let data = new FormData();
        data.append('name',name);
        data.append('email',email);
        data.append('message',message);
        data.append('contact',true);
        console.log(this.state);
        fetch(furl,{
            method: 'post',
            body: data
           }).then(
            (response)=>{
                response.text().then((text)=>{
                    console.log(text);
                    this.setState(
                        {
                            submitted:false
                        }
                    )
                    if(text=="SUCCESS"){
                        this.setState(
                            {
                                success:true
                            }
                        )
                    }else if(text=="FAIL"){
                        this.setState({
                            fail:true
                        })
                    }
                })
            }
        )
    }

    render() {

        return(
            <div style={{backgroundColor:"white",padding:"10px",paddingTop:"5em"}}>
                <Paper style={{padding:"10px"}}>
                    <Typography variant="display2" align="center">
                        Contact Us
                    </Typography>
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.contact.bind(this)}
                        onError={errors => console.log(errors)}
                    >
                        <TextValidator variant="outlined"
                            name="name"
                            fullWidth
                            margin="normal"
                            label="Name"
                            value = {this.state.name}
                            validators={['required']}
                            errorMessages={['Name is required']}
                            onChange={(ev)=>{
                                this.setState(
                                    {
                                        name:ev.target.value
                                    }
                                )
                            }}
                        />
                        <TextValidator variant="outlined"
                            name="email"
                            fullWidth
                            margin="normal"
                            value = {this.state.email}
                            label="Email"
                            type="email"
                            validators={['required','isEmail']}
                            errorMessages={['Email Id is required','Invalid Email']}
                            onChange={(ev)=>{
                                this.setState(
                                    {
                                        email:ev.target.value
                                    }
                                )
                            }}
                        />
                        <TextField variant="outlined"
                            name="message"
                            label="Message"
                            fullWidth
                            margin="normal"
                            multiline
                            value = {this.state.message}
                            rows={5}
                            name="message"
                            onChange={(ev)=>{
                                this.setState(
                                    {
                                        message:ev.target.value
                                    }
                                )
                            }}
                        />

                        <Typography align="right">
                        <Button
                            align="right"
                            margin={10}
                            variant="raised"
                            color="primary"
                            type="submit"
                            disabled={this.state.submitted}
                        >
                            Submit
                            <Fade in={this.state.submitted}>
                                <CircularProgress/>
                            </Fade>
                        </Button>
                        </Typography>
                    </ValidatorForm>
                </Paper>
                <Dialog
                    onBackdropClick = {()=>{
                        this.setState({fail:false})
                    }}
                    fullWidth
                    open={this.state.fail}
                >
                    <DialogTitle>
                        ERROR
                    </DialogTitle>
                    <DialogContent>
                        An error occured, Please try again
                    </DialogContent>
                </Dialog>

                <Dialog
                    fullWidth
                    open={this.state.success}
                    
                    onBackdropClick = {()=>{
                        this.setState({success:false})
                    }}
                >
                    <DialogTitle>
                        SUCCESS
                    </DialogTitle>
                    <DialogContent>
                        Thank You for contacting, we'll get back to you soon.
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}

export default Contact;