'use client'

import { BreadcrumbItem, Breadcrumbs } from "@heroui/react"
import { RiHome5Line } from "react-icons/ri"


export default function BaseBreadCrumb({items}:{items:string[]}) {
    return (
        <Breadcrumbs classNames={{ list: "justify-center" }} itemClasses={{ separator: "!text-base-purple !font-bold text-2xl", item: "!font-bold !text-base-blue !text-lg" }}>
            <BreadcrumbItem><RiHome5Line /></BreadcrumbItem>
            {items.map((e)=><BreadcrumbItem key={e}>{e}</BreadcrumbItem>)}

        </Breadcrumbs>
    )
}