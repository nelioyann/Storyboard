import React from 'react'
import Avatar from "boring-avatars";

interface IBoringAvatar {
    name?: string;
    square?: boolean;
    size?: string;
    variant?: "marble" | "beam" | "pixel" | "sunset" | "ring" | "bauhaus";
    colors?: string[];
}
const BoringAvatar = (props: IBoringAvatar) => {
    return (
        <Avatar {...props} />
    )
}

export default BoringAvatar