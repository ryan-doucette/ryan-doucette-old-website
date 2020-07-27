import React, { Component } from 'react';
import inner_circle from './circle_imgs/inner_circle.png';
import outer_circle from './circle_imgs/outer_circle.png';
import side_design from '/Users/ryandoucette/Documents/personal-website/src/body_comps/designs/side_design.png';
import '/Users/ryandoucette/Documents/personal-website/src/App.css';

class Name_and_Circles extends Component {
    render() {
        const name_style = {
            color: 'white',
            fontSize: 43,
            letterSpacing: '2.5px',
            fontFamily: 'HelveticaNeue-Light',
            position: 'relative',
            top: '355px',
            left: '214px'
        };

        return (
            <name_and_circles>
                <div style={name_style}>
                    Ryan Doucette
                </div>
                <div>
                    <img src={inner_circle} className='InnerCircle' style={{ position: 'relative', top: '130px', left: '210px' }} />
                </div>
                <div>
                    <img src={outer_circle} className='OuterCircle' style={{ position: 'relative', top: '-322px', left: '210px' }} />
                </div>
                <div>
                    {/* <img src={side_design} style={{ position: 'absolute', top: '350px' }} /> */}
                </div>

            </name_and_circles>
        );
    }
}

export default Name_and_Circles;
