import { LinearGradientTextProp } from "@/utils/types";

export default function LinearGradientText({text,extraClass}:LinearGradientTextProp){
    return <span className={`text-transparent bg-gradientText bg-clip-text ${extraClass}`} >{text}</span>
}