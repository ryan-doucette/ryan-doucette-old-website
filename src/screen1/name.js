import React, { Component } from 'react';
import './nameAndCircles.css';
import './nameAnimation.scss';
import './name.css';
import '/Users/ryandoucette/Documents/personal-website/src/App.css'

class Name extends Component {

    render() {
        return (
            // Containter to mimick outer circle container
            <div className='CircleContainer' style={{ backgroundColor: 'transparent' }}>
                {/* Container to mimick style of outer circle */}
                <div className='CircleStyle OuterCircleDim' style={{ backgroundColor: 'transparent' }}>
                    {/* Each letter of my name animates individually when hovered over (looking for way to reduce duplication) */}
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' data-hover='R'>R</span>
                    </flip>
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' data-hover='Y'>Y</span>
                    </flip>
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' data-hover='A'>A</span>
                    </flip>
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' style={{ marginRight: '1.7vh' }} data-hover='N'>N</span>
                    </flip>
                    <div style={{ position: 'absolute' }}> </div>
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' data-hover='D'>D</span>
                    </flip>
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' data-hover='O'>O</span>
                    </flip>
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' data-hover='U'>U</span>
                    </flip>
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' data-hover='C'>C</span>
                    </flip>
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' data-hover='E'>E</span>
                    </flip>
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' data-hover='T'>T</span>
                    </flip>
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' data-hover='T'>T</span>
                    </flip>
                    <flip className='flip-animate nameStyle nameSize' target='_blank'>
                        <span className='name_animation' data-hover='E'>E</span>
                    </flip>
                </div>
            </div>
        );
    }
}

export default Name;
