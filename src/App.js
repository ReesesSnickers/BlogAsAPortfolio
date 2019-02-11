import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import databaseCalls from './utility/databaseCalls';

import Quote from './components/Quote';
import PostPreview from './components/PostPreview';
import Button from './components/Button';
import Avatar from './components/Avatar';
import PostsPage from './components/PostsPage';
import Post from './components/Post';
import Card from './components/Card';
import VideoPreview from './components/VideoPreview';
import ThankYouLetter from './components/resume/ThankYouLetter';
import Resume from './components/resume/Resume';
import Home from './components/Home';

import './App.css';

class App extends Component {
  state={
    quotes: [],
    posts: [],
    videos: [],
    certificates: [],
    users: [],
    awards: [],
    volunteers: [],
    intrests: [],
    languages: [],
    computerLanguages: [],
    workExperiences: [],
    educations: [],
    publications: [],
    skills: []
  }

  componentDidMount(){
    databaseCalls(this)
  }

  render() {
    return (
      <Router>
      <div style={{height: "100vh"}}>
        {/* <Resume 
          users={this.state.users}
          experiences={this.state.workExperiences}
          intrests={this.state.intrests}
          languages={this.state.languages}
          computerLanguages={this.state.computerLanguages}
          educations={this.state.educations}
          certificates={this.state.certificates}
          awards={this.state.awards}
          volunteers={this.state.volunteers}
          publications={this.state.publications}
          skills={this.state.skills}
        /> */}

          

          <Route exact={true} path="/" render={() => <Home 
            posts={this.state.posts}/>}
          />

          <Route exact={true} path="/resume" render={() => <Resume 
            users={this.state.users}
            experiences={this.state.workExperiences}
            intrests={this.state.intrests}
            languages={this.state.languages}
            computerLanguages={this.state.computerLanguages}
            educations={this.state.educations}
            certificates={this.state.certificates}
            awards={this.state.awards}
            volunteers={this.state.volunteers}
            publications={this.state.publications}
            skills={this.state.skills}/>}
          />

          <Route path="/thankyouletter" render={() => <ThankYouLetter 
            user={this.state.users[0]}/>}
          />

          <Route path="/posts" render={() => <PostsPage 
            posts={this.state.posts}/>}
          />

          <Route path="/videos" render={()=> <VideoPreview 
            videos={this.state.videos[0]}/>}
          />
          


        {/* <Card /> */}
        {/* <Post posts={this.state.posts[0]}/> */}
        {/* <Avatar /> */}
        {/* <Button name="hi" /> */}
        {/* <PostPreview posts={this.state.posts[0]} /> */}
        {/* <Quote quotes={this.state.quotes}/> */}
      </div>
      </Router>
    );
  }
}

export default App;
