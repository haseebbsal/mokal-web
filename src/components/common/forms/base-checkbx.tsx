'use client'

import { BaseCheckboxProps } from "@/utils/types"
import { Checkbox } from "@heroui/react"

export default function BaseCheckBox({children}:BaseCheckboxProps){
    return (
        <Checkbox>{children}</Checkbox>
        
    )
}