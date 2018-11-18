import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const Navbar = () => (
    <AppBar color="default" style={{width: "100%", background: "linear-gradient(#001F54, #000000)"}}>
        <Toolbar>
            <p style={{color: "#FFFFFF"}}>IMMALOGO(needberight)</p>
        </Toolbar>
    </AppBar>
)

export default Navbar