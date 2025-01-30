import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import LinearGradientText from "@/components/common/linear-gradient-text";
import FAQS from "@/components/page-components/faqs";
import RefineTransport from "@/components/page-components/refine-transport";

export default function ContactUs() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Contact Us" /> </h1>
                        <BaseBreadCrumb items={['About Us', 'Contact Us']} />
                    </div>
                </div>

                <FAQS />
                <RefineTransport />
            </div>
        </>
    )
}