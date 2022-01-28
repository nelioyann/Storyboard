import IconButton from './IconButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { arrowForward } from 'ionicons/icons';


export default {
    title: "Atoms/IconButton",
    component: IconButton,
    argTypes: {
        onClick: {action: 'clicked'},
    },
    args: {
        //👇 Now all IconButton stories will have this label.
        fill: "solid",
        icon: arrowForward

    }
} as ComponentMeta<typeof IconButton>;

//👇 We create a “template” of how args map to rendering
const ButtonTemplate: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

//👇 We base new button instances on our “template” 
// export const Primary = ButtonTemplate.bind({})
export const Default= ButtonTemplate.bind({})

//👇 We adapt each instances by providing new attributes 

Default.args = {
}
