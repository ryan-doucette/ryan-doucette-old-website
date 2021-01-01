import React, { Component } from 'react';
import '/Users/ryandoucette/Documents/personal-website/src/screen3/Screen3.css'

class Screen3 extends Component {

    render() {
        return (
            // Full container
            <div className='container' style={{ height: '100vh', width: '100vw' }}>
                <div className='innerContainer3'>

                    <div className='bulbContainer bulbPos1'>
                        <div className='bulb1'></div>
                    </div>
                    <div className='bulbContainer bulbPos2'>
                        <div className='bulb2'></div>
                    </div>
                    <a className='bulbContainer brokenBulbPos' href='https://www.wikihow.com/Change-a-Light-Bulb'>
                        <div className='brokenBulb'></div>
                    </a>
                    <div className='scrutinyContainer'>

                    </div>
                    <div className='siteContainer'>

                    </div>
                    <div className='placeHolderText1'>PROJECTS</div>
                </div>
            </div>
        );
    }
}

export default Screen3;