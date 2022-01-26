import Cover from './Cover';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from './Box';
import Heading from '../components/Buttons/Headings/Heading';


export default {
    title: "Layouts/Cover",
    component: Cover,
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
    args: {
        //👇 Now all Cover stories will have this label.
        // children: "Click me ",
        // fill: "solid",
        // isLoading: false,
        // mode: "ios"
    }
} as ComponentMeta<typeof Cover>;

//👇 We create a “template” of how args map to rendering
const CoverTemplate: ComponentStory<typeof Cover> = (args) => (
<Cover {...args} >
    <Box borderWidth="0">
        Header
    </Box>
    <Box data-centered borderWidth="0">
        <Heading level="1">Centered Element</Heading> 
    </Box>
    <Box borderWidth="0">Footer: by Yannick Nana</Box>
</Cover>
);

//👇 We base new Cover instances on our “template” 
// export const Primary = CoverTemplate.bind({})
export const Default= CoverTemplate.bind({})
// export const RecursiveCover = CoverTemplate.bind({})
// export const SplittedCover = CoverTemplate.bind({})

//👇 We adapt each instances by providing new attributes 

Default.args = {
}

// SplittedCover.args = {
//     splitAfter: 1
// }
// RecursiveCover.args = {
//     recursive: true
// }
