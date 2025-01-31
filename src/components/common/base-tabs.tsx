'use client'
import { TabsProps } from "@/utils/types"
import { Tab, Tabs } from "@heroui/tabs"
import { useState } from "react"


function Title(title: string, index: number, activeKey: number, lengthOfKeys: number,titleExtraClass?:string) {
    if (activeKey == index) {
        if (index == 0) return (<div className="relative sm:w-full w-[13rem] h-[2rem]" style={{ backgroundImage: "url('/button-covers/right-blue.svg')", backgroundRepeat: "no-repeat", backgroundSize: "100%,100%" }}>
            <div className=" h-full items-center flex justify-center">
                <p className={titleExtraClass?"text-text-blue":""}>{title}</p>
            </div>
        </div>)

        if (index == lengthOfKeys) return (<div className="relative sm:w-full w-[13rem] h-[2rem]" style={{ backgroundImage: "url('/button-covers/left-blue.svg')", backgroundRepeat: "no-repeat", backgroundSize: "100%,100%" }}>
            <div className=" h-full items-center flex justify-center">
                <p className={titleExtraClass?"text-text-blue":""}>{title}</p>
            </div>
        </div>)

        if (index % 2 == 0) return (<div className="relative sm:w-full w-[13rem] h-[2rem]" style={{ backgroundImage: "url('/button-covers/even.svg')", backgroundRepeat: "no-repeat", backgroundSize: "100%,100%" }}>
            <div className=" h-full items-center flex justify-center">
                <p className={titleExtraClass?"text-text-blue":""}>{title}</p>
            </div>
        </div>)

        return (<div className="relative sm:w-full w-[13rem] h-[2rem]" style={{ backgroundImage: "url('/button-covers/odd.svg')", backgroundRepeat: "no-repeat", backgroundSize: "100%,100%" }}>
            <div className=" h-full items-center flex justify-center">
                <p className={titleExtraClass?"text-text-blue":""}>{title}</p>
            </div>
        </div>)
    }

    if (index - 1 == activeKey) {
        if (activeKey % 2 == 0) return (<div className="relative sm:w-full w-[13rem] h-[2rem]" style={{ backgroundImage: "url('/button-covers/left-grey-up.svg')", backgroundRepeat: "no-repeat", backgroundSize: "100%,100%" }}>
            <div className=" h-full items-center flex justify-center">
                <p className={titleExtraClass?"text-text-blue":""}>{title}</p>
            </div>
        </div>)

        return (<div className="relative sm:w-full w-[13rem] h-[2rem]" style={{ backgroundImage: "url('/button-covers/left-grey-down.svg')", backgroundRepeat: "no-repeat", backgroundSize: "100%,100%" }}>
            <div className=" h-full items-center flex justify-center">
                <p className={titleExtraClass?"text-text-blue":""}>{title}</p>
            </div>
        </div>)
    }

    if (index + 1 == activeKey) {

        if (activeKey == lengthOfKeys) return (<div className="relative sm:w-full w-[13rem] h-[2rem]" style={{ backgroundImage: "url('/button-covers/right-grey-up.svg')", backgroundRepeat: "no-repeat", backgroundSize: "100%,100%" }}>
            <div className=" h-full items-center flex justify-center">
                <p className={titleExtraClass?"text-text-blue":""}>{title}</p>
            </div>
        </div>)

        if (activeKey % 2 == 0) return (<div className="relative sm:w-full w-[13rem] h-[2rem]" style={{ backgroundImage: "url('/button-covers/right-grey-up.svg')", backgroundRepeat: "no-repeat", backgroundSize: "100%,100%" }}>
            <div className=" h-full items-center flex justify-center">
                <p className={titleExtraClass?"text-text-blue":""}>{title}</p>
            </div>
        </div>)

        return (<div className="relative sm:w-full w-[13rem] h-[2rem]" style={{ backgroundImage: "url('/button-covers/right-grey-down.svg')", backgroundRepeat: "no-repeat", backgroundSize: "100%,100%" }}>
            <div className=" h-full items-center flex justify-center">
                <p className={titleExtraClass?"text-text-blue":""}>{title}</p>
            </div>
        </div>)
    }

    return (<div className="relative sm:w-full w-[13rem] h-[2rem] rounded-r-lg bg-[#FAFAFA]" >
        <div className=" h-full items-center flex justify-center">
            <p className={titleExtraClass?"text-text-blue":""}>{title}</p>
        </div>
    </div>)
}

export default function BaseTabs({ keys }: TabsProps) {
    const [key, setKey] = useState<number>(0)

    return (
        <Tabs aria-label="Tabs sizes" onSelectionChange={(key) => { setKey(key as number) }} className="w-full" disableCursorAnimation classNames={{ tabList: "!bg-transparent gap-0 w-full", tab: "p-0", tabContent: "group-data-[selected=true]:text-base-blue group-data-[selected=true]:font-bold w-full" ,panel:"w-full"}}>
            {keys.map((e, index) =>
                <Tab key={index} title={Title(e.title, index, key, keys.length - 1,e.titleExtraClass)}>
                    {e.component}
                </Tab>
            )}
        </Tabs>
    )
}