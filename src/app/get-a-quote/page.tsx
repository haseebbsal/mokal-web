import LinearGradientText from "@/components/common/linear-gradient-text";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import BaseTabs from "@/components/common/base-tabs";
import LTLForm from "@/components/forms/ltl-form";
import FTLForm from "@/components/forms/ftl-form";


export default function GetAQuote() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Get a Quote" /> </h1>
                        </div>
                        <BaseBreadCrumb items={['Get a Quote']} />
                    </div>
                </div>

                <div className="bg-white w-full ">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-16 sm:w-[90%]  text-center gap-4`}>
                        <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">Get Free <LinearGradientText text="Freight Quote" /></h1>
                        <BaseTabs keys={[{title:"Less than Truckload (LTL)",component:<LTLForm/>},{title:"Full Truckload (FTL)",component:<FTLForm/>}]}/>
                    </div>
                </div>


            </div>
        </>
    )
}