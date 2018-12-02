import React, { Component } from 'react';
import './Countdown.css';
import Countdown, {getTimeDifference} from 'react-countdown-now';

const Completionist = () => <span class="doneText"></span>;

const Renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {

    return (
        <div class="countDownPos">
            <div>
                <div class="countDownBox">
                    <span class="countDownNum">{days}</span>
                </div>
                <div class="countDownBox">
                    <span class="countDownNum">{hours}</span>
                </div>
                <div class="countDownBox">
                    <span class="countDownNum">{minutes}</span>
                </div>
                <div class="countDownBox">
                    <span class="countDownNum">{seconds}</span>
                </div>
            </div>
            <div >
                <div class="countDownBox2">
                    <span class="countDownText">D</span>
                </div>
                <div class="countDownBox2">
                    <span class="countDownText">H</span>
                </div>
                <div class="countDownBox2">
                    <span class="countDownText">M</span>
                </div>
                <div class="countDownBox2">
                    <span class="countDownText">S</span>
                </div>
            </div>

        </div>
    );
    
    }
};

class Counter extends Component {
    constructor(){
      super();
    };

    render(){
        return(
            <Countdown date={'Sat, 26 Jan 2019 00:00:00'}
                renderer = {Renderer}
            />
        )
    };
}

export default Counter;