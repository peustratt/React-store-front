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
        display: flex;
        align-items: center;
        gap: 1em;
        width: 100%;
    }
`
const ValueContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 63px;
        height: 45px;
        border: 1px solid black;
        background: ${props => props.type === 'text' ? 'transparent' : props.value};

        &.swatch {
            width: 32px;
            height: 32px;
        }
`
export {AttributesContainer, ValueContainer};