import styled from "styled-components";
import { ColorEnum, SpacingEnum } from "../theme/globalStyles";

interface BoxProps{
    borderWidth?: string;
    padding?: string;
    invert?: boolean;
}

const Box = styled.div<BoxProps>`
    
    background-color: inherit;
    border: ${props => props.borderWidth} solid;
    border-width: ${props => props.borderWidth};
    display: block;
    padding: ${props => props.padding || SpacingEnum.s1};

    ${props => props.invert ? `
    background-color: ${ColorEnum.LIGHT};
    filter: invert(100%);` : ''}

    /* ↓ For high contrast mode */
    outline: var(--border-thin) solid transparent;
    outline-offset: calc(var(--border-thin) * -1);
`

export default Box;