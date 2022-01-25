/** 
 * Stack components for vertically aligned elements
  */
import styled, { css } from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";

interface StackProps {
    recursive?: boolean;
    space?: SpacingEnum;
    splitAfter?: number;
}

const Stack = styled.div<StackProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > *{
        margin-top: 0;
        margin-bottom: 0;
    }
    :only-child{
        height: 100%;
    }
    ${({ recursive }) =>
        Boolean(recursive)
            ? ""
            : ">"
    }
    * + * {
        margin-top: ${props => props.space || SpacingEnum.s1};
    }
    
    ${({splitAfter}) => 
        Boolean(splitAfter) && css`
            & > :nth-child(${splitAfter}){
                margin-bottom: auto;
            }
        `
        }
`

export default Stack;

