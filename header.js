import React, { Component } from 'react';
import mail_logo from './header_imgs/mail_logo.png';
import linkedIn_logo from './header_imgs/linkedIn_logo.png';
import github_logo from './header_imgs/github_logo.png';

class Header extends Component {
    render() {
        const head_Style = {
            position: 'absolute',
            top: '80px',
            right: '100px'
        };

        return (
            <header>
                <div style={head_Style}>
                    <a href='mailto:doucette.ry@northeastern.edu'>
                        <img src={mail_logo} style={{ position: 'relative', right: '90px', top: '-5px' }} />
                    </a>

                    <a href="https://www.linkedin.com/in/ryan-doucette/">
                        <img src={linkedIn_logo} style={{ position: 'relative', right: '45px' }} />
                    </a>

                    <a href='https://github.com/ryan-doucette'>
                        <img src={github_logo} />
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;
