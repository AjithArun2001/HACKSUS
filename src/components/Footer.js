import React from 'react'
import styled from 'styled-components'
import iedc from './images/iedc-logo.png'
import keralaiedc from './images/iedc white logo.png'
import KSUM from './images/KSUM_White.png'
import rset from './images/rset white logo.png'
import IPL from './images/IPL_White.png'



function Footer() {

    const Container = styled.div`
        background-color: #222222;
        width: 100vw;
        margin-top: 20vh;
        

        @media (min-width: 1200px){
            display: flex;
        justify-content: space-around;
        }
    `


    const Logo = styled.img`
        padding: 20px 0;
        width: 60%;

        @media (min-width: 1200px){
            width: 15%;
            padding: 40px 0;
        }
    `

    return (
        <Container>
            {/* <h1>RSET IEDC</h1> */}
            <Logo src={IPL} alt={"iedc logo"} />
            <Logo src={keralaiedc} alt={"iedc logo"} />
            <Logo src={iedc} alt={"iedc logo"} />
            <Logo src={rset} alt={"iedc logo"} />
            <Logo src={KSUM} alt={"iedc logo"} />
        </Container>
    )
}

export default Footer
