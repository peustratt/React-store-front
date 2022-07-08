import { createGlobalStyle, ThemeProvider } from "styled-components"

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
const theme = {
    colors: {
        mainDark: '#1D1F22',
        mainGreen: '#5ECE7B',
        white: '#fff',
        lightGray: '#8D8F9A',
        modalBg: '#393748'

    }
}
export { GlobalStyle, ThemeProvider, theme };