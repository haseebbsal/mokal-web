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

export type TabItemProp = [{
        header?: [{ Value: string, Highlight: boolean }],
        imageUrl?: string,
        buttons?: [{ withBackground: boolean, url: { current: string }, text: string }],
        name: string, description?: string,
        cards: [{ imageUrl: string, description: string }]
    }]



export interface TabsProps {
    keys: TabItemProp
    variation:number
}

export interface TabNoSliderProps {
    title: ReactNode
    description: string[]
    buttons?: [{ withBackground: boolean, url: { current: string }, text: string }]
}

type CarouselData = { imageSrc: string, description: string }[]

export interface TabWithSliderProps {
    title: ReactNode
    description: string[]
    carousel: CarouselData,
    hideButton?: boolean
    buttons?: [{ withBackground: boolean, url: { current: string }, text: string }],
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
    bgColor?: string
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


export type countriesType = { name: string, coords: number[], iconUrl: string }[]

export interface configData {
    socialLinks: { [x: string]: string }
    phoneNumber: string
    countries?: countriesType
    imageUrl: string
    copyright: string
    address: { lat: number, lng: number }
    email: string
}

export interface HeaderAndCards {
    header: { Highlight?: boolean, Value: string }[]
    cards: {
        imageUrl: string
        heading: string
        description: string
    }[]
}

export type IndvidualBlog = { id: string, imageUrl: string, title: string, content: [{ text: string }][], publishedAt: string }

export type Blogs = IndvidualBlog[]

export interface FAQS {
    header: { Highlight: boolean, Value: string }[]
    questions: { answer: string, question: string }[]
    description: string

}

export interface PagesContent {
    _id: string,
    slider: [{ header?: [{ Value: string, Highlight: boolean }], imageUrl?: string, buttons?: [{ withBackground: boolean, url: { current: string }, text: string }], name: string, description?: string, slider: [{ header?: [{ Value: string, Highlight: boolean }], imageUrl?: string, buttons?: [{ withBackground: boolean, url: { current: string }, text: string }], name: string, description?: string, cards: [{ imageUrl: string, description: string }] }] }],
    cards: [] | [any],
    imageUrl?: string,
    buttons?: [any],
    title?: string,
    _type: string,
    content?: [] | [any],
    _updatedAt: string,
    description?: string,
    _createdAt?: string,
    header?: [any],
    _rev: string
    questions?:[{answer:string,question:string}]
    variation?:number,
    blogs?:[{_id:string,title:string,_createdAt:string,imageUrl:string}]
    testimonials?:[{_id:string,name:string,_createdAt:string,imageUrl:string,description:string,rating:number}]
    video:string
    images:[{imageUrl:string}]
}