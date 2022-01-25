import styled from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";

interface BoxProps{
    borderWidth?: string;
    padding?: string;
}

const Box = styled.div<BoxProps>`
    
    background-color: inherit;
    border: ${props => props.borderWidth} solid;
    border-width: ${props => props.borderWidth};
    display: block;
    padding: ${props => props.padding || SpacingEnum.s1};


    /* ↓ For high contrast mode */
    outline: var(--border-thin) solid transparent;
    outline-offset: calc(var(--border-thin) * -1);
`

export default Box;