import { IonButton } from '@ionic/react';
import React from 'react'

interface IButton{
    label: string;
    fill?: "clear" | "outline" | "solid" ;
    color?: "primary" | "secondary" | "medium" | "tertiary"; // TODO: add the rest
}

const Button: React.FC<IButton> = ({label, fill, color}) => {
    return (
        <IonButton fill={ fill } color={ color }>
            {label}
        </IonButton>
    )
}

export default Button
