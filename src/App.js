import { useState } from "react";
import { GlobalStyled } from "./GlobalStyle";
import FrontCard from "./Components/Card/FrontCard";
import BackCard from "./Components/Card/BackCard";
import { StyleMain, StyleSectionCards, StyleSectionForms } from "./Styles/StylePage";
import SignupCard from "./Components/Form/SignupCard";
import SucessSignupCard from "./Components/Form/SucessSignupCard";

function App() {
  //Daniel: variável de objeto para armazenar todas as informações do formulário de cadastro
  const [accountClient, setAccountClient] = useState({name:"",numbercard:"",expdatemm:"",expdateyy:"",cvc:""})
  //Daniel: variável responsável por mudar o componente após o cadastro do cartão
  const [formCard, setFormCard] = useState(1)

  //Daniel: apesar de existirem apenas 2 componentes, criei um switch-case pensando em caso de expansão da solução
  function browserForm(){
    switch (formCard) {
      case 1:
        return <SignupCard 
        formCard={formCard}
        setFormCard={setFormCard}
        accountClient={accountClient}
        setAccountClient={setAccountClient}/>
      case 2:
        return <SucessSignupCard
          formCard={formCard}
          setFormCard={setFormCard}
          accountClient={accountClient}
          setAccountClient={setAccountClient}/>
      default:
        return <SignupCard 
        formCard={formCard}
        setFormCard={setFormCard}
        accountClient={accountClient}
        setAccountClient={setAccountClient}/>
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
          {browserForm()}       
        </StyleSectionForms>

      </StyleMain>
    </>
  );
}

export default App;
