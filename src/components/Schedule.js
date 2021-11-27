import React from 'react'
import styled from 'styled-components'

function Schedule() {

    const Container = styled.div`
        padding: 0 10vw;
        color: #707070;
        margin: 5vh 0;

        h1{
            padding: 3vh 0;
            margin: 0;
        }

        div{
            background-color: gray;
            height: 500px;
            width: 10px;
            margin: 0 auto;
        }
    `
    
    return (
        <Container id="schedule">
            <h1>Schedule</h1>
            <div></div>
        </Container>
    )
}

export default Schedule
