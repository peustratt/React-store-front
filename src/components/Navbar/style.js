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
        margin-left: auto;
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
            text-align: center;
            button {
                display: flex;
                align-items: center;
                gap: .4em;
                font-size: 18px;
                font-weight: 500;
                background: transparent;              
                border: 0;
                font-family: inherit;

                .hat-wrapper {
                    transition: 120ms cubic-bezier(0.075, 0.82, 0.165, 1);
                    transform-origin: center;
                    width: 11px;
                    &.is-open {
                        transform: rotate(-180deg) translate(-1px, 2px);
                    }
                }
                    .hat {
                        margin-right: 10px;
                        position: relative;
                        content: "";
                        display: block;
                        width: 6px;
                        height: 1.5px;
                        background: black;
                        transform-origin: right;
                        transform: rotate(135deg) translate(2px, -2px);
                        border-radius: 2px;
                        
    
                        &::before {
                            position: absolute;
                            content: "";
                            width: 1.5px;
                            height: inherit;
                            background: black;
                            top: 0px;
                            right: 0px;
                            transform-origin: right;
                            transform: rotate(90deg) translateX(50%);
                            border-radius: 2px 0 0 0;
                        }

                        &::after{
                            position: absolute;
                            content: "";
                            width: 100%;
                            height: inherit;
                            background: black;
                            left: 100%;
                            transform-origin: left;
                            transform: rotate(90deg);
                            border-radius: inherit;
                        }
                    }
                }
            }
        }
        .dropdown {
            position: absolute;
            width: 100%;
            box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
        }

    .modal {
        position: fixed;
        inset: 0;
        z-index: 1;
    }
`

export default Navbar;