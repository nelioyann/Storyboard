import Popover from './Popover';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: "Molecules/Popover",
    component: Popover,
    argTypes: {
        onClick: {action: 'clicked'},
    },
    args: Popover.defaultProps,
    // parameters: {
    //     docs: {
    //         iframeHeight: '350px'
    //     }
    // }
} as ComponentMeta<typeof Popover>;

//👇 We create a “template” of how args map to rendering
const CardTemplate: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

//👇 We base new Popover instances on our “template” 
export const Default= CardTemplate.bind({})


//👇 We adapt each instances by providing new attributes 
Default.args = {

}
