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
    position: relative;
    top: 20%;
    left: 60%;
    animation: fromCenter .7s .3s backwards;

    div{
        width: 100%;
        height: 100%;

        p{
            padding: 96px 0 0 300px;
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

    @media screen and (min-device-width: 500px) and (max-device-width: 800px){    
        top: 2%;
        left: 36%;
        position: fixed;
        z-index: 1;
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
                padding-top: 170px;
                padding-left: 58vw;
                font-size: 3vw;               
            }
        }
    }

    @keyframes fromCenter{
        from{
            opacity: 0;
            transform: scale(0.5)
            
        }
    
        to{
            opacity: 1;
            transform: scale(1.0)      
        }
    }
`
