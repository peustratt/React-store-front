import { Component } from "react";

import AttributesContainer from "./style";

class Attribute extends Component {
    render() {
        console.log('attribute: ', this.props.attribute)
        const El = this.props.attribute.items.map(item => item.displayValue)
        // const attributeItems = this.props.attribute.items(item => {
        //     console.log('item: ', item)
        //     return <div>{item.displayValue}</div>
        // })

        return (
            <AttributesContainer>
                {this.props.attribute.name}
                <span>{El}</span>
            </AttributesContainer>
        )
    }
}

export default Attribute;