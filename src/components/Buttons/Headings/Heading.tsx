import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ColoredProps } from '../../../theme/globalStyles';


const Heading1 = styled.h1<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    font-size: 3.5rem;
    line-height: 105%;
    letter-spacing: -1px;
    white-space: normal;
`
const Heading2 = styled.h2<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    font-size: 2.5rem;
    line-height: 115%;
    letter-spacing: -1px;
    white-space: normal;
`
const Heading3 = styled.h3<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    font-size: 2rem;
    line-height: 130%;
    letter-spacing: -1px;
    white-space: normal;
`

const Heading4 = styled.h4<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    padding: 0;
    margin: 0;
    /* margin: 2rem 0 1rem; */
    max-width: 40ch;
    white-space: normal;
    font-size: 1.5rem;
    line-height: 133%;
`
const Heading5 = styled.h5<ColoredProps>`
    font-weight: var(--font-regular);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    font-size: 1.25rem;
    line-height: 130%;
    white-space: normal;
`
const Heading6 = styled.h6<ColoredProps>`
    font-weight: var(--font-regular);
    color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark)`};
    font-size: 1rem;
    line-height: 130%;
    white-space: normal;
`

interface IHeading extends HTMLAttributes<HTMLHeadingElement>{
    children: React.ReactNode;
    level: "1" | "2" | "3" | "4" | "5" | "6" ;
    color?: "primary" | "secondary" | "tertiary" | "medium" | "dark" | "light" | "warning" | "danger" ;
}
const Heading: React.FC<IHeading> = ({children, level = "1", color = "primary",...props}) => {
    return (
        <>
        {level === "1" && <Heading1 color={color} {...props} >{children}</Heading1>}
        {level === "2" && <Heading2 color={color} {...props} >{children}</Heading2>}
        {level === "3" && <Heading3 color={color} {...props} >{children}</Heading3>}
        {level === "4" && <Heading4 color={color} {...props} >{children}</Heading4>}
        {level === "5" && <Heading5 color={color} {...props} >{children}</Heading5>}
        {level === "6" && <Heading6 color={color} {...props} >{children}</Heading6>}
        </>
        
    )
}

export default Heading
