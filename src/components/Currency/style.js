import styled from 'styled-components';

const Select = styled.select`
    visibility: hidden;
    background: red;
    text-align: right;
    > option {
        visibility: visible;
    }
`

const Modal = styled.div`
    position: fixed;
    inset: 0;
    z-index: 2;
`

export {Select, Modal};