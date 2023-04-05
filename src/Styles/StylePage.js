import styled from "styled-components";
import bgMainDesktop from "../Assets/bg-main-desktop.png"

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
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column-reverse;
    }

    @media screen  and (max-device-width: 500px){
        width: 100%;
        height: 50%;
        border: 2px solid red;
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
        width: 80%;
    }

    @media screen and (max-device-width: 500px) {
        width: 100%;
    }
`

export const StyleDivForm = styled.div`
    width: 36%;
    min-width: 360px;
    display: flex;
    flex-direction: column;

    p{
        font-size: 12px;
        margin-bottom: 10px;
    }
    
    .errorMessage{
        font-size: 8px;
        color: hsl(0, 100%, 66%);
        margin-bottom: 16px;
    }

    input{
        border-radius: 8px;
        border: 1px solid hsl(270, 3%, 87%);
        width: 100%;
        height: 40px;
        padding-left: 1vw;
        font-weight: 600;
    }

    input:hover{
        cursor: pointer;
    }

    input:focus{
        border-width: 1px;
        border-style: solid;
        border-image: linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1;
        outline: none;
        border-radius: 8px;
    }

    input:invalid{
        border: 1px solid red;
    }

    .form-box{
        width: 100%;
        display: flex;
        justify-content: space-between;

        .form-date{
            width: 48%;
    
            div{
                display: flex;
                justify-content: space-between;
                align-items: center;
    
                input{
                    width: 46%;
                }
            }
        }
    
        .form-cvc{
            width: 48%;
        }

    }

    button{
        color: hsl(0, 0%, 100%);
        background-color: hsl(278, 68%, 11%);
        border-radius: 8px;
        height: 40px;
        width: 100%;
        font-size: 14px;
    }

    button:hover{
        cursor: pointer;
    }

    @media screen and (min-device-width: 500px) and (max-device-width: 800px){
        width: 96%;
        height: 70%;
    }

    @media screen and (max-device-width: 500px){
        width: 96%;
        height: 100%;
        justify-content: center;
          

        p{
            font-size: 28px;
        }

        input{
            height: 6vh;
            font-size: 28px;
            margin-bottom: 4vh;
        }
     
        button{
            height: 6vh;
            font-size: 28px;
        }

    }
`