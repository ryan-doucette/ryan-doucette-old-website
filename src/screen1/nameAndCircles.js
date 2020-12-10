import React, { Component } from 'react';
import inner_circle from './circleImgs/inner_circle.png';
import outer_circle from './circleImgs/outer_circle.png';
// import name_in_circle from './circle_imgs/name_in_circle.png';
import './nameAndCircles.css'
import './nameAnimation.scss'
import '/Users/ryandoucette/Documents/personal-website/src/App.css'

class NameAndCircles extends Component {

    render() {
        return (
            // container for whole nested image/animation
            <div className='CircleContainer'>

                {/* image containing my name (no animation applied) NO LONGER USING BUT KEEPING IN CASE OF REVERT */}
                {/* <div className='CircleStyle OuterCircleDim ' style={{ backgroundImage: `url(${name_in_circle})` }}> */}

                {/* image containing the outer cirlce (animated) */}
                <div className='CircleStyle OuterCircleDim OuterCircleRotate ' style={{ backgroundImage: `url(${outer_circle})` }}>

                    {/* image containing the inner circle (animated) */}
                    <div className='CircleStyle InnerCircleDim InnerCircleRotate ' style={{ backgroundImage: `url(${inner_circle})` }}> </div>
                </div>
            </div >
        );
    }
}

export default NameAndCircles;
