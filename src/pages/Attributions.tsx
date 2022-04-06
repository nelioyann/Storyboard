import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Headers/Header';
import './Home.css';
import {ReactComponent as FSC} from '../data/icons/book-open.svg'
import SvgIcon from '../components/SvgIcon/SvgIcon';
import { ColorVariablesEnum } from '../theme/globalStyles';
import Content from '../ui/Content/Content';

const Attributions: React.FC = () => {
    return (
        <IonPage>
            <Header label="Attributions" mode="ios"/>
            <Content >
                <SvgIcon Icon={FSC} size={"5em"} color={ColorVariablesEnum.PRIMARY}/>
            </Content>
        </IonPage>
    );
};

export default Attributions;
