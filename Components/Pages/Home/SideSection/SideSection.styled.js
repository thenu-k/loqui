import styled from "styled-components";
import {GLOBAL_SETTINGS} from '../../../../frontend.config'

export const SideSectionContainer = styled.div`
    width: 30%;
    min-width: 250px;
    max-width: 300px;
    border: 0 !important;
    & .inner.sideMenu{
        width: 100%;
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
                display: none;
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
            border-radius: 0 0 5px 5px;
            background-color: white;  color: black;
            & p{
                width: 85%;
                font-size: 1em; font-weight: 400;
                text-align: left;
                line-height: 1.5;
            }
            & span{
                width: 85%;
                display: flex; justify-content: flex-start;
                margin-top: 20px; font-size: 01em; 
                color: black;
            }
        }
    }
    & .createPost.outer{
        width: 100%;
        margin: 25px 0;
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