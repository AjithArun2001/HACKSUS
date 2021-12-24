import React, { useEffect } from 'react'
import styled from 'styled-components'
import lotus from './images/lotus.png'
import AnimationBG from './AnimationBG';

function Jumbotron() {


    const JumbotronContainer = styled.div`
        position: relative;
        overflow-x: hidden;
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

    const Lotus = styled.img`
        height: 10vh;
        margin-top: 20px;
    `

    const IedcContainer = styled.div`
        display: flex;
        justify-content: center;

        h3{
            margin: 0;
            font-weight: lighter;
            margin-top: -10px;
            font-size: 0.6em;
        }

        img{
            padding-left: 10px;
        }

        @media (min-width: 1200px){
            img{
                height: 90px;
            }
        }
    `

    const ButtonDiv = styled.div`

        display: block;


        @media (min-width: 1200px){
            display: flex;
            justify-content: space-around;
            width: 60%;
            margin: 0 auto;
        }
    `

    const DiscordBtn = styled.button`
        border: 0;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        margin: 10px auto;
        background-color: #1F2932;
        height: 44px;
        width: 312px;
        padding: 0;
        align-items: center;
        cursor: pointer;

        img{
            height: 36px;
            padding-right: 20px;

        }

        p{
            font-size: 1.2em;
            color: white;
            font-weight: bold;
        }

        @media (min-width: 1200px){
            margin: 0;

            img{
                padding: 0;
            }

            p{
                margin: 0;
            }
        }
    `

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
        document.body.removeChild(script);
        }
    }, []);

    return (
        <JumbotronContainer>
        {/* <AnimationBG /> */}
        <Container>
        
            <h1>HackS'US&ensp;1.5</h1>
            <IedcContainer>
                <h3>Brought to you by RSET IEDC</h3>
            </IedcContainer>
            <p>A 36 hour regional hackathon</p>
            <p>An offline event from December 28th, 9 am to December 29th, 4 pm at Rajagiri School of Engineering and Technology</p>

        </Container>
        </JumbotronContainer>
    )
}

export default Jumbotron
