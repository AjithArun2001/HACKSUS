import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import hacksus from './images/hacksus.png';
import menu from './images/menu--icon.png';
import close from './images/close.png';
import MobileDropdown from './MobileDropdown';
import { Link } from 'react-scroll';



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


function Header() {

    const Container = styled.div`
        background-color: #222222;
        display: flex;
        justify-content: space-between;
        z-index: 1;
        position: relative;
    `

    const Logo = styled.img`
            height: 10vh;
            padding: 1vh;
            margin-top: -10px;
        
    `
    const DropdownIcon = styled.img`
        height: 6vh;
        padding: 3vh;
        float: right;
    `

    const NavBox = styled.div`
        
        width: 80%;
        margin: 0;


        ul{
            height: 100%;
            list-style: none;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0;
        }

        li{
            color: #F3FEFE;
            font-size: 1.2em;
            cursor: pointer;
        }
    `

    const [dropdown, setDropdown] = useState(false);

    const { height, width } = useWindowDimensions();

    
    console.log(height);
    
    return (
        <>
        <Container>
            <Logo src={hacksus} alt={"logo"} />
            { width > 1200 ?
                <NavBox>
                <ul>
                <Link to="about" smooth={true}>
                    <li>
                        <p>Overview</p>
                    </li>
                </Link>
                {/* <Link to="prizes" smooth={true}>
                    <li>
                        <p>Prizes</p>
                    </li>
                </Link> */}
                <Link to="themes" smooth={true}>
                    <li>
                        <p>Problem Statements</p>
                    </li>
                </Link>
                <Link to="tracks" smooth={true}>
                    <li>
                        <p>Tracks</p>
                    </li>
                </Link>
                <Link to="schedule" smooth={true}>
                    <li>
                        <p>Schedule</p>
                    </li>
                </Link>
                <Link to="rules" smooth={true}>
                    <li>
                        <p>Rules</p>
                    </li>
                </Link>
                <Link to="contactus" smooth={true}>
                    <li>
                        <p>Contact Us</p>
                    </li>
                </Link>
                {/* <Link to="register" smooth={true}>
                    <li>
                        <p>Register</p>
                    </li>
                </Link> */}
                </ul>
                </NavBox>
            :
            dropdown ? 
                <DropdownIcon onClick={()=> setDropdown(false)} src={close} alt={"menu icon"} /> 
                : 
                <DropdownIcon onClick={()=> setDropdown(true)} src={menu} alt={"menu icon"} />
                
            }
            
            
        </Container>
        {dropdown ? <MobileDropdown /> : null}
        </>
    )
}

export default Header
