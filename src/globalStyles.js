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
        modalBg: '#393748',
        orange: '#FFC300'

    },
    padding: `padding: 0 calc((100vw - 1300px)/2);
    @media(max-width: 1500px) {
    padding: 0 100px;
    }
            `
}
export { GlobalStyle, ThemeProvider, theme };