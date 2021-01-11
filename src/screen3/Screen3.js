import React, { Component } from 'react';
import '/Users/ryandoucette/Documents/personal-website/src/screen3/Screen3.css'
import '/Users/ryandoucette/Documents/personal-website/src/screen3/Scrutiny.css'
import '/Users/ryandoucette/Documents/personal-website/src/screen3/PersonalSite.css'

class Screen3 extends Component {

    render() {
        return (
            // Full container
            <div className='container' style={{ height: '100vh', width: '100vw' }}>
                <div className='innerContainer3'>
                    {/* <div className='bulbContainerM bulbPos1M' >
                        <div className='bulb1M'></div>
                        <div className='bulb1MLit'></div>
                    </div>
                    <div className='bulbContainerM bulbPos2M'>
                        <div className='bulb2M'></div>
                    </div> */}
                    <div className='bulbContainer bulbPos1' >
                        <a className='bulb1' href='https://apps.apple.com/us/app/scrutinyfb/id1491261180' target="_blank" rel="noopener noreferrer" style={{ color: 'transparent' }}>.</a>
                        <div className='bulb1Lit'></div>
                    </div>
                    <div className='bulbContainer bulbPos2'>
                        <div className='bulb2'></div>
                        <div className='bulb2Lit'></div>
                    </div>
                    <a className='bulbContainer brokenBulbPos bulbContainerM' href='https://www.wikihow.com/Change-a-Light-Bulb'>
                        <div className='brokenBulb'></div>
                    </a>
                    <div className='scrutinyContainer'>
                        <div className='scrutinyTitle scrutinyText'>scrutinyFB</div>
                        <div className='scrutinySubTitle scrutinyText'>Co-Developed Full-Stack iOS Mobile Application</div>
                        <div className='scrutinyDesc scrutinyText'>(Allows user to make complex player and team comparisons to aid in fantasy football roster decisions)</div>
                        <div className='scrutinyInfo scrutinyText'>This project was Shanmuhka Srinivasan and I’s first crack at creating a mobile application. Through this experience we learned a lot about React Native, webscraping data, API calls, and the process of launching an app on the iOS App Store.</div>
                        <div className='scrutinyLogoHolder'>
                            <a className='scrutinyLogo' href='https://apps.apple.com/us/app/scrutinyfb/id1491261180'> </a>
                        </div>
                    </div>
                    <div className='siteContainer'>
                        <div className='siteTitle siteText'>Personal Website</div>
                        <div className='siteSubTitle siteText'>Designed, Developed, and Deployed Personal Site </div>
                        {/* <div className='siteDesc siteText'>(Site Description)</div> */}
                        <div className='siteInfo siteText'>This website will continue to be an ongoing project that I look forward to adding to. It was developed using React with JavaScript, CSS, and HTML. All of the icons and images I created using Adobe Illustrator and Photoshop. I had a lot of fun creating the animations and transformations. I learned a lot about what goes into the process of designing, developing, and deploying a website.</div>
                    </div>
                    <div className='placeHolderText1'>PROJECTS</div>
                </div>
            </div>
        );
    }
}

export default Screen3;