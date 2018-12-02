import React, { Component } from 'react';
import './Speakers.css';

const opacityTransitionStyleFast = {
    transition: "opacity 0.5s ease-out"
  };
  
const opacityTransitionStyleSlow = {
transition: "opacity 1.5s ease-out 0.7s, transform 0.6s ease-out"
};

const opacityTransitionStyleSlowDelay = {
transition: "opacity 1.2s ease-out 0.7s",
}

const speakerRadius = "30vmin";

class Speakers extends Component {
    constructor(){
      super();
      this.state = {
        speakerTitleOpacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        speakerDetailOpacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        speakerImgOpacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        speakerImgTransform: [
          "rotate(270deg) translate(" +speakerRadius+ ") rotate(-270deg) translate(-50%, -50%)",
          "rotate(306deg) translate(" +speakerRadius+ ") rotate(-306deg) translate(-50%, -50%)",
          "rotate(342deg) translate(" +speakerRadius+ ") rotate(-342deg) translate(-50%, -50%)",
          "rotate(18deg) translate(" +speakerRadius+ ") rotate(-18deg) translate(-50%, -50%)",
          "rotate(54deg) translate(" +speakerRadius+ ") rotate(-54deg) translate(-50%, -50%)",
          "rotate(90deg) translate(" +speakerRadius+ ") rotate(-90deg) translate(-50%, -50%)",
          "rotate(126deg) translate(" +speakerRadius+ ") rotate(-126deg) translate(-50%, -50%)",
          "rotate(162deg) translate(" +speakerRadius+ ") rotate(-162deg) translate(-50%, -50%)",
          "rotate(198deg) translate(" +speakerRadius+ ") rotate(-198deg) translate(-50%, -50%)",
          "rotate(234deg) translate(" +speakerRadius+ ") rotate(-234deg) translate(-50%, -50%)",],
        backOpacity: 0,
        clicked: false,
        mouseOffSpeaker: true,
        FadeDetails: { transition: "opacity 1.2s ease-out 0.7s, transform 0.6s ease-out" },  
        FadeImgDetails: { transition: "opacity 1s ease-out, transform 1.7s ease-in-out" },
        cursor: "pointer"
      };
    }
    FadeAllSpeakersBut(i){
        if(this.state.clicked){
        return;
        }

        var res_title = this.state.speakerTitleOpacity;
        var res_detail = this.state.speakerDetailOpacity;
        res_title[i] = 0;
        res_detail[i] = 1;

        var res_opcty = this.state.speakerImgOpacity;
        var res_trans = this.state.speakerImgTransform;
        var j;
        for (j = 0; j < this.state.speakerImgOpacity.length; j++) { 
        res_trans[j] = "rotate(230deg) translate(35vmin) rotate(-230deg) translate(-50%, -50%)";
        if(j == i){
            continue
        }
        res_opcty[j] = 0;
        }

        this.setState({
        FadeDetails: { transition: "opacity 2s ease-out 1.2s, transform 0.6s ease-out" },
        FadeImgDetails: { transition: "opacity 1s ease-out, transform 1.7s ease-in-out" },
        clicked: true,
        speakerTitleOpacity: res_title,
        speakerDetailOpacity: res_detail,
        speakerImgOpacity: res_opcty,
        speakerImgTransform: res_trans,
        backOpacity: 1,
        cursor: "default"
        })
    }
    UnfadeAllSpeakers(){
        if(this.state.clicked == false){
        return;
        }

        var res_title = this.state.speakerTitleOpacity;
        var res_detail = this.state.speakerDetailOpacity;
        var res_opcty = this.state.speakerImgOpacity;
        var res_trans = this.state.speakerImgTransform;
        var j;
        for (j = 0; j < this.state.speakerImgOpacity.length; j++) { 
        var angle = String((270 + j * 36)%360);
        var string = "rotate(" + angle + "deg) translate(" +speakerRadius+ ") rotate(-" + angle + "deg) translate(-50%, -50%)";
        res_trans[j] = string;
        res_opcty[j] = 1;
        res_title[j] = 0;
        res_detail[j] = 0;
        }

        this.setState({
        FadeDetails: { transition: "opacity 0.6s ease-out, transform 0.6s ease-out" },
        FadeImgDetails: { transition: "opacity 1s ease-out 1s, transform 1.6s ease-out" },
        clicked: false,
        speakerTitleOpacity: res_title,
        speakerDetailOpacity: res_detail,
        speakerImgOpacity: res_opcty,
        speakerImgTransform: res_trans,
        backOpacity: 0,
        cursor: "pointer"
        });
    }
    SetSpeakerTitleOpacity(i, val){
        if(this.state.clicked && this.state.speakerTitleOpacity[i] == 0){
        return;
        }

        var res = this.state.speakerTitleOpacity;
        res[i] = val;

        var check = false;
        if(val == 0){
        check = true
        }

        this.setState({
        speakerTitleOpacity: res,
        mouseOffSpeaker: check
        });
    }
    InsertSpeakerJSX(i, img_url, speaker_Name, speaker_Title, speaker_Company, speaker_contentTitle, imgBorderColor, speaker_background, speaker_contentDetail){
        return (
            <div>
                <a onMouseLeave={this.SetSpeakerTitleOpacity.bind(this, i, 0)} 
                onMouseEnter={this.SetSpeakerTitleOpacity.bind(this, i, 1)}
                onMouseDown={this.FadeAllSpeakersBut.bind(this, i)}
                style={{...this.state.FadeImgDetails, transform: this.state.speakerImgTransform[i], cursor: this.state.cursor}}>
                    <div class="hvr-grow">
                        <img 
                        style={{...this.state.FadeImgDetails, opacity: this.state.speakerImgOpacity[i]}}
                        class={"speakerImage " + imgBorderColor} src={img_url}/>
                    </div>
                </a>
                <p class="speakerTitle" style={{...opacityTransitionStyleFast, opacity: this.state.speakerTitleOpacity[i]}}>
                    <b class="speakerTitleName">{speaker_Name}</b> <br/>
                    <small class="speakerTitlePosition">{speaker_Title}</small><br/>
                    <small class="speakerTitleCompany">- {speaker_Company} -</small> <br/><br/><br/>
                    <i><small class="clickForMore">Click for more!</small></i> <br/>
                </p>
                <div class="speakerDetail" style={{...this.state.FadeDetails, opacity: this.state.speakerDetailOpacity[i]}}>
                    <b class="speakerDetailName">{speaker_Name}</b><br/><br/>
                    <span class="speakerDetailTitle">My Background</span><br/>
                    <span class="speakerDetailSpan">
                        {speaker_background}
                    </span> <br/><br/>
                    <span class="speakerDetailTitle">{speaker_contentTitle}</span><br/>
                    <span class="speakerDetailSpan">
                        {speaker_contentDetail}
                    </span> 
                </div>
            </div>
        )
    }

