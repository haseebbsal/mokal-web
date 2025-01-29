import { reasonsToChooseUs } from "@/utils/constants";
import Image from "next/image";
import LinearGradientText from "../common/linear-gradient-text";
import BaseSlider from "../common/base-slider";

export default function ReasonsToChooseUs() {
    return (
        <div className="bg-base-shadeBlue  p-8 flex flex-col gap-4 items-center ">
            <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">Some Reasons To <LinearGradientText text="Choose Us" /></h1>
            <div className="sm:flex hidden gap-4 w-[80%] flex-wrap">
                {reasonsToChooseUs.map((e) =>
                    <div key={e.title} className="flex flex-col gap-2 bg-white shadow-lg flex-[1_1_23rem] rounded-xl p-4">
                        <Image src={e.imageSrc} alt={e.title} width={50} height={50} />
                        <LinearGradientText extraClass="font-bold text-2xl" text={e.title} />
                        <p className="text-text-gray">{e.description}</p>
                    </div>
                )}
            </div>
            <BaseSlider extraClass="sm:hidden block">
                {reasonsToChooseUs.map((e) =>
                    <div key={e.title} className="h-full flex px-4">
                        <div className="flex flex-col gap-2 h-full bg-white shadow-lg flex-[1_1_23rem] rounded-xl p-4">
                            <Image src={e.imageSrc} alt={e.title} width={50} height={50} />
                            <LinearGradientText extraClass="font-bold text-2xl" text={e.title} />
                            <p className="text-text-gray">{e.description}</p>
                        </div>
                    </div>
                )}
            </BaseSlider>
        </div>
    )
}