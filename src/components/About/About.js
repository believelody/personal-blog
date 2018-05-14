import React, { Component } from 'react';
import './About.css';

class About extends React.Component {
  click = () => {
    //this.props.handleClick(this.props.index);
  }
  render() {
    return(
      <div className="about">
        <header>
          <h1>Believe LODY</h1>
          <h2>Développeur Javascript</h2>
        </header>
        <b>
          Bienvenue sur mon site personnel. Vous découvrirez mon univers ainsi que ma passion pour le développement web.
          Regardez mon profile, consultez mon cv intéractif en ligne et contactez moi sur le formulaire dans la page Contact.
        </b>
        <div className="card">
          <div className="card-img"><span><img src={require('./img/header2.png')} alt="profile" /></span></div>
          <div className="card-content">
            <ul className="profile">
              <li>
                <span><i className="fas fa-home"></i></span><h5>404 rue des Écoles 76410 Cleon</h5>
              </li>
              <li>
                <span><i className="fas fa-graduation-cap"></i></span><h5>UFR Science et Technique de Rouen</h5>
              </li>
              <li>
                <span><i className="fas fa-briefcase"></i></span><h5>Compétences</h5>
                <ul className="tools">
                  <li><h6>HTML5</h6></li>
                  <li><h6>CSS3</h6></li>
                  <li><h6>Vanilla ES6</h6></li>
                  <li><h6>ReactJs</h6></li>
                  <li><h6>Angular 2</h6></li>
                  <li><h6>Ionic 2</h6></li>
                  <li><h6>React Native</h6></li>
                  <li><h6>Firebase</h6></li>
                  <li><h6>Node Js</h6></li>
                  <li><h6>PHP7</h6></li>
                  <li><h6>Laravel 5.5</h6></li>
                  <li><h6>Bootstrap 3</h6></li>
                  <li><h6>Material Design</h6></li>
                  <li><h6>Semantic UI</h6></li>
                </ul>
              </li>
            </ul>
            <a href="https://cv-believe-lody.herokuapp.com" target="_blank">Consultez mon cv intéractif sur heroku</a>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
