import React, { Component } from 'react';
import mail_logo from './header_imgs/mail_logo.png';
import linkedIn_logo from './header_imgs/linkedIn_logo.png';
import github_logo from './header_imgs/github_logo.png';
import './icons.css'

class Icons extends Component {
    render() {
        const head_Style = {
            position: 'absolute',
            top: '47vh',
            //top: '355px',
            left: '220px',
            height: '2vh',
            flexDirection: 'row',
            display: 'flex',
            // overflowX: 'hidden'
        };

        return (
            <header>
                <div className="ClickIcons" style={head_Style}>
                    <div className='MailContainer'>
                        <a href='mailto:doucette.ry@northeastern.edu'>
                            <img src={mail_logo} alt='Mail to Ryan' height='100%' style={{ position: 'relative', right: '90px', top: '5px' }} />
                        </a>
                    </div>
                    <div className='LIContainer'>
                        <a href="https://www.linkedin.com/in/ryan-doucette/">
                            <img src={linkedIn_logo} alt='LinkedIn' height='100%' style={{ position: 'relative', right: '45px' }} />
                        </a>
                    </div>
                    <div className='GHContainer'>
                        <a href='https://github.com/ryan-doucette'>
                            <img src={github_logo} alt='GitHub' height='100%' />
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Icons;
