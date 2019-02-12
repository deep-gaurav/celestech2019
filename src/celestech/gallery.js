import React, {Component} from 'react';
import { Paper, Typography, Grid, Dialog,Card, CardActionArea } from '@material-ui/core';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = {"image":r(item),"open":false}; });
    return images;
  }
  


class Gallery extends Component{

    foldertosearch= "./res/gallery/Celestech18/";
    images = importAll(require.context('./res/gallery/Celestech18/', false, /\.(png|jpe?g|svg)$/));

    constructor(props){
        super(props)
        this.state={
            "showdialog":false
        }

    }

    render()
    {
        return (
            <div style={{paddingTop:"4em", backgroundColor:"black"}}>
                <Paper style={{margin:"10px"}}>
                    <Typography align="center" variant="display1" gutterBottom>
                        Gallery

                    </Typography>
                        
                    <Grid container spacing={12} justify='space-evenly'>
                        {
                            Object.keys(this.images).map((imgname,path)=>(
                                <Grid item>
                                <Card>
                                    <CardActionArea onClick={()=>{

                                            this.images[imgname]["open"]=true
                                            this.setState(
                                                {
                                                    showdialog:true
                                                }
                                            )
                                        }}>
                                    <img style={{maxHeight:"200px"}} src={this.images[imgname]["image"]} />
                                    </CardActionArea>
                                </Card>
                                <Dialog
                                    open={this.images[imgname]["open"]}
                                    onBackdropClick={
                                        ()=>{
                                            this.images[imgname]["open"]=false

                                            this.setState(
                                                {
                                                    showdialog:false
                                                }
                                            )
                                        }
                                    }
                                    onClose={()=>{
                                        this.images[imgname]["open"]=false

                                        this.setState(
                                            {
                                                showdialog:false
                                            }
                                        )
                                    }}
                                >
                                    <img  src={this.images[imgname]["image"]} />
                                </Dialog>

                                
                                </Grid>
                            ))
                        }

                    </Grid>
                </Paper>
            </div>
        )

    }

}
export default Gallery;
