import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import ConstateWrapper from '../wrappers/constateWrapper';


const Home = () => (
    <div style={{margin: "0px"}}>
        <ConstateWrapper>
        {({}) => (
            <div>
                <AppBar color="default" style={{width: "100%", background: "linear-gradient(#001F54, #000000)"}}>
                    <Toolbar>
                        <p style={{color: "#FFFFFF"}}>IMMALOGO(needberight)</p>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={12} style={{paddingTop: "56px", height: "98.2vh", width: "100%"}}>
                    <Grid item xs={3} style={{background: "linear-gradient(#004D66, #0099CC)", textAlign: "center", color: "#FFFFFF"}}>
                        <div style={{paddingTop: "2.4vw", paddingLeft: "2.4vw"}}>
                            <Avatar alt="Bobbylee Ingalls" src="https://whathowtowhy.com/wp-content/uploads/2018/04/3653334524001_5588386177001_5588359983001-vs.jpg" style={{height: "20vw", width: "20vw"}} />
                        </div>
                        <p>Bobbylee Ingalls</p>
                        <p style={{textAlign: "justify"}}>
                            I AM THE ABOUT SECTION
                        </p>
                        <div>
                            <Button variant="contained" style={{color: "#FFFFFF", background: "linear-gradient(#001F54, #000000)"}}>
                                TEST
                            </Button>
                            <Button variant="contained" style={{color: "#FFFFFF", background: "linear-gradient(#001F54, #000000)"}}>
                                TEST
                            </Button>
                            <Button variant="contained" style={{color: "#FFFFFF", background: "linear-gradient(#001F54, #000000)"}}>
                                TEST
                            </Button>
                            <Button variant="contained" style={{color: "#FFFFFF", background: "linear-gradient(#001F54, #000000)"}}>
                                TEST
                            </Button>
                            <Button variant="contained" style={{color: "#FFFFFF", background: "linear-gradient(#001F54, #000000)"}}>
                                TEST
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={9} style={{backgroundColor: "#000000"}}>
                        
                    </Grid>
                </Grid>
            </div>
        )}
        </ConstateWrapper>
    </div>
)

export default Home