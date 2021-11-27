import React,{ useState } from 'react'
import styled from 'styled-components'
import plus from './images/plus.png';
import close from './images/close.png'

function FAQs() {

    const Container = styled.div`
        padding: 0 10vw;
        color: #707070;
        margin: 5vh 0;

        h1{
            padding: 3vh 0;
            margin: 0;
        }
    `
    const QnBox = styled.div`
        height: 80px;
        background-color: lightgray;
        margin-bottom: 3vh;
        position: relative;
        
        p{
            margin: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.1em;
        }

        img{
            height: 40px;
            padding: 20px;
            float: right;
        }
    `
    const AnsBox = styled.div`
        height: 80px;
        color: white;
        background-color: gray;
        position: relative;
        margin: -3vh 0 3vh 0;
        
        p{
            margin: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.1em;
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
            <QnBox>
                <p>Question-1</p>
                {ansDropdown && qnid === 1 ? 
                <>
                <img onClick={() => handleClick(false,1)} src={close} alt={"close icon"} />
                </>
                :
                <img onClick={() => handleClick(true,1)} src={plus} alt={"plus icon"} />
                }     
            </QnBox>
            {ansDropdown && qnid ===1 ? <AnsBox><p>Answer-1</p></AnsBox> : null}
            <QnBox>
                <p>Question-2</p>
                {ansDropdown && qnid === 2 ? 
                <>
                <img onClick={() => handleClick(false,2)} src={close} alt={"close icon"} />
                </>
                :
                <img onClick={() => handleClick(true,2)} src={plus} alt={"plus icon"} />
                }     
            </QnBox>
            {ansDropdown && qnid === 2 ? <AnsBox><p>Answer-2</p></AnsBox> : null}
            <QnBox>
                <p>Question-3</p>
                {ansDropdown && qnid === 3 ? 
                <>
                <img onClick={() => handleClick(false,3)} src={close} alt={"close icon"} />
                </>
                :
                <img onClick={() => handleClick(true,3)} src={plus} alt={"plus icon"} />
                }     
            </QnBox>
            {ansDropdown && qnid === 3 ? <AnsBox><p>Answer-3</p></AnsBox> : null}
            <p>Read the code of conduct <a href="www.google.com">here</a></p>
        </Container>
    )
}

export default FAQs
