import React from 'react'
import styled from 'styled-components'

function About() {

    const Container = styled.div`
        background-color: gray;
        padding: 0 10vw;
        color: white;
        margin: 5vh 0;

        h2{
            padding: 2vh 0;
            margin: 0;
        }
        p{
            margin: 0;
            padding: 0 0 5vh 0;
            text-align: left;
        }
    `
    return (
        <Container id="about">
            <h2>About the event</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Container>
    )
}

export default About
