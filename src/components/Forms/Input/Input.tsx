import React, { HTMLAttributes } from 'react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import styled from 'styled-components';
import { Label, SpacingEnum } from '../../../theme/globalStyles';
export interface IInput extends HTMLAttributes<HTMLIonInputElement> {
    label: string;
    placeholder?: string;
    type?: "date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week";
    required?: boolean;
    name: string;
    inputmode?: "decimal" | "email" | "none" | "numeric" | "search" | "tel" | "text" | "url" | undefined;
    enterkeyhint?: "done" | "enter" | "go" | "next" | "previous" | "search" | "send" | undefined;
    clearInput?: boolean;
}
const StyledInput = styled(IonInput)`
    margin-top: ${SpacingEnum['s-1']};
    --padding-start: ${SpacingEnum['s-1']} !important;
    --padding-end: ${SpacingEnum['s-1']} !important;
    --border-color: var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.8))));
    --background: var(--ion-color-dark-contrast) !important;

`

const StyledItem = styled(IonItem)`
    width: 100%;
    --background: transparent;
    ${StyledInput}{
        border-radius: 0.5em;
        border: 2px solid var(--border-color);
    }
    &.item-interactive.item-has-focus ${StyledInput}{
        border: 2px solid var(--highlight-background);
    }
    &.item-interactive.item-has-focus ${Label}{
        color: var(--highlight-background);
    }
`



const Input: React.FC<IInput> = ({label,...props}) => {
    return (
        <StyledItem lines="none">
            <IonLabel position="stacked">
                <Label size="large">

                {label}
                </Label>
                </IonLabel>
            <StyledInput {...props}></StyledInput>
        </StyledItem>
    )
}

export default Input;
