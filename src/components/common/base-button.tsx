'use client'

import { BaseButtonProps } from "@/utils/types"
import { Button} from "@heroui/button"

export default function BaseButton({extraClass,children,...props}:BaseButtonProps){


    return (
        <Button  className={` !bg-base-purple text-white !p-4  ${extraClass}`} {...props}>
            {children}
        </Button>
    )
}