import styled from "styled-components";

export const StyleDivForm = styled.div`
    width: 36%;
    min-width: 360px;
    display: flex;
    flex-direction: column;

    .sucessForm{
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1{
            font-size: 28px;
            margin-bottom: 12px;
            font-weight: 400;
            color: hsl(278, 68%, 11%);
        }

        img{
            width: 68px;
            margin-bottom: 20px;
        }

        p{
            font-size: 14px;
            color: hsl(279, 6%, 55%);
        }
    }

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
        box-shadow: 0 0 0 1px hsl(249, 99%, 64%), 0 0 0 2px hsl(278, 94%, 30%);
        border: none;
        outline: none;
        border-radius: 8px;
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
        border: none;
    }

    button:hover{
        cursor: pointer;
    }

    @media screen and (min-device-width: 500px) and (max-device-width: 800px){
        width: 96%;
        height: 70%;

        .sucessForm{
            height: 40vh;
                
            h1{
                font-size: 52px;
                font-weight: 500;
                margin-bottom: 20px;
            }

            p{
                font-size: 32px;
            }

            img{
                width: 100px;
                margin-bottom: 36px;
            }
        }

        p{
            font-size: 18px;
        }

        .errorMessage{
        font-size: 14px;
        margin-bottom: 22px;
        }

        input{
            height: 50px;
            font-size: 24px;
            padding-left: 2vw;
        }

        button{
            height: 8vh;
            border-radius: 16px;
            font-size: 28px;
            font-weight: 300;
        }
    }

    @media screen and (max-device-width: 500px){
        width: 96%;
        height: 100%;
        justify-content: center;
          
        .sucessForm{
            height: 40vh;
                
            h1{
                font-size: 72px;
                font-weight: 500;
                margin-bottom: 20px;
            }

            p{
                font-size: 52px;
            }

            img{
                width: 20%;
                margin-bottom: 36px;
            }
        }

        p{
            font-size: 28px;
        }

        .errorMessage{
            font-size: 20px;
            margin-bottom: 22px;
        }

        input{
            height: 6vh;
            font-size: 28px;
        }
     
        button{
            height: 8vh;
            border-radius: 16px;
            font-size: 44px;
            font-weight: 300;
        }
    }

`