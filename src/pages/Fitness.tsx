import { IonPage, IonContent, IonCard, IonicSlides } from '@ionic/react';
import { bookmark, calendar, heart, medalOutline, play } from 'ionicons/icons';
import React from 'react';
import Button from '../components/Buttons/Button';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { Box, Cluster, Stack, Switcher } from '../layouts';
import { ColorLabelsEnum, Label, SpacingEnum } from '../theme/globalStyles';
import Face1 from "../data/fitness/one.svg"
import Face2 from "../data/fitness/two.svg"
import Face3 from "../data/fitness/three.svg"
import Face4 from "../data/fitness/four.svg"
import Face5 from "../data/fitness/five.svg"
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Swiper as SwiperInterface } from 'swiper';
import Card from '../components/Cards/Card';
import Tabs, { ITab } from '../ui/Content/Tabs/Tabs';
import Home from './Home';
import { BreakpointsEnum } from '../ui/SplitPane/MainRoutes';
// import { BreakpointsEnum } from '../ui/SplitPane/SplitPane';


export interface IFitness {

}

const options = {
    autoplay: false,
    keyboard: true,
    pagination: false,
    scrollbar: false,
    zoom: true,
    slidesPerView: 3.5,
    spaceBetween: 10,
    watchSlidesProgress: false,
}
const SwiperModules = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides];

const tabs: ITab[] = [
    {
        id: 'home',
        path: '#',
        label: '',
        icon: heart,
        Component: Home,
        isTab: true,
    },
    {
        id: 'calendar',
        path: '#',
        label: '',
        icon: calendar,
        Component: Home,
        isTab: true,

    },
    {
        id: 'rewards',
        path: '#',
        label: '',
        icon: medalOutline,
        Component: Home,
        isTab: true
    },
    {
        id: 'bookmarks',
        path: '#',
        label: '',
        icon: bookmark,
        Component: Home,
        isTab: true
    },
]

const Fitness = ({ }: IFitness) => {
    const pictures = [Face1, Face2, Face3, Face4, Face5, Face1, Face2, Face3, Face4, Face5]

    return (
        <IonPage>
            <Header label="" noBorder={true} mode="md" />
            <IonContent fullscreen>
                <Stack space={SpacingEnum.s2} >
                    <Box borderWidth='0'>
                        <Heading level="1">Select Workout</Heading>
                    </Box>
                    <Box padding={"0"} borderWidth='0'>
                        <Swiper modules={SwiperModules} {...options} >
                            {pictures.map((picture, i) => (
                                <SwiperSlide key={`pictureFitness${i}`} >
                                    <Card style={{ background: "rgba(0, 0, 0, 0.03)", boxShadow: " 0 0 0 1em rgba(0, 0, 0, 0.05)", borderRadius: "50%", padding: "" }} layout="simple" title={""} subtitle={""} imageUrl={picture} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                    <Box borderWidth='0'>
                        <Stack>
                            <IonCard style={{ borderRadius: "2em", background: "#C3E8FE" }} button={true} mode="ios" className="ion-padding  ion-no-margin">
                                <Heading level="2">Yoga</Heading>
                                <Label>with Daniel Robertson</Label>
                                <Button color={ColorLabelsEnum.LIGHT} size="default" shape="round" expand={undefined} icon={play} label="25 min" />
                            </IonCard>
                            <IonCard style={{ borderRadius: "2em", background: "#FEDCFE" }} button={true} mode="ios" className="ion-padding ion-no-margin">
                                <Heading level="2">Drill</Heading>
                                <Label>with Jany Fox</Label>
                                <Button color={ColorLabelsEnum.LIGHT} size="default" shape="round" expand={undefined} icon={play} label="25 min" />
                            </IonCard>
                        </Stack>
                    </Box>
                </Stack>
                <Tabs tabs={tabs} noBorder={true} contentId="fitnessTab" when={BreakpointsEnum.md} />
            </IonContent>
        </IonPage>
    );
};

export default Fitness;
