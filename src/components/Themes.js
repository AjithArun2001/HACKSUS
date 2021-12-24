import React,{useState, useEffect} from 'react'
import styled from 'styled-components'



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
            font-size: 1.5em;
        }
    `

    const [cardFlip, setCardFlip] = useState([true,true,true,true,true,true,true,true,true,true]);

    /* const handleClick = (x,id) => {
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

    } */

    /* width <= 1200 ? onClick={() => handleClick(false, id)} : onHover={() => handleClick(false, id)} */

    return (
        <>
        {/* <Container id="themes">
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
        </Container> */}
        <TracksBox id="tracks">
            <h1>Tracks</h1>
            <div>Hardware</div>
            <div>Software</div>
        </TracksBox>
        </>
    )
}

export default Themes
