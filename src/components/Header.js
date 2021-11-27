import React, { useState } from 'react'
import styled from 'styled-components'
import logo from './images/logo-white.png';
import menu from './images/menu--icon.png';
import close from './images/close.png';
import MobileDropdown from './MobileDropdown';

function Header() {

    const Container = styled.div`
        background-color: lightgreen;
        display: flex;
        justify-content: space-between;
    `

    const Logo = styled.img`
            height: 10vh;
            padding: 1vh;
        
    `
    const DropdownIcon = styled.img`
        height: 6vh;
        padding: 3vh;
        float: right;
    `

    const [dropdown, setDropdown] = useState(false);

    return (
        <>
        <Container>
            <Logo src={logo} alt={"logo"} />
            {dropdown ? 
            <DropdownIcon onClick={()=> setDropdown(false)} src={close} alt={"menu icon"} /> 
            : 
            <DropdownIcon onClick={()=> setDropdown(true)} src={menu} alt={"menu icon"} />}
        </Container>
        {dropdown ? <MobileDropdown /> : null}
        </>
    )
}

export default Header
