import { StyleCard } from "./styleCardBack"

function BackCard (props){
    return(
        <StyleCard className="back-card">
            <div>
                <p>
                    {props.accountClient.cvc === "" ? "000" : props.accountClient.cvc}
                </p>

            </div>     
        </StyleCard>
    )

}

export default BackCard