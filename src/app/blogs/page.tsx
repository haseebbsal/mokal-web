'use client'
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import BaseInput from "@/components/common/forms/base-input";
import { BiSearch } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";


export default function Blogs() {
    const { control } = useForm()
    const router=useRouter()
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Blogs" /> </h1>
                        </div>
                        <BaseBreadCrumb items={['Resources', 'Blogs']} />
                    </div>
                </div>

                <div className="bg-white w-full">
                    <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-8`}>

                        <BaseInput extraClass="w-full" control={control} placeholder="Search Blogs" endContent={<BiSearch size={20} />} />
                        <div className={`flex flex-wrap  text-center gap-4`}>

                            <div onClick={()=>router.push('/blogs/1')} className="p-4 cursor-pointer text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2 sm:flex-[1_0_25%] flex-[1_0_100%] sm:max-w-[32%]">
                                <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                <div className="flex gap-2 w-full items-center">
                                    <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                    <p className="text-sm text-black">Patrick</p>
                                </div>
                            </div>


                            <div onClick={()=>router.push('/blogs/1')} className="p-4 cursor-pointer text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2 sm:flex-[1_0_25%] flex-[1_0_100%] sm:max-w-[32%]">
                                <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                <div className="flex gap-2 w-full items-center">
                                    <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                    <p className="text-sm text-black">Patrick</p>
                                </div>
                            </div>


                            <div onClick={()=>router.push('/blogs/1')} className="p-4 cursor-pointer text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2 sm:flex-[1_0_25%] flex-[1_0_100%] sm:max-w-[32%]">
                                <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                <div className="flex gap-2 w-full items-center">
                                    <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                    <p className="text-sm text-black">Patrick</p>
                                </div>
                            </div>



                            <div onClick={()=>router.push('/blogs/1')} className="p-4 cursor-pointer text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2 sm:flex-[1_0_25%] flex-[1_0_100%] sm:max-w-[32%]">
                                <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                <div className="flex gap-2 w-full items-center">
                                    <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                    <p className="text-sm text-black">Patrick</p>
                                </div>
                            </div>




                            <div onClick={()=>router.push('/blogs/1')} className="p-4 cursor-pointer text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2 sm:flex-[1_0_25%] flex-[1_0_100%] sm:max-w-[32%]">
                                <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                <div className="flex gap-2 w-full items-center">
                                    <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                    <p className="text-sm text-black">Patrick</p>
                                </div>
                            </div>



                            <div onClick={()=>router.push('/blogs/1')} className="p-4 cursor-pointer text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2 sm:flex-[1_0_25%] flex-[1_0_100%] sm:max-w-[32%]">
                                <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                <div className="flex gap-2 w-full items-center">
                                    <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                    <p className="text-sm text-black">Patrick</p>
                                </div>
                            </div>



                            <div onClick={()=>router.push('/blogs/1')} className="p-4 cursor-pointer text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2 sm:flex-[1_0_25%] flex-[1_0_100%] sm:max-w-[32%]">
                                <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                <div className="flex gap-2 w-full items-center">
                                    <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                    <p className="text-sm text-black">Patrick</p>
                                </div>
                            </div>



                            <div onClick={()=>router.push('/blogs/1')} className="p-4 cursor-pointer text-base-blue items-start text-start shadow-xl bg-white rounded-xl flex flex-col gap-2 sm:flex-[1_0_25%] flex-[1_0_100%] sm:max-w-[32%]">
                                <Image className="flex-1 w-full" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                                <p className="font-semibold text-xl">The Ultimate Guide to Simplifying Freight Logistics</p>
                                <p className="text-xs text-text-gray">Jan 05, 2024</p>
                                <div className="flex gap-2 w-full items-center">
                                    <Image src={'/people/person.svg'} alt="person" height={30} width={30} />
                                    <p className="text-sm text-black">Patrick</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}