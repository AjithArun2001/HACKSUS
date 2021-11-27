import React from 'react'
import styled from 'styled-components'
import lotus from './images/lotus.png'
import iedc from './images/iedc-logo.png'
import discord from './images/discord.png';

function Jumbotron() {

    const Container = styled.div`
        width: 90vw;
        margin: 0 auto;
        color: #707070;

        h1{
            font-weight: 900;
            font-size: 4em;
            margin: 0;
            
        }
    `

    const Lotus = styled.img`
        height: 10vh;
        padding: 2vh;
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
    `

    const DiscordBtn = styled.button`
        border: 1px solid black;
        width: 92%;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        margin: 0 auto;

        img{
            height: 40px;
            padding-top: 5px;
            padding-right: 5px;
        }

        p{
            font-size: 1.2em;
            color: #707070;
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

    /* const devfolioBtnStyle = {
        height: '100px',
        width: '400px'
    }; */

    return (
        <Container>
            <Lotus src={lotus} alt={"lotus icon"} />
            <h1>HackS'US</h1>
            <IedcContainer>
                <h3>Brought to you by</h3>
                <img src={iedc} alt={"iedc logo"} />
            </IedcContainer>
            <div 
                className="apply-button" 
                data-hackathon-slug="YOUR-HACKATHON-SLUG" 
                data-button-theme="dark"
                /* style={devfolioBtnStyle} */
            ></div>
            <DiscordBtn><img src={discord} alt={"discord icon"} /><p>Join discord channel</p></DiscordBtn>
        </Container>
    )
}

export default Jumbotron
