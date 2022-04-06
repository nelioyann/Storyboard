import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Cards/Card';
import Header from '../components/Headers/Header';
import { Grid } from '../layouts';
import Content from '../ui/Content/Content';
import './Home.css';

const About: React.FC = () => {
    return (
        <IonPage>
            <Header label="About" mode="ios"/>
            <Content>
                <Grid min="15em" space="0">
                    <Card size="full"/>
                    <Card size="full"/>
                    <Card size="full"/>
                    <Card size="full"/>
                    <Card size="full"/>
                </Grid>
            </Content>
        </IonPage>
    );
};

export default About;
