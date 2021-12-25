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
                    <p>Mobility Solutions</p>
                    {ansDropdown && qnid === 1 ? 
                    <>
                    <img onClick={() => handleClick(false,1)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,1)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 1 ? <AnsBox>
                        <p>Propose solutions that improve public transport and to reimagine the way we commute in our city.</p>
                        <p>Key Problem areas:</p>
                        <ul>
                            <li>Public Transport Service Improvement & Monitoring- Tech Driven Solution to improve public transport ridership</li>
                            <li>Public Transport route rationalisation - Solutions can range from ideas relating to tools for systematic data collection/data analysis mechanism/rationalisation concepts which covers factors like supply and demand, trip frequency, boarding and alighting locations, crowd factor in buses.</li>
                            <li>Equity and Inclusivity in public transit - Tech and data driven solutions that will promote equity in mobility for differently abled, women and children, young and old, rich and poor.</li>
                            <li>Multi modal, sustainable transport modes- Digital and data powered solutions to identify/promote muti modal sustainable methods for pedestrians, cyclists, para transit modes</li>
                            </ul>
                    </AnsBox> : null}

                <QnBox>
                    <p>Public Health</p>
                    {ansDropdown && qnid === 2 ? 
                    <>
                    <img onClick={() => handleClick(false,2)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,2)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 2 ? <AnsBox>
                        <p>Propose solutions to provide improved health care by increasing the coverage, quality, and efficiency of public healthcare.</p>
                        <p>Key Problem areas:</p>
                        <ul>
                            <li>Easier and Faster Healthcare access for Elderly - Innovative Solutions for providing easy access to regular care.</li>
                            <li>Integration of telehealth into existing and new practice models</li>
                            </ul>
                    </AnsBox> : null}

                <QnBox>
                    <p>Public Safety</p>
                    {ansDropdown && qnid === 3 ? 
                    <>
                    <img onClick={() => handleClick(false,3)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,3)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 3 ? <AnsBox>
                        <p>Propose solutions that will ensure the safety and security in the city.</p>
                        <p>Key Problem areas:</p>
                        <ul>
                            <li>Advanced analytics of CCTV feeds to get insights of crime areas, identify probable cause for repeated crimes in an area.</li>
                            <li>Heat Map of Accident spots, Low lit areas</li>
                            <li>Tracking using wearables, GPS and emergency reporting solutions</li>
                            </ul>
                    </AnsBox> : null}

                <QnBox>
                    <p>Parking Optimisation</p>
                    {ansDropdown && qnid === 4 ? 
                    <>
                    <img onClick={() => handleClick(false,4)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,4)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 4 ? <AnsBox>
                        <p>Propose solutions that will solving parking hassles in the city</p>
                        <p>Key Problem areas:</p>
                        <ul>
                            <li>Crowdsourced parking spaces - Digital and data driven parking space identification by crowd sourcing information on parking availability</li>
                            <li>Managing Parking Space availability and allocation - Tech based solutions which could allow prepaid parking system.</li>
                            <li>Automatic man less collection system in parking areas</li>
                            </ul>
                    </AnsBox> : null}

                    <QnBox>
                    <p>FinTech for smart cities</p>
                    {ansDropdown && qnid === 6 ? 
                    <>
                    <img onClick={() => handleClick(false,6)} src={close} alt={"close icon"} />
                    </>
                    :
                    <img onClick={() => handleClick(true,6)} src={plus} alt={"plus icon"} />
                    }     
                </QnBox>
                {ansDropdown && qnid === 6 ? <AnsBox>
                        <p>Propose solutions to improve digital payments for public services</p>
                        <p>Key Problem areas:</p>
                        <ul><li>Contactless payments in public city facilities</li></ul>
                      
                    </AnsBox> : null}
        </Container>
    )
}

export default PrblmStatements
