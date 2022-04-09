import React from 'react'
import { useIonToast } from '@ionic/react'
import { alertCircle, checkmarkCircle, checkmarkDoneCircle, closeCircle, informationCircleOutline } from 'ionicons/icons';


interface ToastButton {
    text?: string;
    icon?: string;
    side?: 'start' | 'end';
    role?: 'cancel' | string;
    cssClass?: string | string[];
    handler?: () => boolean | void | Promise<boolean | void>;
}

interface IToast {
    message: string;
    duration?: number;
    position?: 'top' | 'bottom' | 'middle';
    buttons?: ToastButton[];
    mode?: 'ios' | 'md';
    cssClass?: string;
    icon?: string;
    header?: string;
    // showCloseButton?: boolean;
}

const defaultToast: IToast = {
    message: '',
    duration: 5000,
    position: 'top',
    buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
        }],
    mode: 'ios',
    cssClass: '',
    icon: informationCircleOutline,
    // header: 'Message',
    // showCloseButton: false,
}

type toastType = 'success' | 'warning' | 'danger' | "info";
type toastIcons = {
    [key in toastType]: string;
};

export default function useToast() {
    const [present, dismiss] = useIonToast();
    const icons: toastIcons = {
        success: checkmarkDoneCircle,
        danger: closeCircle,
        warning: alertCircle,
        info: informationCircleOutline,
    }
    const notify = (
        message: string,
        type?: toastType,
        header?: string,
        duration?: number,
        position?: 'top' | 'bottom' | 'middle',
        buttons?: ToastButton[],
        mode?: 'ios' | 'md',
        cssClass?: string,
        icon?: string,
    ) => {

        if (message) {
            present({
                message: message,
                header: header || defaultToast.header,
                duration: duration || defaultToast.duration,
                buttons: buttons || defaultToast.buttons,
                position: position || defaultToast.position,
                mode: mode || defaultToast.mode,
                cssClass: cssClass || defaultToast.cssClass,
                icon: icon || icons[type || "info"] || defaultToast.icon,
                color: type || undefined,
            });
        }
    }

    // React.useEffect(
    //     () => {
    //         if (message) {
    //             present({
    //                 message,
    //                 duration,
    //                 buttons: [
    //                     {
    //                         text: 'Cancel',
    //                         role: 'cancel',
    //                         cssClass: 'secondary',
    //                     }]
    //             });
    //         }
    //     }, [message]
    // )

    return notify
}
// export default useToast