import React from 'react'
import styled from 'styled-components'

function About() {

    const Container = styled.div`
        background-color: #245757;
        padding: 40px 0 !important;
        color: white;
        margin: 0 0 5vh 0;
        z-index: 1;
        position: relative;

        h2{
            padding: 2vh 0;
            margin: 0;
            font-size: 2.2em;
        }
        ul{
            list-style: none;
            text-align: left;
            width: 80%;
            margin: 0 auto 30px auto;
            padding: 0;

        }
        li{
            padding: 10px;
        }

        @media (min-width: 1200px){
            display: flex;
            justify-content: center;
            padding: 20px 0;

        h2{
            text-align: right;
            font-size: 3em;
            padding-right: 40px;
            line-height: 70px;
        }
        ul{
            width: 50%;
            margin: 0;
            font-size: 1.3em;
        }

    }
    `
    return (
        <Container id="about">
            <h2>Overview</h2>
            <ul><li>Participating teams are required to present innovative solutions to solve urban challenges that will make the city more liveable for all citizens.</li>
                
                <li>The problem being addressed can be specific to a city like Kochi or can be existing across cities in India.</li>

                <li>The solution proposed by the team can also be a smaller/initial solution to a larger problem that would require more detailed interventions.</li>

                <li>Every team should define/redefine the problem they choose to address and prepare a problem space canvas before proceeding to the detailed solution proposal.</li>

                <li>Students are welcome to bring any hardware kits required to display your solution</li>

                <li>All open source software used for arriving at the solution need to be acknowledged and quoted duly.</li>

                <li>Team can propose solutions to problems listed in Key areas but can also select an area which they feel is more critical</li>
                
                <li>Food and accomodation have been arranged for all the participants for the duration of the hackathon.</li></ul>
        </Container>
    )
}

export default About
