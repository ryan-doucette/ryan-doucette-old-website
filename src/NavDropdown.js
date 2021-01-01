import React from 'react'
import './NavDropdown.css'
import $ from 'jquery';

const NavDropdown = () => {
    // Function to get rid of the dropdown upon rendering/refreshing the page 
    $(document).ready(function () {
        var y = $(this).scrollTop();
        if (y < 800) {
            $('.dropdownContainer').fadeOut(0);
        }
    });
    // Function to have the dropdown only appear when the user is looking at pages other than the top portion
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        var limit = $(window).height() * 1;

        if (y < limit) {
            $('.dropdownContainer').fadeOut();
        } else {
            $('.dropdownContainer').fadeIn();
        }
    });

    return (
        <div className="dropdownContainer" >
            <div className="dropdownIcon"></div>
            <div className="submenu">
                <div className='spacer'></div>
                <div className='textContainer' style={{ top: '3.15vh' }}>
                    <li onClick={() => { document.getElementById('Top').scrollIntoView({ behavior: "smooth" }) }} >
                        <div className='selectionStyle'>
                            Top
                        </div>
                    </li>
                </div>
                <div className='textContainer' style={{ top: '3vh' }}>
                    <li onClick={() => { document.getElementById('About Me').scrollIntoView({ behavior: "smooth" }) }} >
                        <div className='selectionStyle'>
                            About Me
                        </div>
                    </li>
                </div>
                <div className='textContainer' style={{ top: '3vh' }}>
                    <li onClick={() => { document.getElementById('Projects').scrollIntoView({ behavior: "smooth" }) }} >
                        <div className='selectionStyle'>
                            Projects
                        </div>
                    </li>
                </div>
                <div className='textContainer' style={{ top: '3vh' }}>
                    <li onClick={() => { document.getElementById('Work').scrollIntoView({ behavior: "smooth" }) }} >
                        <div className='selectionStyle'>
                            Work
                        </div>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default NavDropdown;