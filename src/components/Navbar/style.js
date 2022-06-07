import styled from 'styled-components';

const Navbar = styled.nav`
    padding: 0 100px;
    height: 80px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    > ul {
        display: flex;
        list-style: none;
        gap: 1em;
        height: 100%;
        align-items: center;

        > li {
            position: relative;
            display: flex;
            align-items: center;
            height: 100%;
            width: 100px;
            justify-content: center;
            font-size: inherit;
            text-transform: uppercase;
            transition: 120ms ease-in-out;
            
            > span {
                display: none;
                position: absolute;
                height: 2px;
                background: #5ECE7B;
                bottom: 0;
                width: 100%;
                border-radius: 4px;
                transition: 120ms ease-in-out;
            } 
        }

        > li.selected {
            color: #5ECE7B;
            > span {
                display: block;

            }
        }
    }
`

export default Navbar;