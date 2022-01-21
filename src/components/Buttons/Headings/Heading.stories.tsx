import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from "./Heading";

export default {
    title: "Atoms/Heading",
    component: Heading,
    args: {
        children: "Almost before we knew it, we had left the ground.",
        level: "1",
        color: "primary"
    }
} as ComponentMeta<typeof Heading>

const HeadingTemplate: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default= HeadingTemplate.bind({})
export const H2= HeadingTemplate.bind({})
export const H3= HeadingTemplate.bind({})
export const H4= HeadingTemplate.bind({})
export const H5= HeadingTemplate.bind({})

H2.args = {level: "2"};
H3.args = {level: "3"};
H4.args = {level: "4"};
H5.args = {level: "5"};
