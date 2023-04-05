import { useState } from "react";
import { GlobalStyled } from "./GlobalStyle";
import FrontCard from "./Components/Card/FrontCard";
import BackCard from "./Components/Card/BackCard";
import { StyleMain, StyleSectionCards, StyleSectionForms, StyleDivForm } from "./Styles/StylePage";

function App() {
  const [accountClient, setAccountClient] = useState({name:"",numbercard:"",expdatemm:"",expdateyy:"",cvc:""})

  const onChangeAccountForm=(event)=>{
    setAccountClient({...accountClient,[event.target.name]:event.target.value})
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
            <input onChange={onChangeAccountForm} name="name" value={accountClient.name} placeholder="e.g. Jane Appleseed" maxLength={33}/>
            <p>CARD NUMBER</p>
            <input onChange={onChangeAccountForm} name="numbercard" value={accountClient.numbercard} placeholder="e.g. 1234 5678 9123 0000"/>

            <div className="form-box">
                  <div className="form-date">
                      <p>EXP. DATE(MM/YY)</p>
                      <div>
                          <input onChange={onChangeAccountForm} name="expdatemm" value={accountClient.expdatemm} placeholder="MM" maxLength={2}/>
                          <input onChange={onChangeAccountForm} name="expdateyy" value={accountClient.expdateyy} placeholder="YY" maxLength={2}/>
                      </div>
                  </div>
                  <div className="form-cvc">
                      <p>CVC</p>
                      <input onChange={onChangeAccountForm} name="cvc" value={accountClient.cvc} placeholder="e.g. 123" maxLength={3}/>
                  </div>
            </div>

            <button>Confirm</button>

          </StyleDivForm>
          
        </StyleSectionForms>
      </StyleMain>
    </>
  );
}

export default App;
