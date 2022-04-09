import { IonPopover } from '@ionic/react'
import React from 'react'
import { Box, Stack } from '../../layouts';
import { Label, SpacingEnum } from '../../theme/globalStyles';
import Button from '../Buttons/Button';
import Input from '../Forms/Input/Input';
import Radio from '../Forms/Input/Radio';
import RadioGroup from '../Forms/Input/RadioGroup';
import Heading from '../Headings/Heading';

export interface IPopover {
    defaultOpen: boolean;
    onDidDismissHandler: () => void;
    Component: React.FC<{}>;
    id: string;
    reference?: "event" | "trigger";
    triggerAction?: "click" | "hover" | "context-menu";
    side?: "start" | "end" | "top" | "bottom" | "left" | "right";
    size?: "auto" | "cover";
}

const DefaultComponent: React.FC<{}> = () => {
    return (
        <Box borderWidth='0' padding={SpacingEnum['s-3']}>
            <Stack space={SpacingEnum['s-2']}>
                <Label>Theme</Label>
                {/* <Input label="Label" name="popover-input" /> */}

                <RadioGroup name="theme" radios={[{label: "Dark", value: "Dark"}, {label: "Light", value: "Light"}]}/>
            </Stack>
        </Box>
    )
}

export const PopoverDefaultProps: IPopover = {
    defaultOpen: false,
    onDidDismissHandler: () => { },
    Component: DefaultComponent,
    reference: "trigger",
    id: "popover-id",
    triggerAction: "click",
    side: "bottom",
    size: "auto"
}



const Popover: React.FC<IPopover> = ({ defaultOpen, Component, onDidDismissHandler, ...props }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    React.useEffect(() => {
        setIsOpen(defaultOpen);
    }, [defaultOpen])
    const onDidDismiss = () => {
        if (onDidDismissHandler) onDidDismissHandler();
        setIsOpen(false);
    }

    return (
        <>
            {/* <Button id={props.id} label="Trigger" /> */}
            <IonPopover
                arrow={true}
                mode="ios"
                trigger={props.id}
                isOpen={isOpen}
                reference={props.reference}
                onDidDismiss={onDidDismiss}
            >
                {<Component />}
            </IonPopover>
        </>

    )
}

Popover.defaultProps = PopoverDefaultProps;
export default Popover;