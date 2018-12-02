import React, { Component } from 'react';
import './Intro.css';
import Countdown from './Countdown';


class Intro extends Component {
    constructor(){
      super();
    };

    render(){
        return(
            <div>
                

                <div style={{"overflow-y": "visible"}}>
                    <b class="introInfoTitle">When and Where?</b>
                    <div class="countdownPos"><Countdown/></div>
                    <div class="dividerLine"></div>
                    <div class="locButton hvr-grow5">
                        <a href="https://goo.gl/tqT2yE" target="_blank" class="locTitle hvr-grow3">
                        @Innis Town Hall</a>
                    </div>
                    <div class="locButton2">
                        <a class="locTitle2">@Innis Town Hall</a>
                    </div>
                    
                </div>
            </div>
        )
    };
}

export default Intro;
