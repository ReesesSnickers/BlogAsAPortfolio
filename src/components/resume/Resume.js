import React, { Component } from 'react';
import {
    Link,
    withRouter,
} from 'react-router-dom';

import PageWrapper from '../PageWapper';
import Header from './Header';
import WorkExperiencesView from './experience/WorkExperiencesView';
import IntrestsView from './intrest/InterestsView';
import LanguagesView from './language/LanguagesViews';
import EducationsView from './education/EducationsView';
import CertificatesView from './certificate/CertificatesView';
import AwardsView from './award/AwardsView';
import VolunteersView from './volunteer/VolunteersView';
import PublicationsView from './publication/PublicationsView';
import SkillsView from './skills/SkillsView';

import './resume.css';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experiences: []
        };
    }

    componentDidUpdate() {
        if ( this.state.experiences.length === 0 ) {
            if ( this.props.experiences.length !== 0 ) {
                this.setState({
                    experiences: this.props.experiences
                })
            }
        }
    }

    render() {
        let buttonText = "<< Thank You Letter"
        return (
            <PageWrapper>
                <div style={{backgroundColor: "#F8F8FF", width: "90vw", marginLeft: "5%", marginTop: "5%"}}>
                    <Header user={this.props.users[0]}/>
                    <div>
                        <p>Experience</p>
                        <WorkExperiencesView experiences={this.state.experiences}/>
                    </div>
                    <div>
                        <SkillsView skills={this.props.skills} />
                    </div>
                    <div>
                        <p>Languages</p>
                        <LanguagesView languages={this.props.languages} computerLanguages={this.props.computerLanguages} />
                    </div>
                    <div>
                        <p>Interests</p>
                        <IntrestsView intrests={this.props.intrests}/>
                    </div>
                    <div>
                        <p>Education and Certifications</p>
                        <EducationsView educations={this.props.educations} />
                        <CertificatesView certificates={this.props.certificates} />
                    </div>
                    <div>
                        <p>Publications</p>
                        <PublicationsView publications={this.props.publications} />
                    </div>
                    <div>
                        <p>Awards and Commendations</p>
                        <AwardsView awards={this.props.awards}/>
                    </div>
                    <div>
                        <p>Volunteering and Community Service</p>
                        <VolunteersView volunteers={this.props.volunteers} />
                    </div>
                </div>
                <Link to="/thankyouletter" className="link__thank-you-page" style={{textAlign: "right"}}>{buttonText}</Link>
            </PageWrapper>
        );
    }
}

export default Resume;