import Fitness from './Fitness';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Pages/Fitness",
    component: Fitness,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Fitness>;

//👇 We create a “template” of how args map to rendering
const FitnessTemplate: ComponentStory<typeof Fitness> = (args) => (<Fitness {...args} />);

//👇 We base new Fitness instances on our “template” 
export const App = FitnessTemplate.bind({})