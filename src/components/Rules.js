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

            li{
                font-size: 1.5em;
            }
        }
    `
    
    return (
        <Container>
            <h1>Code of Conduct</h1>
            <ol>
                {rules.map(({id,rule,link}) =>
                    <li id={id}>{rule}<a rel="noreferrer" target="_blank" href={link}>{link}</a> </li>
                )}
            </ol>
        </Container>
    )
}

export default Rules
