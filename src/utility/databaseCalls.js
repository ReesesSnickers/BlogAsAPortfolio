import Axios from 'axios';

let databaseCalls = (that) => {
    // DB call for posts
    Axios.get('http://localhost:1337/posts')
      .then(response => { 
        that.setState({
          posts: response.data,
        })
      })
      .catch(error => { console.log( 'error', error )})
    
    // DB call for videos
    Axios.get('http://localhost:1337/videos')
      .then(response => { 
        that.setState({
          videos: response.data,
        })
      })
      .catch(error => { console.log( 'error', error )})

    // DB call for certificates
    Axios.get('http://localhost:1337/certificates')
      .then(response => {
        that.setState({
          certificates: response.data,
        })
      })
      .catch(error => { console.log( 'error', error )})

    // DB call for logos
    Axios.get('http://localhost:1337/logos')
    .then(response => {
      that.setState({
        logos: response.data,
      })
    })
    .catch(error => { console.log( 'error', error )})

    // DB call for quotes
    Axios.get('http://localhost:1337/quotes')
    .then(response => { 
        that.setState({
        quotes: response.data,
        })
    })
    .catch(error => { console.log( 'error', error )})

    // DB call for peoples
    Axios.get('http://localhost:1337/peoples')
    .then(response => { 
      that.setState({
        users: response.data,
      })
    })
    .catch(error => { console.log( 'error', error )})

    // DB call for awards
    Axios.get('http://localhost:1337/awards')
    .then(response => { 
      that.setState({
        awards: response.data,
      })
    })
    .catch(error => { console.log( 'error', error )})

    // DB call for volunteers
    Axios.get('http://localhost:1337/volunteers')
    .then(response => { 
      that.setState({
        volunteers: response.data,
      })
    })
    .catch(error => { console.log( 'error', error )})

    // DB call for intrests
    Axios.get('http://localhost:1337/intrests')
    .then(response => { 
      that.setState({
        intrests: response.data,
      })
    })
    .catch(error => { console.log( 'error', error )})

    // DB call for languages
    Axios.get('http://localhost:1337/languages')
    .then(response => { 
      that.setState({
        languages: response.data,
      })
    })
    .catch(error => { console.log( 'error', error )})

    // DB call for computerLanguages
    Axios.get('http://localhost:1337/computerlanguages')
    .then(response => { 
      that.setState({
        computerLanguages: response.data,
      })
    })
    .catch(error => { console.log( 'error', error )})

    // DB call for experiences
    Axios.get('http://localhost:1337/experiences')
    .then(response => { 
      that.setState({
        workExperiences: response.data,
      })
    })
    .catch(error => { console.log( 'error', error )})

    // DB call for educations
    Axios.get('http://localhost:1337/studies')
    .then(response => { 
      that.setState({
        educations: response.data,
      })
    })
    .catch(error => { console.log( 'error', error )})

    // DB call for publications
    Axios.get('http://localhost:1337/publications')
    .then(response => { 
      that.setState({
        publications: response.data,
      })
    })
    .catch(error => { console.log( 'error', error )})

    // DB call for skills
    Axios.get('http://localhost:1337/skills')
    .then(response => { 
      that.setState({
        skills: response.data,
      })
    })
    .catch(error => { console.log( 'error', error )})
}  

export default databaseCalls