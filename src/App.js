import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
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
      <div>
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="resume">
            <button type="button">
                Resume
            </button>
          </Link>
          <Link to="posts">
            <button type="button">
                Posts
            </button>
          </Link>

          <Route exact path="/" />
          <Route path="/resume" render={routeProps => <Resume 
            {...Object.assign({}, routeProps)} 
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
          <Route path="/thankyouletter" render={routeProps => <ThankYouLetter 
            {...Object.assign({}, routeProps)} 
            user={this.state.users[0]}/>}
          />
          <Route path="/posts" render={routeProps => <PostsPage 
            {...Object.assign({}, routeProps)} 
            posts={this.state.posts}/>}
          />
          

        {/* <ThankYouLetter user={this.state.users[0]} /> */}
        {/* <VideoPreview videos={this.state.videos[0]} /> */}
        {/* <Card /> */}
        {/* <Post posts={this.state.posts[0]}/> */}
        {/* <PostsPage posts={this.state.posts} /> */}
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
