import React, { useState } from 'react';
import {  IonContent, IonicSlides, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Swiper as SwiperInterface } from 'swiper';

import "./Slides.css"

import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';
import Container from '../../ui/Content/Content';

export interface ISlides {
    children: React.ReactNode
    onSlideChange?: () => {}
}


const Slides: React.FC<ISlides> = ({onSlideChange}) => {
    const [slidesRef, setSlidesRef] = useState<SwiperInterface>();

    return (
            <Swiper slidesPerView={1} modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]}
                autoplay={false}
                keyboard={true}
                pagination={true}
                scrollbar={false}
                zoom={true}
                onSlideChange={onSlideChange}
                >
                <SwiperSlide>

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum rerum iste nostrum temporibus quam sequi quasi, tempore accusamus. Dolor at ad vero nihil est quibusdam blanditiis provident delectus numquam iure.
                </SwiperSlide>
                <SwiperSlide>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum rerum iste nostrum temporibus quam sequi quasi, tempore accusamus. Dolor at ad vero nihil est quibusdam blanditiis provident delectus numquam iure.

                </SwiperSlide>
                <SwiperSlide>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum rerum iste nostrum temporibus quam sequi quasi, tempore accusamus. Dolor at ad vero nihil est quibusdam blanditiis provident delectus numquam iure.

                </SwiperSlide>
            </Swiper>
    )
}

export default Slides
