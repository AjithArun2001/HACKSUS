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
            font-size: 0.5 em;
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

        .button{

           
            background-color: white;
            border: none;
            color: #245757;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 20px;
            font-weight: bolder;
            cursor: pointer;

        }

    }
    `

   


    return (

        <>
        <Container id="about">
            <h2>Overview</h2>
            <ul><li> RSET IEDC as part of Techkshetra'22 presents to you <b>HackS'US 2.0</b>.</li>
                
                <li>HackS’US 2.0 is a team based hackathon where students come together to generate solutions for real world problems and develop them into innovative proposals.</li>

                <li>HackS’US 2.0 is a 24-hour hackathon scheduled to be conducted from December 2nd 5 PM to December 3rd 5 PM.</li>

                <li>Participants are requested to go through the problem statements and the rules of HackS’US 2.0 mentioned below.</li>
                
                <li>  <a href = "Rules.pdf" download target="_blank"><button class = "button">Rules & Regulations</button></a> </li>

                </ul>




                
                {/* <h1>Rules</h1> */}

                
        </Container>
        </>
    )
}

export default About
