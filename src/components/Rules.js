// import React from 'react'
// import styled from 'styled-components'
// import rules from '../datas/rules';

// function Rules() {

//     const Container = styled.div`
//         padding: 0 10vw;
//         color: #2c2c2c;
//          background-color: #245757;
//         margin: 5vh 0;

//         li{
//             padding: 10px 0;
//             text-align: left;
//         }

//         @media (min-width: 1200px){
//             width: 60%;
//             margin: 0 auto;

//             h1{
//                 font-size: 3.5em;
//             }

//             li{
//                 font-size: 1.5em;
//             }
//         }
//     `
    
//     return (
//         <Container id="rules">
//             <h1>Rules</h1>
//             <ol>
//                 {rules.map(({id,rule,link}) =>
//                     <li id={id}>{rule}<a rel="noreferrer" target="_blank" href={link}>{link}</a> </li>
//                 )}
//             </ol>
//         </Container>
//     )
// }

// export default Rules



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
            font-size: 1em;
        }
    `



    return (
        <>
 
        <TracksBox id="tracks">
            <h1>Rules</h1>
            <a href = "PDF.pdf" download >
            <div>Rules & Regulations

            </div>
            </a>
        </TracksBox>
        </>
    )
}

export default Themes
