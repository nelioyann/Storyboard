import React, { HTMLAttributes } from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';

export interface IInput extends HTMLAttributes<HTMLIonInputElement> {
    label: string;
    type?: "date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week";
    required?: boolean;
    name: string;
    inputmode?: "decimal" | "email" | "none" | "numeric" | "search" | "tel" | "text" | "url" | undefined;
    enterkeyhint?: "done" | "enter" | "go" | "next" | "previous" | "search" | "send" | undefined;
    clearInput?: boolean;
}

const Input: React.FC<IInput> = ({label,...props}) => {
    return (
        <IonItem style={{ width: "100%", borderRadius: "1em" }}>
            <IonLabel position="floating">{label}</IonLabel>
            <IonInput {...props}></IonInput>
        </IonItem>
    )
}

export default Input;
