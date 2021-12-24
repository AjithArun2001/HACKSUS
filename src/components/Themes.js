import React from 'react'
import styled from 'styled-components'


function Themes() {




    const TracksBox = styled.div`
        background-color: #245757;
        width: 100vw;
        padding: 40px 0;

        h1{
            font-size: 2.5em;
            color: white;
        }

        div{
            width: 200px;
            margin: 20px auto;
            background-color: #14B1B2;
            color: #222222;
            padding: 20px;
            font-weight: bold;
            font-size: 1.5em;
        }
    `



    return (
        <>
 
        <TracksBox id="tracks">
            <h1>Tracks</h1>
            <div>Hardware</div>
            <div>Software</div>
        </TracksBox>
        </>
    )
}

export default Themes
