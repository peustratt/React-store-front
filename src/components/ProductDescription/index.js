import { Component } from "react";
import { client } from '../../config/client-graphql';
import { gql } from '@apollo/client';
import ProductContainer from './style';

import { PRODUCT_QUERY } from '../../config/queries';



class ProductDescription extends Component {
    state = {
        product: {}
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
        const imgThumbnailsEl = this.state.product?.gallery?.map((img) => {
            return (
                <div className="gallery__img-wrapper" onClick={() => this.setState({ selectedImage: img })}>
                    <img src={img} />
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
                <div className="description"></div>
            </ProductContainer>

        )
    }
}

export default ProductDescription;