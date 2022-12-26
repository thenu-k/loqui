import styled from "styled-components";

export const SideMenuContainer = styled.div`
    height: 100vh; min-height: 400px;
    width: 100vw;
    position: fixed; top: 0; left: 100vw;
    &.visible{
        left: 0;
    }
    transition: all 0.2s ease-out;
    background-color: transparent;
    display: flex; flex-direction: row; 
    & .contentSection{
        width: 300px; height: 100%;
        background-color: white;
        display: flex; flex-direction: column; align-items: center;
        border-left: 1px solid #d7d7d7;
        & .buttonContainer{
            width: 100%;
            display: flex; justify-content: flex-start;
            margin-top: 20px;
            & button{
                height: 30px;
                margin-left: 10%;
                background-color: white;
                border: 1px solid #d7d7d7;
                border-radius: 5px;
                & img{
                    height: 100%;
                }
                &:hover{
                    cursor: pointer;
                }
            }
        }
        & #sideSection{
            width: 80%;
            margin-top: 40px;
        }
    }
    & .clearSection{
        height: 100%;
        background-color: transparent;
        flex-grow: 1;
    }
    
`