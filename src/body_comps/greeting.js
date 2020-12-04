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
            position: 'relative',
            top: '9vh',
            left: '130px'
        };

        const text_sty2 = {
            color: 'white',
            fontSize: 29,
            letterSpacing: '2.5px',
            fontFamily: 'HelveticaNeue-Light',
            textAlign: 'left',
            position: 'relative',
            top: '10vh',
            left: '130px'
        };

        const text_sty3 = {
            color: 'white',
            fontSize: 29,
            letterSpacing: '2.5px',
            fontFamily: 'HelveticaNeue-Light',
            textAlign: 'left',
            position: 'relative',
            top: '11vh',
            left: '130px'
        };

        const text_sty4 = {
            color: 'white',
            fontSize: 29,
            letterSpacing: '2.5px',
            fontFamily: 'HelveticaNeue-Light',
            textAlign: 'left',
            position: 'relative',
            top: '58vh',
            left: '130px'
        };

        const text_sty5 = {
            color: 'white',
            fontSize: 29,
            letterSpacing: '2.5px',
            fontFamily: 'HelveticaNeue-Light',
            textAlign: 'left',
            position: 'relative',
            top: '62vh',
            left: '130px'
        };

        const text_sty6 = {
            color: 'white',
            fontSize: 29,
            letterSpacing: '2.5px',
            fontFamily: 'HelveticaNeue-Light',
            textAlign: 'left',
            position: 'relative',
            top: '66vh',
            left: '130px'
        };

        return (
            <div style={{ height: '100vh', overflowX: 'hidden' }}>
                <FadeIn delay={250} transitionDuration={1000}>
                    <div style={text_sty}>Welcome to</div>
                    <div style={text_sty2}>my personal</div>
                    <div style={text_sty3}>website.</div>
                </FadeIn>

                <FadeIn delay={800} transitionDuration={1000}>
                    {/* <a href=''> */}
                    <div style={text_sty4}>About Me</div>
                    {/* </a> */}
                    {/* <a href=''> */}
                    <div style={text_sty5}>Projects</div>
                    {/* </a> */}
                    {/* <a href=''> */}
                    <div style={text_sty6}>Work</div>
                    {/* </a> */}
                </FadeIn>
            </div>
        );
    }
}

export default Greeting;
