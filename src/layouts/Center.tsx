import styled from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";

/**
 * @param intrinsic Center child elements based on their content width
 * @param gutters The minimum space on either side of the content
 * @param andText center the text
 */
interface CenterProps{
    max?: string;
    andText?: boolean;
    gutters?: string;
    intrinsic?: boolean;

}
const Center = styled.div<CenterProps>`
    box-sizing: content-box;
    max-width: ${props => props.max || "var(--measure)"};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${SpacingEnum.s1};
    padding-right: ${SpacingEnum.s1};

    ${props => props.intrinsic ? `
    align-items: center;
    display: flex;
    flex-direction: column;`
    : ''}
    ${({ gutters }) => gutters ? `
    padding-left: ${gutters};
    padding-right: ${gutters};`
    : ''}
    ${props => props.andText ? `text-align: center;` : ''}
`

export default Center;