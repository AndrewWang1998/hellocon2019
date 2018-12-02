import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import './MainPage.css';

class MainPage extends Component {
    constructor(){
      super();
    }

    MainPageTypingBlock(tn){
        let classText = "mainPageTyping " + tn;
        return (
          <div>
            <Typing.Delay ms={250}/>
            <span class={classText}> </span>
            <Typing.Delay ms={500}/>
            <Typing.Speed ms={80}/>
            <span class={classText}>H</span>
            <Typing.Delay ms={100}/>
            <span class={classText}>ello</span>
            <Typing.Delay ms={150}/>
            <span class={classText}> </span>
            <Typing.Delay ms={50}/>
            <span class={classText}>Con</span>
            <Typing.Delay ms={500}/>
            <span class={classText}>.</span>
            <Typing.Delay ms={3500}/>
            <Typing.Speed ms={40}/>
            <Typing.Backspace count={4}/>
            <Typing.Delay ms={70}/>
            <Typing.Backspace count={8}/>
          </div>
        )
    }

    render(){
        return (
        <div>
            <div class="typingPos">
                <Typing loop>
                {this.MainPageTypingBlock("t1")}
                {this.MainPageTypingBlock("t2")}
                {/*this.MainPageTypingBlock("t3")*/}
                {this.MainPageTypingBlock("t4")}
                {this.MainPageTypingBlock("t5")}
                </Typing>
            </div>
            <p class="mainPageSubtitle1 t7">A Technology Conference for<pre>       </pre></p>
            <div class="mainPageSubtitle2Pos"> 
                <p class="mainPageSubtitle2 t2" style={{color: "rgba(255, 255, 255, 0.9)"}}>Coders</p>
                <p class="mainPageSubtitle2 t1" style={{color: "rgba(255, 255, 255, 0.6)"}}>Blockchain Tinkerers</p>
                <p class="mainPageSubtitle2 t3" style={{color: "rgba(255, 255, 255, 0.45)"}}>Robotics Enthusiasts</p> 
                <p class="mainPageSubtitle2 t4" style={{color: "rgba(255, 255, 255, 0.38)"}}>AI Designers</p> 
                <p class="mainPageSubtitle2 t5" style={{color: "rgba(255, 255, 255, 0.35)"}}>Future Quants</p> 
                <p class="mainPageSubtitle2 t1" style={{color: "rgba(255, 255, 255, 0.25)"}}>Consultants</p> 
                <p class="mainPageSubtitle2 t2" style={{color: "rgba(255, 255, 255, 0.22)"}}>Cloud Analysts</p> 
                <p class="mainPageSubtitle2 t3" style={{color: "rgba(255, 255, 255, 0.2)"}}>Techies</p> 
                <p class="mainPageSubtitle2 t4" style={{color: "rgba(255, 255, 255, 0.15)"}}>Bright Students</p> 
                <p class="mainPageSubtitle2 t5" style={{color: "rgba(255, 255, 255, 0.1)"}}>Industry Leaders</p>  
                <p class="mainPageSubtitle2 t1" style={{color: "rgba(255, 255, 255, 0.05)"}}>Food Lovers</p> 
            </div>
        </div>
        )
    };
}



export default MainPage;