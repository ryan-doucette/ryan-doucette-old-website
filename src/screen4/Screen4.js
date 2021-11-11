import React, { Component } from 'react';
import '/Users/ryandoucette/Documents/personal-website/src/screen4/Screen4.css'
import '/Users/ryandoucette/Documents/personal-website/src/screen4/Screen4Text.css'

class Screen4 extends Component {

    render() {
        return (
            // Full container
            <div className='container' style={{ height: '100vh', width: '100vw' }}>
                <div className='innerContainer4'>
                    <div className='allButtons button1'>
                        <div className='enozoButton'></div>
                        <div className='enozoButtonB'></div>
                    </div>
                    <div className='allButtons button2'>
                        <div className='ssButton'></div>
                        <div className='ssButtonB'></div>
                    </div>
                    <div className='allBorder leftBorder'></div>
                    <div className='allBorder rightBorder'></div>
                    <div className='allBorder topBorder'></div>
                    <div className='allBorder bottomBorder'></div>
                    <div className='overflowLeftBlock'></div>
                    <div className='overflowRightBlock'></div>
                    <div className='work2'>
                        <div className='screen4Title screen4Text'>State Street Global Advisors</div>
                        <div className='screen4SubTitle screen4Text' >Database Engineering Architecture Project Manager Co-op</div>
                        <div className='screen4SubTitle screen4Text' >July - December 2020</div>
                        <ul className='screen4Desc screen4Text'>
                            <li>Led daily scrum meetings leveraging Atlassian Jira</li>
                            <li>Developed relations across functional areas such as IT, Finance, and vendor relations for teams across the globe</li>
                            <li>Drove and accelerated onboarding through advising users on best practices regarding technologies</li>
                            <li>Oversaw program execution and timely delivery</li>
                        </ul>
                    </div>
                    <div className='work1'>
                        <div className='screen4Title screen4Text'>Blueport Commerce</div>
                        <div className='screen4SubTitle screen4Text'>Frontend Developer Co-op</div>
                        <div className='screen4SubTitle screen4Text'>July - December 2021</div>
                        <ul className='screen4Desc screen4Text'>
                            <li>Implemented reusable components using Angular and TypeScript within a multi-tenant architecture</li>
                            <li>Leveraged RxJS observables with data from cloud API endpoints to manage the state of the application</li>
                            <li>Created and styled Angular templates through clean and organized SCSS and HTML</li>
                        </ul>
                    </div>
                    <div className='placeHolderText2'>WORK</div>
                </div>
            </div>
        );
    }
}

export default Screen4;