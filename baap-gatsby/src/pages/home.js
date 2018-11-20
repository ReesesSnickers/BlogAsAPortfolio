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
const Mobile = props => <Responsive {...props} minWidth={320} maxWidth={767} />;
// const Watch = props => <Responsive {...props} maxWidth={0} />; NEED TO FIGURE OUT THE SPECS


const Home = () => (
    <div style={{height: "100%"}}>
        <ConstateWrapper>
        {({}) => (
            <div>
                <Navbar />
                <Desktop>
                    <Grid container spacing={12} style={{paddingTop: "56px", width: "100vw", height: "100vh", marginLeft: "-8px"}}>
                        <Grid item xs={3} style={{background: "linear-gradient(#004D66, #0099CC)", textAlign: "center", color: "#FFFFFF", height: "94.5vh"}}>
                            <div style={{paddingTop: "2.4vw", paddingLeft: "5.8vw"}}>
                                <Avatar alt="Bobbylee Ingalls" src="https://whathowtowhy.com/wp-content/uploads/2018/04/3653334524001_5588386177001_5588359983001-vs.jpg" style={{height: "13vw", width: "13vw"}} />
                            </div>
                            <p>Bobbylee Ingalls</p>
                            <p style={{height: "50vh"}}>
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
                        <Grid item xs={9} style={{backgroundColor: "#000000", paddingLeft: "2.4vw", height: "94.5vh", paddingTop: "4.5vh"}}>
                            <Grid container spacing={12}>
                                <div>
                                    <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "16.8vw", width: "15vw"}}>
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
                                    <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "16.8vw", width: "15vw"}}>
                                        <Grid container spacing={12}>
                                            <Grid item xs={12}>
                                                <FontAwesomeIcon icon={faComments} style={{width: "8vw", height: "8vh"}}/>
                                            </Grid>
                                            <Grid item style={{width: "100%", textAlign: "center", fontSize: "1.2vw"}}>
                                                <p>Blog</p>
                                            </Grid>
                                        </Grid>
                                    </Button>
                                </div>
                                <div style={{marginLeft: "2.4vw", backgroundColor: "red", height: "16.8vw", width: "33.5vw"}}>
                                    Im going to be quotes soon
                                </div>
                            </Grid>
                            <Grid container spacing={12} style={{paddingTop: "5.3vh"}}>
                                <Grid item xs={3}>
                                    <Grid container spacing={12}>
                                        <div>
                                            <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "16.8vw", width: "15vw"}}>
                                                <Grid container spacing={12}>
                                                    <Grid item xs={12}>
                                                        <FontAwesomeIcon icon={faVideo} style={{width: "8vw", height: "8vh"}}/>
                                                    </Grid>
                                                    <Grid item style={{width: "100%", textAlign: "center", fontSize: "1.2vw"}}>
                                                        <p>Videos</p>
                                                    </Grid>
                                                </Grid>
                                            </Button>
                                        </div>
                                        <div style={{paddingTop: "5.3vh"}}>
                                            <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "16.8vw", width: "15vw"}}>
                                                <Grid container spacing={12}>
                                                    <Grid item xs={12}>
                                                        <FontAwesomeIcon icon={faTrophy} style={{width: "8vw", height: "8vh"}}/>
                                                    </Grid>
                                                    <Grid item style={{width: "100%", textAlign: "center", fontSize: "1.2vw"}}>
                                                        <p>Special Thanks</p>
                                                    </Grid>
                                                </Grid>
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={9} style={{paddingTop: "6.5vh"}}>
                                    <div style={{backgroundColor: "red", width: "50.3vw", height: "40vh"}}>
                                        I will soon be the blog component. TEHE
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Desktop>

                










                <Tablet>
                <Grid container spacing={12} style={{paddingTop: "56px", width: "100vw", height: "100vh", marginLeft: "-8px"}}>
                        <Grid item xs={3} style={{background: "linear-gradient(#004D66, #0099CC)", textAlign: "center", color: "#FFFFFF", height: "94.5vh"}}>
                            <div style={{paddingTop: "2.4vw", paddingLeft: "5.8vw"}}>
                                <Avatar alt="Bobbylee Ingalls" src="https://whathowtowhy.com/wp-content/uploads/2018/04/3653334524001_5588386177001_5588359983001-vs.jpg" style={{height: "13vw", width: "13vw"}} />
                            </div>
                            <p>Bobbylee Ingalls</p>
                            <p style={{height: "50vw"}}>
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
                        <Grid item xs={9} style={{backgroundColor: "#000000", paddingLeft: "2.4vw", height: "94.5vh", paddingTop: "8.5vh"}}>
                            <Grid container spacing={12}>
                                <div>
                                    <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "16.8vw", width: "15vw"}}>
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
                                    <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "16.8vw", width: "15vw"}}>
                                        <Grid container spacing={12}>
                                            <Grid item xs={12}>
                                                <FontAwesomeIcon icon={faComments} style={{width: "8vw", height: "8vh"}}/>
                                            </Grid>
                                            <Grid item style={{width: "100%", textAlign: "center", fontSize: "1.2vw"}}>
                                                <p>Blog</p>
                                            </Grid>
                                        </Grid>
                                    </Button>
                                </div>
                                <div style={{marginLeft: "2.4vw", backgroundColor: "red", height: "16.8vw", width: "33.5vw"}}>
                                    Im going to be quotes soon
                                </div>
                            </Grid>
                            <Grid container spacing={12} style={{paddingTop: "10vh"}}>
                                <Grid item xs={3}>
                                    <Grid container spacing={12}>
                                        <div>
                                            <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "16.8vw", width: "15vw"}}>
                                                <Grid container spacing={12}>
                                                    <Grid item xs={12}>
                                                        <FontAwesomeIcon icon={faVideo} style={{width: "8vw", height: "8vh"}}/>
                                                    </Grid>
                                                    <Grid item style={{width: "100%", textAlign: "center", fontSize: "1.2vw"}}>
                                                        <p>Videos</p>
                                                    </Grid>
                                                </Grid>
                                            </Button>
                                        </div>
                                        <div style={{paddingTop: "10vh"}}>
                                            <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "16.8vw", width: "15vw"}}>
                                                <Grid container spacing={12}>
                                                    <Grid item xs={12}>
                                                        <FontAwesomeIcon icon={faTrophy} style={{width: "8vw", height: "8vh"}}/>
                                                    </Grid>
                                                    <Grid item style={{width: "100%", textAlign: "center", fontSize: "1.2vw"}}>
                                                        <p>Special Thanks</p>
                                                    </Grid>
                                                </Grid>
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={9} style={{paddingTop: "3vh"}}>
                                    <div style={{backgroundColor: "red", width: "50.3vw", height: "40vh"}}>
                                        I will soon be the blog component. TEHE
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Tablet>














                <Mobile>
                    <div style={{backgroundColor: "#000000", marginLeft: "-8px", width: "100vw", minHeight: "100vh"}}>
                        <div style={{background: "linear-gradient(#004D66, #0099CC)", width: "100vw", marginLeft: "-8px"}}>
                            <Grid container spacing={12} style={{paddingTop: "56px", width: "100vw"}}>
                                <Grid item xs={6}>
                                    <div style={{paddingTop: "2.4vw", paddingLeft: "5.8vw"}}>
                                        <Avatar alt="Bobbylee Ingalls" src="https://whathowtowhy.com/wp-content/uploads/2018/04/3653334524001_5588386177001_5588359983001-vs.jpg" style={{height: "25vw", width: "25vw"}} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <p style={{color: "#FFFFFF", textAlign: "Left"}}>Bobbylee Ingalls</p>
                                </Grid>
                            </Grid>
                            <p>
                                I AM THE ABOUT SECTION
                            </p>
                        </div>
                        <div style={{marginLeft: "16px", marginRight: "10px"}}>
                            <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "15vw", width: "98.5%"}}>
                                <p>Blog</p>
                            </Button>
                        </div>
                        <div style={{paddingTop: "10px", marginLeft: "16px", marginRight: "10px"}}>
                            <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "15vw", width: "98.5%"}}>
                                <p>Resume</p>
                            </Button>
                        </div>
                        <div style={{paddingTop: "10px", marginLeft: "16px", marginRight: "10px"}}>
                            <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "15vw", width: "98.5%"}}>
                                <p>Videos</p>
                            </Button>
                        </div>
                        <div style={{paddingTop: "10px", marginLeft: "16px", marginRight: "10px"}}>
                            <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "15vw", width: "98.5%"}}>
                                <p>History</p>
                            </Button>
                        </div>
                        <div style={{paddingTop: "10px", marginLeft: "16px", marginRight: "10px"}}>
                            <Button style={{color: "#FFFFFF", background: "linear-gradient(#004D66, #0099CC)", height: "15vw", width: "98.5%"}}>
                                <p>Special Thanks</p>
                            </Button>
                        </div>
                        <div style={{backgroundColor: "red", height: "200px", marginTop: "17px"}}>
                            im the blog
                        </div>
                        <div style={{background: "linear-gradient(#004D66, #0099CC)", marginTop: "17px"}}>
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
                    </div>
                </Mobile>
            </div>
        )}
        </ConstateWrapper>
    </div>
)

export default Home