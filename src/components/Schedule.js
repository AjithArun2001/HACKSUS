import React from 'react'
import styled from 'styled-components'
import schedule from './images/new_sch.jpg'

function Schedule() {

    const Container = styled.div`
        padding: 0 10vw;
        color: #2c2c2c;
        margin: 5vh 0 10vh 0;

        h1{
            padding: 3vh 0;
            margin: 0;
        }

        img{
            width: 90%;
        }

        font-weight: bold;
        }

        @media (min-width: 1200px){
            
            h1{
                font-size: 3.5em;
            }

            img{
                width: 50%;
            }
        }
    `
        
    return (
        <Container id="schedule">
            <h1>Schedule</h1>
            <img src={schedule} alt={"schedule"} />

        </Container>
    )
}

export default Schedule
