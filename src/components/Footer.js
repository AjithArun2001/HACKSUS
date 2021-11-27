import React from 'react'
import styled from 'styled-components'
import lotus from './images/lotus.png'


function Footer() {

    const Container = styled.div`
        background-color: #C4C4C4;
        height: 200px;
        width: 100vw;
        margin-top: 20vh;

        h1{
            color: #2C473E;
            font-size: 2.5em;
            margin: 0;
        }
    `
    const Lotus = styled.img`
        height: 10vh;
        padding: 2vh;
        margin-top: -7vh;
    `

    return (
        <Container>
            <Lotus src={lotus} alt={"lotus icon"} />
            <h1>RSET IEDC</h1>
        </Container>
    )
}

export default Footer
