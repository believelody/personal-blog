import React, { Component } from 'react';
import './Social.css';

class Social extends React.Component {
  click = () => {
    //this.props.handleClick(this.props.index);
  }
  render() {
    return(
      <div className="isometric">
        <ul>
          <li><a href="https://github.com/believelody" target="_blank"><i class="fab fa-github"></i></a></li>
          <li><a href="https://bitbucket.org/believelody/"><i class="fab fa-bitbucket"></i></a></li>
          <li><a href="https://plus.google.com/u/0/"><i class="fab fa-google-plus"></i></a></li>
          <li><a href="https://www.linkedin.com/in/lody-believe-a755b342/"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    );
  }
}
export default Social;
