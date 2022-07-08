import styled from 'styled-components';

const HomeContainer = styled.div`
    .products-container {
        padding: 0 100px;
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
        padding-left: 100px;
    }
`
export default HomeContainer;
