import styled from "styled-components";

export const ContentContainer = styled.div`
    width: 100%;
    & .content.inner{
        width: 70%;
        display: flex;
        flex-direction: column;
        & .meta{
            width: 100%;
            display: flex; flex-direction: column; 
            margin-bottom: 60px;
            & h1{
                font-weight: 400;
                margin-bottom: 20px;
                -webkit-hyphens: auto;
                -moz-hyphens: auto;
                -ms-hyphens: auto;
                hyphens: auto;
            }
            & span{
                width: fit-content;
                padding: 5px 10px; 
                background-color: black; color: white;
                border-radius: 5px;
            }
        }
        & .image{
            width: 100%; height:clamp(300px,35vw,600px); background-color: #c4c4c4;
            min-width: 400px;
            margin-bottom: 60px;
            border-radius: 5px;
            background-position: center; background-size: cover;
            background-repeat: no-repeat;
        }
        & .text{
            width: 100%;
            margin-bottom: 60px;
            text-align: left;
            & *{line-height: 2}
            /* word-break: break-all; */
            & p{
                /* font-size: 1.2em; */
                -webkit-hyphens: auto;
                -moz-hyphens: auto;
                -ms-hyphens: auto;
                hyphens: auto;
            }
        }
    }
    @media all and (min-width: 1000px){
        & .content.inner .text p{
            font-size: 1.2em;
        }
        & .content.inner h1{
            font-size: 3em;
        }
    }
    @media all and (max-width: 1000px){
        & .content.inner{
            width: 100%;
            & h1{
                font-size: 2em;
            }
        }
    }
    @media all and (max-width: 500px){
        & .content.inner .text{
            font-size: 1em; /* why is this not working???*/
        }
        & .content.inner .image{
            min-width: unset;
            height: 70vw;
            margin-bottom: 30px;
        }
        &  .content.inner .meta{
            margin-bottom: 30px;
            & h1{
                font-size: 1.5em;
            }
            & span{
                font-size: 0.8em;
            }
        }
    }
`