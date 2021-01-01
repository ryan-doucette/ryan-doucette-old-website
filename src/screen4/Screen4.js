import React, { Component } from 'react';
import '/Users/ryandoucette/Documents/personal-website/src/screen4/Screen4.css'

class Screen4 extends Component {

    render() {
        return (
            // Full container
            <div className='container' style={{ height: '100vh', width: '100vw' }}>
                <div className='innerContainer4'>
                    <div className='placeHolderText2'>WORK</div>
                    <div className='allButtons button1'>
                        <div className='ssButton'></div>
                    </div>
                    <div className='allButtons button2'>
                        <div className='enozoButton'></div>
                    </div>
                    <div className='allBorder leftBorder'></div>
                    <div className='allBorder rightBorder'></div>
                    <div className='allBorder topBorder'></div>
                    <div className='allBorder bottomBorder'></div>
                    <div className='overflowLeftBlock'></div>
                    <div className='overflowRightBlock'></div>
                    <div className='ssga'></div>
                    <div className='enozo'></div>
                </div>
            </div>
        );
    }
}

export default Screen4;