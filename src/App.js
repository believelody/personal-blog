import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Social from './components/Social/Social';

const nav = [
  {name: "About", component: About, hint: "A propos de moi"},
  {name: "Work", component: Work, hint: "Mes Travaux"},
  {name: "Contact", component: Contact, hint: "Contact"},
  {name: "Social", component: Social, hint: "Social"},
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      show: false
    }
  }

  handleClick = index => {
    let {main, menu} = this.refs;
    if (window.innerWidth <= 500) {
      menu.style.width = "0";
      menu.style.opacity = 0;
      main.style.left = "0";
      this.setState({show: false});
    }
    this.setState({index});
  }

  show = () => {
    let show = this.state.show;
    let {main, menu} = this.refs;
    if (show) {
      menu.style.width = "0";
      menu.style.opacity = 0;
      main.style.left = "0";
      show = false;
      this.setState({show});
    } else {
      menu.style.width = "50%";
      menu.style.opacity = 1;
      main.style.left = "50%";
      show = true;
      this.setState({show})
    }
  }

  render() {
    return (
      <div className="container">
        <menu>
          <span onClick={this.show.bind(this)}><i className="fas fa-bars"></i></span>
          <ul ref="menu">
            <span onClick={this.show.bind(this)}>X</span>
            {
              nav.map((item, i) => <li onClick={() => this.handleClick(i)} key={i}>{item.hint}</li>)
            }
          </ul>
        </menu>
        <nav>
          <h2>MENU</h2>
          <ul>
            {
              nav.map((item, i) => <li onClick={() => this.handleClick(i)} key={i}>{item.hint}</li>)
            }
          </ul>
        </nav>
        <main ref="main">
          {
            nav.filter((item, i) => i === this.state.index).map((item, i) => <item.component index={i} key={i} title={item.name} />)
          }
        </main>
      </div>
    );
  }
}

export default App;
