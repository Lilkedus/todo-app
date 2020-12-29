import styled from "styled-components";
import lightBackground from "../assets/bg-desktop-light.jpg";
import darkBackground from "../assets/bg-desktop-dark.jpg";
import { useContext } from "react";
import { UIThemeContext } from '../context/UIThemeContext';


let UItheme = "light";

const BackgroundSection = styled.section`
      position: absolute;
      top: 0;
      left: 0;
      background: url(${UItheme === "light" ? lightBackground : darkBackground});
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 20rem;
      z-index: -1;
   `;

const Background = () => {
   const { theme, setTheme } = useContext(UIThemeContext);

   return <BackgroundSection />
}

export default Background;