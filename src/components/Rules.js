import React from 'react'
import styled from 'styled-components'
import rules from '../datas/rules';

function Rules() {

    const Container = styled.div`
        padding: 0 10vw;
        color: #2c2c2c;
        margin: 5vh 0;

        li{
            padding: 10px 0;
            text-align: left;
        }

        @media (min-width: 1200px){
            width: 60%;
            margin: 0 auto;

            h1{
                font-size: 3.5em;
            }
        }
    `
    
    return (
        <Container>
            <h1>Rules</h1>
            <ul>
                {rules.map(({id,rule}) =>
                    <li id={id}>{rule}</li>
                )}
            </ul>
        </Container>
    )
}

export default Rules
