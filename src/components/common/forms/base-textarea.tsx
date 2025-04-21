import { Textarea, TextAreaProps } from "@heroui/react";

export default function BaseTextArea({...props}:TextAreaProps){
    return(
        <Textarea {...props} />
    )
}