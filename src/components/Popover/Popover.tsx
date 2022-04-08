import { IonPopover } from '@ionic/react'
import React from 'react'
import { Box, Stack } from '../../layouts';
import { SpacingEnum } from '../../theme/globalStyles';
import Button from '../Buttons/Button';
import Input from '../Forms/Input/Input';
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
                <Heading level="6">Popover</Heading>
                {/* <Input label="Label" name="popover-input" /> */}
                <Button fill='clear' label='Submit' size='small' />
                <Button fill='clear' label='Submit' size='small' />
                <Button fill='clear' label='Submit' size='small' />
            </Stack>
        </Box>
    )
}

const PopoverDefaultProps: IPopover = {
    defaultOpen: false,
    onDidDismissHandler: () => { },
    Component: DefaultComponent,
    reference: "event",
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