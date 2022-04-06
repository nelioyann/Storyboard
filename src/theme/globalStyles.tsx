import { HTMLAttributes } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
// import { ButtonProps } from "../components/Buttons/Button";

export enum SpacingEnum {
    "measure" = "var(--measure)",
    "borderThin" = "var(--border-thin)",
    "subtleCurve" = "0.5em", //TODO: Add it everywhere
    "bigCurve" = "1em", //TODO: Add it everywhere
    "borderThicc" = "var(--border-thicc)", //TODO: Add it everywhere
    "s-5" = "var(--s-5)",
    "s-4" = "var(--s-4)",
    "s-3" = "var(--s-3)",
    "s-2" = "var(--s-2)",
    "s-1" = "var(--s-1)",
    "s0" = "var(--s0)",
    "s1" = "var(--s1)",
    "s2" = "var(--s2)",
    "s3" = "var(--s3)",
    "s4" = "var(--s4)",
    "s5" = "var(--s5)",
    "3xs" = "var(--space-3xs)",
    "2xs" = "var(--space-2xs)",
    "xs" = "var(--space-xs)",
    "s" = "var(--space-s)",
    "m" = "var(--space-m)",
    "l" = "var(--space-l)",
    "xl" = "var(--space-xl)",
    "2xl" = "var(--space-2xl)",
    "3xl" = "var(--space-3xl)", //TODO: Add one up pairs
}

export enum FontSizeEnum {
    "step--1" = "var(--step--1)",
    "step-0" = "var(--step-0)",
    "step-1" = "var(--step-1)",
    "step-2" = "var(--step-2)",
    "step-3" = "var(--step-3)",
    "step-4" = "var(--step-4)",
    "step-5" = "var(--step-5)",
    "step-6" = "var(--step-6)",
}
export enum FontWeightEnum {
    "BOLD" = "var(--font-bold)",
    "REGULAR" = "var(--font-regular)",
    "LIGHT" = "var(--font-light)",
}

export enum ShadowEnum {
    "none" = "none",
    "focus" = "0 0 0 1px var(--highlight-background, --ion-color-primary), 0 0 0 5px rgba(var(--ion-color-primary-rgb),.3)"
}
export enum ColorVariablesEnum {
    "PRIMARY" = "var(--ion-color-primary)",
    "SECONDARY" = "var(--ion-color-secondary)",
    "TERTIARY" = "var(--ion-color-tertiary)",
    "LIGHT" = "var(--ion-color-light)",
    "DARK" = "var(--ion-color-dark)",
    "MEDIUM" = "var(--ion-color-medium)",
    "SUCCESS" = "var(--ion-color-success)",
    "DANGER" = "var(--ion-color-danger)",
    "WARNING" = "var(--ion-color-warning)",
}
export enum ColorLabelsEnum {
    "PRIMARY" = "primary",
    "SECONDARY" = "secondary",
    "TERTIARY" = "tertiary",
    "LIGHT" = "light",
    "DARK" = "dark",
    "MEDIUM" = "medium",
    "SUCCESS" = "success",
    "DANGER" = "danger",
    "WARNING" = "warning",

}

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;  
}
body{
    font-size: ${FontSizeEnum["step-0"]};
}
`
export default GlobalStyle;

export interface ColoredProps {
    color?: ColorLabelsEnum;
}


export const SmallParagraph = styled.p<ColoredProps>`
  font-size: ${FontSizeEnum["step-1"]};
  line-height: 1.5;
  color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark-shade)`};
  /* --ionicon-stroke-width: 64px; */
  /* white-space: normal; */
  font-weight: ${FontWeightEnum.BOLD};
`;
export const MediumParagraph = styled(SmallParagraph)`
  font-size: ${FontSizeEnum["step-0"]};
  font-weight: var(--font-semibold);
`;
export const LargeParagraph = styled(MediumParagraph)`
  font-size: ${FontSizeEnum["step-1"]};
  line-height: 162%;
  font-weight: initial;
`;

interface ParagraphProps extends ColoredProps {
    size?: "small" | "default" | "large";
    weight?: "bold" | "regular" | "light";
    isVisible?: boolean;
}

interface HeadingsProps extends HTMLAttributes<HTMLHeadingElement> {

}

export const Label = styled.p<ParagraphProps>`
    font-size: ${FontSizeEnum["step-0"]};

    /* ${({ color }) =>
        color &&
        css`
            color: ${color => color ? `var(--ion-color-${color})` : `var(--ion-color-dark-shade)`};
        `
    } */
    ${({ size }) =>
        size === "small" &&
        css`
            font-size: ${FontSizeEnum["step--1"]} !important;
            `
    }
    ${({ size }) =>//useless FIXME:
        size === "default" &&
        css`
            font-size: ${FontSizeEnum["step-0"]} !important;
        `
    }
    ${({ size }) =>
        size === "large" &&
        css`
            font-size: ${FontSizeEnum["step-1"]} !important;
        `
    }
    ${({ weight }) =>
        weight === "bold" &&
        css`
            font-weight: ${FontWeightEnum.BOLD};
        `
    }

    ${({ weight }) =>
        weight === "regular" &&
        css`
            font-weight: ${FontWeightEnum.REGULAR};
        `
    }

    ${({ weight }) =>
        weight === "light" &&
        css`
            font-weight: ${FontWeightEnum.LIGHT};
            `
    }
`
export const ButtonText = styled(Label)`
${({ isVisible }) =>
        isVisible === false &&
        css`
            visibility: hidden;
        `
    }
    font-weight: ${FontWeightEnum.BOLD};
`
export const MediumButton = styled(MediumParagraph)`
  font-size: 1rem;
  font-weight: ${FontWeightEnum.BOLD};
  line-height: 18px;
  `;
export const LargeButton = styled(MediumButton)`
  font-size: 1.125rem;
  min-width: 150px;
  font-weight: ${FontWeightEnum.BOLD};
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
