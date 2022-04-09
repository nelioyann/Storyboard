import Center from './Center';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from './Box';



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
    args: Center.defaultProps
} as ComponentMeta<typeof Center>;

//👇 We create a “template” of how args map to rendering
const CenterTemplate: ComponentStory<typeof Center> = (args) => (
    <Center {...args} >
        <Box >
            Centered Box
        </Box>
    </Center>
);


export const Default = CenterTemplate.bind({})


//👇 We adapt each instances by providing new attributes 

Default.args = {
    andText: true
}