    render(){
        return(
        <div class>
            <div class="circleContainer">
                <div class="backButton hvr-grow2" onMouseDown={this.UnfadeAllSpeakers.bind(this)} style={{...this.state.FadeDetails, opacity: this.state.backOpacity}}> 
                <a class="buttonTri1 hvr-fade3"></a>
                </div>
                <div>
                    {this.InsertSpeakerJSX(0, "http://gdurl.com/m2DK", "Dorothy Zhang", "Student",  "U of T", "Content Title", "c1a",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}
                    {this.InsertSpeakerJSX(1, "http://gdurl.com/m2DK", "Dorothy Zhang", "Student",  "U of T", "Content Title", "c2a",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}
                    {this.InsertSpeakerJSX(2, "http://gdurl.com/m2DK", "Dorothy Zhang", "Student",  "U of T", "Content Title", "c3a",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}
                    {this.InsertSpeakerJSX(3, "http://gdurl.com/m2DK", "Dorothy Zhang", "Student",  "U of T", "Content Title", "c4a",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}
                    {this.InsertSpeakerJSX(4, "http://gdurl.com/m2DK", "Dorothy Zhang", "Student",  "U of T", "Content Title", "c5a",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}
                    {this.InsertSpeakerJSX(5, "http://gdurl.com/m2DK", "Dorothy Zhang", "Student",  "U of T", "Content Title", "c6a",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}
                    {this.InsertSpeakerJSX(6, "http://gdurl.com/m2DK", "Dorothy Zhang", "Student",  "U of T", "Content Title", "c7a",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}
                    {this.InsertSpeakerJSX(7, "http://gdurl.com/m2DK", "Dorothy Zhang", "Student",  "U of T", "Content Title", "c8a",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}
                    {this.InsertSpeakerJSX(8, "http://gdurl.com/m2DK", "Dorothy Zhang", "Student",  "U of T", "Content Title", "c9a",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}
                    {this.InsertSpeakerJSX(9, "http://gdurl.com/m2DK", "Dorothy Zhang", "Student",  "U of T", "Content Title", "c10a",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}
                
                </div>
                
                <div class="listTextPos">
                    <div class="listIcon c1"></div>
                    <div class="listText"><b>Dorothy Zhang</b>, U of T - <i>What I'm Talking About</i></div>
                    <div class="listIcon c2"></div>
                    <div class="listText"><b>Dorothy Zhang</b>, U of T - <i>What I'm Talking About</i></div>
                    <div class="listIcon c3"></div>
                    <div class="listText"><b>Dorothy Zhang</b>, U of T - <i>What I'm Talking About</i></div>
                    <div class="listIcon c4"></div>
                    <div class="listText"><b>Dorothy Zhang</b>, U of T - <i>What I'm Talking About</i></div>
                    <div class="listIcon c5"></div>
                    <div class="listText"><b>Dorothy Zhang</b>, U of T - <i>What I'm Talking About</i></div>
                    <div class="listIcon c6"></div>
                    <div class="listText"><b>Dorothy Zhang</b>, U of T - <i>What I'm Talking About</i></div>
                    <div class="listIcon c7"></div>
                    <div class="listText"><b>Dorothy Zhang</b>, U of T - <i>What I'm Talking About</i></div>
                    <div class="listIcon c8"></div>
                    <div class="listText"><b>Dorothy Zhang</b>, U of T - <i>What I'm Talking About</i></div>
                    <div class="listIcon c9"></div>
                    <div class="listText"><b>Dorothy Zhang</b>, U of T - <i>What I'm Talking About</i></div>
                    <div class="listIcon c10"></div>
                    <div class="listText"><b>Dorothy Zhang</b>, U of T - <i>What I'm Talking About</i></div>
                </div> 
                

            </div>
        </div>
        )
    };
}

export default Speakers;
