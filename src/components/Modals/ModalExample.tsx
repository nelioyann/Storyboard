import React, { useState } from 'react';
import { IonModal, IonButton, IonContent, createAnimation } from '@ionic/react';
import { dropEnterAnimation, dropLeaveAnimation, fadeEnterAnimation, fadeLeaveAnimation } from '../CustomAnimations/Modals';
import Content from '../../ui/Content/Content';

export const ModalExample: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <IonModal
                isOpen={showModal}
                enterAnimation={dropEnterAnimation}
                leaveAnimation={dropLeaveAnimation}
                onDidDismiss={() => setShowModal(false)}
                mode="ios"
            >
                <Content>
                    <p>This is modal content</p>
                    <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </Content>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
        </>
    );
};