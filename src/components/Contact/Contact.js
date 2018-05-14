import React, { Component } from 'react';
import './Contact.css';

class Contact extends React.Component {
  click = () => {
    //this.props.handleClick(this.props.index);
  }
  render() {
    return(
      <div className="contact">
        <form>
          <div><input type="text" placeholder="Entrez votre email" /></div>
          <div><input type="text" placeholder="Indiquez le sujet de votre demande" /></div>
          <div><textarea rows="15"></textarea></div>
          <div><input type="submit" value="Envoyer"/></div>
        </form>
      </div>
    );
  }
}
export default Contact;
