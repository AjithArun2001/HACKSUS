import React from 'react'
import styled from 'styled-components'

function Register() {

    const Container = styled.div`
        padding: 0 10vw;
        color: #707070;
        margin: 5vh 0;

        h1{
            padding: 0;
            margin: 0;
        }
        iframe{
            margin-top: 5vh !important;
            width: 70% !important;
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
        <Container id="register">
            <h1>Participate</h1>
            <h1>&</h1>
            <h1>Create an Impact</h1>
            <div 
                class="apply-button" 
                data-hackathon-slug="YOUR-HACKATHON-SLUG" 
                data-button-theme="dark"
            ></div>
        </Container>
    )
}

export default Register
