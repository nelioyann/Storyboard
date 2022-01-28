import { IonButton, IonIcon } from '@ionic/react';
import React, { HTMLAttributes } from 'react';
import "./IconButton.css"

interface IIconButton extends HTMLAttributes<HTMLIonButtonElement> {
    icon: string;
    shape?: "round";

    fill?: "clear" | "outline" | "solid";
    size?: "small" | "default" | "large";
    color?: "primary" | "secondary" | "medium" | "tertiary" | "light" | "dark"; // TODO: add the rest
}
const IconButton: React.FC<IIconButton> = ({ icon, ...props }) => {
    return (
        <IonButton className="icon-button" {...props} >
            <IonIcon icon={icon}  />
        </IonButton>
    );
};

IconButton.defaultProps = {
    fill: "solid",
    color: "primary",
    size: "large",
    shape: "round"
}

export default IconButton;
