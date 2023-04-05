import styled from "styled-components";
import bgCardBack from "../../Assets/bg-card-back.png"

export const StyleCard = styled.div` 
    width: 380px;
    height: 216px;
    border-radius: 8px;
    background-image: url(${bgCardBack});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    // z-index: 0;
    top: 20%;
    left: 60%;

    div{
        width: 100%;
        height: 100%;
        border: 1px solid red;

        p{
            
            margin-top: 96px;
            margin-left: 300px;
            color: hsl(0, 0%, 100%);
            font-size: 14px;
            font-weight: 300;
        }
    }


    @media screen and (min-device-width: 1000px) and (max-device-width: 1200px){    
        top: 20%;
        left: 32%;
    }

    @media screen and (min-device-width: 800px) and (max-device-width: 1000px){    
        top: 20%;
        left: 4%;
    }


    @media screen and (max-device-width: 500px){
        width: 80%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 12%;
    }
`
