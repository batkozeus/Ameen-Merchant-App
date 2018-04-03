import React, { Component } from 'react';
import './ContactPage.css';
import ContactItem from "components/ContactItem/ContactItem";


const ContactPage = (props) => {
  const { classes } = props;
  
  return <div className="ContactPage">
      <h1 className="ContactPage__title">Contact us</h1>
      <ContactItem/>
    </div>;
}

export default ContactPage;