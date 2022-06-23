import styled from 'styled-components';

const ProductContainer = styled.div`
    display: flex;
    margin: 100px;

    .gallery {
        display: flex;
        flex-direction: column;
        gap: 2em;
        
        .gallery__img-wrapper {
            width: 80px;
            height: 80px;
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
`

export default ProductContainer;