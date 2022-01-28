import { IonButton, IonIcon } from '@ionic/react';
import { rocket } from 'ionicons/icons';
import React, { HTMLAttributes } from 'react';
import { ColorLabelsEnum } from '../../theme/globalStyles';
import "./IconButton.css"

interface IIconButton extends HTMLAttributes<HTMLIonButtonElement> {
    icon: string;
    shape?: "round";
    fill?: "clear" | "outline" | "solid";
    size?: "small" | "default" | "large";
    color?: ColorLabelsEnum; // TODO: add the rest
}

const IconButtonDefaultProps:IIconButton = {
    icon: rocket,
    fill: "solid",
    color: ColorLabelsEnum.PRIMARY,
    size: "large",
    shape: "round"
}
const IconButton: React.FC<IIconButton> = ({ icon, ...props }) => {
    return (
        <IonButton className="icon-button" {...props} >
            <IonIcon icon={icon}  />
        </IonButton>
    );
};

IconButton.defaultProps = IconButtonDefaultProps;

export default IconButton;
