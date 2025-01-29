import { BaseInputProps } from "@/utils/types";
import { Input } from "@heroui/input";

export default function BaseInput({extraClass,...props}:BaseInputProps){
    return (
        <Input className={`  ${extraClass}`} {...props} />
    )
}