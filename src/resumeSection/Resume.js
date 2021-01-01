import React, { Component } from 'react';
import '/Users/ryandoucette/Documents/personal-website/src/resumeSection/Resume.css'

class Resume extends Component {

    render() {
        return (
            <div className='entireSection'>
                <div className='resumeSectionContainer'>
                    <div className='leftTextContainer'>
                        <div className='bottomPageTextStyle thanks'>Thanks for visiting my website.</div>
                        <div className='bottomPageTextStyle resumeText'>Feel free to check out my resume:</div>
                    </div>
                    <div className='resumeContainer'>
                        <div className='resume'>
                            <div className='resumeTrigger'></div>
                            <div className='decor'></div>
                        </div>
                    </div>
                    <div className='rightTextContainer'>
                        <div className='bottomPageTextStyle goodbye'>Have a nice day.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;