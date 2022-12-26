import styled from "styled-components";
import {GLOBAL_SETTINGS} from '../../../../frontend.config'

export const SideSectionContainer = styled.div`
    width: auto;
    border: 0 !important;
    & .inner.sideMenu{
        width: 350px;
        margin-left: 25px;
        min-height: 100px;
        border-radius: 5px;
        display: flex; flex-direction: column; align-items: center;
        border-radius: 5px;
        background-color: white;
        border: 1px solid #d7d7d7;
        & .bannerImage{
            width: 100%; height: 200px;
            background-image: url('/banner.jpg'); background-position: center;
            background-size: cover; background-repeat: no-repeat;
            border-radius: 5px 5px 0 0;
            position: relative;
            & .profileImage{
                background-color: white;
                border-radius: 5px;
                height: 125px; width: 125px;
                background-image: url('/profileImage.jpg'); background-position: center;
                background-size: cover; background-repeat: no-repeat;
                border: 2px solid #d7d7d7;
            }
        }
        & .intro{
            width: 100%; 
            padding: 20px 0;
            display: flex; flex-direction: column; align-items: center;
            & p{
                width: 90%;
                text-align: left;
            }
            & span{
                width: 90%;
                display: flex; justify-content: flex-start;
                margin-top: 20px; font-size: 01em; font-weight: 500;
            }
        }
    }
    & .createPost.outer{
        width: 350px;
        margin: 25px 0;
        margin-left: 25px;
        background-color: transparent;
        border-radius: 5px;
        & button{
            width: 100%;
            background-color: inherit;
            background-color: transparent;
            border-radius: 5px;
            & span{
                font-weight: 500;
                width: 100%;
                display: inline-block; 
                padding: 25px 0;
                background-color: black;
                color: white;
                border-radius: 5px;
            }
            & span:hover{
                    cursor: pointer;
                    opacity: 0.8;
            }
        }
    }
`