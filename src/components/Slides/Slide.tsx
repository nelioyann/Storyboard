import React from 'react';
import { IonCard, IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';

export interface ISlide {
    children: React.ReactNode
}

const Slide: React.FC<ISlide> = ({ children }) => {
    return (
        <SwiperSlide>
            <IonCard>
                {children}
            </IonCard>
        </SwiperSlide>
    )
}

export default Slide
