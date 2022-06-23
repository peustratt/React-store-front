import { Component } from "react";
import { client } from '../../config/client-graphql';
import { gql } from '@apollo/client';
import ProductContainer from './style';

import { PRODUCT_QUERY } from '../../config/queries';
import Attribute from "../Attribute";



class ProductDescription extends Component {
    state = {
        product: {
            attributes: []
        }
    }

    componentDidMount() {
        client.query({
            query: gql`${PRODUCT_QUERY}`,
            variables: {
                productId: this.props.match.params.productId
            }
        }).then(res => this.setState({ product: res.data.product, selectedImage: res.data.product.gallery[0] }))
    }

    render() {
        const attributesEl = this.state.product.attributes.map((attribute, index) => {
            return <Attribute key={index} attribute={attribute} />
        })

        const imgThumbnailsEl = this.state.product?.gallery?.map((img, index) => {
            return (
                <div className="gallery__img-wrapper" key={index} onClick={() => this.setState({ selectedImage: img })}>
                    <img src={img} alt="" />
                </div>
            )
        })

        return (
            <ProductContainer>
                <div className="gallery">
                    {imgThumbnailsEl}
                </div>
                <div className="img-wrapper">
                    <img src={this.state.selectedImage}></img>
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

                    </div>
                    <button>Add to cart</button>
                    <p>description</p>
                </div>
            </ProductContainer>

        )
    }
}

export default ProductDescription;