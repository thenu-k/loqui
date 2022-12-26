import styled from "styled-components";
import {GLOBAL_SETTINGS} from '../../../frontend.config'

export const HeaderContainer = styled.header`
    width: 100%;
    color: black;
    height: 60px;
    border-bottom: 1px solid ${`${GLOBAL_SETTINGS.COLOR_SCHEMES.LIGHT[3]}`};
    background-color: white;
    position: fixed; top: 0; left: 0; z-index: 9999;
    & nav{
        display: flex; flex-direction: row;
        height: 100%;
        width: 80%;
        & h2{
            color: white;
            font-size: 1em; font-weight: 600;
            margin: 10px 0;
            background-color: black; padding: 10px;
            border-radius: 5px;
        }

        & ul{
            margin-left: auto;
            display: flex;
            flex-direction: row;
            height: 100%;

            & li{
                height: 100%;;

                & a{
                    display: flex; justify-content: center; align-items: center;
                    height: 100%; padding: 0 20px;
                    &:hover{
                        background-color: ${`${GLOBAL_SETTINGS.COLOR_SCHEMES.LIGHT[2]}`}
                    }
                }
            }
        }
    }
`