import React, { Component } from 'react';
import '/Users/ryandoucette/Documents/personal-website/src/screen2/Screen2.css'
import lightning_bolt from '/Users/ryandoucette/Documents/personal-website/src/screen2/Screen2Imgs/LightningBolt.png'
import illumination from '/Users/ryandoucette/Documents/personal-website/src/screen2/Screen2Imgs/LightningAlluminate.png'

class Screen2 extends Component {

    render() {
        return (
            // Full container
            <div className='container' style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
                <div className='categoriesContainer'>
                    {/* Top triangle selectors */}
                    <div className='categoryContainer category1Spec'>
                        <div className='triangleOuter' />
                        <div className='triangleInner'>
                            <div className='categoryTextStyle'>BASE</div>
                            <div className='dot' />
                        </div>
                    </div>
                    <div className='categoryContainer category2Spec'>
                        <div className='triangleOuter' />
                        <div className='triangleInner'>
                            <div className='categoryTextStyle'>SKILL</div>
                            <div className='dot' />
                        </div>
                    </div>
                    <div className='categoryContainer category3Spec'>
                        <div className='triangleOuter' />
                        <div className='triangleInner'>
                            <div className='categoryTextStyle'>LOVE</div>
                            <div className='dot' />
                        </div>
                    </div>

                    {/* Portal that opens at the top */}
                    <div className='contentVoid'></div>

                    {/* Content for Base section */}
                    <div className='baseContainer'>
                        <div className='baseHeadStyle'>Hey, I’m Ryan Doucette.</div>
                        <div className='baseListStyle'>I’m a third year student studying computer science and design at Northeastern University in Boston, MA.<br></br>
                                                   I am passionate about developing exciting interfaces and bulletproof code.<br></br>
                                                    I am always open to collaborate on new projects so please feel free to reach out!</div>
                    </div>

                    {/* Content for Skill section */}
                    <div className='skillContainer'>
                        <div className='codeStyle'>
                            <div className='skillHeadStyle'>CODE</div>
                            <div className='skillListStyle'>- JavaScript<br></br>- TypeScript<br></br>- React<br></br>- Angular<br></br>- Python<br></br>- Java<br></br>- SQL</div>
                        </div>
                        <div className='designStyle'>
                            <div className='skillHeadStyle'>DESIGN</div>
                            <div className='skillListStyle'>- Adobe Illustrator<br></br>- Adobe Photoshop<br></br>- Adobe InDesign <br></br>- iMovie<br></br>- Adobe Animate<br></br>- GarageBand<br></br>- MS Visio</div>
                        </div>
                        <div className='otherStyle'>
                            <div className='skillHeadStyle'>OTHER</div>
                            <div className='skillListStyle'>- Jira<br></br>- Git<br></br>- Figma<br></br>- Visual Studio Code<br></br>- MS Office Suite<br></br>- IntelliJ<br></br>- JUnit</div>
                        </div>
                    </div>

                    {/* Content for Love section */}
                    <div className='loveContainer'>
                        <div className='iconStyle' ></div>
                    </div>

                    {/* Cutoff portion above top portal */}
                    <div className='portalsEdgeTop border'></div>

                    {/* Portal the lightning bolt goes into on bottom */}
                    <div className='lightningVoid'></div>

                    {/* Lightning bolt */}
                    <div className='fullLightningContainer' >
                        <div className='lightningBoltAndGlowContainer'>
                            <div className='lightningBoltContainer' style={{ backgroundImage: `url(${lightning_bolt})` }}></div>
                            <div className='illuminateContainer' style={{ backgroundImage: `url(${illumination})` }}></div>
                        </div>
                    </div>

                    {/* Cutoff portion below bottom portal */}
                    <div className='portalsEdgeBottom'></div>

                </div>
            </div>
        );
    }
}

export default Screen2;