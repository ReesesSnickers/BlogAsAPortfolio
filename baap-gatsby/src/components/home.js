import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ConstateWrapper from '../wrappers/constateWrapper';


const Home = () => (
    <div>
        <ConstateWrapper>
        {({}) => (
            <div>
                <AppBar color="default" style={{width: "100%"}}>
                    <Toolbar>
                        <p></p>
                    </Toolbar>
                </AppBar>
            </div>
        )}
        </ConstateWrapper>
    </div>
)

export default Home