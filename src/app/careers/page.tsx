'use client'
import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import BaseInput from "@/components/common/forms/base-input";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { Accordion, AccordionItem } from "@heroui/react";
import BaseFile from "@/components/common/forms/base-file";
import BaseTextArea from "@/components/common/forms/base-textarea";
import NoOpenPositionForm from "@/components/forms/no-open-position";


export default function Careers() {
    const { control } = useForm()
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Careers" /> </h1>
                            <p className="text-text-gray text-lg">Unlock Exclusive Rates for Specialized and Time-Sensitive Shipments</p>
                        </div>
                        <BaseBreadCrumb items={['About Us', 'Careers']} />
                    </div>
                </div>


                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center sm:gap-16 gap-4`}>
                        <Image className="flex-1" src={'/images/careers.svg'} alt="truckload" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold">Join MGC Freight <LinearGradientText extraClass="" text="Shaping the Future of Shipping" /></h1>
                            <p className="text-text-gray text-md">At MGC Freight, we’re not just part of the shipping industry; we’re at the forefront of transforming it. We collaborate with the best to drive innovation and support business growth.
                                With a focus on individuality, creativity, and teamwork, we provide a unique, dynamic environment where you can develop your strengths while working alongside a world-class team.
                                We’re always excited to connect with talented individuals and welcome new, qualified candidates to join our exceptional team!</p>
                            <div className="flex gap-4 flex-wrap">
                                <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">See Current openings <MdKeyboardDoubleArrowRight /></BaseButton>
                            </div>

                        </div>
                    </div>

                </div>





                <div className="bg-base-shadeBlue w-full">
                    <div className={`  p-8 flex flex-col gap-16 items-center `}>
                        <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">Our <LinearGradientText text="Core Values" /></h1>
                        <div className="flex flex-col gap-8 sm:w-[80%] flex-wrap">
                            <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 ">
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/approach 2.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Proactive Approach</p>
                                    </div>
                                    <p className="text-text-gray">You’re always ready to take charge and make things happen without waiting for direction.</p>
                                </div>


                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/efficiency.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Passion for Growth</p>
                                    </div>
                                    <p className="text-text-gray">You embrace learning opportunities and strive for improvement in every environment.</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/group 1 (1).svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Effective Communication</p>
                                    </div>
                                    <p className="text-text-gray">You prioritize honest, open conversations to ensure clarity and collaboration.</p>
                                </div>


                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/team-building.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Team-Oriented Mindset</p>
                                    </div>
                                    <p className="text-text-gray">You celebrate collective wins, understanding the power of working together.</p>
                                </div>



                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/problem-solving.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Creative Problem-Solving</p>
                                    </div>
                                    <p className="text-text-gray">You tackle challenges with innovative solutions, thinking beyond the ordinary.</p>
                                </div>



                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <Image src={'/icons/deal.svg'} alt="flexible" width={40} height={40} />
                                        <p className="text-base-blue text-xl font-semibold">Commitment to Community</p>
                                    </div>
                                    <p className="text-text-gray">You value being part of a connected, supportive team that fosters growth and camaraderie.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>






                <div className="bg-white w-full">
                    <div className={`  p-8 flex flex-col gap-16 sm:w-[80%] m-auto items-center `}>
                        <div >
                            <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">Current <LinearGradientText text="Career Opportunities" /></h1>
                            <p className="text-text-darkGray">View available openings with Freightcom across our many locations.</p>
                        </div>
                        <BaseInput classNames={{ inputWrapper: "p-6" }} extraClass="w-full" control={control} placeholder="Search Positions" endContent={<BiSearch size={20} />} />

                        <Accordion
                            variant="splitted" >
                            <AccordionItem className="bg-transparent shadow-none border-1 border-gray-200" classNames={{ title: "font-semibold text-lg", indicator: "!rotate-0" }} title="Billing Specialist" indicator={<p onClick={() => { }} className="p-2 bg-transparent border-base-blue border-2 rounded-xl text-base-blue">Apply Now</p>} >
                                <div className="w-full flex flex-col gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>

                                    <div className="flex gap-4 flex-wrap mt-4">
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="First Name" label="First Name *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="Last Name" label="Last Name *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" type="email" control={control} placeholder="Email" label="Email *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="Position" label="Position you are looking for? *" labelPlacement="outside" />
                                        <BaseFile className="flex-[1_0_40%]" bgColor="bg-gray-100" label="Resume *" />
                                        <BaseFile className="flex-[1_0_40%]" bgColor="bg-gray-100" label="Cover Letter" />
                                        <BaseTextArea label="Message" labelPlacement="outside" placeholder="Write Message" minRows={10}/>
                                        <BaseButton extraClass="!py-6">Submit Application <MdKeyboardDoubleArrowRight /></BaseButton>


                                    </div>

                                </div>
                            </AccordionItem>

                            <AccordionItem className="bg-transparent shadow-none border-1 border-gray-200" classNames={{ title: "font-semibold text-lg", indicator: "!rotate-0" }} title="Account Executive" indicator={<p onClick={() => { }} className="p-2 bg-transparent border-base-blue border-2 rounded-xl text-base-blue ">Apply Now</p>} >
                                <div className="w-full flex flex-col gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>

                                    <div className="flex gap-4 flex-wrap mt-4">
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="First Name" label="First Name *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="Last Name" label="Last Name *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" type="email" control={control} placeholder="Email" label="Email *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="Position" label="Position you are looking for? *" labelPlacement="outside" />
                                        <BaseFile className="flex-[1_0_40%]" bgColor="bg-gray-100" label="Resume *" />
                                        <BaseFile className="flex-[1_0_40%]" bgColor="bg-gray-100" label="Cover Letter" />
                                        <BaseTextArea label="Message" labelPlacement="outside" placeholder="Write Message" minRows={10}/>
                                        <BaseButton extraClass="!py-6">Submit Application <MdKeyboardDoubleArrowRight /></BaseButton>


                                    </div>

                                </div>
                            </AccordionItem>


                            <AccordionItem className="bg-transparent shadow-none border-1 border-gray-200" classNames={{ title: "font-semibold text-lg", indicator: "!rotate-0" }} title="Senior Technical Lead" indicator={<p onClick={() => { }} className="p-2 bg-transparent border-base-blue border-2 rounded-xl text-base-blue ">Apply Now</p>} >
                                <div className="w-full flex flex-col gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>

                                    <div className="flex gap-4 flex-wrap mt-4">
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="First Name" label="First Name *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="Last Name" label="Last Name *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" type="email" control={control} placeholder="Email" label="Email *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="Position" label="Position you are looking for? *" labelPlacement="outside" />
                                        <BaseFile className="flex-[1_0_40%]" bgColor="bg-gray-100" label="Resume *" />
                                        <BaseFile className="flex-[1_0_40%]" bgColor="bg-gray-100" label="Cover Letter" />
                                        <BaseTextArea label="Message" labelPlacement="outside" placeholder="Write Message" minRows={10} />
                                        <BaseButton extraClass="!py-6">Submit Application <MdKeyboardDoubleArrowRight /></BaseButton>


                                    </div>

                                </div>
                            </AccordionItem>


                            <AccordionItem className="bg-transparent shadow-none border-1 border-gray-200" classNames={{ title: "font-semibold text-lg", indicator: "!rotate-0" }} title="Technical Sales Representative" indicator={<p onClick={() => { }} className="p-2 bg-transparent border-base-blue border-2 rounded-xl text-base-blue ">Apply Now</p>} >
                                <div className="w-full flex flex-col gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold">Position Overview:</p>
                                        <p className="text-text-darkGray">We are seeking a dynamic and results-driven Technical Sales Representative to join our team. In this role, you will bridge the gap between technology and sales, leveraging your technical expertise to identify customer needs, present solutions, and drive revenue growth. You will work closely with the sales and technical teams to deliver exceptional service and support to our clients.</p>
                                    </div>

                                    <div className="flex gap-4 flex-wrap mt-4">
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="First Name" label="First Name *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="Last Name" label="Last Name *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" type="email" control={control} placeholder="Email" label="Email *" labelPlacement="outside" />
                                        <BaseInput extraClass="flex-[1_0_20%]" control={control} placeholder="Position" label="Position you are looking for? *" labelPlacement="outside" />
                                        <BaseFile className="flex-[1_0_40%]" bgColor="bg-gray-100" label="Resume *" />
                                        <BaseFile className="flex-[1_0_40%]" bgColor="bg-gray-100" label="Cover Letter" />
                                        <BaseTextArea label="Message" labelPlacement="outside" placeholder="Write Message" minRows={10}/>
                                        <BaseButton extraClass="!py-6">Submit Application <MdKeyboardDoubleArrowRight /></BaseButton>


                                    </div>

                                </div>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>





                <div className="bg-linearBlue w-full relative overflow-hidden">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%]  text-center gap-4`}>
                        <div className="flex flex-col gap-4 relative z-10 flex-1 text-start text-white">
                            <Image src={'/logo-fullWhite.svg'} alt="logo full White" height={600} width={600} />
                            <h1 className="sm:text-[2.3rem] text-[1.3rem] font-bold">No Open Position That Fits?</h1>
                            <NoOpenPositionForm/>
                        </div>
                        <div className="flex-1">
                            <Image className=" h-full w-full " src={'/images/open-position.svg'} alt="grows" width={600} height={600} />

                        </div>
                    </div>
                </div>


            </div >
        </>
    )
}