import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Intro from './Intro';
import Signups from './Signups';


class App extends Component {
  
  render() {
    return (
      <div>
        
        <div class="fade page"></div>

        <div class="navBarPos">
            <a href="#home" class="buttonRect hvr-fade">Home</a>
            <a href="#intro" class="buttonRect hvr-fade">What?</a>
            <a href="#speakers" class="buttonRect hvr-fade">Speakers</a>
            <a href="#signups" class="buttonRect hvr-fade">Signup</a>
            <a href="#sponsors" class="buttonRect hvr-fade">Sponsors</a>
        </div>

        <div id="home" class="page">
          <MainPage/>
        </div>

        <div class="dividerSmall lbluelblue"></div>
        <div id="intro" class="dividerSmall lblue"></div>

        <div id="intro" class="threeqpage lblue preventScroll">
          <div class="introTitle">Hello Con?</div>
          <div class="introText">
              Hello Con is an entirely <b>free</b>, day-long, TED-talk style technology conference 
              open to students and industry professionals alike! This year's
              speaker line-up will feature tech gurus, CTOs and specialists
              hailing from IBM, RBC, and more. With a speaker networking session
              afterwards, Hello Con is an invaluable opportunity to connect with professionals, 
              share exciting ideas and meet similarly driven
              individuals.   
          </div>
          <div class="introBackground">
               <Intro/>
              </div>
        </div>

        <div class="divider lblue"></div>

        <div id="speakers" class="page">
          <Speakers/>
        </div>
        
        <div class="dividerSmall"/> 

        <div id="signups" class="page">
          <Signups/>
        </div>

        <div class="dividerSmall lblue"></div>

        <div id="sponsors" class="divider">
          <p class="sponsorsTitleText">Our Sponsors</p>
          <Sponsors/>
        </div>

        <div class="divider"></div>

        <div id="footer">
          &copy;2018 IEEE University of Toronto
        </div>

      </div>
    );
  }
}



export default App;
