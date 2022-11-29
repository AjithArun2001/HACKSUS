import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll';


function mobileDropdown() {

    const MenuSection = styled.div`
        height: 50px;
        width: 100vw;
        background-color: #222222;
        
        box-sizing: border-box;
        position: relative;
        z-index: 1;

        p{
            margin: 0;
            padding: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #f3fefe;
            font-weight: bold;
            font-size: 1.1em;
        }
    `
    return (
        <>
            <Link to="about" smooth={true}>
                <MenuSection>
                    <p>Overview</p>
                </MenuSection>
            </Link>
            <Link to="themes" smooth={true}>
                <MenuSection>
                    <p>Problem Statements</p>
                </MenuSection>
            </Link>
            <Link to="tracks" smooth={true}>
                <MenuSection>
                    <p>Tracks</p>
                </MenuSection>
            </Link>
            <Link to="schedule" smooth={true}>
                <MenuSection>
                    <p>Schedule</p>
                </MenuSection>
            </Link>
            <Link to="partners" smooth={true}>
                <MenuSection>
                    <p>Sponsors</p>
                </MenuSection>
            </Link>
            {/* <Link to="rules" smooth={true}>
                <MenuSection>
                    <p>Rules</p>
                </MenuSection>
            </Link> */}
            <Link to="contactus" smooth={true}>
                <MenuSection>
                    <p>Contact Us</p>
                </MenuSection>
            </Link>
            {/* <Link to="register" smooth={true}>
                <MenuSection>
                    <p>Register</p>
                </MenuSection>
            </Link> */}
        </>
    )
}

export default mobileDropdown
