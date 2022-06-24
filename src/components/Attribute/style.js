import styled from 'styled-components'

const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .4em;
    color: black;
    .attribute-title {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 800;
        text-transform: uppercase;
    }
    .attribute-values {
        font-size: 18px;
        font-family: 'Source Sans Pro', sans-serif;
        display: flex;
        align-items: center;
        gap: ${props => props.type === 'text' ? '12px' : '10px'};
        width: 100%;
    }
`
const ValueContainer = styled.div`

        display: flex;
        justify-content: center;
        align-items: center;
        width: 63px;
        height: 45px;
        border: 1px solid #1D1F22;
        outline-offset: 1px;
        background: ${props => props.type === 'text' ? '#fff' : props.value};
        filter: ${props => props.type === 'text' && props.isSelected ? 'invert(100%)' : 'invert(0%)'};
        color: #1D1F22;
        font-size: 16px;
        font-weight: 600;
        

        &.swatch {
            width: 32px;
            height: 32px;
            outline: 2px solid ${props => props.isSelected ? '#5ECE7B' : 'transparent'};
        }
`
export {AttributesContainer, ValueContainer};