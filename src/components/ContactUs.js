import React from 'react'
import styled from 'styled-components'

function ContactUs() {

    const Container = styled.div`
        background-color: #14B1B2;
        padding: 10px 10vw;
        color: #2C2C2C;
        margin: 5vh 0 0 0;

        h1{
            margin: 0;
        }

        a{
            /* color: #2C2C2C; */
            cursor: pointer;
        }
        span{
            font-weight: bold;
        }

        @media (min-width: 1200px){
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.4em;
            text-align: left;
            padding: 40px 10vw;

            h1{
                width: 17%;
                text-align: right;
                padding: 0 50px;
            }
            p{
                margin: 0;
            }

        }

        `

    return (
        <Container id="contactus">
            <h1>Contact Us</h1>
            <div>
                <p>Email us your queries at: <a href="mailto: hacksus21@gmail.com">hacksus21@gmail.com</a></p><br/>
                <span>Event Co-ordinators:</span>
                <p>Abhijith Das - <a href="tel: +917306066845">+91 73060 66845</a></p>
                <p>Sonia George - <a href="tel: +919061737731">+91 90617 37731</a></p>
            </div>
        </Container>
    )
}

export default ContactUs
