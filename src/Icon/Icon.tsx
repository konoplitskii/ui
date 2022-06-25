import {FC} from "react";
import {IIcon} from "./interface";

import Error from "./icons/Error";
import Success from "./icons/Success";
import EyeOpen from "./icons/EyeOpen";
import EyeClose from "./icons/EyeClose";
import Present from "./icons/Present";

const Icons = {
    "Error":Error,
    "Success":Success,
    "EyeOpen":EyeOpen,
    "EyeClose":EyeClose,
    "Present":Present,
}

const Icon:FC<IIcon> = ({icon, width, height, color, className})=> {
    if(Icons[icon]) {
        const _Icon = Icons[icon];
        return <_Icon width={width} height={height} color={color} className={className} />
    } else {
        console.error(`Icon ${icon} not found`);
        return null;
    }
}

export default Icon;