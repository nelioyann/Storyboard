import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { appsOutline } from 'ionicons/icons';
import React, { HTMLAttributes } from 'react';

interface IMenuItem extends HTMLAttributes<HTMLIonItemElement> {
    icon: string;
    label: string;
    path: string;
    
}
const MenuItem: React.FC<IMenuItem> = ({path = "",  icon = appsOutline, label = "Menu Item", ...props }) => {
    return (
        <IonItem mode="ios" routerLink={path} className="ion-margin" style={{"--border-radius": "0.5em", "--background-hover-opacity": 0.2}} shape="round" button={true} {...props}>
            <IonIcon style={{ marginRight: "0.5em" }} icon={icon} />
            <IonLabel>{label}</IonLabel>
        </IonItem>
    )
};

export default MenuItem;
