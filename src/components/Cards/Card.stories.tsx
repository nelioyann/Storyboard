import Card from './Card';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { arrowForward } from 'ionicons/icons';


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
// export const Primary = CardTemplate.bind({})
export const Default= CardTemplate.bind({})
export const Full= CardTemplate.bind({})


//👇 We adapt each instances by providing new attributes 

Default.args = {
}
Full.args = {
    size: 'full',
    imageUrl: 'https://picsum.photos/2900'
}
