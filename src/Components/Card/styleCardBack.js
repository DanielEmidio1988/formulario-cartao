import styled from "styled-components";
import bgCardBack from "../../Assets/bg-card-back.png"

export const StyleCard = styled.div` 
    width: 380px;
    height: 216px;
    border-radius: 8px;
    background-image: url(${bgCardBack});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top center;
    background-color: hsl(270, 3%, 87%);
    // bac
    position: relative;
    // top: 20%;
    // left: 60%;
    top: 8%;
    left: 60%;
    box-shadow: 8px 8px 16px hsl(270, 3%, 87%);

    div{
        width: 100%;
        height: 100%;

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
        width: 72%;
        height: 24vh;
        position: fixed;
        top: 2%;
        left: 18%;
        z-index: 1;

        div{

            p{   
                margin-top: 10.5vh;
                margin-left: 54vw;
                font-size: 3vw;
            }
        }

    }
`
