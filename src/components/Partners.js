import React from 'react'
import styled from 'styled-components'
import CSML from '../components/images/CSML.png'
import Inspired from './images/Inspired.png'

function Partners() {

    const Container = styled.div`
        padding: 5vh 0;
        color: #2c2c2c;
        margin: 5vh 0;
        background-color: #14b1b2;

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

        img{
            max-width: 90vw;
            margin: 0 auto;
        }

        @media (min-width: 1200px){
            width: 50%;
            display: inline;
        }
    `


    return (
        <Container id="partners">
            <div>
                <PartnerDiv>
                    <h1>Premium Sponsor</h1>
                    <img src={Inspired} alt={"Inspired"} />
                </PartnerDiv>
                <PartnerDiv>
                    <h1>Technical Partner</h1>
                    <img src={CSML} alt={"CSML"} />
                </PartnerDiv>
            </div>
        </Container>
    )
}

export default Partners
