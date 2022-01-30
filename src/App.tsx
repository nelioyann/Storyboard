import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/fonts.css';
import Tabs, { ITab } from './ui/Content/Tabs/Tabs';
import { homeOutline, informationOutline } from 'ionicons/icons';
import SplitPane, { BreakpointsEnum } from './ui/SplitPane/SplitPane';
import About from './pages/About';
import Attributions from './pages/Attributions';

setupIonicReact();

const tabs: ITab[] = [
  {
      id: 'home',
      path: '/tabs/home',
      label: 'Home',
      icon: homeOutline,
      component: Home,
      isTab: true,
  },
  {
      id: 'about',
      path: '/tabs/about',
      label: 'About',
      icon: informationOutline,
      component: About,
      isTab: true,

  },
  {
      id: 'attributions',
      path: '/attributions',
      label: 'Attributions',
      icon: informationOutline,
      component: Attributions,
      isTab: false
  },
]
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <SplitPane contentId="side" when={BreakpointsEnum.md} tabs={tabs}/>
      <Tabs tabs={tabs} contentId="tabs" when={BreakpointsEnum.md}/>
    </IonReactRouter>
  </IonApp>
);

export default App;
