import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll';

function mobileDropdown() {

    const MenuSection = styled.div`
        height: 50px;
        width: 100vw;
        background-color: gray;
        border: 1px solid white;
        box-sizing: border-box;
        position: relative;

        p{
            margin: 0;
            padding: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: white;
        }
    `
    return (
        <>
            <Link to="about" smooth={true}>
                <MenuSection>
                    <p>About</p>
                </MenuSection>
            </Link>
            <Link to="prizes" smooth={true}>
                <MenuSection>
                    <p>Prizes</p>
                </MenuSection>
            </Link>
            <Link to="themes" smooth={true}>
                <MenuSection>
                    <p>Themes and Tracks</p>
                </MenuSection>
            </Link>
            <Link to="schedule" smooth={true}>
                <MenuSection>
                    <p>Schedule</p>
                </MenuSection>
            </Link>
            <Link to="partners" smooth={true}>
                <MenuSection>
                    <p>Partners</p>
                </MenuSection>
            </Link>
            <Link to="faqs" smooth={true}>
                <MenuSection>
                    <p>FAQ's</p>
                </MenuSection>
            </Link>
            <Link to="register" smooth={true}>
                <MenuSection>
                    <p>Register</p>
                </MenuSection>
            </Link>
        </>
    )
}

export default mobileDropdown
