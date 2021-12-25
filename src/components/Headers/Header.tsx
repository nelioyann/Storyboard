import React from "react";
import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
// import { home } from "ionicons/icons";
import { personCircle, search, ellipsisHorizontal, ellipsisVertical } from "ionicons/icons";

interface HeaderProps {
    name: string;
    icon?: string;
    collapsible?: boolean;
    iconTarget?: string;


}
// style={{backgroundColor: "var(--ion-color-light)"}}
const Header: React.FC<HeaderProps> = ({ name, icon, collapsible, iconTarget }) => {
    return (
        <IonHeader   collapse={collapsible ? "condense" : undefined} className="ion-padding-horizontal ion-no-border">
            <IonToolbar   >
                {icon && <IonButtons slot="primary" collapse={true}>
                    <IonButton fill="clear" color="dark" routerLink={iconTarget}>
                        <IonIcon icon={icon} style={{fontSize: '30px',borderRadius: '50%',borderWidth: '8px',borderColor: '#f3f3f3',paddingStart: '15px',paddingEnd: '15px',marginRight: '-10px', marginLeft: '-10px',backgroundActivated: '#f3f3f3'
                        }}/>
                    </IonButton>
                </IonButtons>}
                <IonTitle  size={collapsible ? "large" : undefined}>
                    {collapsible ? <h3 style={{ color: "var(--ion-color-primary)" }} >{name}</h3> : <h4 style={{ color: "var(--ion-color-primary)" }}>{name}</h4>}
                </IonTitle>
            </IonToolbar>

        </IonHeader>
    );
};

export default Header;
