import { Component } from "react";

import { AttributesContainer, ValueContainer } from "./style";

class Attribute extends Component {
    render() {
        console.log('attribute: ', this.props.attribute)
        const El = this.props.attribute.items.map((item, index) => <ValueContainer className={`${this.props.attribute.type}`} type={this.props.attribute.type} value={item.value}>{this.props.attribute.type === 'text' ? item.displayValue : ''}</ValueContainer>)
        // const attributeItems = this.props.attribute.items(item => {
        //     console.log('item: ', item)
        //     return <div>{item.displayValue}</div>
        // })

        return (
            <AttributesContainer type={this.props.attribute?.type}>
                <p className="attribute-title">{this.props.attribute.name}:</p>
                <div className="attribute-values">{El}</div>
            </AttributesContainer>
        )
    }
}

export default Attribute;