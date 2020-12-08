import React, { Component } from 'react';
import inner_circle from './circle_imgs/inner_circle.png';
import outer_circle from './circle_imgs/outer_circle2.png';
import name_in_circle from './circle_imgs/name_in_circle2.png';
import '/Users/ryandoucette/Documents/personal-website/src/App.css';
import './name_and_circles.css'

class NameAndCircles extends Component {
    render() {
        return (
            <div className='CircleContainer'>
                <div className='CircleStyle OuterCircleDim' style={{ backgroundImage: `url(${name_in_circle})` }}>
                    <div className='CircleStyle OuterCircleDim OuterCircleRotate' style={{ backgroundImage: `url(${outer_circle})` }}>
                        <div className='CircleStyle InnerCircleDim InnerCircleRotate' style={{ backgroundImage: `url(${inner_circle})` }}> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NameAndCircles;
