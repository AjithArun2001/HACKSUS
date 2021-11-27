import React from 'react'
import styled from 'styled-components'

function Themes() {

    const Container = styled.div`
        padding: 0 10vw;
        color: #707070;
        margin: 5vh 0;

        h1{
            padding: 3vh 0;
            margin: 0;
        }
        p{
            margin: 0;
            padding: 0 0 5vh 0;
            text-align: left;
        }
        div{
            background-color: lightgray;
            height: 100px;
        }
    `

    return (
        <Container id="themes">
            <h1>Themes</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div>TBD</div>
            <h1>Tracks</h1>
            <div>TBD</div>
        </Container>
    )
}

export default Themes
