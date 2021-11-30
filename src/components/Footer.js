import React from 'react'
import styled from 'styled-components'
import lotus from './images/lotus.png'
import iedc from './images/iedc-logo.png'



function Footer() {

    const Container = styled.div`
        background-color: #2C473E;
        height: 200px;
        width: 100vw;
        margin-top: 20vh;

        h1{
            color: white;
            font-size: 2.5em;
            margin: 0;
            display: none;
        }


    `
    const Lotus = styled.img`
        height: 10vh;
        padding: 2vh;
        margin-top: -7vh;
    `

    const IEDClogo = styled.img`
        margin: 0 auto;
        width: 150px;
    `

    return (
        <Container>
            <Lotus src={lotus} alt={"lotus icon"} /><br />
            <h1>RSET IEDC</h1>
            <IEDClogo src={iedc} alt={"iedc logo"} />
        </Container>
    )
}

export default Footer
