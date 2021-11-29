import React from 'react'
import styled from 'styled-components'
import flower from './images/flower.png'



function Prizes() {

    const Container = styled.div`
        padding: 0 10vw;
        color: #2c2c2c;
        margin: 5vh 0;

        h2{
            padding: 2vh 0;
            margin: 0;
            font-size: 3em;
        }
        p{
            margin: 0;
            padding: 0 0 5vh 0;
            text-align: left;
        }

        @media (min-width: 1200px){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            font-size: 1.2em;

            h2{
                flex-basis: 100%;
                float: right;
            }
        }
    `

    const PrizeMoney = styled.div`

        text-align: left;
        

        p{
            margin: 0;
            padding: 0;
            text-align: left;
        }

        h1{
            font-weight: 900;
            font-size: 3.5em;
            margin: 0;
            padding: 0;
            color: ${(props) => props.color};
            
            
        }
        div{
            display: flex;
            justify-content: space-between;
        }

        @media (min-width: 1200px){
            border: 3px solid ${(props) => props.color} ;
            padding: 10px;
            width: 25%;

            p{
                font-weight: bold;
            }

            h1{
                font-size: 2.5em;
            }
        
        }
    `

    return (
        <>
        <Container id="prizes">
            <h2>Prizes</h2>
            <PrizeMoney  color="#2C473E">
                <div>
                    <p>First Prize</p>
                    <img src={flower} alt={"flower design"} />
                </div>
            <h1>Rs.10,000</h1>
            </PrizeMoney>
            <PrizeMoney  color="#6A8E4E">
                <div>
                    <p>Second Prize</p>
                    <img src={flower} alt={"flower design"} />
                </div>
            <h1>Rs.6000</h1>
            </PrizeMoney>
            <PrizeMoney  color="#B0D182">
                <div>
                    <p>Third Prize</p>
                    <img src={flower} alt={"flower design"} />
                </div>
            <h1>Rs.4000</h1>
            </PrizeMoney>
        </Container>

        </>
    )
}

export default Prizes
