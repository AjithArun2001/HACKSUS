import React from 'react'
import styled from 'styled-components'

function Schedule() {

    const Container = styled.div`
        padding: 0 10vw;
        color: #2c2c2c;
        margin: 5vh 0;

        h1{
            padding: 3vh 0;
            margin: 0;
        }

        div{
            display: flex;
            justify-content: center;
            position: relative;
        }

        span{
            background-color: gray;
            height: 500px;
            width: 10px;
            margin: 0 auto;
        }
        p{
            position: absolute;
            right: 0;
            top: 30%;
            font-size: 2em;
            width: 35vw;
            color: #6A8E4E;
            font-weight: bold;
        }

        @media (min-width: 1200px){
            
            h1{
                font-size: 3.5em;
            }
        }
    `
    
    return (
        <Container id="schedule">
            <h1>Schedule</h1>
            <div>
                <span></span>
                <p>To be declared</p>
            </div>

        </Container>
    )
}

export default Schedule
