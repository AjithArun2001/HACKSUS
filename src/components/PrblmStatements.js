import React,{ useState } from 'react'
import styled from 'styled-components'
import plus from './images/plus.png';
import close from './images/close.png'

function PrblmStatements() {

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
                font-size: 3.3em;
            }
        }
    `
    const QnBox = styled.div`
        background-color: #14B1B2;
        color: #F3FEFE;
        margin-bottom: 3vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        
        p{
            margin: 0;
            font-size: 1.1em;
            padding: 10px;
            text-align: left;
            font-weight: 500;
        }

        img{
            height: 40px;
            padding: 20px;
        }

        @media (min-width: 1200px){
            width: 55%;
            margin: 0 auto 3vh auto;

            p{
                font-size: 1.4em;
                padding-left: 40px;
            }
            
            img{
                height: 50px;
            }
        }
    `
    const AnsBox = styled.div`
        margin: -3vh 0 3vh 0;
        align-items: center;
        border: 3px solid #14B1B2;
        text-align: left;
        
        p{
            margin: 0;
            font-size: 1.1em;
            padding: 10px;
            
        }

        @media (min-width: 1200px){
            box-sizing: border-box;
            width: 55%;
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
        <Container id="themes">
            <h1>Problem Statements</h1>

            <QnBox>
                    <p>Sewage Management Problem</p>
                    {ansDropdown && qnid === 1 ? 
                    <>
                    <img onClick={() => handleClick(false,1)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,1)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 1 ? <AnsBox>
                        <p>Sewage waste management facilities that already exist find it hard to cater to the needs of society and the growing population. Improper treatment of sewage leads to many prevalent health issues in the economy. Propose a system that could aid in effectively managing sewage waste and bring an end to the prevalent diseases.</p>
                    </AnsBox> : null}

                <QnBox>
                    <p>Stray Dogs</p>
                    {ansDropdown && qnid === 2 ? 
                    <>
                    <img onClick={() => handleClick(false,2)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,2)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 2 ? <AnsBox>
                        <p>The increasing number of stray dogs in the country is posing a threat to the citizens of society. People are concerned about their safety and are on the lookout for a solution to put an end to this menace. Propose an innovative solution by means of technology that can solve this issue in a way that is ethical and moral.</p>
                    </AnsBox> : null}

                <QnBox>
                    <p>Urban agriculture</p>
                    {ansDropdown && qnid === 3 ? 
                    <>
                    <img onClick={() => handleClick(false,3)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,3)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 3 ? <AnsBox>
                        <p>People living in urban areas find it hard to get vegetables and fruits free from pesticides. If they are given the means to cultivate their own vegetables and fruits, the prevalent health problems will come to an end. Propose a system that can help citizens in urban areas to achieve this.</p>
                    </AnsBox> : null}

                <QnBox>
                    <p>Waste management</p>
                    {ansDropdown && qnid === 4 ? 
                    <>
                    <img onClick={() => handleClick(false,4)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,4)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 4 ? <AnsBox>
                        <p>The disposal of waste in urban areas is often hard as people don’t really have a place to discard their waste nor do they have the means to do so. Design a system that can help in urban waste management and the achievement of a more efficient system of waste segregation and treatment.</p>
                    </AnsBox> : null}

                    <QnBox>
                    <p>Clean water management</p>
                    {ansDropdown && qnid === 5 ? 
                    <>
                    <img onClick={() => handleClick(false,5)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,5)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 5 ? <AnsBox>
                        <p>Many deadly diseases arise from polluted and untreated drinking water. Treating water with chlorine doesn’t always seem to be a viable and apt option. Develop a mechanism to measure the quality of water and monitor clean water distribution from various reservoirs in multiple cities in order to provide clean and safe water to the citizens.</p>
                      
                    </AnsBox> : null}


                    <QnBox>
                    <p>Potholes</p>
                    {ansDropdown && qnid === 6 ? 
                    <>
                    <img onClick={() => handleClick(false,6)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,6)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 6 ? <AnsBox>
                        <p>Potholes are a threat to every day road users which is a cause for increased traffic congestion and sometimes even loss of lives. Develop a system that can help in pothole detection which can be installed in vehicles and can act as a warning system to detect upcoming potholes and also alerts the relevant authorities about damaged roads from time to time. Innovative solutions to prevent the formation of potholes are also invited.</p>
                      
                    </AnsBox> : null}

                    <QnBox>
                    <p>Open innovation</p>
                    {ansDropdown && qnid === 7 ? 
                    <>
                    <img onClick={() => handleClick(false,7)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,7)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 7 ? <AnsBox>
                        <p>Projects that can reduce or eliminate the problems that come with urban development and to improve the standard of urban life.</p>
                      
                    </AnsBox> : null}
        </Container>
    )
}

export default PrblmStatements
