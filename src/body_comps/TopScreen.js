import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

import mail_logo from './icon_imgs/mail_logo.png';
import linkedIn_logo from './icon_imgs/linkedIn_logo.png';
import github_logo from './icon_imgs/github_logo.png';

import "./greeting.css";
import "./icons.css";

class TopScreen extends Component {
    render() {
        return (
            <div style={{ height: '100vh', overflowX: 'hidden' }}>
                <FadeIn delay={250} transitionDuration={1000}>
                    <div className='textStyle textPos1' >Welcome to</div>
                    <div className='textStyle textPos2'>my personal</div>
                    <div className='textStyle textPos3'>website.</div>
                </FadeIn>

                <div className="ClickIcons" >
                    <div className='MailContainer'>
                        <a href='mailto:doucette.ry@northeastern.edu'>
                            <img src={mail_logo} alt='Mail to Ryan' style={{ position: 'relative', right: '90px', height: '100%', width: 'auto' }} />
                        </a>
                    </div>
                    <div className='LIContainer'>
                        <a href="https://www.linkedin.com/in/ryan-doucette/">
                            <img src={linkedIn_logo} alt='LinkedIn' style={{ position: 'relative', right: '45px', height: '100%' }} />
                        </a>
                    </div>
                    <div className='GHContainer'>
                        <a href='https://github.com/ryan-doucette'>
                            <img src={github_logo} alt='GitHub' style={{ height: '100%' }} />
                        </a>
                    </div>
                </div>

                <FadeIn delay={800} transitionDuration={1000}>
                    <div className='textStyle textPos4' >About Me</div>
                    <div className='textStyle textPos5'>Projects</div>
                    <div className='textStyle textPos6'>Work</div>
                </FadeIn>
            </div>
        );
    }
}

export default TopScreen;
