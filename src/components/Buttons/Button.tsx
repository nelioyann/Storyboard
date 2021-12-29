import { IonButton, IonSpinner } from "@ionic/react";
import React, { HTMLAttributes } from "react";

interface IButton extends HTMLAttributes<HTMLIonButtonElement> {
    /**
     *  Provide a text for the button element
     * 
     */
    children: React.ReactNode;
  isLoading?: boolean;
//   variant: "primary" | "secondary";
expand?: "block" | "full";
  mode: "ios" | "md";
  size?: "default" | "small" | "large";
  fill?: "clear" | "outline" | "solid";
  color?: "primary" | "secondary" | "medium" | "tertiary"| "light"| "dark"; // TODO: add the rest
}

const Button: React.FC<IButton> = ({
  children,
  isLoading = false,
  fill = "solid",
  expand = "block",
  color = "primary",
  ...props
}) => {
  return (
    <IonButton fill={fill} expand={expand} color={color} disabled={isLoading} {...props}>
      {isLoading ? <IonSpinner name="crescent" /> : children}
      
    </IonButton>
  );
};

export default Button;
