import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: fit-content;
    gap: 40px;
    outline: black 2px solid;
    position: absolute;
    right: 100px;
    max-height: 80vh;
    overflow-y: scroll;
    z-index: 1;
`

export default Div;