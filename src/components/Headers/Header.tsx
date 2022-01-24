import React from "react";
import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
// import { home } from "ionicons/icons";
import Heading from "../Buttons/Headings/Heading";

interface HeaderProps {
    label?: string;
    icon?: string;
    color?: string;
    noBorder?: boolean;
    iconSlot?: "start" | "end" | "";
    withBackButton?: boolean;
    backButtonLink?: string
    iconTargetLink?: string;
}
const Header: React.FC<HeaderProps> = ({ color = "light" , noBorder = false, label, icon, iconSlot = "end", iconTargetLink, withBackButton = false, backButtonLink = undefined }) => {
    return (
        <IonHeader mode="md" className={noBorder ? "ion-no-border" : ""}>
            <IonToolbar color={color}>
                {/* Left side */}
                {withBackButton && <IonButtons slot="start">
                    <IonBackButton color="dark" text="" defaultHref={backButtonLink} />
                </IonButtons>}

                {/* Center side */}
                {label && <IonTitle slot="">
                    <Heading level="4" color="primary"
                        style={{ margin: "auto", textAlign: "center" }}
                    >{label}</Heading>
                </IonTitle>}

                {/* Right side */}

                {icon &&
                    <IonButtons slot={iconSlot}>
                        <IonButton fill="clear" color="dark" routerLink={iconTargetLink}>
                            <IonIcon icon={icon}  />
                        </IonButton>
                    </IonButtons>}
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
