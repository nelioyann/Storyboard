import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ColoredProps, ColorLabelsEnum, FontSizeEnum } from '../../theme/globalStyles';


const Heading1 = styled.h1<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    font-size: ${FontSizeEnum['step-6']};
    line-height: 1.1;
    padding: 0;
    margin: 0;
`
const Heading2 = styled.h2<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    font-size: ${FontSizeEnum['step-5']};
    line-height: 1.2;
    padding: 0;
    margin: 0;
`
const Heading3 = styled.h3<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    font-size: ${FontSizeEnum['step-4']};
    line-height: 1.3;
    padding: 0;
    margin: 0;
`

const Heading4 = styled.h4<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    font-size: ${FontSizeEnum['step-3']};
    line-height: 1.4;
    padding: 0;
    margin: 0;
    
`
const Heading5 = styled.h5<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    font-size: ${FontSizeEnum['step-2']};
    line-height: 1.5;
    padding: 0;
    margin: 0;
`
const Heading6 = styled.h6<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    font-size: ${FontSizeEnum['step-1']};
    line-height: 1.6;
    padding: 0;
    margin: 0;
`

interface IHeading extends HTMLAttributes<HTMLHeadingElement>{
    children: string;
    level: "1" | "2" | "3" | "4" | "5" | "6" ;
    color?: ColorLabelsEnum ;
}

const HeadingDefaultProps: IHeading = {
    children: "", 
    level: "4",
    color: ColorLabelsEnum.DARK
}
const Heading: React.FC<IHeading> = ({level, color, children}) => {
    return (
        <>
        {level === "1" && <Heading1 color={color} >{children}</Heading1>}
        {level === "2" && <Heading2 color={color} >{children}</Heading2>}
        {level === "3" && <Heading3 color={color} >{children}</Heading3>}
        {level === "4" && <Heading4 color={color} >{children}</Heading4>}
        {level === "5" && <Heading5 color={color} >{children}</Heading5>}
        {level === "6" && <Heading6 color={color} >{children}</Heading6>}
        </>
        
    )
}

Heading.defaultProps = HeadingDefaultProps
export default Heading
