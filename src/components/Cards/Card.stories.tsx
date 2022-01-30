import Card from './Card';
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: "Molecules/Card",
    component: Card,
    argTypes: {
        onClick: {action: 'clicked'},
    },
    args: {
        //👇 Now all Card stories will have this label.
        title: "Title",

    }
} as ComponentMeta<typeof Card>;

//👇 We create a “template” of how args map to rendering
const CardTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;

//👇 We base new Card instances on our “template” 
export const CardImage = CardTemplate.bind({})
export const CardSimple= CardTemplate.bind({})


//👇 We adapt each instances by providing new attributes 
CardSimple.args = {
    layout: "simple",
    title: "Game shop",
    subtitle: "USA, Ville Front"
}
