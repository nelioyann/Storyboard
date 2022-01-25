import { IonButton, IonIcon, IonSpinner } from "@ionic/react";
import React, { HTMLAttributes } from "react";
import { ButtonText } from "../../theme/globalStyles";

interface IButton extends HTMLAttributes<HTMLIonButtonElement> {
  /**
   *  Provide a text for the button element
   * 
   */
  children: React.ReactNode;
  isLoading?: boolean;
  shape?: "round";
  //   variant: "primary" | "secondary";
  icon?: string;
  expand?: "block" | "full" | undefined;
  mode?: "ios" | "md";
  size?: "small" | "default" | "large";
  fill?: "clear" | "outline" | "solid";
  iconSlot?: "start" | "end";
  color?: "primary" | "secondary" | "medium" | "tertiary" | "light" | "dark"; // TODO: add the rest
}

const Button: React.FC<IButton> = ({
  children,
  isLoading = false,
  fill = "solid",
  color = "primary",
  icon,
  shape,
  iconSlot = "start",
  ...props
}) => {
  return (
    <IonButton style={{ position: "relative" }} fill={fill} shape={shape} color={color}  {...props}>
      {isLoading
        && (
          <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <IonSpinner style={{ fontSize: "1em" }} name="crescent" />
          </div>
        )
      }
      <>
        {icon && <IonIcon style={{ visibility: isLoading ? "hidden" : "visible", marginRight: "0.5em", margin: !children ? 0 : undefined}} icon={icon} slot={iconSlot}/>}
        {children && <ButtonText size={props.size ? props.size : "default"} isVisible={!isLoading}>
          {children}
        </ButtonText>}
      </>
    </IonButton>
  );
};

export default Button;
