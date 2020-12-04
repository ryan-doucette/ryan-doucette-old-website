import React, { Component } from 'react';
import inner_circle from './circle_imgs/inner_circle.png';
import outer_circle from './circle_imgs/outer_circle2.png';
import name_in_circle from './circle_imgs/name_in_circle2.png';
import '/Users/ryandoucette/Documents/personal-website/src/App.css';
import './name_and_circles.css'

class NameAndCircles extends Component {
    render() {
        const circleStyle = {
            height: '100vh',
            width: '600px',
            position: 'absolute',
            top: '0vh',
            right: '45px',
            color: 'white',
            alignItems: 'center',
            //justifyContent: 'flex-start',
            //alignContent: 'center',
            //flexDirection: 'reverse-row',
            display: 'flex'
        }

        return (
            <div>
                <div className='' style={circleStyle}>
                    <div className='CirclesContainer'>
                        <div className=''
                            style={{ right: '200px', height: '64.5vh', width: '64.5vh', backgoundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${name_in_circle})`, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div className='OuterCircle'
                                style={{ height: '64.5vh', width: '64.5vh', backgoundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${outer_circle})`, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                {/* <img src={inner_circle} className='InnerCircle' height='80%' style={{ position: 'relative' }} /> */}
                                <div className='InnerCircle'
                                    style={{ height: '50vh', width: '50vh', backgoundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${inner_circle})`, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                </div>
                            </div>
                        </div>
                        {/* src={inner_circle} className='InnerCircle' height='100%' style={{ position: 'relative', left: '180px' }} /> */}
                    </div>
                    {/* <div className='outerCircleContainer'>
                        <img src={outer_circle} className='OuterCircle' height='100%' style={{ position: 'relative' }} />
                    </div> */}
                </div>
            </div >
        );
    }
}

export default NameAndCircles;
