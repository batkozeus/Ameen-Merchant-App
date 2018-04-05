import React from 'react';
import './ContactPage.css';
import ContactItem from "components/ContactItem/ContactItem";
import twitterLogo from "./assets/twitter.svg";
import facebookLogo from "./assets/facebook.svg";
import linkedinLogo from "./assets/linkedin.svg";
import githubLogo from "./assets/github-circle.svg";

const ContactPage = (props) => {
  return <div className="ContactPage">
      <h1 className="ContactPage__title">Contact us</h1>
      <ContactItem linkName="Twitter" linkAdress="https://twitter.com/?lang=ru">
        <img className="logo twitterLogo" src={twitterLogo} alt="twitterLogo" />
      </ContactItem>
      <ContactItem linkName="Email" linkAdress="mailto:igor_proc@i.ua" />
      <ContactItem linkName="Facebook" linkAdress="https://www.facebook.com/batko.zeus">
        <img className="logo facebookLogo" src={facebookLogo} alt="facebookLogo" />
      </ContactItem>
      <ContactItem linkName="Linkedin" linkAdress="https://www.linkedin.com">
        <img className="logo linkedinLogo" src={linkedinLogo} alt="linkedinLogo" />
      </ContactItem>
      <ContactItem linkName="Github" linkAdress="https://github.com/batkozeus/">
        <img className="logo githubLogo" src={githubLogo} alt="githubLogo" />
      </ContactItem>
    </div>
}

export default ContactPage;