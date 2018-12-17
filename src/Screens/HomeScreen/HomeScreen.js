import React from 'react';

import moment from 'moment'
import { Link } from 'react-router-dom'

import './homeScreen.scss'
import Me from '../../assets/me.jpg';

class HomeScreen extends React.Component {

    state = {
        isMobile: false,
    }

    updateDimensions() {
        if (window.innerWidth <= 1100) {
            this.setState({ isMobile: true });
        } else {
            this.setState({ isMobile: false });
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }


    render() {
        return (
            <div className="homeScreen">
                <div className="heroImage">
                    <img alt="PictureOfMohammad" src={Me} />
                </div>
                <div className="heroText">
                    {this.state.isMobile ? null : <div className="headerSpacing"></div>}
                    <h1>Hi, I'm Mohammad!</h1>

                    <h3>I'm a <b>Web Developer</b>,</h3>
                    <h3><b>Mobile App Developer</b>,</h3>
                    <h3><b>Server Guru</b>,</h3>
                    <h3>and a <b>Nerd</b></h3>

                    <p>
                        I started coding {moment().diff(moment("20110214"), "years")} years ago when I first came to Canada from Libya. Since then, I've been working on a whole lot of different projects - cool stuff that makes me happy. My first project was to make my mom a "Happy Mother's Day" application. That soon ramped up into building robots on the <a href="https://www.firstinspires.org/robotics/frc">FRC</a> teams 4719, 4627, and Ri3D T.E.S.L.A. If you want to check out some of my more recent projects, checkout my <Link to="/portfolio">portfolio</Link>!
                    </p>
                    <p>
                        I currently study Electrical Engineering at <a href="https://uab.ca/">the University of Alberta</a> in the tradional program. I am currently set to graduate in April of 2021 after which I will be availble for full time employment in the area of Software Engineering.
                    </p>
                    <p>
                        I have previously held Software Engineering positions namely a Software Consultant Intern at <a href="https://devfacto.com/">DevFacto</a>. Starting January 7<sup>th</sup>, 2019, I will be working at <a href="https://intuit.com/">Intuit</a> as a Software Development Co-Op Intern.
                    </p>
                    <p>
                        If you have any questions or would like to tlak to me about anything, feel free to shoot me an email at <a href="mailto:mo@mothenerd.io">mo@mothenerd.io</a>!
                    </p>
                </div>
            </div>
        );
    }
}

export default HomeScreen;