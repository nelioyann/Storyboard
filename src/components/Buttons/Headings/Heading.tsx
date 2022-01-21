import React, { HTMLAttributes } from 'react';

import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '../../../theme/globalStyles';

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
        {level === "4" && <Heading4 color={color} {...props} >{children} </Heading4>}
        {level === "5" && <Heading5 color={color} {...props} >{children}</Heading5>}
        {level === "6" && <Heading6 color={color} {...props} >{children}</Heading6>}
        </>
        
    )
}

export default Heading
