import { Component } from "react";
import { Ul, Modal } from "./style";

class Currencies extends Component {
    render() {
        const optionsEL = this.props.currencies.map((currency, index) => {
            return <div
                key={index}
                onClick={this.props.handleCurrencyDropdown}>
                {`${currency.symbol} ${currency.label}`}
            </div>
        })

        return (
            <Ul onClick={this.props.handleCurrency}>
                {optionsEL}
            </Ul>
        )
    }
}

export default Currencies;