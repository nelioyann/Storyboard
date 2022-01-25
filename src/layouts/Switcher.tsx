import styled from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";
// Usecases: elements belonging to a continuum or steps in a tutorial
interface SwitcherProps{
    threshold?: string;
    space?: string;
    limit?: number;

}

const Switcher = styled.div<SwitcherProps>`
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.space || SpacingEnum.s1};

    > * {
        flex-grow: 1;
        flex-basis: calc((${props => props.threshold || "30rem"} - 100%) * 999 );
    }
    > :nth-last-child(n+${props => props.limit || 4 + 1}),
    > :nth-last-child(n+${props => props.limit || 4 + 1}) ~ * {
        flex-basis: 100%;
    }
`

export default Switcher;