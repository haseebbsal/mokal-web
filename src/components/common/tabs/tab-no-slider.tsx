import BaseButton from "@/components/common/base-button";
import { TabNoSliderProps } from "@/utils/types";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function TabNoSlider({ title, description }: TabNoSliderProps) {
    return <div className="flex flex-col gap-4 items-center text-center p-4">
        {title}
        <div className="flex flex-col gap-1">
            {description.map((e) => <p key={e} className="text-text-gray">{e}</p>)}
        </div>
        <BaseButton extraClass="!min-w-[10rem] flex justify-between">Learn More <MdKeyboardDoubleArrowRight className="text-lg" /></BaseButton>
    </div>
}