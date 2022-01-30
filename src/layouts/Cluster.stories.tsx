import Cluster from './Cluster';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IonChip } from '@ionic/react';


export default {
    title: "Layouts/Cluster",
    component: Cluster,
    argTypes: {
        // onClick: {action: 'clicked'},
        as: {
            table: {
                disable: true,
            },
        },
        ref: {
            table: {
                disable: true,
            },
        },
        theme: {
            table: {
                disable: true,
            },
        },
        forwardedAs: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        space: "0",
        align: "flex-start",
        justify: "flex-start",
    }
} as ComponentMeta<typeof Cluster>;

//👇 We create a “template” of how args map to rendering
const BoxTemplate: ComponentStory<typeof Cluster> = (args) => (
    <Cluster {...args} >
        <IonChip color="primary">Hello</IonChip>
        <IonChip color="tertiary" outline>Hello World²</IonChip>
        <IonChip color="danger">Hello from the other side</IonChip>
        <IonChip color="primary">Hello</IonChip>
        <IonChip color="tertiary" outline>Hello World²</IonChip>
        <IonChip color="danger">Hello from the other side</IonChip>
        <IonChip color="primary">Hello</IonChip>
        <IonChip color="tertiary" outline>Hello World²</IonChip>
        <IonChip color="danger">Hello from the other side</IonChip>
        <IonChip color="primary">Hello</IonChip>
        <IonChip color="tertiary" outline>Hello World²</IonChip>
        <IonChip color="danger">Hello from the other side</IonChip>
        <IonChip color="primary">Hello</IonChip>
        <IonChip color="tertiary" outline>Hello World²</IonChip>
        <IonChip color="danger">Hello from the other side</IonChip>
    </Cluster>
);

//👇 We base new Cluster instances on our “template” 
// export const Primary = BoxTemplate.bind({})
export const Default = BoxTemplate.bind({})
// export const RecursiveBox = BoxTemplate.bind({})
// export const SplittedBox = BoxTemplate.bind({})

//👇 We adapt each instances by providing new attributes 

Default.args = {
}

// SplittedBox.args = {
//     splitAfter: 1
// }
// RecursiveBox.args = {
//     recursive: true
// }
