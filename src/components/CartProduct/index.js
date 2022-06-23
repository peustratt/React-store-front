import { Component } from "react";
import Div from './style'
import Attribute from "../Attribute";

class CartProduct extends Component {

    render() {
        const product = this.props.product;
        const price = product.prices.find(price => price.currency.label === this.props.currentCurrency.label)
        const attributesEl = product.attributes.map((attribute,index) => { 
            return <Attribute key={index} attribute={attribute}/> 
        })

        return (
            <Div>
                <div className="header">
                    <span>{product.name}</span>
                </div>
                {attributesEl}
            </Div>
        )
    }
}

export default CartProduct;