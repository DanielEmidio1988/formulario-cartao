import { StyleCard } from "./styleCardFront"
import CardLogo from "../../Assets/card-logo.svg"

function FrontCard (props){
    return(
        <StyleCard className="front-card">
            <div>
                <img src={CardLogo} alt="Card-logo"/>
            </div>
            <div>
                <h1>
                    {props.accountClient.numbercard === "" ? "0000 0000 0000 0000" : props.accountClient.numbercard}
                </h1>
            </div>
            <div>
                <p>
                    {props.accountClient.name === "" ? "JANE APPLESEED" : props.accountClient.name.toUpperCase()}
                </p>
                <p>
                    <span>
                        {props.accountClient.expdatemm === "" ? "00" : props.accountClient.expdatemm}
                    </span>
                    /
                    <span>
                        {props.accountClient.expdateyy === "" ? "00" : props.accountClient.expdateyy}
                    </span>
                
                </p>
            </div>           
        </StyleCard>
    )

}

export default FrontCard