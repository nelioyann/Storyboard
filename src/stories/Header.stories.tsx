import {  addCircleOutline, personCircle, searchOutline, timeOutline } from 'ionicons/icons';
import React from 'react';

// Button.stories.tsx

import  Header  from '../components/Headers/Header';


export default {
  title: "Headers",
  component: Header
}


export const Accueil: React.VFC<{}> = () => <Header name="Bonjour" icon={timeOutline}/>;
export const Parcourir: React.VFC<{}> = () => <Header name="Parcourir" icon={searchOutline}/>;
export const Suivi: React.VFC<{}> = () => <Header name="Suivi" icon={addCircleOutline}/>;
export const Espace: React.VFC<{}> = () => <Header name="Mon Espace" icon={personCircle}/>;



// import { Story, Meta } from '@storybook/react';

// import { Header, HeaderProps } from './Header';

// export default {
//   title: 'Example/Header',
//   component: Header,
// } as Meta;

// const Template: Story<HeaderProps> = (args) => <Header {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
