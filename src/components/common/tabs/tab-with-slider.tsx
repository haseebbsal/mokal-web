import BaseSlider from "@/components/common/base-slider";
import { TabWithSliderProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";




export default function TabWithSlider({ title, description, carousel,buttons}: TabWithSliderProps) {
    return <div className="flex flex-col gap-4 w-full items-center text-center p-4">
        {title}
        <div className="flex flex-col gap-1">
            {description.map((e) => <p key={e} className="text-text-gray">{e}</p>)}
        </div>
        <BaseSlider >
            {carousel.map((e) => <div key={e.imageSrc} className='px-4 h-full'>
                <div className='flex flex-col bg-white gap-4 p-8 shadow-lg h-full rounded-2xl text-center items-center'>
                    <Image src={e.imageSrc} alt='artboard' width={200} height={200} />
                    <p>{e.description}</p>
                </div>
            </div>)}
        </BaseSlider>
        {buttons && buttons?.length > 0 && <div className="flex gap-2">{buttons?.map((e) => {
            if (e.withBackground) {
                return <Link key={e.url.current + e.text} href={e.url.current} className="bg-base-purple min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-white border-2 py-2 ">{e.text}<MdKeyboardDoubleArrowRight className="text-lg" /></Link>
            }
            return <Link key={e.url.current + e.text} href={e.url.current} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple py-2">{e.text}<MdKeyboardDoubleArrowRight className="text-lg" /></Link>
        })}</div>}
        {/* {!hideButton && <BaseButton extraClass="!min-w-[10rem] flex justify-between">Learn More <MdKeyboardDoubleArrowRight className="text-lg" /></BaseButton>} */}
    </div>
}

