import { IonAlert } from '@ionic/react'
import React from 'react'


interface IAlertDialogButton {
    text: string;
    role?: "cancel" | "destructive" | string;
    cssClass?: string;
    handler?: (value: any) => boolean | void | { [key: string]: any };
}
export interface IAlertDialog {
    defaultOpen: boolean;
    onDidDismissHandler?: () => void;
    header?: string;
    subHeader?: string;
    message?: string;
    buttons?: (IAlertDialogButton | string)[];
    mode?: "ios" | "md";
    cssClass?: string;
}


const defaultAlertButtons: IAlertDialogButton[] = [
    {
        text: 'Cancel',
        role: 'destructive',
        cssClass: 'secondary',
        handler: () => {
            console.log('Confirm Cancel');
        }
    },
    {
        text: 'Ok',
        handler: () => {
            console.log('Confirm Ok');
        }
    }
]

const AlertDialogDefaultProps: IAlertDialog = {
    defaultOpen: false,
    onDidDismissHandler: () => { },
    header: 'Are you absolutely sure?',
    subHeader: '',
    message: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    buttons: defaultAlertButtons,
    mode: 'ios',
    cssClass: ''
}
const AlertDialog: React.FC<IAlertDialog> = ({ defaultOpen, onDidDismissHandler, ...props }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    React.useEffect(() => {
        setIsOpen(defaultOpen);
    }, [defaultOpen])
    const onDidDismiss = () => {
        if (onDidDismissHandler) onDidDismissHandler();
        setIsOpen(false);
    }

    return (
        <IonAlert onDidDismiss={onDidDismiss} isOpen={isOpen} {...props} />
    )
}

AlertDialog.defaultProps = AlertDialogDefaultProps;

export default AlertDialog;