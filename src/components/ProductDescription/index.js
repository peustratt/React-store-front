import { Component } from "react";
import { client } from '../../config/client-graphql';
import { gql } from '@apollo/client';

import { PRODUCT_QUERY } from '../../config/queries'



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
        }).then(res => this.setState({product: res.data.product}))
    }

    render() {
        console.log('product Description props: ', this.props)
        return (
            <div><p>{this.state.product.name}</p></div>
        )
    }
}

export default ProductDescription;