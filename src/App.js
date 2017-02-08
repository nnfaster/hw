import React, { Component } from 'react';
import logo from './Kmutt.png';
import './App.css';
import './bulma.css'
import {TodoSelect2} from './TodoSelect2.js';

class App extends Component {
  render() {
    return (
        <section className="hero is-info is-large">
    {/*  that-header: will stick at the top */}
    <div className="that-head">
      <header className="nav">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item">
              <img src={logo} alt="Logo"/>
            </a>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-active">
              What you Name?
            </a>
            <a className="nav-item">
              My Name?
            </a>
            <a className="nav-item">
              Ovuvwevwevwe Onyetenyevwe Ogwemubwem Osas
            </a>
            
          </div>
        </div>
      </header>
    </div>

    {/*  Hero content: will be in the middle */}
    <div className="hero-body">
        <p className="control is-fullwidth">
          <center>
            <TodoSelect2/>
          </center>
        </p>
        <div className="columns">
        </div>

    </div>

    {/* Hero footer: will stick at the bottom */}
    
  </section>
    );
  }
}

export default App;
