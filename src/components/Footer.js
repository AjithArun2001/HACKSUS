import React from 'react'
import styled from 'styled-components'
import iedc from './images/iedc-logo.png'
import keralaiedc from './images/iedc white logo.png'
// import KSUM from './images/KSUM_White.png'
import rset from './images/rset white logo.png'
import IPL from './images/ipl2022.png'



function Footer() {

    const Container = styled.div`
        background-color: #222222;
        width: 100vw;
        

        @media (min-width: 1200px){
            display: flex;
        justify-content: space-around;
        }
    `


    const Logo = styled.img`
        padding: 10px 0;
        width: 70%;

        @media (min-width: 1200px){
            width: 13%;
            padding: 10px 0;
        }
    `

    return (
        <Container>
            {/* <h1>RSET IEDC</h1> */}
            <Logo src={IPL} alt={"iedc logo"} />
            <Logo src={keralaiedc} alt={"iedc logo"} />
            <Logo src={iedc} alt={"iedc logo"} />
            <Logo src={rset} alt={"iedc logo"} />
            {/* <Logo src={KSUM} alt={"iedc logo"} /> */}
        </Container>
    )
}

export default Footer
