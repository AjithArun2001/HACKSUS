import React from 'react'
import styled from 'styled-components'
// import CSML from '../components/images/CSML.png'
// import Inspired from './images/Inspired.png'
import aws from "../components/images/aws.png"
import gdg from "../components/images/GDG.png"
import mg from "../components/images/MakerGram.png"
import steag from "../components/images/STEAG.png"
import tinkerhub from "../components/images/TinkerHub.png"

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
            margin: 20px 0;
            height : 60px;
        }

        .awsimg{
            height : 80px;
        }
        
        .gdgimg{
            
            height : 60px;
           
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
                height : 60px;
                margin-left : 10px;
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
            margin-left : 30px;
            margin-top : 30px;
        }

        @media (min-width: 1200px){
            width: 50%;
            display: inline;
            margin-left : 10px;

            img{
                margin: 10px;
                height : 60px;
                margin-left : 30px;
                margin-top : 30px;
            }
        }
    `


    return (
        <Container id="partners">
            <div>
                <PartnerDiv>
                    <h1>Sponsors</h1>
                    <img class = "awsimg" src={aws} alt={"Inspired"} />
                    <img class = "mgimg" src={mg} alt={"Inspired"} />
                    <img class = "steagimg" src={steag} alt={"Inspired"} />
                    <img class = "gdgimg" src={gdg} alt={"Inspired"} />
                    <img class = "tinkerimg" src={tinkerhub} alt={"Inspired"} />
                </PartnerDiv>
                {/* <PartnerDiv>
                    <img class = "mgimg" src={mg} alt={"Inspired"} />
                    <img class = "steagimg" src={steag} alt={"Inspired"} />
                </PartnerDiv>
                <PartnerDiv>
                    <img class = "tinkerimg" src={tinkerhub} alt={"Inspired"} />
                </PartnerDiv> */}
            </div>
        </Container>
    )
}

export default Partners
