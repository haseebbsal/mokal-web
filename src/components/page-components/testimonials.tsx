import BaseSlider from "../common/base-slider";
import BlogPost from "../common/blog-post";
import LinearGradientText from "../common/linear-gradient-text";
import { responsiveWhoWeAre } from "./main-blog";
import { useTranslate } from "@/providers/locale-provider";

interface TestimonialsProps {
    header: [{ Value: { en: string, fr: string }, Highlight: boolean }],
    description?: { en: string, fr: string },
    testimonials?: [{ _id: string, name: { en: string, fr: string }, _createdAt: string, imageUrl: string, description: { en: string, fr: string }, rating: number }]
}

export default function Testimonials({ testimonials, header, description }: TestimonialsProps) {
    const t = useTranslate();
    return (
        <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
            <div className="font-bold sm:text-[2.3rem] text-[1.5rem]">
                {header.map((e) => {
                    if (e.Highlight) {
                        return <LinearGradientText extraClass="mr-2" key={t(e.Value)} text={t(e.Value)} />
                    }
                    return <span className="mr-2" key={t(e.Value)}>{t(e.Value)}</span>
                })}
            </div>
            <p className="text-text-gray">{t(description)}</p>
            <div className="w-full">
                <BaseSlider extraSliderClass="min-h-[20rem]" renderDotsOutside={false} showDots renderArrowsWhenDisabled={false} renderButtonGroupOutside={false} extraResponsive={responsiveWhoWeAre}>
                    {testimonials!.map((el, index) => <BlogPost rating={el.rating} description={t(el.description)} name={t(el.name)} imageUrl={el.imageUrl} createdAt={el._createdAt} key={index + Math.random()} index={index} />)}
                </BaseSlider>
            </div>
        </div>
    )
}