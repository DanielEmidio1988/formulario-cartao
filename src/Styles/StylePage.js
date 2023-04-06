import styled from "styled-components";
import bgMainDesktop from "../Assets/bg-main-desktop.png"
import bgMainMobileTablet from "../Assets/bg-main-mobile.png"

export const StyleMain = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 18px;

    @media screen and (max-device-width: 800px){
        flex-direction: column;
    }

`

export const StyleSectionCards = styled.section`
    width: 30%;
    height: 100%;
    background-image: url(${bgMainDesktop});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top center;
    background-color: hsl(278, 68%, 11%);

    @media screen and (min-device-width: 500px) and (max-device-width: 800px){
        background-image: url(${bgMainMobileTablet});
        width: 100%;
        height: 34%;
        display: flex;
        flex-direction: column-reverse;
    }

    @media screen  and (max-device-width: 500px){
        background-image: url(${bgMainMobileTablet});
        width: 100%;
        height: 34%;
        display: flex;
        flex-direction: column-reverse;
    }
`

export const StyleSectionForms = styled.section`
    background-color: hsl(0, 0%, 100%);
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-device-width: 500px) and (max-device-width: 800px) {
        width: 100%;
        height: 66%;
    }

    @media screen and (max-device-width: 500px) {
        width: 100%;
        height: 66%;
    }
`