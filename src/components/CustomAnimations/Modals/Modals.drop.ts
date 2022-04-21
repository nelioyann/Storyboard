import { createAnimation } from "@ionic/react";

export const dropEnterAnimation = (baseEl: any) => {

    const backdropAnimation = createAnimation()
        .addElement(baseEl.shadowRoot.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
        .addElement(baseEl.shadowRoot.querySelector('.modal-wrapper')!)
        .keyframes([
            { offset: 0, opacity: '0', transform: 'translateY(-100vh)' },
            { offset: 1, opacity: '0.99', transform: 'translateY(0)' }
        ]);

    return createAnimation()
        .addElement(baseEl)
        .easing(' cubic-bezier(0.165, 0.840, 0.440, 1.000)')
        .duration(600)
        .addAnimation([backdropAnimation, wrapperAnimation]);
}

export const dropLeaveAnimation = (baseEl: any) => {
    
    const backdropAnimation = createAnimation()
        .addElement(baseEl.shadowRoot.querySelector('ion-backdrop')!)
        .fromTo('opacity','var(--backdrop-opacity)', '0.01');

    const wrapperAnimation = createAnimation()
        .addElement(baseEl.shadowRoot.querySelector('.modal-wrapper')!)
        .keyframes([
            { offset: 0, opacity: '0.99', transform: 'translateY(0)' },
            { offset: 1, opacity: '0', transform: 'translateY(80vh)' }
        ]);

    return createAnimation()
        .addElement(baseEl)
        .easing(' cubic-bezier(0.165, 0.840, 0.440, 1.000)')
        .duration(900)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }