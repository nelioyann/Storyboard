import { IonButton, IonSpinner } from '@ionic/react';
import React from 'react'

interface IButton{
    label: string;
    isLoading?: boolean;
    mode: "ios"  | "md";
    fill?: "clear" | "outline" | "solid" ;
    color?: "primary" | "secondary" | "medium" | "tertiary"; // TODO: add the rest
}

const Button: React.FC<IButton> = ({ children, isLoading, ...props}) => {
    return (
        <IonButton {...props}>
            {isLoading ? <IonSpinner /> : ""}
            {children}
        </IonButton>
    )
}

export default Button;
