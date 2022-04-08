import AlertDialog from './AlertDialog';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: "Molecules/AlertDialog",
    component: AlertDialog,
    argTypes: {
        // onClick: {action: 'clicked'},
    },
    args: AlertDialog.defaultProps,
    parameters: {
        docs: {
            iframeHeight: '350px',
            description: {
                component: "A modal dialog that interrupts the user with important content and expects a response."
            }
        }
    }
} as ComponentMeta<typeof AlertDialog>;

//👇 We create a “template” of how args map to rendering
const CardTemplate: ComponentStory<typeof AlertDialog> = (args) => (
<AlertDialog {...args} />
);

//👇 We base new AlertDialog instances on our “template” 
export const Default= CardTemplate.bind({})


//👇 We adapt each instances by providing new attributes 
Default.args = {
    defaultOpen: true,
    
}
