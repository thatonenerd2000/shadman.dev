import React from 'react';
import ReactDOM from 'react-dom';

import ReactTypingEffect from 'react-typing-effect';
import Fade from 'react-reveal/Fade';

import logo from '../media/logo.png';

import './../index.scss'

class HomeContainer extends React.Component{
    constructor(props) {
        super(props);
        this.typingAnimationRender = this.typingAnimationRender.bind(this);
        this.state={
            cursor:"|",
            terminalTextRenderDisplay1:"none",
            terminalTextRenderDisplay2:"none",
            terminalTextRenderDisplay3:"none",
            display:"block",
            logoDisplay:"none",
            typingAnimation:false

        }
    }

    typingAnimationRender = function(){
        if(this.state.typingAnimation == true){
            return(
                <ReactTypingEffect speed="50" eraseDelay="100000" typingDelay="2000" className="terminalText" cursor="|" text="Hey there, It's Shadman here"/>
            )
        }
    }

    componentDidMount(){
        setTimeout(
            function() {
                this.setState({
                    cursor:" ",
                    terminalTextRenderDisplay1:"block"
                });
            }.bind(this),3000
        );
        setTimeout(
            function() {
                this.setState({
                    terminalTextRenderDisplay2:"block"
                });
            }.bind(this),4000
        );
        setTimeout(
            function() {
                this.setState({
                    terminalTextRenderDisplay3:"block"
                });
            }.bind(this),5000
        );
        setTimeout(
            function() {
                this.setState({
                    display:"none",
                    logoDisplay:"block",
                    typingAnimation:true

                });
            }.bind(this),6000
        );
    }

    render(){
        return(
            <div>
                <div id="topBar">
                    <div style={{backgroundColor:"#ff5a52"}} className="barCircle"></div>
                    <div style={{backgroundColor:"#e6c02a"}} className="barCircle"></div>
                    <div style={{backgroundColor:"#53a432"}} className="barCircle"></div>
                    <p id="barText">www.shadman.dev -- -bash</p>
                </div>
                <p style={{display:this.state.display}}className="terminalText">Last Login: Thu Feb 13 22:18:15 on ttys000</p>
                {/* get current date and time */}
                <div style={{display:this.state.display}}>
                    <p className="terminalText">user-device-handle:dev web-user$ <ReactTypingEffect speed="20" eraseDelay="100000" typingDelay="0" className="terminalText" id="terminalTextType" cursor={this.state.cursor} text="sudo bash run-script:auth:000-0000 --dev"/></p>
                    <p style={{display:this.state.terminalTextRenderDisplay1}} className="terminalText">Running Script...</p>
                    <p style={{display:this.state.terminalTextRenderDisplay1}} className="terminalText">50% done --bash checking network status -- running script</p>
                    <p style={{display:this.state.terminalTextRenderDisplay1}} className="terminalText">script reached end of the function --status OK</p>
                    <p style={{display:this.state.terminalTextRenderDisplay1}} className="terminalText">Ready to render</p>
                    <p style={{display:this.state.terminalTextRenderDisplay2}} className="terminalText">....</p>
                    <p style={{display:this.state.terminalTextRenderDisplay2}} className="terminalText">....</p>
                    <p style={{display:this.state.terminalTextRenderDisplay2}} className="terminalText">....</p>
                    <p style={{display:this.state.terminalTextRenderDisplay2}} className="terminalText">....</p>
                    <p style={{display:this.state.terminalTextRenderDisplay3}} className="terminalText">Success!</p>
                </div>
                <Fade bottom>
                    <img style={{display:this.state.logoDisplay}} id="logo" className="centerPosition" src={logo} alt="logo"></img>
                </Fade>
                <Fade bottom>
                    <div style={{display:this.state.logoDisplay,textAlign:"center",paddingTop:20}}>
                        {this.typingAnimationRender()}
                    </div>
                </Fade>
            </div>
        )
    }
}

function Home(){
    return(
        <HomeContainer />
    )
}

export default Home;