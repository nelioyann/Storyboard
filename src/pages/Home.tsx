import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Switcher, Box, Cover } from '../layouts';
// import { SpacingEnum } from '../theme/globalStyles';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Cover minHeight="90vh">
          <Box data-centered></Box>
          <Box></Box>
        </Cover>
      </IonContent>
    </IonPage>
  );
};

export default Home;
