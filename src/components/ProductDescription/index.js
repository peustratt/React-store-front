import { Component } from "react";
import { client } from '../../config/client-graphql';
import { gql } from '@apollo/client';
import ProductContainer from './style';
import { connect } from 'react-redux';

import { PRODUCT_QUERY } from '../../config/queries';
import { addProduct } from '../../actions/cartActions'
import Attribute from "../Attribute";



class ProductDescription extends Component {
    state = {
        product: {
            attributes: []
        },
        selectedAttributes: []
    }

    handleAddProduct = () => {
        const product = this.state.product
        if (product.inStock){
            this.props.addProduct(
                {
                    name: product.name,
                    brand: product.brand,
                    id: product.id,
                    prices: product.prices,
                    attributes: product.attributes,
                    selectedAttributes: this.state.selectedAttributes,
                    gallery: product.gallery
    
                })
        }
    }

    componentDidMount() {
        client.query({
            query: gql`${PRODUCT_QUERY}`,
            variables: {
                productId: this.props.match.params.productId
            }
        }).then(res => {
            const selectedAttributes = res.data.product.attributes.map(attribute => ({ attributeId: attribute.id, itemId: attribute.items[0].id }))
            this.setState({
                product: res.data.product,
                selectedImage: res.data.product.gallery[0],
                selectedAttributes: selectedAttributes
            })
        })
    }

    handleSelectAttr = (attributeId, itemId) => {
        this.setState(prevState => ({ selectedAttributes: prevState.selectedAttributes.map(attribute => attribute.attributeId === attributeId ? { ...attribute, itemId: itemId } : attribute) }))
    }

    render() {
        console.log(this.state.product)
        const price = this.state.product.prices?.find(price => price.currency.label === this.props.currentCurrency.label)

        const attributesEl = this.state.product.attributes.map((attribute, index) => {
            return <Attribute key={index} attribute={attribute} handleSelectAttr={this.handleSelectAttr} selectedAttributes={this.state.selectedAttributes} />
        })

        const imgThumbnailsEl = this.state.product.gallery?.map((img, index) => {
            return (
                <div className="gallery__img-wrapper" key={index} onClick={() => this.setState({ selectedImage: img })}>
                    <img src={img} alt="" />
                </div>
            )
        })

        return (
            <ProductContainer inStock={this.state.product.inStock}>
                <div className="gallery">
                    {imgThumbnailsEl}
                </div>
                <div className="img-wrapper">
                    {!this.state.product.inStock && <span>Out of stock</span>}
                    <img src={this.state.selectedImage} alt=""></img>
                </div>
                <div className="description">
                    <div className="title">
                        <span className="brand">{this.state.product.brand}</span>
                        <span className="product-title">{this.state.product.name}</span>
                    </div>
                    <div className="attributes">
                        {attributesEl}
                    </div>
                    <div className="price">
                        <span className="price-title">Price:</span>
                        <span className="price-value">{price?.currency.symbol}{price?.amount}</span>
                    </div>
                    <button onClick={this.handleAddProduct}>Add to cart</button>
                    <div className="product-description" dangerouslySetInnerHTML={{__html: this.state.product.description}}></div>
                </div>
            </ProductContainer>

        )
    }
}

export default connect(null, { addProduct })(ProductDescription);