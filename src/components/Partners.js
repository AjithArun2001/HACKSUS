import React from 'react'
import styled from 'styled-components'

function Partners() {

    const Container = styled.div`
        padding: 0 10vw;
        color: #707070;
        margin: 5vh 0;

        h1{
            padding: 3vh 0;
            margin: 0;
        }
        div{
            background-color: lightgray;
            height: 150px;
        }
    `

    return (
        <Container id="partners">
            <h1>Gold Partners</h1>
            <div>TBD</div>
            <h1>Silver Partners</h1>
            <div>TBD</div>
            <h1>Community Partners</h1>
            <div>TBD</div>
            <h1>Cloud Partners</h1>
            <div>TBD</div>
        </Container>
    )
}

export default Partners
