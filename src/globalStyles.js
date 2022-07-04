import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *,
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        overflow: ${props => props.isOverlay ? 'hidden' : ''};
    }
`

export default GlobalStyle;