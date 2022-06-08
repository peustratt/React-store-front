import styled from 'styled-components';

const Ul = styled.ul`
    position: relative;
    z-index: 2;
    text-align: right;
    width: 100%;

    > div {
        padding: .2em .4em .2em .3em;
        transition: 10ms ease-in;
        &:hover {
            background: #EEEEEE;
        }
    }
`

export default Ul;