import Slides from './Slides';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { arrowForward } from 'ionicons/icons';


export default {
    title: "Molecules/Slides",
    component: Slides,
    argTypes: {
        onSlideChange: {action: 'changed'},
        // mode: {
        //     control: false
        // }
    },
    args: {
        //👇 Now all Slides stories will have this label.
        // children: "Click me ",
        // name: "SlidesName",
        // label: "Label"
        // isLoading: false,
        // mode: "ios"
        
    }
} as ComponentMeta<typeof Slides>;

//👇 We create a “template” of how args map to rendering
const SlidesTemplate: ComponentStory<typeof Slides> = (args) => <Slides {...args} />;

//👇 We base new Slides instances on our “template” 
// export const Primary = SlidesTemplate.bind({})
export const Default= SlidesTemplate.bind({})


//👇 We adapt each instances by providing new attributes 

Default.args = {
}
