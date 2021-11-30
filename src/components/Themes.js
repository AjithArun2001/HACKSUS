import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Theme from '../datas/Theme';


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }

function Themes() {

    const { height, width } = useWindowDimensions();

    console.log(height);

    const Container = styled.div`
        padding: 0 10vw;
        color: #2c2c2c;
        margin: 5vh 0;

        @media (min-width: 1200px){
            h1{
                font-size: 3.5em;
            }
        }


    `
    const ThemesBox = styled.div`

        color: #2c2c2c;

        h1{
            font-size: 2.5em;
        }

        div{
            display: flex;
            justify-content: space-between;
            background-color: #B0D182;
            margin-bottom: 20px;
            align-items: center;
            cursor: pointer;
        }

        span{
            font-size: 4.5em;
            font-weight: bold;
            padding: 10px 30px;
            color: #2C473E;
            width: 30%;
        }
        p{
            width: 70%;
            font-size: 1.5em;
            margin: 0;
            padding: 10px;
            text-align: left;
        }

        @media (min-width: 1200px){
            display: flex;
            flex-wrap: wrap;
            flex-basis: 30%;
            justify-content: center;

            div{
                margin: 20px;
                width: 30%;
            }


        }

    `
    const InfoDiv = styled.div`

        display: flex;
        justify-content: center;

        p{
            width: 100% !important;
            margin: 0;
            padding: 10px;
            text-align: left;

        }

    `

    const TracksBox = styled.div`
        background-color: #2C473E;
        width: 100vw;
        padding: 40px 0;

        h1{
            font-size: 2.5em;
            color: white;
        }

        div{
            width: 200px;
            margin: 20px auto;
            background-color: #B0D182;
            color: #2C473E;
            padding: 20px;
            font-weight: bold;
            font-size: 1.5em;
        }
    `

    const [cardFlip, setCardFlip] = useState([true,true,true,true,true,true,true,true,true,true]);

    const handleClick = (x,id) => {
        if(width <= 1200){
            const newArr = [...cardFlip];
            newArr[id-1] = x;
            setCardFlip(newArr);
        }
    }

    const handleHover = (x,id) => {
        if(width > 1200){
            const newArr = [...cardFlip];
            newArr[id-1] = x;
            setCardFlip(newArr);
        }

    }

    /* width <= 1200 ? onClick={() => handleClick(false, id)} : onHover={() => handleClick(false, id)} */

    return (
        <>
        <Container id="themes">
            <h1>Themes</h1>
            <ThemesBox>
                {Theme.map(({id,theme,info}) => 
                    cardFlip[id-1] ?
                        <div onClick={() => handleClick(false, id)} onMouseEnter={() => handleHover(false,id)} id={id}>
                            <span>{id}</span>
                            <p>{theme}</p>
                        </div>
                    :
                        <InfoDiv onClick={() => handleClick(true, id)} onMouseLeave={() => handleHover(true,id)}>
                            <p>{info}</p>
                        </InfoDiv>
                )}
            </ThemesBox>
        </Container>
        <TracksBox>
            <h1>Tracks</h1>
            <div>Hardware</div>
            <div>Software</div>
        </TracksBox>
        </>
    )
}

export default Themes
