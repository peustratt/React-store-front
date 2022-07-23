import styled from 'styled-components';

const Ul = styled.ul`
    position: relative;
    z-index: 4;
    text-align: right;
    width: 100%;

    > li {
        list-style: none;
        padding: .2em .8em .2em .3em;
        transition: 10ms ease-in;
        &:hover {
            background: #EEEEEE;
        }
    }
`

export default Ul;