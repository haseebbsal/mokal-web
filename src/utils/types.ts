import { responsive } from "@/components/common/base-slider";
import { AccordionProps, ButtonProps, CheckboxProps, InputProps } from "@heroui/react";
import { CSSProperties, ReactNode } from "react";
import { Control } from "react-hook-form";
import { CarouselProps } from "react-multi-carousel";


export interface BaseInputProps extends InputProps {
    control: Control
    extraClass?: string
}

export interface BaseButtonProps extends ButtonProps {
    extraClass?: string
}

export interface NavbarMenuSetting {
    name: string
    isDropDown?: boolean
    isButton?: boolean
    link?: string
    extraClass?: string
    index?: number
    style?: CSSProperties
}

export interface MegaMenuProps {
    show: null | number
}

export type TabItemProp = { title: string, component: ReactNode, titleExtraClass?: string }[]


export interface TabsProps {
    keys: TabItemProp
}

export interface TabNoSliderProps {
    title: ReactNode
    description: string[]
}

type CarouselData = { imageSrc: string, description: string }[]

export interface TabWithSliderProps {
    title: ReactNode
    description: string[]
    carousel: CarouselData,
    hideButton?: boolean
}

export interface BaseSliderProps extends Omit<CarouselProps, 'responsive'> {
    children: ReactNode,
    extraClass?: string,
    extraResponsive?: typeof responsive
    extraSliderClass?: string
}

export interface BaseAccordionProps extends AccordionProps {
    anything?: string
}

export interface BaseFileProps extends InputProps {
    labelClass?: string
    bgColor?:string
}

export type LinearGradientTextProp = { text: string, extraClass?: string }


export interface BaseCheckboxProps extends CheckboxProps {
    anything?: string
}

export interface CourierServiceProps {
    bgColor?: string
}


export interface HearFromUsAndBlogsProps {
    hideBlogs?: boolean
    hideHearFromUs?: boolean
    bgHearFromUs?: string
    bgBlogs?: string
}