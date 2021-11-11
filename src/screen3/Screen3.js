import React, { Component } from 'react';
import '/Users/ryandoucette/Documents/personal-website/src/screen3/Screen3.css'
import '/Users/ryandoucette/Documents/personal-website/src/screen3/Scrutiny.css'
import '/Users/ryandoucette/Documents/personal-website/src/screen3/PersonalSite.css'
import '/Users/ryandoucette/Documents/personal-website/src/screen3/Ruumzy.css'

class Screen3 extends Component {

    render() {
        return (
            // Full container
            <div className='container' style={{ height: '100vh', width: '100vw' }}>
                <div className='innerContainer3'>
                    <div className='bulbContainer1 bulbPos1' >
                        <a className='bulb1' href='https://ruumzy.com/' target="_blank" rel="noopener noreferrer" style={{ color: 'transparent' }}></a>
                        <div className='bulb1M' ></div>
                        <div className='bulb1Lit' ></div>
                    </div>
                    <div className='bulbContainer2 bulbPos2'>
                        <a className='bulb2' href='https://apps.apple.com/us/app/scrutinyfb/id1491261180' target="_blank" rel="noopener noreferrer" style={{ color: 'transparent' }}></a>
                        <div className='bulb2M' ></div>
                        <div className='bulb2Lit'></div>
                    </div>
                    <div className='bulbContainer3 bulbPos3 bulbContainerM'>
                        <div className='bulb3'></div>
                        <div className='bulb3Lit'></div>
                    </div>
                    <div className='ruumzyContainer'>
                        <div className='ruumzyTitle ruumzyText'>Ruumzy</div>
                        <div className='ruumzySubTitle ruumzyText'>Co-founder and Lead Frontend Developer</div>
                        <div className='ruumzySubTitle ruumzyText'>Funded by Northeastern Khoury Jelly Incubation Fund</div>
                        <div className='ruumzyDesc ruumzyText'>(Allows users to list and view sublet apartments - equipped with map view, chat feature, and detailed listings)</div>
                        <div className='ruumzyInfo ruumzyText'>For more information check out ruumzy.com or download the app on the iOS App Store or Google Play Store! </div>
                    </div>
                    <div className='scrutinyContainer'>
                        <div className='scrutinyTitle scrutinyText'>scrutinyFB</div>
                        <div className='scrutinySubTitle scrutinyText'>Co-Developed Full-Stack iOS Mobile Application</div>
                        <div className='scrutinyDesc scrutinyText'>(Allows user to make complex player and team comparisons to aid in fantasy football roster decisions)</div>
                        <div className='scrutinyInfo scrutinyText'>This project was Shanmuhka Srinivasan and I’s first crack at creating a mobile application. Through this experience we learned a lot about React Native, webscraping data, API calls, and the process of launching an app on the iOS App Store.</div>
                    </div>
                    <div className='siteContainer'>
                        <div className='siteTitle siteText'>Personal Website</div>
                        <div className='siteSubTitle siteText'>Designed, Developed, and Deployed Personal Site </div>
                        <div className='siteInfo siteText'>This website will continue to be an ongoing project that I look forward to adding to. It was developed using React with JavaScript, CSS, and HTML. All of the icons and images I created using Adobe Illustrator and Photoshop. I had a lot of fun creating the animations and transformations. I learned a lot about what goes into the process of designing, developing, and deploying a website.</div>
                    </div>
                    <div className='placeHolderText1'>PROJECTS</div>
                </div>
            </div>
        );
    }
}

export default Screen3;