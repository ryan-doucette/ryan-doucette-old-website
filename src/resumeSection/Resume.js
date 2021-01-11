import React, { Component } from 'react';
import '/Users/ryandoucette/Documents/personal-website/src/resumeSection/Resume.css'

class Resume extends Component {

    render() {
        return (
            <div className='entireSection'>
                <div className='resumeSectionContainer'>
                    <div className='leftTextContainer'>
                        <div className='bottomPageTextStyle resumeText'>Feel free to check out my resume:</div>
                        {/* <div className='bottomPageTextStyle resumeText'>Feel free to check out my resume:</div> */}
                    </div>
                    <div className='resumeContainer'>
                        <div className='resume'>
                            <a className='resumeTrigger' href='https://github.com/ryan-doucette/ryan-doucette-resume/blob/master/Ryan%20Doucette%20Resume%202021.pdf' target="_blank" rel="noopener noreferrer" style={{ color: 'transparent' }}>.</a>
                            {/* This URL version will auto download resume when clicked on https://github.com/ryan-doucette/ryan-doucette-resume/blob/master/Ryan%20Doucette%20Resume%202021.pdf?raw=true */}
                            <div className='decor'></div>
                        </div>
                    </div>
                    <div className='rightTextContainer'>
                        <div className='bottomPageTextStyle thanks'>Thanks for visiting my website.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;