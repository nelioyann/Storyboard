/** 
 * Cluster components suits any groups of elements that difer in legth and are reliable to wrap.
 * Add role="list" and role="listitem" if applicable
 * Buttons that appear together at the end of forms are ideal candidates, as well as lists of tags, keywords, or other meta information
  */

import styled, { css } from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";

interface ClusterProps {
    align?: string;
    justify?: string;
    space?: SpacingEnum;
}

const Cluster = styled.div<ClusterProps>`
    > * {
    display: flex;
    flex-wrap: wrap;
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'flex-start'};
    gap: ${props => props.space || SpacingEnum.s1}
    }

`

export default Cluster;


