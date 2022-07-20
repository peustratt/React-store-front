import styled from 'styled-components';

const HomeContainer = styled.div`
        ${props => props.theme.padding}
    .products-container {
        display: flex;
        flex-wrap: wrap;
        gap: 2.5em;
        margin-top: 3em;
    }

    h2 {
        text-transform: capitalize;
        color: ${props => props.theme.colors.mainDark};
        font-size: 42px;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        margin-top: 1.5em;
    }
`
export default HomeContainer;
