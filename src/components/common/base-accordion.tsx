import { BaseAccordionProps } from "@/utils/types"
import { Accordion } from "@heroui/react"

export default function BaseAccordion({children,...props}:BaseAccordionProps){
    return (
        <Accordion {...props} >
            {children}
        </Accordion>
    )
}