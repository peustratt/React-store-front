import { Component } from "react";
import { Select, Modal} from "./style";

class Currency extends Component {
    state = {
        isOpen: false
    }

    handleIsOpen = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        const optionsEL = this.props.currencies.map((currency, index) => {
            return <option
                key={index}
                value={currency.label}>
                {currency.symbol} {this.state.isOpen ? currency.label : ""}
            </option>
        })
        return (
            <>
                <Select onChange={this.props.handleCurrency} onClick={this.handleIsOpen}>
                    {optionsEL}
                </Select>
                {this.state.isOpen && <Modal className="modal" onClick={this.handleIsOpen}/>}
            </>
        )
    }
}

export default Currency;