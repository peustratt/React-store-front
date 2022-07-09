import styled from 'styled-components'

const AttributesContainer = styled.div`
    display: grid;
    gap: .4em;
    color: black;
    .attribute-title {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: ${props => props.isOverlay ? '400' : '600'};
        font-size: ${props => props.isOverlay ? '14px' : ''};
        text-transform: ${props => props.isOverlay ? 'capitalize' : 'uppercase'};
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
        padding: 0 15px;
        display: flex; 
        justify-content: center;
        align-items: center;
        width: ${props => props.isOverlay ? '24px' : '63px'};
        height: ${props => props.isOverlay ? '24px' : '45px'};
        border: 1px solid ${props => props.theme.colors.mainDark};
        outline-offset: 1px;
        background: ${props => props.type === 'text' ? props.theme.colors.white : props.value};
        filter: ${props => props.type === 'text' && props.isSelected ? 'invert(100%)' : 'invert(0%)'};
        color: ${props => props.theme.colors.mainDark};
        font-size: ${props => props.isOverlay ? '12px' : '16px'};
        font-weight: 600;
        cursor: default;

        &.swatch {
            padding: 0;
            width: ${props => props.isOverlay ? '16px' : '32px'};
            height: ${props => props.isOverlay ? '16px' : '32px'};
            outline: 2px solid ${props => props.isSelected ? props.theme.colors.mainGreen : 'transparent'};
        }
`
export { AttributesContainer, ValueContainer };