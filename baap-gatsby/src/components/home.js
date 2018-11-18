import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import ConstateWrapper from '../wrappers/constateWrapper';


const Home = () => (
    <div style={{margin: "0px"}}>
        <ConstateWrapper>
        {({}) => (
            <div>
                <AppBar color="default" style={{width: "100%", background: "linear-gradient(#001F54, #000000)"}}>
                    <Toolbar>
                        <p></p>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={12} style={{paddingTop: "56px", height: "98.2vh", width: "100%"}}>
                    <Grid item xs={3} style={{background: "linear-gradient(#004D66, #0099CC)"}}>
                        
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