import LinearGradientText from "@/components/common/linear-gradient-text";
import { Breadcrumbs, BreadcrumbItem} from "@heroui/react";
import { RiHome5Line } from "react-icons/ri";
import { termsandcondtions } from "@/utils/constants";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";


export default function TermsAndConditions() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Terms & Conditions" /> </h1>
                        </div>
                        <BaseBreadCrumb items={['Terms & Conditions']}/>
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`flex  flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] sm:gap-8 gap-4`}>
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold text-lg">Effective Date: January <span className="text-sm text-text-gray">29, 2022</span></p>
                            <p className="font-semibold text-lg">Last Modified: April <span className="text-sm text-text-gray">19, 2022</span></p>
                        </div>

                        {termsandcondtions.map((e, index) => <div key={index + 1} className="flex gap-1 flex-col">
                            <h1 className="font-semibold text-2xl">{index + 1}. {e.header}</h1>
                            {
                                e.content.map((f) => {

                                    return typeof f != 'string' ? <ul key={e.header} className="list-disc pl-4">
                                        {f.map((g) => <li key={g}>{g}</li>)}
                                    </ul> : <p key={f}>{f}</p>

                                })
                            }

                        </div>)}
                    </div>
                </div>
            </div >
        </>
    )
}