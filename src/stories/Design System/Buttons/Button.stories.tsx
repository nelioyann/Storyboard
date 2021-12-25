import React from 'react';
import Button from '../../../components/Buttons/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: "Buttons",
    component: Button,
    args: {
        //👇 Now all Button stories will have this label.
        children: "Default label"
    }
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 We base new button instances on our “template” 
export const Primary = ButtonTemplate.bind({})
export const ANDROID= ButtonTemplate.bind({})
export const IOS = ButtonTemplate.bind({})

//👇 We adapt each instances by providing new attributes 
Primary.args = {
    fill: 'solid',
    color: "primary",
    children: "Primary button"
}
ANDROID.args = {
    fill: 'solid',
    mode: "md"
}
IOS.args = {
    fill: 'solid',
    mode: "ios"
}