import styled from "styled-components";
import {GLOBAL_SETTINGS} from '../../../../frontend.config'

export const PostListContainer = styled.div`
    width: 65%; height: fit-content;
    display: flex; flex-direction: column; align-items: center;
    flex-shrink: 1;

    & .postOuter{
        width: 100%;
        margin-bottom: 20px;
        border-radius: 5px;
        border: 1px solid ${`${GLOBAL_SETTINGS.COLOR_SCHEMES.LIGHT[3]}`};
        background-color: ${`${GLOBAL_SETTINGS.COLOR_SCHEMES.LIGHT[1]}`};

        &:hover{
            cursor: pointer; 
            background-color: #d2d2d2;
        }
        &.loading:hover{
            cursor: unset;
            background-color: white;
        }
    }

    @media all and (max-width: 1000px){
        width: 100%; flex-shrink: 0;
        & .postOuter:hover{
            background-color: white;
        }
        & .postOuter:active{
            background-color: #d2d2d2;
        }
    }
`