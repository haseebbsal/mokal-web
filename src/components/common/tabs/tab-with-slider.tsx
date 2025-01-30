import BaseButton from "@/components/common/base-button";
import BaseSlider from "@/components/common/base-slider";
import { TabWithSliderProps } from "@/utils/types";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";




export default function TabWithSlider({ title, description, carousel,hideButton=false }: TabWithSliderProps) {
    return <div className="flex flex-col gap-4 w-full items-center text-center p-4">
        {title}
        <div className="flex flex-col gap-1">
            {description.map((e) => <p key={e} className="text-text-gray">{e}</p>)}
        </div>
        <BaseSlider >
            {carousel.map((e) => <div key={e.imageSrc} className='px-4 h-full'>
                <div className='flex flex-col gap-4 p-8 shadow-lg h-full rounded-2xl text-center items-center'>
                    <Image src={e.imageSrc} alt='artboard' width={200} height={200} />
                    <p>{e.description}</p>
                </div>
            </div>)}
        </BaseSlider>
        {!hideButton && <BaseButton extraClass="!min-w-[10rem] flex justify-between">Learn More <MdKeyboardDoubleArrowRight className="text-lg" /></BaseButton>}
    </div>
}

