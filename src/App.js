import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import axios from 'axios';

import databaseCalls from './utility/databaseCalls';


import PostsPage from './components/PostsPage';
import VideoPreview from './components/VideoPreview';
import ThankYouLetter from './components/resume/ThankYouLetter';
import Resume from './components/resume/Resume';
import Home from './components/Home';

import './App.css';

const axiosGraphQL = axios.create({
  baseURL: 'http://localhost:1337/graphql'
});

const GET_DATA = `
  {
    posts {
      title
      body
      preview
      photo {
        url
      }
    }
    peoples {
      fullName
      email
      birthday
      facebook
      github
      instagram
      codepen
      linkedin
      twitter
      website
      details
      viewThanks
      bringToCompany
      thanksFinal
      photo {
        url
      }
    }
    videos {
      title
      source
      about
      video {
        url
      }
    }
    awards {
      Name
      presentedFor
      icon {
        url
      }
      recieved
    }
    certificates {
      title
      repID
      duration
      completed
      icon {
        url
      }
    }
    computerlanguages {
      icon {
        url
      }
      name
      comfortability
    }
    experiences {
      company
      contactName
      contactNumber
      icon {
        url
      }
      responsabilities
      title
      started
      ended
    }
    intrests {
      icon {
        url
      }
      name
    }
    languages {
      name
      comfortability
    }
    projects {
      title
      company
      started
      ended
      description
    }
    publications {
      icon {
        url
      }
      url
    }
    skills {
      skill
      icon {
        url
      }
    }
    studies {
      major
      name
      minor
      enrolled
      completed
    }
    volunteers {
      name
      details
      supported
      year
    }
  }
`;


class App extends Component {
  state={
    quotes: [],
    posts: [], // Updated
    videos: [], // Updated
    certificates: [],
    users: [], // Updated
    awards: [],
    volunteers: [],
    intrests: [],
    languages: [],
    computerLanguages: [],
    workExperiences: [],
    educations: [],
    publications: [],
    skills: [],
    resume: []
  }

  componentDidMount() {
    this.onFetch();
  }

  onFetch = () => {
    axiosGraphQL
      .post('', { query: GET_DATA})
      .then(result => {
        console.log(result.data.data)
        let awards = result.data.data.awards
        let certificates = result.data.data.certificates
        let resumeData = {
          awards,
          certificates
        }
        console.log(resumeData)
        this.setState({
          posts: result.data.data.posts,
          users: result.data.data.peoples,
          videos: result.data.data.videos,
          resume: resumeData
        })}
      );
  };

  // componentDidWill(){
  //   databaseCalls(this)
  // }

  render() {
    console.log(this.state.resume)
    return (
      <Router>
        <div style={{height: "100vh"}}>
          <Route exact path="/" render={() => <Home 
            posts={this.state.posts}
            user={this.state.users[0]}/>}
          />
          <Route exact path="/resume" render={() => <Resume 
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
        </div>
      </Router>
    );
  }
}

export default App;
