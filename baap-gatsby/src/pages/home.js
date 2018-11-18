import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookSquare, faTwitter, faLinkedin, faGithub, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';
import { faTrophy, faVideo, faComments, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import ConstateWrapper from '../wrappers/constateWrapper';
import Navbar from '../components/navbar';


const Home = () => (
    <div style={{margin: "0px"}}>
        <ConstateWrapper>
        {({}) => (
            <div>
                <Navbar />
                <Grid container spacing={12} style={{paddingTop: "56px", height: "98.2vh", width: "100%"}}>
                    <Grid item xs={3} style={{background: "linear-gradient(#004D66, #0099CC)", textAlign: "center", color: "#FFFFFF"}}>
                        <div style={{paddingTop: "2.4vw", paddingLeft: "2.4vw"}}>
                            <Avatar alt="Bobbylee Ingalls" src="https://whathowtowhy.com/wp-content/uploads/2018/04/3653334524001_5588386177001_5588359983001-vs.jpg" style={{height: "20vw", width: "20vw"}} />
                        </div>
                        <p>Bobbylee Ingalls</p>
                        <p>
                            I AM THE ABOUT SECTION
                        </p>
                        <div>
                            <Button variant="contained" style={{color: "#FFFFFF", background: "linear-gradient(#001F54, #000000)"}}>
                                <FontAwesomeIcon icon={faFacebookSquare}/>
                            </Button>
                            <Button variant="contained" style={{color: "#FFFFFF", background: "linear-gradient(#001F54, #000000)"}}>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </Button>
                            <Button variant="contained" style={{color: "#FFFFFF", background: "linear-gradient(#001F54, #000000)"}}>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </Button>
                            <Button variant="contained" style={{color: "#FFFFFF", background: "linear-gradient(#001F54, #000000)"}}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Button>
                            <Button variant="contained" style={{color: "#FFFFFF", background: "linear-gradient(#001F54, #000000)"}}>
                                <FontAwesomeIcon icon={faSnapchatGhost}/>
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={9} style={{backgroundColor: "#000000"}}>
                        <div style={{color: "#FFFFFF"}}>
                            <FontAwesomeIcon icon={faTrophy}/>
                        </div>
                        <div style={{color: "#FFFFFF"}}>
                            <FontAwesomeIcon icon={faVideo}/>
                        </div>
                        <div style={{color: "#FFFFFF"}}>
                            <FontAwesomeIcon icon={faComments}/>
                        </div>
                        <div style={{color: "#FFFFFF"}}>
                            <FontAwesomeIcon icon={faNewspaper}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )}
        </ConstateWrapper>
    </div>
)

export default Home