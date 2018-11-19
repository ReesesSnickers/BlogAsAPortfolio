import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Responsive from 'react-responsive';

import { faFacebookSquare, faTwitter, faLinkedin, faGithub, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';
import { faTrophy, faVideo, faComments, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import ConstateWrapper from '../wrappers/constateWrapper';
import Navbar from '../components/navbar';

const FourK = props => <Responsive {...props} minWidth={1441} />;
const Desktop = props => <Responsive {...props} minWidth={1024} maxWidth={1440}/>;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={1023} />;


const Home = () => (
    <div style={{height: "100%"}}>
        <ConstateWrapper>
        {({}) => (
            <div>
                <Navbar />
                <Desktop>
                <Grid container spacing={12} style={{paddingTop: "56px", width: "100vw", height: "100vh"}}>
                    <Grid item xs={3} style={{background: "linear-gradient(#004D66, #0099CC)", textAlign: "center", color: "#FFFFFF", height: "94.5vh"}}>
                        <div style={{paddingTop: "2.4vw", paddingLeft: "5.8vw"}}>
                            <Avatar alt="Bobbylee Ingalls" src="https://whathowtowhy.com/wp-content/uploads/2018/04/3653334524001_5588386177001_5588359983001-vs.jpg" style={{height: "13.2vw", width: "13.2vw"}} />
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




                    <Grid item xs={9} style={{backgroundColor: "#000000", paddingLeft: "2.4vw", height: "94.5vh"}}>
                        <Grid container spacing={12} style={{paddingTop: "5vh"}}>
                            <div>
                                <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "13vw", width: "15vw"}}>
                                    <Grid container spacing={12}>
                                        <Grid item xs={12}>
                                            <FontAwesomeIcon icon={faNewspaper} style={{width: "8vw", height: "8vh"}}/>
                                        </Grid>
                                        <Grid item style={{width: "100%", textAlign: "center", fontSize: "1.2vw"}}>
                                            <p>Resume</p>
                                        </Grid>
                                    </Grid>
                                </Button>
                            </div>
                            <div style={{paddingLeft: "2.4vw"}}>
                                <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "13vw", width: "15vw"}}>
                                    <Grid container spacing={12}>
                                        <Grid item xs={12}>
                                            <FontAwesomeIcon icon={faComments} style={{width: "8vw", height: "8vw"}}/>
                                        </Grid>
                                        <Grid item style={{width: "100%", textAlign: "center", fontSize: "1.2vw"}}>
                                            <p>Blog</p>
                                        </Grid>
                                    </Grid>
                                </Button>
                            </div>
                            <div style={{marginLeft: "2.4vw", backgroundColor: "red", height: "13vw", width: "33.5vw"}}>
                                Im going to be quotes soon
                            </div>
                        </Grid>
                        <Grid container spacing={12}>
                            <Grid item xs={3} style={{paddingTop: "9vh"}}>
                                <Grid container spacing={12}>
                                    <div style={{paddingBottom: "9vh"}}>
                                        <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "13vw", width: "15vw"}}>
                                            <Grid container spacing={12}>
                                                <Grid item xs={12}>
                                                    <FontAwesomeIcon icon={faVideo} style={{width: "8vw", height: "8vw"}}/>
                                                </Grid>
                                                <Grid item style={{width: "100%", textAlign: "center", fontSize: "1.2vw"}}>
                                                    <p>Videos</p>
                                                </Grid>
                                            </Grid>
                                        </Button>
                                    </div>
                                    <div>
                                        <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "13vw", width: "15vw"}}>
                                            <Grid container spacing={12}>
                                                <Grid item xs={12}>
                                                    <FontAwesomeIcon icon={faTrophy} style={{width: "8vw", height: "8vw"}}/>
                                                </Grid>
                                                <Grid item style={{width: "100%", textAlign: "center", fontSize: "1.2vw"}}>
                                                    <p>Special Thanks</p>
                                                </Grid>
                                            </Grid>
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={9} style={{paddingTop: "15vh"}}>
                                <div style={{backgroundColor: "red", width: "50.3vw", height: "40vh"}}>
                                    I will soon be the blog component. TEHE
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Desktop>
            </div>
        )}
        </ConstateWrapper>
    </div>
)

export default Home