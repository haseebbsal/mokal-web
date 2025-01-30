import Image from "next/image";
import GrowBusinessForm from "../forms/grow-business";

export default function GrowYourBusiness() {
    return (
        <div className="bg-linearBlue w-full relative overflow-hidden">
            <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%]  text-center gap-4`}>
                <div className="flex flex-col gap-4 relative z-10 flex-1 text-start text-white">
                    <Image src={'/logo-fullWhite.svg'} alt="logo full White" height={600} width={600} />
                    <h1 className="sm:text-[2.3rem] text-[1.3rem] font-bold">Get Ready to Grow Your Business Faster</h1>
                    <p className="">If you have any questions about Freightcom Fulfillment, or to see if Freightcom Fulfillment is right for your business, fill out the form below and one of our fulfillment specialists will contact you with more information.</p>
                    <GrowBusinessForm />
                </div>
                <div className="flex-1">
                    <Image className=" h-full w-full " src={'/images/grow-your-business.svg'} alt="grows" width={600} height={600} />

                </div>
            </div>
        </div>
    )
}