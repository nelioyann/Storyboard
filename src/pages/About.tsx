import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Cards/Card';
import Header from '../components/Headers/Header';
import { Grid } from '../layouts';
import './Home.css';

const About: React.FC = () => {
    return (
        <IonPage>
            <Header label="About" mode="ios"/>
            <IonContent fullscreen>
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
