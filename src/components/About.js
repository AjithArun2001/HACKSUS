import React from 'react'
import styled from 'styled-components'

function About() {

    const Container = styled.div`
        background-color: #2C473E;
        padding: 0 10vw;
        color: white;
        margin: 5vh 0;

        h2{
            padding: 2vh 0;
            margin: 0;
            font-size: 2.2em;
        }
        p{
            margin: 0;
            font-style: normal;
            padding: 0 0 5vh 0;
            text-align: left;
        }

        @media (min-width: 1200px){
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 0;

        h2{
            width: 20%;
            text-align: right;
            font-size: 4em;
            padding-right: 30px;
            line-height: 70px;
        }

        p{
            width: 60%;
            font-size: 1.5em;
            padding: 0;
        }
    }
    `
    return (
        <Container id="about">
            <h2>About the event</h2>
            <p>HackS'US is a 48-hour online hackathon organized by IEDC RSET focusing on the importance of sustainable development goals. In this 48 hours, participants will be able to build exciting products on their tech stack of choice, attend talks from industrial leaders, solve problems regarding sustainability, and much more.</p>
        </Container>
    )
}

export default About
