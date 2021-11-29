import React from 'react'
import styled from 'styled-components'
import lotus from './images/lotus.png'
import iedc from './images/iedc-logo.png'
import discord from './images/discord.png';

function Jumbotron() {

    const Container = styled.div`
        width: 90vw;
        margin: 0 auto;
        color: #2c2c2c;

        h1{
            font-weight: 900;
            font-size: 4em;
            margin: 0;
            background: -webkit-linear-gradient(#6A8E4E, #2C473E);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        p{
            font-size: 0.9em;
        }

        @media (min-width: 1200px){
            
            font-size: 2em;

            p{
                width: 60%;
                margin: 20px auto;
            }

            h1{
                font-size: 4.2em;
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
            padding-top: 10px;
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
        border: 2px solid #707070;
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

    React.useEffect(() => {
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
        <Container>
            <Lotus src={lotus} alt={"lotus icon"} />
            <h1>HackS'US</h1>
            
            <IedcContainer>
                <h3>Brought to you by</h3>
                <img src={iedc} alt={"iedc logo"} />
            </IedcContainer>
            <p>A 48 hour hackathon featuring the 
                importance of sustainable development goals</p>
            <p>December 3rd, 6 pm to December 4th, 6 pm </p>
            <ButtonDiv>
                <div 
                    className="apply-button" 
                    data-hackathon-slug="hacksus" 
                    data-button-theme="dark"
                    style={{height: "150px", width: "200px"}}
                ></div>
                <DiscordBtn><img src={discord} alt={"discord icon"} /><p>Join discord channel</p></DiscordBtn>
            </ButtonDiv>

        </Container>
    )
}

export default Jumbotron
