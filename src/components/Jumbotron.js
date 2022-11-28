import React, { useEffect } from 'react'
import styled from 'styled-components'
import AnimationBG from './AnimationBG'


function Jumbotron() {


    const JumbotronContainer = styled.div`
        position: relative;
        overflow-x: hidden;


        .button{

            background-color: #245757; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor:pointer;

        }
    `

    const Container = styled.div`
        width: 90vw;
        margin: 0 auto;
        color: #2c2c2c;
        z-index: 1;
        position: relative;
        padding: 5vh 0 9vh 0;

        h1{
            font-weight: 900;
            font-size: 4em;
            margin: 50px 0 0 0;
            background: -webkit-linear-gradient(#157F80, #166457);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 75px;
        }

        p{
            font-size: 0.7em;
            font-weight: 500;
        }

        a{
            text-decoration: none;
        }

        @media (min-width: 1200px){
            
            font-size: 2em;

            p{
                width: 60%;
                margin: 20px auto;
            }

            h1{
                font-size: 3em;
                font-weight: 700;
            }
        }

    `

 

    const IedcContainer = styled.div`
        display: flex;
        justify-content: center;

        h3{
            margin: 0;
            font-weight: lighter;
            margin-top: 0;
            font-size: 0.6em;
        }

        img{
            padding-left: 10px;
        }

        @media (min-width: 1200px){

            margin-top: 20px;

            img{
                height: 90px;
            }
        }


    `


    

    const redirectSite = () => {
        // window.location.href='https://forms.gle/YGH7vGMN4HPWbG3C8';
        window.open(
            'https://forms.gle/VaU4VeaGb7QmTk4ZA',
            '_blank' // <- This is what makes it open in a new window.
          );
    }


    return (
        <JumbotronContainer>
        <AnimationBG />
        <Container>
        
            <h1>HackS'US 2.0</h1>
            <IedcContainer>
                <h3>Brought to you by <b>RSET IEDC</b> as part of <b>TECHKSHETRA 2022</b><br/>(National Level Inter Collegiate Technical Fest)</h3>
                
                {/* <h3>(National Level Inter Collegiate Technical Fest)</h3> */}

            </IedcContainer>
            <p>A 24 hour Intra-college hackathon</p>
            <p>December 2 - December 3 </p>
            <p>Rajagiri School of Engineering and Technology</p>

            <button onClick = {redirectSite} class = "button">Register Now</button>

        </Container>
        </JumbotronContainer>
    )
}

export default Jumbotron
