import React,{ useState } from 'react'
import styled from 'styled-components'
import plus from './images/plus.png';
import close from './images/close.png'
import FAQ from '../datas/FAQ'

function FAQs() {

    const Container = styled.div`
        padding: 0 10vw;
        color: #2c2c2c;
        margin: 5vh 0;

        h1{
            padding: 3vh 0;
            margin: 0;
        }

        @media (min-width: 1200px){
            h1{
                font-size: 3.5em;
            }
        }
    `
    const QnBox = styled.div`
        background-color: #B0D182;
        margin-bottom: 3vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        
        p{
            margin: 0;
            font-size: 1.1em;
            padding: 10px;
            text-align: left;
        }

        img{
            height: 40px;
            padding: 20px;
        }

        @media (min-width: 1200px){
            width: 60%;
            margin: 0 auto 3vh auto;
            
            img{
                height: 20px;
            }
        }
    `
    const AnsBox = styled.div`
        margin: -3vh 0 3vh 0;
        display: flex;
        align-items: center;
        border: 3px solid #B0D182;
        text-align: left;
        
        p{
            margin: 0;
            font-size: 1.1em;
            padding: 10px;
            
        }

        @media (min-width: 1200px){
            box-sizing: border-box;
            width: 60%;
            margin: -3vh auto 3vh auto;

            
        }
    `

    const [ansDropdown, setAnsDropdown] = useState(false);
    const [qnid, setQnid] = useState(0);

    const handleClick = (x, id) => {
        setAnsDropdown(x);
        setQnid(id);    
    }

    return (
        <Container id="faqs">
            <h1>FAQ's</h1>
            {FAQ.map(({id, ques, ans}) => 
            <>
            <QnBox id={id}>
                    <p>{ques}</p>
                    {ansDropdown && qnid === id ? 
                    <>
                    <img onClick={() => handleClick(false,id)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,id)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === id ? <AnsBox id={id}><p>{ans}</p></AnsBox> : null}
            </>
            )}
        </Container>
    )
}

export default FAQs
