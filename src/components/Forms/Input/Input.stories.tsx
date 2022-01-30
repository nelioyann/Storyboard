import Input from './Input';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { arrowForward } from 'ionicons/icons';


export default {
    title: "Atoms/Fields",
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
        label: "Label",
        placeholder: "Enter something here..."
        // isLoading: false,
        // mode: "ios"
    }
} as ComponentMeta<typeof Input>;

//👇 We create a “template” of how args map to rendering
const InputTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;

//👇 We base new Input instances on our “template” 
// export const Primary = InputTemplate.bind({})
export const InputBasic= InputTemplate.bind({})
export const PasswordField= InputTemplate.bind({})


//👇 We adapt each instances by providing new attributes 

PasswordField.args = {
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    name: "password",
    autocomplete: "off"
}
