import Tabs from './Tabs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { arrowForward } from 'ionicons/icons';


export default {
    title: "Molecules/Tabs",
    component: Tabs,
    argTypes: {
        // mode: {
        //     control: false
        // }
    },
    args: {
        //👇 Now all Tabs stories will have this label.
        // children: "Click me ",
        // name: "TabsName",
        // label: "Label"
        // isLoading: false,
        // mode: "ios"
        
    }
} as ComponentMeta<typeof Tabs>;

//👇 We create a “template” of how args map to rendering
const TabsTemplate: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

//👇 We base new Tabs instances on our “template” 
// export const Primary = TabsTemplate.bind({})
export const Default= TabsTemplate.bind({})


//👇 We adapt each instances by providing new attributes 

Default.args = {
}
