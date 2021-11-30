import React from 'react'
import styled from 'styled-components'
import devfolio from './images/partners/devfolio.png';
import polygon from './images/partners/polygon.png';
import tezos from './images/partners/tezos.png';
import filecoin from './images/partners/filecoin.png'
import celo from './images/partners/celo.png'
import aws from './images/partners/aws.png'
import uniexperts from './images/partners/Unixperts.png';

function Partners() {

    const Container = styled.div`
        padding: 5vh 10vw;
        color: #2c2c2c;
        margin: 5vh 0;
        background-color: #B1D182;

        h1{
            padding: 3vh 0;
            margin: 0;
        }

        a{
            cursor: pointer;
        }
        
        img{
            margin: 10px 0;
        }

        div{
            display: block;
            width: 100%;
        }

        @media (min-width: 1200px){
            h1{
                font-size: 3.5em;
            }

            img{
                margin: 10px;
            }
        }

    `
    const PartnerDiv = styled.div`

        display: block;
        width: 100px;

        h1{
            width: 100%;
        }

        @media (min-width: 1200px){
            width: 50%;
            display: inline;
        }
    `

    const UniexpertsImage = styled.img`

        width: 100%;
        background-color: white;
        padding: 10px;
        box-sizing: border-box;

        @media (min-width: 1200px){
            width: 50%;
        }
    `

    return (
        <Container id="partners">
            <h1>Gold Partners</h1>
            <a rel="noreferrer" target="_blank" href="https://devfolio.co/"><img src={devfolio} alt={"devfolio"} /></a>
            <a rel="noreferrer" target="_blank" href="https://polygon.technology/"><img src={polygon} alt={"polygon"} /></a>
            <h1>Silver Partners</h1>
            <a rel="noreferrer" target="_blank" href="https://tezos.com/"><img src={tezos} alt={"tezos"} /></a>
            <a rel="noreferrer" target="_blank" href="https://celo.org/"><img src={celo} alt={"celo"} /></a>
            <a rel="noreferrer" target="_blank" href="https://filecoin.io/"><img src={filecoin} alt={"filecoin"} /></a>
            <div>
                <PartnerDiv>
                    <h1>Premium Partners</h1>
                    <UniexpertsImage src={uniexperts} alt={"uniexperts"} />
                </PartnerDiv>
                <PartnerDiv>
                    <h1>Cloud Partners</h1>
                    <img src={aws} alt={"aws"} />
                </PartnerDiv>
            </div>
        </Container>
    )
}

export default Partners
