import styled from "styled-components";
import {GLOBAL_SETTINGS} from '../../../../frontend.config'

export const SideSectionContainer = styled.div`
    width: auto;
    position: sticky; top: 0;
    & .inner.sideMenu{
        width: 350px;
        margin-left: 25px;
        min-height: 100px;
        border-radius: 5px;

        & > *{
            border-radius: 5px;
            background-color: ${`${GLOBAL_SETTINGS.COLOR_SCHEMES.LIGHT[1]}}`};
            border: 1px solid ${`${GLOBAL_SETTINGS.COLOR_SCHEMES.LIGHT[3]}`};
        }

        & .intro{
            width: 100%; 

            & p{
                width: 95%; padding: 20px 0;
            }
        }
    }
`