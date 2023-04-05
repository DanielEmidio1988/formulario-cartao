import { useState } from "react";
import { GlobalStyled } from "./GlobalStyle";
import FrontCard from "./Components/Card/FrontCard";
import BackCard from "./Components/Card/BackCard";
import { StyleMain, StyleSectionCards, StyleSectionForms, StyleDivForm } from "./Styles/StylePage";

function App() {
  const [accountClient, setAccountClient] = useState({name:"",numbercard:"",expdatemm:"",expdateyy:"",cvc:""})
  const [validateName, setValidateName] = useState(true)
  const [validateCardNumber, setValidateCardNumber] = useState(true)
  const [validateMMYY, setValidateMMYY] = useState(true)
  const [validateCVC, setValidateCVC] = useState(true)
  const [errorMessageCardNumber, setErrorMessageErrorCardNumber] = useState('')
  const [errorMessageMMYY, setErrorMessageMMYY] = useState('')
  const [errorMessageValidateCVC, setErrorMessageValidateCVC] = useState('')


  //Função para formatar o numero do cartão
  function formatCardNumber(number) {
    // Daniel: Remove todos os espaços do número do cartão
    const cleanNumber = number.replace(/\s+/g, '');

    // Daniel: Adiciona um espaço a cada 4 caracteres
    const formattedNumber = cleanNumber.replace(/(\d{4})/g, '$1 ');

    // Daniel: Retorna o número formatado
    return formattedNumber;
  }

  const validateForm = () => {
    let isValid = true;
    if (!accountClient.name.trim()) {
      document.getElementsByName('name')[0].style.borderColor = 'hsl(0, 100%, 66%)';
      setValidateName(false);
      isValid = false;
    } else {
      document.getElementsByName('name')[0].style.borderColor = 'initial';
      setValidateName(true);
    }
    const cardNumber = accountClient.numbercard.replace(/\s+/g, '');
    if (!/^\d{16}$/.test(cardNumber)) {
      document.getElementsByName('numbercard')[0].style.borderColor = 'hsl(0, 100%, 66%)';
      setValidateCardNumber(false);
      accountClient.numbercard === '' ? setErrorMessageErrorCardNumber(`Can't be blank`) : setErrorMessageErrorCardNumber(`Wrong format, numbers only`)
      isValid = false;
    } else {
      document.getElementsByName('numbercard')[0].style.borderColor = 'initial';
      setValidateCardNumber(true);
    }
    if (!/^\d{2}$/.test(accountClient.expdatemm)) {
      document.getElementsByName('expdatemm')[0].style.borderColor = 'hsl(0, 100%, 66%)';
      setValidateMMYY(false);
      accountClient.expdatemm === '' ? setErrorMessageMMYY(`Can't be blank`) : setErrorMessageMMYY(`Wrong format, numbers only`)
      isValid = false;
    } else {
      document.getElementsByName('expdatemm')[0].style.borderColor = 'initial';
      setValidateMMYY(true);
    }
    if (!/^\d{2}$/.test(accountClient.expdateyy)) {
      document.getElementsByName('expdateyy')[0].style.borderColor = 'hsl(0, 100%, 66%)';
      setValidateMMYY(false);
      accountClient.expdateyy === '' ? setErrorMessageMMYY(`Can't be blank`) : setErrorMessageMMYY(`Wrong format, numbers only`)
      isValid = false;
    } else {
      document.getElementsByName('expdateyy')[0].style.borderColor = 'initial';
      setValidateMMYY(true);
    }
    if (!/^\d{3}$/.test(accountClient.cvc)) {
      document.getElementsByName('cvc')[0].style.borderColor = 'hsl(0, 100%, 66%)';
      setValidateCVC(false);
      accountClient.cvc === '' ? setErrorMessageValidateCVC(`Can't be blank`) : setErrorMessageErrorCardNumber(`Wrong format, numbers only`)
      isValid = false;
    } else {
      document.getElementsByName('cvc')[0].style.borderColor = 'initial';
      setValidateCVC(true);
    }
    return isValid;
  };

  const confirmCardClient = ()=>{
    const isValid = validateForm()

    if(isValid){
      //Avalnça para a próxima página
    }

  }
  
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
        setAccountClient({ ...accountClient, [event.target.name]: formattedNumber });
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
        setAccountClient({...accountClient,[event.target.name]:event.target.value})
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
          setAccountClient({...accountClient,[event.target.name]:event.target.value})
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
        setAccountClient({...accountClient,[event.target.name]:event.target.value})
        break;
      default:
        setAccountClient({...accountClient,[event.target.name]:event.target.value})
        break;
    }    
  }


  return (
    <>
    <GlobalStyled/>
      <StyleMain>

        <StyleSectionCards>
            <FrontCard
            accountClient={accountClient}/>
            <BackCard
            accountClient={accountClient}/>
        </StyleSectionCards>

        <StyleSectionForms>

          <StyleDivForm>
            <p>CARDHOLDER NAME</p>
            <input 
              onChange={onChangeAccountForm} 
              name="name" 
              value={accountClient.name} 
              placeholder="e.g. Jane Appleseed" 
              maxLength={33}/>
              {!validateName ? <p className="errorMessage">Can't be blank</p> : <p className="errorMessage"></p> }
            <p>CARD NUMBER</p>
            <input 
              onChange={onChangeAccountForm} 
              name="numbercard" 
              value={accountClient.numbercard} 
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
                            value={accountClient.expdatemm} 
                            placeholder="MM" 
                            maxLength={2}
                            pattern="[0-9]{2}"
                            />
                            
                          <input 
                            onChange={onChangeAccountForm} 
                            name="expdateyy" 
                            value={accountClient.expdateyy} 
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
                        value={accountClient.cvc} 
                        placeholder="e.g. 123" 
                        maxLength={3}
                        pattern="[0-9]{3}"/>
                        {!validateCVC ? <p className="errorMessage">{errorMessageValidateCVC}</p> : <p className="errorMessage"></p> }
                  </div>
            </div>

            <button onClick={()=>confirmCardClient()}>Confirm</button>

          </StyleDivForm>
          
        </StyleSectionForms>
      </StyleMain>
    </>
  );
}

export default App;
