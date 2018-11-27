import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../img/logotype120W.svg';


const Navbar = () => (
    <AppBar color="default" style={{width: "100vw", background: "linear-gradient(#001F54, #000000)", position: "relative", marginLeft: '-8px', marginTop: "-8px" }}>
        <Toolbar>
            <div style={{width: "100%", textAlign: "right"}}>
                <img src={Logo} alt="BaaP Logo" style={{height: "60px"}}/>
            </div>
        </Toolbar>
    </AppBar>
)

export default Navbar