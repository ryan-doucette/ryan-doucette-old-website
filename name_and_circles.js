import React, { Component } from 'react';
import inner_circle from './circle_imgs/inner_circle.png';
import outer_circle from './circle_imgs/outer_circle.png';
import Typist from 'react-typist';
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
            left: '4px'
        };

        return (
            <name_and_circles>
                <div style={name_style}>
                    <Typist>
                        Ryan Doucette
                    </Typist>

                </div>
                <div>
                    <img src={inner_circle} className='InnerCircle' style={{ position: 'relative', top: '130px' }} />
                </div>
                <div>
                    <img src={outer_circle} className='OuterCircle' style={{ position: 'relative', top: '-322px' }} />
                </div>
            </name_and_circles>
        );
    }
}

export default Name_and_Circles;
