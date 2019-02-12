import React, {Component} from 'react';
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator';

class Contact extends Component{

    render() {

        return(
            <div style={{backgroundColor:"black",padding:"10px",paddingTop:"4em"}}>
                <Paper style={{padding:"10px"}}>
                    <Typography variant="display2" align="center">
                        Contact Us
                    </Typography>
                    <ValidatorForm
                        ref="form"
                    >
                        <TextValidator variant="outlined"
                            name="name"
                            fullWidth
                            margin="normal"
                            label="Name"
                            validators={['required']}
                            errorMessages={['Name is required']}
                        />
                        <TextValidator variant="outlined"
                            name="email"
                            fullWidth
                            margin="normal"
                            label="Email"
                            type="email"
                            validators={['required','isEmail']}
                            errorMessages={['Email Id is required','Invalid Email']}
                        />
                        <TextField variant="outlined"
                            name="message"
                            label="Message"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={5}
                            name="message"
                        />

                        <Typography align="right">
                        <Button
                            align="right"
                            margin={10}
                            variant="raised"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                        </Typography>
                    </ValidatorForm>
                </Paper>
            </div>
        )
    }
}

export default Contact;