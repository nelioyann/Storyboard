import { IonPopover } from '@ionic/react'
import React from 'react'
import { Box, Stack } from '../../layouts';
import { SpacingEnum } from '../../theme/globalStyles';
import Button from '../Buttons/Button';
import Input from '../Forms/Input/Input';
import Heading from '../Headings/Heading';

export interface IPopover {
    defaultOpen: boolean;
    onDidDismiss: () => void;
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
            <Stack>
                <Heading level="4">Popover</Heading>
                <Input label="Label" name="popover-input" />
                <Button label='Submit' size='small' />
            </Stack>
        </Box>
    )
}

const PopoverDefaultProps: IPopover = {
    defaultOpen: false,
    onDidDismiss: () => { },
    Component: DefaultComponent ,
    reference: "event",
    id: "popover-id",
    triggerAction: "click",
    side: "bottom",
    size: "auto"
}



const Popover: React.FC<IPopover> = ({ Component, ...props }) => {
    const [isOpen, setIsOpen] = React.useState(props.defaultOpen);
    return (
        <>
            <Button id={props.id} label="Trigger" />
            <IonPopover
                arrow={true}
                mode="ios"
                trigger={props.id}
                // isOpen={isOpen}
                reference={props.reference}
            // onDidDismiss={() => { setIsOpen(false); props.onDidDismiss() }}
            >
                {<Component/>}
            </IonPopover>
        </>

    )
}

Popover.defaultProps = PopoverDefaultProps;
export default Popover;