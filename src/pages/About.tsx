import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Cards/Card';
import { Grid } from '../layouts';
import './Home.css';

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">About</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <Grid min="15em" space="0">
                    <Card size="full"/>
                    <Card size="full"/>
                    <Card size="full"/>
                    <Card size="full"/>
                    <Card size="full"/>
                </Grid>
            </IonContent>
        </IonPage>
    );
};

export default About;
