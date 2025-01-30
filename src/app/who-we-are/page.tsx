import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import ReasonsToChooseUs from "@/components/page-components/reasons-to-choose-us";
import HearFromUsAndBlogs from "@/components/page-components/hearFromUs-blogPost";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";



export default function WhoWeAre() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Who We Are" /> </h1>
                        <BaseBreadCrumb items={['Who We Are']}/>
                    </div>
                </div>

                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
                        <Image className="flex-1" src={'/images/flexible.svg'} alt="metrics" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[3rem] text-[1.5rem] font-bold">Efficient, Flexible, and Reliable Freight  <LinearGradientText extraClass="" text="Solutions" /></h1>
                            <p className="text-text-gray text-md">We work with a network of more than 160,000+ carriers to create greater supply chain efficiencies for our customers. This network, combined with our industry leading technology and unmatched service, has been the key to our growth, plain and simple.</p>
                            <div className="p-4 shadow-lg rounded-lg flex gap-4">
                                <Image src={'/icons/worldwide-delivery.svg'} alt="worldwide" width={50} height={50} />
                                <div className="flex flex-col gap-4 text-start">
                                    <p className="text-base-blue font-semibold">Our Future</p>
                                    <p>We will continue to grow through our commitment to be the leading service provider in the industry. New customers and carriers turn to us daily to solve their transportation needs with competitive pricing, continuous communication and a commitment to do it right every time.</p>
                                </div>
                            </div>
                            <div className="text-text-gray">
                                <p>24/7/365</p>
                                <p>By delivering the highest level of professional service, reliability, and peace of mind to customers and carriers 24/7/365.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ReasonsToChooseUs />

                <HearFromUsAndBlogs/>

            </div>
        </>
    )
}