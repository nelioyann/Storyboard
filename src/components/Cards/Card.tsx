import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';
import React from 'react';
import styled, { css } from 'styled-components';
import { ColorLabelsEnum, Label, SpacingEnum } from '../../theme/globalStyles';
import Heading from '../Headings/Heading';

interface ICard {
    title?: string;
    subtitle?: string;
    bodyText?: string;
    imageUrl?: string;
    size?: "small" | "full";
}

interface CardProps {
    $imageUrl?: string;
    $size?: "small" | "full";
}

enum CardSizesEnum  {
    "small" = "20em",
    "full" = "100%"
}
const StyledCard = styled(IonCard) <CardProps>`
    ${({ $imageUrl }) =>
        $imageUrl !== "" &&
        css`
            background-image: ${`url(${$imageUrl})`};
            background-repeat: no-repeat;
            background-size: cover;
        `
    }
    ${({ $size }) =>
        $size !== undefined &&
        css`
            max-width: ${CardSizesEnum[$size]};
        `
    }
    aspect-ratio: 1/1;
    border-radius: 1em;
`

const StyledCardHeader = styled(IonCardHeader)`
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.8) 100%);
`
const StyledCardContent = styled(IonCardContent)`
    height: calc(60px + var(--ion-safe-area-top));
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 100%);
`

const Card: React.FC<ICard> = ({ bodyText, title = "Title", subtitle = "Subtitle", imageUrl = "https://picsum.photos/300", size = "small" }) => {
    return (
        <StyledCard button={true} mode="ios" $imageUrl={imageUrl} $size={size}>
            <StyledCardHeader>
                <Heading level="4" color={ColorLabelsEnum.LIGHT}>{title}</Heading>
                <Heading level="6" color={ColorLabelsEnum.LIGHT}>{subtitle}</Heading>
            </StyledCardHeader>
            <StyledCardContent>
                <Label color={ColorLabelsEnum.LIGHT}>{bodyText}</Label>
            </StyledCardContent>
        </StyledCard>);
};

export default Card;
