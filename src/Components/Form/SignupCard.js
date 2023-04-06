import { StyleDivForm } from "./styleForm"
import { useState } from "react"

function SignupCard(props){
    const [validateName, setValidateName] = useState(true) //Daniel: variavel para validar o nome do usuário
    const [validateCardNumber, setValidateCardNumber] = useState(true) //Daniel: variavel para validar o número do cartão
    const [validateMMYY, setValidateMMYY] = useState(true) //Daniel: variavel para validar Mês e Ano do cartão
    const [validateCVC, setValidateCVC] = useState(true) //Daniel: variavel para validar o CVC do cartão
    const [errorMessageCardNumber, setErrorMessageErrorCardNumber] = useState('') //Daniel: variavel para mensagem de erro dos dados do cartão
    const [errorMessageMMYY, setErrorMessageMMYY] = useState('') //Daniel: variavel para mensagem de erro dos dados de Mês e Ano do cartão 
    const [errorMessageValidateCVC, setErrorMessageValidateCVC] = useState('') //Daniel: variavel para mensagem de erro do CVC do cartão
  
  
    //Função para formatar o numero do cartão
    function formatCardNumber(number) {
      // Daniel: Remove todos os espaços do número do cartão
      const cleanNumber = number.replace(/\s+/g, '');
  
      // Daniel: Adiciona um espaço a cada 4 caracteres
      const formattedNumber = cleanNumber.replace(/(\d{4})/g, '$1 ');
  
      // Daniel: Retorna o número formatado
      return formattedNumber;
    }
  
    //Daniel: variavel para callback para validar os dados inseridos no formulário antes de enviar, respeitando as regras de negócio
    const validateForm = () => {
      let isValid = true;
      if (!props.accountClient.name.trim()) {
        document.getElementsByName('name')[0].style.borderColor = 'hsl(0, 100%, 66%)';
        setValidateName(false);
        isValid = false;
      } else {
        document.getElementsByName('name')[0].style.borderColor = 'initial';
        setValidateName(true);
      }
      const cardNumber = props.accountClient.numbercard.replace(/\s+/g, '');
      if (!/^\d{16}$/.test(cardNumber)) {
        document.getElementsByName('numbercard')[0].style.borderColor = 'hsl(0, 100%, 66%)';
        setValidateCardNumber(false);
        props.accountClient.numbercard === '' ? setErrorMessageErrorCardNumber(`Can't be blank`) : setErrorMessageErrorCardNumber(`Wrong format, numbers only`)
        isValid = false;
      } else {
        document.getElementsByName('numbercard')[0].style.borderColor = 'initial';
        setValidateCardNumber(true);
      }
      if (!/^\d{2}$/.test(props.accountClient.expdatemm)) {
        document.getElementsByName('expdatemm')[0].style.borderColor = 'hsl(0, 100%, 66%)';
        setValidateMMYY(false);
        props.accountClient.expdatemm === '' ? setErrorMessageMMYY(`Can't be blank`) : setErrorMessageMMYY(`Wrong format, numbers only`)
        isValid = false;
      } else {
        document.getElementsByName('expdatemm')[0].style.borderColor = 'initial';
        setValidateMMYY(true);
      }
      if (!/^\d{2}$/.test(props.accountClient.expdateyy)) {
        document.getElementsByName('expdateyy')[0].style.borderColor = 'hsl(0, 100%, 66%)';
        setValidateMMYY(false);
        props.accountClient.expdateyy === '' ? setErrorMessageMMYY(`Can't be blank`) : setErrorMessageMMYY(`Wrong format, numbers only`)
        isValid = false;
      } else {
        document.getElementsByName('expdateyy')[0].style.borderColor = 'initial';
        setValidateMMYY(true);
      }
      if (!/^\d{3}$/.test(props.accountClient.cvc)) {
        document.getElementsByName('cvc')[0].style.borderColor = 'hsl(0, 100%, 66%)';
        setValidateCVC(false);
        props.accountClient.cvc === '' ? setErrorMessageValidateCVC(`Can't be blank`) : setErrorMessageErrorCardNumber(`Wrong format, numbers only`)
        isValid = false;
      } else {
        document.getElementsByName('cvc')[0].style.borderColor = 'initial';
        setValidateCVC(true);
      }
      return isValid;
    };
  
    //Daniel: callback para o cadastro do cartão 
    const confirmCardClient = ()=>{
      const isValid = validateForm() //esta variável chama a função validateForm, caso dê valor false, ele não confirma o cadastro do cartão
  
      if(isValid){
        props.setFormCard(2)
      }
  
    }
    
    //Daniel: dentro da onChange inclui algumas condições para que os inputs e mensagens de erro sejam atualizados no ato, caso o usuário digite um valor inválido
    const onChangeAccountForm=(event)=>{
      switch (event.target.name) {
        case 'numbercard':
          const formattedNumber = formatCardNumber(event.target.value);   
          const cardNumber = event.target.value;    
          if(isNaN(cardNumber.replace(/\s+/g, ''))){
            setErrorMessageErrorCardNumber(`Wrong format, numbers only`)
            document.getElementsByName('numbercard')[0].style.borderColor = 'hsl(0, 100%, 66%)'
            setValidateCardNumber(false)
          }else{
            document.getElementsByName('numbercard')[0].style.borderColor = 'initial';
            
            setValidateCardNumber(true)
          }
          props.setAccountClient({ ...props.accountClient, [event.target.name]: formattedNumber });
        break;
        case 'expdatemm':  
          const dateMM = event.target.value;    
          if(isNaN(dateMM.replace(/\s+/g, ''))){
            setErrorMessageMMYY(`Wrong format, numbers only`)
            document.getElementsByName('expdatemm')[0].style.borderColor = 'hsl(0, 100%, 66%)'
            setValidateMMYY(false)
          }else{
            document.getElementsByName('expdatemm')[0].style.borderColor = 'initial';        
            setValidateMMYY(true)
          }
          props.setAccountClient({...props.accountClient,[event.target.name]:event.target.value})
        break;
        case 'expdateyy':
          const dateYY = event.target.value;    
          if(isNaN(dateYY.replace(/\s+/g, ''))){
            setErrorMessageMMYY(`Wrong format, numbers only`)
            document.getElementsByName('expdateyy')[0].style.borderColor = 'hsl(0, 100%, 66%)'
            setValidateMMYY(false)
          }else{
            document.getElementsByName('expdateyy')[0].style.borderColor = 'initial';      
              setValidateMMYY(true)
            }
            props.setAccountClient({...props.accountClient,[event.target.name]:event.target.value})
        break;
        case 'cvc':  
          const cvcNumber = event.target.value;    
          if(isNaN(cvcNumber.replace(/\s+/g, ''))){
            setErrorMessageValidateCVC(`Wrong format, numbers only`)
            document.getElementsByName('cvc')[0].style.borderColor = 'hsl(0, 100%, 66%)'
            setValidateCVC(false)
          }else{
            document.getElementsByName('cvc')[0].style.borderColor = 'initial';        
            setValidateCVC(true)
          }
          props.setAccountClient({...props.accountClient,[event.target.name]:event.target.value})
          break;
        default:
            props.setAccountClient({...props.accountClient,[event.target.name]:event.target.value})
          break;
      }    
    }

    return(
        <StyleDivForm>
        <p>CARDHOLDER NAME</p>
        <input 
          onChange={onChangeAccountForm} 
          name="name" 
          value={props.accountClient.name} 
          placeholder="e.g. Jane Appleseed" 
          maxLength={33}/>
          {!validateName ? <p className="errorMessage">Can't be blank</p> : <p className="errorMessage"></p> }
        <p>CARD NUMBER</p>
        <input 
          onChange={onChangeAccountForm} 
          name="numbercard" 
          value={props.accountClient.numbercard} 
          placeholder="e.g. 1234 5678 9123 0000"   
          />
          {!validateCardNumber ? <p className="errorMessage">{errorMessageCardNumber}</p> : <p className="errorMessage"></p> }

        <div className="form-box">
              <div className="form-date">
                  <p>EXP. DATE(MM/YY)</p>
                  <div>
                      <input 
                        onChange={onChangeAccountForm} 
                        name="expdatemm" 
                        value={props.accountClient.expdatemm} 
                        placeholder="MM" 
                        maxLength={2}
                        pattern="[0-9]{2}"
                        />
                        
                      <input 
                        onChange={onChangeAccountForm} 
                        name="expdateyy" 
                        value={props.accountClient.expdateyy} 
                        placeholder="YY" 
                        maxLength={2}
                        pattern="[0-9]{2}"
                        />
                  </div>
                  {!validateMMYY ? <p className="errorMessage">{errorMessageMMYY}</p> : <p className="errorMessage"></p> }
              </div>
              <div className="form-cvc">
                  <p>CVC</p>
                  <input 
                    onChange={onChangeAccountForm} 
                    name="cvc" 
                    value={props.accountClient.cvc} 
                    placeholder="e.g. 123" 
                    maxLength={3}
                    pattern="[0-9]{3}"/>
                    {!validateCVC ? <p className="errorMessage">{errorMessageValidateCVC}</p> : <p className="errorMessage"></p> }
              </div>
        </div>

        <button onClick={()=>confirmCardClient()}>Confirm</button>

        </StyleDivForm>
    )
}

export default SignupCard