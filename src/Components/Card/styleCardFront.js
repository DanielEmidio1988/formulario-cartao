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
    left: 36%;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        border: 1px solid red;
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

    @media screen and (max-device-width: 500px){
        width: 80%;
        height: 100%;
        position: fixed;
        top: 28%;
        left: 4%;

        div:first-child{
            img{
                margin-top: 100px;
                width: 20%;
            }
        }

        div:nth-child(2){
            h1{
                font-size: 2.8vh;
            }
        }
    
        div:last-child{
            p{
                font-size: 1.6vh;
            }
        }
    }
`
