import BaseSlider from "../common/base-slider";
import BlogPost from "../common/blog-post";
import LinearGradientText from "../common/linear-gradient-text";
import { responsiveWhoWeAre } from "./main-blog";

interface TestimonialsProps {
    header: [{ Value: string, Highlight: boolean }],
    description?:string,
    testimonials?:[{_id:string,name:string,_createdAt:string,imageUrl:string,description:string,rating:number}]
}

export default function Testimonials({testimonials,header,description}:TestimonialsProps) {
    return (
        <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
            <h1 className="font-bold sm:text-[2.3rem] text-[1.5rem]">
                {header.map((e) => {
                    if (e.Highlight) {
                        return <LinearGradientText extraClass="mr-2" key={e.Value} text={e.Value} />
                    }
                    return <span className="mr-2" key={e.Value}>{e.Value}</span>
                })}
            </h1>
            <p className="text-text-gray">{description}</p>
            <div className="w-full">
                <BaseSlider extraSliderClass="min-h-[20rem]" renderDotsOutside={false} showDots renderArrowsWhenDisabled={false} renderButtonGroupOutside={false} extraResponsive={responsiveWhoWeAre}>
                    {testimonials!.map((el, index) => <BlogPost rating={el.rating} description={el.description} name={el.name} imageUrl={el.imageUrl} createdAt={el._createdAt} key={index + Math.random()} index={index} />)}
                </BaseSlider>
            </div>
        </div>
    )
}