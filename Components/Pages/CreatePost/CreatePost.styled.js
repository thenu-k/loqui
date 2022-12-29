import styled from "styled-components";

export const CreatePostContainer = styled.section`
    width: 100%; min-height: calc( 100vh - 60px);
    background-color: #F5F5F5;
    flex-direction: column;
    justify-content: flex-start;
    & .createPost.inner{
        width: 80%;
        max-width: 1500px;
        margin: 40px 0;
        display: flex; justify-content: center;
        & form{
            width: 100%;
            display: flex; flex-direction: column; align-items: center;
            background-color: white;
            border-radius: 5px;
            border: 1px solid #d7d7d7;
            padding: 40px 0;
            & input:focus{
                outline: 0;
            }
            & .inpElement{
                width: 90%;
                & input{
                    width: 100%;
                    padding: 10px 20px;
                    box-sizing: border-box;
                }
                &.titleSection input{
                    border-top: 2px solid  #d7d7d7;
                    font-size: 3em; font-weight: 400;
                }
                &.com1 input{
                    font-size: 1.2em;
                }
                &.aboutSection{
                    padding-bottom: 20px;
                    border-bottom: 2px solid #d7d7d7;
                }
            }
            & .contentSection{
                width: 90%;
                margin-top:20px;
                border: 2px solid #d7d7d7;
                border-radius: 5px;
                margin-bottom: 40px;
            }
            & .formControls{
                width: 90%;
                & button{
                    padding: 15px 30px;
                    background-color: black; color: white;
                    border-radius: 5px;
                    font-weight: 500;
                    font-size: 1em;
                    &:hover{
                        opacity: 0.9;
                        cursor: pointer;
                    }
                }
                & .errorMessage{
                    width: fit-content;
                    background-color: red;
                    font-weight: 500;
                    padding: 10px 20px;
                    border-radius: 5px;
                    color: white;
                    margin: 20px 0;
                    margin-top: 0;
                    font-size: .8em;
                    &.displayOff{
                        display: none;
                    }
                }
            }
        }
    }

    @media all and (max-width: 1000px){
        & .titleSection input{
            font-size: 2em !important;
        }
        & .com1 input, textarea{
            font-size: 1em !important;
        }
    }
    @media all and (max-width: 500px){
        & .titleSection input{
            font-size: 1.5em !important;
        }
        & .createPost.inner{
            margin-top: 30px;
            width: 90%;
        }
    }
`