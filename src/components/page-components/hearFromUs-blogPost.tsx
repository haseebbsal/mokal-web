import Image from "next/image";
import BaseSlider from "../common/base-slider";
import LinearGradientText from "../common/linear-gradient-text";
import BlogPost from "../common/blog-post";



export const responsiveWhoWeAre = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
        partialVisibilityGutter: 2000
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 2000
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 2000
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 2000
    }
};



export default function HearFromUsAndBlogs({ hideBlogs = false, hideHearFromUs = false, bgHearFromUs = "bg-white", bgBlogs = "bg-white" }: { hideBlogs?: boolean, hideHearFromUs?: boolean, bgHearFromUs?: string, bgBlogs?: string }) {
    return (
        <div>
            {!hideHearFromUs && <div className={`${bgHearFromUs} w-full`}>
                <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
                    <h1 className="font-bold sm:text-[2.3rem] text-[1.5rem]">Hear from Our <LinearGradientText text="Customers" /></h1>
                    <p className="text-text-gray">Discover how MGC Freight has transformed the logistics and shipping experience for businesses of all sizes. Real stories from our satisfied clients highlight the value of our efficient solutions and commitment to excellence.</p>
                    <div className="w-full">
                        <BaseSlider extraSliderClass="min-h-[20rem]" renderDotsOutside={false} showDots renderArrowsWhenDisabled={false} renderButtonGroupOutside={false} extraResponsive={responsiveWhoWeAre}>

                            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => <BlogPost key={index + Math.random()} index={index} />)}


                        </BaseSlider>
                    </div>
                </div>
            </div>}


            {!hideBlogs && <div className={`${bgBlogs} w-full`}>
                <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
                    <h1 className="font-bold sm:text-[2.3rem] text-[1.5rem]">Recent <LinearGradientText text="Blog" /> Posts</h1>
                    <p className="text-text-gray">Discover how MGC Freight has transformed the logistics and shipping experience for businesses of all sizes. Real stories from our satisfied clients highlight the value of our efficient solutions and commitment to excellence.</p>
                    <div className="w-full">
                        <BaseSlider extraResponsive={responsiveWhoWeAre}>
                            <div className="px-8">
                                <div className="p-4 text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2">
                                    <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                    <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                    <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                    <div className="flex gap-2 w-full items-center">
                                        <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                        <p className="text-sm text-black">Patrick</p>
                                    </div>
                                </div>
                            </div>


                            <div className="px-8">
                                <div className="p-4 text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2">
                                    <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                    <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                    <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                    <div className="flex gap-2 w-full items-center">
                                        <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                        <p className="text-sm text-black">Patrick</p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-8">
                                <div className="p-4 text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2">
                                    <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                    <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                    <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                    <div className="flex gap-2 w-full items-center">
                                        <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                        <p className="text-sm text-black">Patrick</p>
                                    </div>
                                </div>
                            </div>



                            <div className="px-8">
                                <div className="p-4 text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2">
                                    <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                    <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                    <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                    <div className="flex gap-2 w-full items-center">
                                        <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                        <p className="text-sm text-black">Patrick</p>
                                    </div>
                                </div>
                            </div>


                        </BaseSlider>
                    </div>
                </div>
            </div>}

        </div>
    )
}