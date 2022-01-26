import Center from './Center';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from './Box';
import Heading from '../components/Buttons/Headings/Heading';


export default {
    title: "Layouts/Center",
    component: Center,
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
        //👇 Now all Center stories will have this label.
        // children: "Click me ",
        // fill: "solid",
        // isLoading: false,
        // mode: "ios"
    }
} as ComponentMeta<typeof Center>;

//👇 We create a “template” of how args map to rendering
const CoverTemplate: ComponentStory<typeof Center> = (args) => (
<Center {...args} >
    <Box data-centered borderWidth="0">
        <Heading level="1">Horizontally Centered Element</Heading> 
    </Box>
</Center>
);

//👇 We base new Center instances on our “template” 
// export const Primary = CoverTemplate.bind({})
export const Default= CoverTemplate.bind({})
// export const RecursiveCover = CoverTemplate.bind({})
// export const SplittedCover = CoverTemplate.bind({})

//👇 We adapt each instances by providing new attributes 

Default.args = {
    andText: true
}

// SplittedCover.args = {
//     splitAfter: 1
// }
// RecursiveCover.args = {
//     recursive: true
// }
