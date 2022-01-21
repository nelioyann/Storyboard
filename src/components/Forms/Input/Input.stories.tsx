import Input from './Input';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { arrowForward } from 'ionicons/icons';


export default {
    title: "Atoms/Input",
    component: Input,
    argTypes: {
        onIonChange: {action: 'changed'},
        // mode: {
        //     control: false
        // }
    },
    args: {
        //👇 Now all Input stories will have this label.
        // children: "Click me ",
        name: "inputName",
        label: "Label"
        // isLoading: false,
        // mode: "ios"
    }
} as ComponentMeta<typeof Input>;

//👇 We create a “template” of how args map to rendering
const InputTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;

//👇 We base new Input instances on our “template” 
// export const Primary = InputTemplate.bind({})
export const Default= InputTemplate.bind({})


//👇 We adapt each instances by providing new attributes 

Default.args = {
}
