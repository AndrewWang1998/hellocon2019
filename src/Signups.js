import React, { Component } from 'react';
import './Signups.css';

class Signups extends Component {
    constructor(){
      super();
    };

    render(){
        return(
            <div>
                <div class="signupBackground">

                    <a href="https://www.eventbrite.ca/e/hello-con-2019-software-technology-conference-registration-52979145049?fbclid=IwAR3rMcq7t4JUQu6Pm4bq4-GRuSOvtlXZ7D6iCDojEyteTfxlEfUJ-yg10Go" 
                    target="_blank" class="signupButtonAnchor">
                        <div class="signupButton hvr-grow4">
                            <b class="signupButtonText">Register <i class="subText">EventBrite</i></b>
                        </div>
                    </a>
                    <div class="signupButton2"></div>
                    
                    <div class="disclaimerText">
                            Due to a finite venue size,
                            registration will be limited on a first come
                            first serve basis. Those registering will be
                            charged a $10 deposit that will be refunded 
                            upon check-in the day of.
                        </div>
                </div>
            </div>
        )
    };
}

export default Signups;