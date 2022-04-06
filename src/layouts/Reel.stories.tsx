import Reel from './Reel';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from '../components/Headings/Heading';
import { Center, Stack } from '.';
import { MediumParagraph, SpacingEnum } from '../theme/globalStyles';
import Box from './Box';
import Card from '../components/Cards/Card';


export default {
    title: "Layouts/Reel",
    component: Reel,
    argTypes: {
        // onClick: {action: 'clicked'},
        as: {
            table: {
                disable: true,
            },
        },
        ref: {
            table: {
                disable: true,
            },
        },
        theme: {
            table: {
                disable: true,
            },
        },
        forwardedAs: {
            table: {
                disable: true,
            },
        },
    },
    args: Reel.defaultProps
} as ComponentMeta<typeof Reel>;

//👇 We create a “template” of how args map to rendering
const BoxTemplate: ComponentStory<typeof Reel> = (args) => (
    <Reel {...args} >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
    </Reel>
);

//👇 We base new Reel instances on our “template” 
// export const Primary = BoxTemplate.bind({})
export const Default = BoxTemplate.bind({})
// export const RecursiveBox = BoxTemplate.bind({})
// export const SplittedBox = BoxTemplate.bind({})

//👇 We adapt each instances by providing new attributes 

Default.args = {
}

// SplittedBox.args = {
//     splitAfter: 1
// }
// RecursiveBox.args = {
//     recursive: true
// }
