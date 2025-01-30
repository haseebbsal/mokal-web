import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { termsandcondtions } from "@/utils/constants";
import BaseTabs from "@/components/common/base-tabs";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";






export default function Claims() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Claims" /> </h1>
                        </div>
                        <BaseBreadCrumb items={['Claims']}/>
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`flex  flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] sm:gap-8 gap-4`}>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl font-semibold">What is a Claim?</h1>
                            <div>
                                <p>Everyone involved in the shipping process works toward the same goal: to get goods safely and securely from one place to another. Sometimes, there can be complications and your shipment is lost or damaged. This is when you file a claim.</p>
                                <p>A claim is a legal demand by a shipper, consignee, or product owner to a carrier for financial reimbursement.
                                    Ready to start a claim? Click below to start your claim.</p>
                            </div>

                            <div className="flex gap-4 flex-wrap">
                                <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">Get Started Today<MdKeyboardDoubleArrowRight /></BaseButton>
                                <BaseButton extraClass="flex !min-w-36 sm:w-max w-full justify-between border-2 text-base-purple border-base-purple bg-transparent">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton>
                            </div>
                        </div>


                        <BaseTabs keys={[
                            {
                                title: "Courier", component: <>
                                    <div className={`flex  flex-col  sm:gap-8 gap-4`}>
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
                                </>
                            },
                            {
                                title: "LTL", component: <>
                                    <div className={`flex  flex-col  sm:gap-8 gap-4`}>
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
                                </>
                            }
                        ]} />

                        { }
                    </div>
                </div>
            </div >
        </>
    )
}