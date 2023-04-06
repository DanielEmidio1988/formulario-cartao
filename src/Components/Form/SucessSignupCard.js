import { StyleDivForm } from "./styleForm"
import sucessImg from "../../Assets/icon-complete.svg"

function SucessSignupCard(props){

    //Daniel: esta função zera todo os valores de AccountClient e retorna o formulário de cartão vazio
    const returnSignupCard = ()=>{
        props.setAccountClient({name:"",numbercard:"",expdatemm:"",expdateyy:"",cvc:""})
        props.setFormCard(1)
    }

    return(
    <StyleDivForm>
        <div className="sucessForm">
            <img src={sucessImg} alt="sucess-icon"/>
            <h1>THANK YOU!</h1>
            <p>We've added your card details</p>
        </div>

        <button onClick={()=>returnSignupCard()}>Continue</button>

    </StyleDivForm>
    )
}

export default SucessSignupCard