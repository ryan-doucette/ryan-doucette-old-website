import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class Greeting extends Component {
    render() {
        const text_sty = {
            color: 'white',
            fontSize: 29,
            letterSpacing: '2.5px',
            fontFamily: 'HelveticaNeue-Light',
            textAlign: 'left',
            position: 'absolute',
            top: '75px',
            left: '130px'
        };

        const text_sty2 = {
            color: 'white',
            fontSize: 29,
            letterSpacing: '2.5px',
            fontFamily: 'HelveticaNeue-Light',
            textAlign: 'left',
            position: 'absolute',
            top: '115px',
            left: '130px'
        };

        const text_sty3 = {
            color: 'white',
            fontSize: 29,
            letterSpacing: '2.5px',
            fontFamily: 'HelveticaNeue-Light',
            textAlign: 'left',
            position: 'absolute',
            top: '155px',
            left: '130px'
        };

        const text_sty4 = {
            color: 'white',
            fontSize: 29,
            letterSpacing: '2.5px',
            fontFamily: 'HelveticaNeue-Light',
            textAlign: 'left',
            position: 'absolute',
            top: '585px',
            left: '130px'
        };

        const text_sty5 = {
            color: 'white',
            fontSize: 29,
            letterSpacing: '2.5px',
            fontFamily: 'HelveticaNeue-Light',
            textAlign: 'left',
            position: 'absolute',
            top: '650px',
            left: '130px'
        };

        return (
            <greeting>
                <FadeIn delay={250} transitionDuration={1000}>
                    <div style={text_sty}>Welcome to</div>
                    <div style={text_sty2}>my personal</div>
                    <div style={text_sty3}>website.</div>
                </FadeIn>

                <FadeIn delay={800} transitionDuration={1000}>
                    <a href=''>
                        <div style={text_sty4}>About Me</div>
                    </a>
                    <a href=''>
                        <div style={text_sty5}>Projects</div>
                    </a>
                </FadeIn>

            </greeting>
        );
    }
}

export default Greeting;
