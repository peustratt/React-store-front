import { Component } from "react";

import { AttributesContainer, ValueContainer } from "./style";

class Attribute extends Component {
    render() {
        const { attributeId, itemId } = this.props.selectedAttributes?.find((attribute) => attribute.attributeId === this.props.attribute.id)
        console.log('currentItem', itemId)
        
        const El = this.props.attribute.items.map(item =>
            <ValueContainer isSelected={itemId === item.id}
                onClick={() => this.props.handleSelectAttr(this.props.attribute.id, item.id)}
                key={item.id}
                className={`${this.props.attribute.type}`}
                type={this.props.attribute.type}
                value={item.value}>
                {this.props.attribute.type === 'text' ? item.value : ''}
            </ValueContainer>);

        return (
            <AttributesContainer type={this.props.attribute?.type}>
                <p className="attribute-title">{this.props.attribute.name}:</p>
                <div className="attribute-values">{El}</div>
            </AttributesContainer>
        )
    }
}

export default Attribute;