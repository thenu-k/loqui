import styled from "styled-components";

export const LoadingContainer = styled.div`
    width: 90%;
    display: flex; flex-direction: column; align-items: flex-start;
    padding: 20px 0;

    & .bar{
        width: 100%; height: 150px; 
        border-radius: 5px; background-color: #d7d7d7;
        &.small{
            margin-top: 20px;
            width: 90%; height: 100px;
        }
        animation-name: colorBounce; animation-duration: 1s; animation-timing-function: ease-in-out;
        animation-iteration-count: infinite; animation-direction: alternate; 
        @keyframes colorBounce {
            from{
                background-color: #dddddd;
            }
            to{
                background-color: #c4c4c4;
            }
        }   
    }   
`