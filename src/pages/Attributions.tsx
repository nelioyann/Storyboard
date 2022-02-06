import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Headers/Header';
import './Home.css';
import {ReactComponent as FSC} from '../data/icons/book-open.svg'
import SvgIcon from '../components/SvgIcon/SvgIcon';
import { ColorVariablesEnum } from '../theme/globalStyles';

const Attributions: React.FC = () => {
    return (
        <IonPage>
            <Header label="Attributions" mode="ios"/>
            <IonContent fullscreen>
                <SvgIcon Icon={FSC} size={"5em"} color={ColorVariablesEnum.PRIMARY}/>
            </IonContent>
        </IonPage>
    );
};

export default Attributions;
