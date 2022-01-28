import Box from './Box';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from '../components/Headings/Heading';
import { Center, Stack } from '.';
import { MediumParagraph } from '../theme/globalStyles';


export default {
    title: "Layouts/Box",
    component: Box,
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
        //👇 Now all Box stories will have this label.
        // children: "Click me ",
        // fill: "solid",
        // isLoading: false,
        // mode: "ios"
    }
} as ComponentMeta<typeof Box>;

//👇 We create a “template” of how args map to rendering
const BoxTemplate: ComponentStory<typeof Box> = (args) => (
    <Box {...args} >
        <Center max="80ch">
            <Stack>
                <Box>
                    <Heading level="1">Horizontally Centered Element</Heading>
                </Box>
                <Box>
                    <MediumParagraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint quod tenetur atque sapiente a culpa molestiae quasi aut excepturi! Necessitatibus repellat molestiae omnis eveniet dolorum temporibus reiciendis perspiciatis laudantium.
                    </MediumParagraph>
                </Box>
            </Stack>
        </Center>
    </Box>
);

//👇 We base new Box instances on our “template” 
// export const Primary = BoxTemplate.bind({})
export const Default = BoxTemplate.bind({})
// export const RecursiveBox = BoxTemplate.bind({})
// export const SplittedBox = BoxTemplate.bind({})

//👇 We adapt each instances by providing new attributes 

Default.args = {
    invert: false
}

// SplittedBox.args = {
//     splitAfter: 1
// }
// RecursiveBox.args = {
//     recursive: true
// }
