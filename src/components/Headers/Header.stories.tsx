import { ComponentMeta, ComponentStory } from '@storybook/react';
import { search } from 'ionicons/icons';
import  Header  from './Header';


export default {
  title: "Molecules/Headers",
  component: Header,
  // Prevent edition of icon as it is a svg
  argTypes: {
    icon: {
        control: false
    },
    iconTargetLink: {
        control: false
    }

},
} as ComponentMeta<typeof Header>;

const HeaderTemplate : ComponentStory<typeof Header> = (args) => <Header {...args}/>

export const Default = HeaderTemplate.bind({})
export const HeaderWithIcon = HeaderTemplate.bind({})

Default.args = {
  label: "Header"
}
HeaderWithIcon.args = {
  label: "Search",
  icon: search
}


