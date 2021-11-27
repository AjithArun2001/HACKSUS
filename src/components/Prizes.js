import React from 'react'
import styled from 'styled-components'



function Prizes() {

    const Container = styled.div`
        padding: 0 10vw;
        color: #707070;
        margin: 5vh 0;

        h2{
            padding: 2vh 0;
            margin: 0;
        }
        p{
            margin: 0;
            padding: 0 0 5vh 0;
            text-align: left;
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
            
        }
    `

    const DetailedBreakdown = styled.div`

        div{
            background-color: whitesmoke;
            width: 100%;
            height: 400px;
            margin-bottom: 5vh;
        }
    `

    const MiscPrizes = styled.div`
        background-color: lightgray;
        height: 100px;
        margin-bottom: 5vh;
    `

    return (
        <>
        <Container id="prizes">
            <h2>Prizes</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <PrizeMoney>
            <p>Total prize money of</p>
            <h1>Rs.12,000+</h1>
            </PrizeMoney>
            <PrizeMoney>
            <p>And swags worth</p>
            <h1>Rs.5000+</h1>
            </PrizeMoney>
            <DetailedBreakdown>
                <h3>Detailed Breakdown</h3>
                <div></div>
                <div></div>
                <div></div>
            </DetailedBreakdown>
            <MiscPrizes>Misc Prize 1</MiscPrizes>
            <MiscPrizes>Misc Prize 2</MiscPrizes>
        </Container>

        </>
    )
}

export default Prizes
