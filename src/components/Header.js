import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import logo from './images/logo-white.png';
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
        background-color: #B0D182;
        display: flex;
        justify-content: space-between;
    `

    const Logo = styled.img`
            height: 10vh;
            padding: 1vh;
        
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
            color: #2c2c2c;
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
            <Logo src={logo} alt={"logo"} />
            { width > 1200 ?
                <NavBox>
                <ul>
                <Link to="about" smooth={true}>
                    <li>
                        <p>About</p>
                    </li>
                </Link>
                <Link to="prizes" smooth={true}>
                    <li>
                        <p>Prizes</p>
                    </li>
                </Link>
                <Link to="themes" smooth={true}>
                    <li>
                        <p>Themes</p>
                    </li>
                </Link>
                <Link to="schedule" smooth={true}>
                    <li>
                        <p>Schedule</p>
                    </li>
                </Link>
                <Link to="partners" smooth={true}>
                    <li>
                        <p>Partners</p>
                    </li>
                </Link>
                <Link to="faqs" smooth={true}>
                    <li>
                        <p>FAQ's</p>
                    </li>
                </Link>
                <Link to="register" smooth={true}>
                    <li>
                        <p>Register</p>
                    </li>
                </Link>
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
