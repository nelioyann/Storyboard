import styled, { css } from "styled-components";
import React, { useEffect } from "react";
import { ColorVariablesEnum, SpacingEnum } from "../theme/globalStyles";
export interface ReelProps {
  /**The width of each item (child element) in the reel */
  itemWidth?: string;
  /**The margin of each item (child element) in the reel */
  itemMargin?: string;
  /** The space between Reel ietms (child elements) */
  space?: string;
  /** The height of the Reel itself */
  reelHeight?: string;
  /** Whether to display the scrollbar */
  noBar?: boolean;

}

const ReelDefaultProps: ReelProps = {
  itemWidth: "25ch",
  space: "1rem",
  reelHeight: "auto",
  noBar: false,
  itemMargin: SpacingEnum.s0
}
const StyledReel = styled.div<ReelProps>`
    display: flex;
    height: ${props => props.reelHeight || ReelDefaultProps.reelHeight};
    overflow-x: auto ;
    overflow-y: hidden;

    scrollbar-color: ${ColorVariablesEnum.LIGHT} ${ColorVariablesEnum.DARK};
    
    &.overflowing{
      ${({ noBar }) => !noBar && css`
        padding-bottom: var(--s0, 1em);
      `}
    }
    ${({ noBar }) => noBar && css`
        scrollbar-width: none;
    `}

    &::-webkit-scrollbar {
      height: 1rem;
      ${({ noBar }) => noBar && css`
        display: none;
    `}
    }
    &::-webkit-scrollbar-track {
      background-color: ${ColorVariablesEnum.DARK};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${ColorVariablesEnum.DARK};
      background-image: linear-gradient(
        ${ColorVariablesEnum.DARK} 0,
        ${ColorVariablesEnum.DARK} 0.25rem,
        ${ColorVariablesEnum.LIGHT} 0.25rem,
        ${ColorVariablesEnum.LIGHT} 0.75rem,
        ${ColorVariablesEnum.DARK} 0.75rem
      ) ;
    }

    & > img {
      height: 100% ;
      flex-basis: auto ;
      width: auto;
    }
    border-style: solid ;
    border-width: ${SpacingEnum.borderThicc} ;
    & > * {
      flex: 0 0 ${props => props.itemWidth || ReelDefaultProps.itemWidth};
      margin: ${props => props.itemMargin || ReelDefaultProps.itemMargin};
      /* margin: ${SpacingEnum.s0} ;
      margin-right: 0 ; */
    }
    & > * + * {
      margin-left: ${props => props.space || ReelDefaultProps.space};
    }
    &::after{
      content: "";
      flex-basis: ${SpacingEnum.s0} ;
      flex-shrink: 0 ;
    }

`
const Reel: React.FC<ReelProps> = ({ itemWidth, space, reelHeight, noBar, itemMargin, ...props }) => {
  useEffect(() => {
    const reels = Array.from(document.querySelectorAll(".reel"));
    const toggleOverflowClass = (reel: HTMLDivElement) => {
      reel.classList.toggle("overflowing", reel.scrollWidth > reel.clientWidth);
    }
    reels.forEach(reel => {
      if ("ResizeObserver" in window) {
        new ResizeObserver(entries => {
          toggleOverflowClass(entries[0].target as HTMLDivElement);
        }).observe(reel);
      }
      if ("MutationObserver" in window) {
        new MutationObserver(mutations => {
          toggleOverflowClass(mutations[0].target as HTMLDivElement);
        }).observe(reel, { childList: true });
      }
    })
  }, [noBar])



  return (
    <StyledReel className="reel" itemMargin={itemMargin} itemWidth={itemWidth} space={space} reelHeight={reelHeight} noBar={noBar}>
      {props.children}
    </StyledReel>
  )
}

Reel.defaultProps = ReelDefaultProps;
export default Reel;
