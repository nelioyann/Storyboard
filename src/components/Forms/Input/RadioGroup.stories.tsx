import RadioGroup from './RadioGroup';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: "Atoms/Fields",
    component: RadioGroup,
    argTypes: {
        // onIonChange: {action: 'changed'},
        // mode: {
        //     control: false
        // }
    },
    args: {
        //👇 Now all RadioGroup stories will have this label.
        // children: "Click me ",
        // isLoading: false,
        // mode: "ios"
    }
} as ComponentMeta<typeof RadioGroup>;

//👇 We create a “template” of how args map to rendering
const RadioTemplate: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

//👇 We base new RadioGroup instances on our “template” 
// export const Primary = RadioTemplate.bind({})
export const RadioBasic= RadioTemplate.bind({})


//👇 We adapt each instances by providing new attributes 

