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
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh' }} data-hover='R'>R</span>
                    </ins >
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh' }} data-hover='Y'>Y</span>
                    </ins >
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh' }} data-hover='A'>A</span>
                    </ins >
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh', marginRight: '1.7vh' }} data-hover='N'>N</span>
                    </ins >
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh' }} data-hover='D'>D</span>
                    </ins >
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh' }} data-hover='O'>O</span>
                    </ins >
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh' }} data-hover='U'>U</span>
                    </ins >
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh' }} data-hover='C'>C</span>
                    </ins >
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh' }} data-hover='E'>E</span>
                    </ins >
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh' }} data-hover='T'>T</span>
                    </ins >
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh' }} data-hover='T'>T</span>
                    </ins >
                    <ins className='flip-animate nameStyle nameSize' target='_blank'>
                        <span style={{ position: 'relative', bottom: '0.85vh' }} data-hover='E'>E</span>
                    </ins >
                </div>
            </div>
        );
    }
}

export default Name;
