import styled from "styled-components";
import { GLOBAL_SETTINGS } from "../../../frontend.config";

export const HomeContainer = styled.section`
    width: 100%; 
    display: flex; flex-direction: row; justify-content: center;
    background-color: ${`${GLOBAL_SETTINGS.COLOR_SCHEMES.LIGHT[2]}`};
    min-height: calc(100vh - 50px);

    & .inner.homePage{
        margin-top: 40px;
        width: 80%;
        min-width: 900px;
        max-width: 1000px;
        display: flex; flex-direction: row; justify-content: space-between;
        position: relative;
        #sideSection{
            height: 100%;
            .createPost.outer{
                position: sticky;
                top: 80px;
            }
        }
    }

    @media all and (max-width: 1000px){
        & .inner.homePage{
            width: 80%;
            min-width: unset;
            #sideSection{
                display: none;
            }
        }
    }
    @media all and (max-width: 500px){
        & .inner.homePage{
            width: 90%;
            min-width: unset;
            #sideSection{
                display: none;
            }
        }
    }
`