import Popover from './Popover';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '../../layouts';
import Button from '../Buttons/Button';


export default {
    title: "Molecules/Popover",
    component: Popover,
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: Popover.defaultProps,
    parameters: {
        docs: {
            iframeHeight: '350px',
            description: {
                component: "Displays rich content in a portal, triggered by a button."
            }
        }
    }
} as ComponentMeta<typeof Popover>;

//👇 We create a “template” of how args map to rendering
const CardTemplate: ComponentStory<typeof Popover> = (args) => (
    <>
        <Button label="Popover trigger" id={args.id}/>
        <Popover {...args} />
    </>
)

//👇 We base new Popover instances on our “template” 
export const Default = CardTemplate.bind({})


//👇 We adapt each instances by providing new attributes 
Default.args = {

}
