import { ComponentMeta, ComponentStory } from '@storybook/react';
import {  homeOutline } from 'ionicons/icons';
import  Header  from './Header';


export default {
  title: "Headers",
  component: Header,
  // Prevent edition of icon as it is a svg
  argTypes: {
    icon: {
        control: false
    },
    iconTarget: {
        control: false
    },
    mode: {
        control: false
    }
},
} as ComponentMeta<typeof Header>;

const HeaderTemplate : ComponentStory<typeof Header> = (args) => <Header {...args}/>

export const Home = HeaderTemplate.bind({})

Home.args = {
  icon: homeOutline,
  name: "Home",
  collapsible: true,
  mode: "ios"
}


