import { HTMLAttributes } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
// import { ButtonProps } from "../components/Buttons/Button";


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;  
}
`
export default GlobalStyle;

export interface ColoredProps {
    color?: "primary" | "secondary" | "tertiary" | "medium" | "dark" | "light" | "warning" | "danger" ;
}


export const SmallParagraph = styled.p<ColoredProps>`
  font-size: 0.75rem;
  line-height: 150%;
  color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark-shade)`};
  /* --ionicon-stroke-width: 64px; */
  white-space: normal;
  font-weight: var(--font-bold);
`;
export const MediumParagraph = styled(SmallParagraph)`
  font-size: 0.875rem;
  font-weight: var(--font-semibold);
`;
export const LargeParagraph = styled(MediumParagraph)`
  font-size: 1rem;
  line-height: 162%;
  font-weight: initial;
`;

interface ParagraphProps extends ColoredProps{
    size: "small" | "default" | "large";
    isVisible?: boolean;
}

interface HeadingsProps extends HTMLAttributes<HTMLHeadingElement>{
    
}

export const Label = styled.p<ParagraphProps>`
    ${({ size }) =>
        size === "small" &&
        css`
            font-size: 0.875rem;
        `
    }
    ${({ size }) =>
        size === "default" &&
        css`
            font-size: 1rem;
        `
    }
    ${({ size }) =>
        size === "large" &&
        css`
            font-size: 1.125rem;
        `
    }
`
export const ButtonText = styled(Label)`
${({ isVisible }) =>
        Boolean(isVisible) === false &&
        css`
            visibility: hidden;
        `
    }
    font-weight: var(--font-bold);
`
export const MediumButton = styled(MediumParagraph)`
  font-size: 1rem;
  font-weight: var(--font-bold);
  line-height: 18px;
  `;
export const LargeButton = styled(MediumButton)`
  font-size: 1.125rem;
  min-width: 150px;
  font-weight: var(--font-bold);
  line-height: 122%;
`;



export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    /* flex-direction: column; */
`

export const HorizontalScroll = styled.div`
    overflow: auto;
    white-space: nowrap;
`


interface ModuleProps {
    unique?: boolean;
}

export const ModuleWrapper = styled.div<ModuleProps>`
    border: 2px solid var(--ion-color-medium);
    border-radius: 8px;
    width: ${props => props.unique ? "100%" : "90%"};
    margin: ${props => props.unique ? "auto" : "0 8px"};
    max-width: 500px;
    display: inline-block;
    cursor: pointer;
`

