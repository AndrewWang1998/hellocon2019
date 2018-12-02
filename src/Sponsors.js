import React, { Component } from 'react';
import './Sponsors.css';

 
const Telus = "http://gdurl.com/gkna";
const IBM = "http://gdurl.com/dCg2";
const AUToronto = "http://gdurl.com/cy4L";
const Interapix = "http://gdurl.com/Jokc";
const GetYourBotOn = "http://gdurl.com/eR1u";
const BMO = "http://gdurl.com/kcvu";
const Bluecat = "http://gdurl.com/9_eY";
const Accenture = "http://gdurl.com/M65v";
const AMD = "http://gdurl.com/JVRC";
const RBC = "http://gdurl.com/dziM";


class Sponsors extends Component {

    render(){
        return(
        <div>
            <div class="row1">
                <div class="column"><img class="sponsorLogo" src={IBM}/></div>
                <div class="column"><img class="sponsorLogo" src={Telus}/></div>
                <div class="column"><img class="sponsorLogo" src={AMD}/></div>
                <div class="column"><img class="sponsorLogo" src={Interapix}/></div>
                <div class="column"><img class="sponsorLogo" src={GetYourBotOn}/></div>
            </div>
            <div class="row2">
                <div class="column"><img class="sponsorLogo" src={BMO}/></div>
                <div class="column"><img class="sponsorLogoRBC" src={RBC}/></div>
                <div class="column"><img class="sponsorLogo" src={Accenture}/></div>
                <div class="column"><img class="sponsorLogo" src={AUToronto}/></div>
                <div class="column"><img class="sponsorLogo" src={Bluecat}/></div>
            </div>
        </div>
        )
    };

}

export default Sponsors;
