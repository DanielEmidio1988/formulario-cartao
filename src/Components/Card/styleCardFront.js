import styled from "styled-components";
import bgCardFront from "../../Assets/bg-card-front.png"

export const StyleCard = styled.div`      
    width: 380px;
    height: 210px;
    border-radius: 8px;
    background-image: url(${bgCardFront});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    top: 16%;
    left: 44%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fromCenter.7s .3s backwards;

    div{
        width: 90%;
        height: 33.33%;
        color: hsl(0, 0%, 100%);
        font-weight: 300;
    }

    div:first-child{
        img{
            margin-top:20px;
            width: 66px;
        }
    }

    div:nth-child(2){
        display: flex;
        align-items: flex-end;

        h1{
            font-weight: 300;
        }
    }

    div:last-child{
        display:flex;
        justify-content: space-between;
        align-items: center;

        p{
            font-size: 14px;
        }
    }

    @media screen and (min-device-width: 1000px) and (max-device-width: 1200px){    
        top: 16%;
        left: 16%;
    }

    @media screen and (min-device-width: 800px) and (max-device-width: 1000px){    
        top: 16%;
        left: 4%;
    }

    @media screen and (min-device-width: 500px) and (max-device-width: 800px){    
        top: 16%;
        left: 24%;
        position: fixed;
        z-index: 2;
    }

    @media screen and (max-device-width: 500px){
        width: 72%;
        height: 24vh;
        position: fixed;
        top: 16%;
        left: 4%;
        z-index: 2;

        div:first-child{
            img{
                margin-top: 4vh;
                width: 20%;
            }
        }

        div:nth-child(2){
            h1{
                font-size: 5vw;
            }
        }
    
        div:last-child{
            p{
                font-size: 2vw;
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
