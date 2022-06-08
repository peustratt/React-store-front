import styled from 'styled-components';

const Navbar = styled.nav`
    position: relative;
    z-index: 30;
    display: flex;
    align-items: center;
    padding: 0 100px;
    height: 80px;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 16px;
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
            width: fit-content;
            padding: 0 1.4em;
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
                /* border-radius: 4px; */
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

    .container {
        position: relative;
        display: inline-block;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70px;
        
        .btns-wrapper {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }
        .dropdown {
            position: absolute;
            width: 100%;
        }
    }

    .modal {
        position: fixed;
        inset: 0;
        z-index: 1;
    }
`

export default Navbar;