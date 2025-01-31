'use client'
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import BaseInput from "@/components/common/forms/base-input";
import { BiSearch } from "react-icons/bi";
import { useForm } from "react-hook-form";


export default function Blog() {
    const { control } = useForm()
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
                    <div className={`grid sm:grid-cols-[1fr_0.4fr] grid-cols-1 m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-8`}>

                        <div className={`flex flex-col sm:order-1 order-2 flex-wrap items-start text-start gap-4`}>
                            <Image className="flex-1 w-full max-h-52 rounded-xl object-cover" src={'/blogs/blog.svg'} alt="blog" height={70} width={70} />
                            <h1 className="text-text-blue text-2xl font-semibold">The Ultimate Guide to Simplifying Freight Logistics</h1>
                            <p className="text-text-gray font-semibold">Posted on Jan 05, 2024 by Patrick</p>

                            <p className="text-text-darkGray">There is no doubt that the global supply chain is immensely complex, with countless moving parts, each one critical to keeping the enter system running smoothly.
                                Occasionally, and often inevitably, however, one or several of those parts will seize, causing a ripple effect that forces the rest of the chain to scramble and readjust.
                                While a supply chain disruption can pose major challenges for shippers, there are steps that can be taken to help prepare for disruptions and soften their impact when they occur.
                                Discover essential strategies for businesses to effectively manage and mitigate the impact of supply chain disruptions.</p>

                            <p className="text-text-darkGray">Understanding the Root Causes of Supply Chain Disruptions
                                Supply chain disruptions can stem from a wide range of factors, often occurring without warning.
                                Natural disasters such as hurricanes, earthquakes, and floods can quickly halt production and transportation networks. Additionally, geopolitical events such as trade restrictions and political instability, can create unforeseen barriers in the supply chain.
                                Economic fluctuations, such as sudden changes in demand or financial uncertainty, can affect the availability of raw materials and finished goods.
                                Labor disputes and workforce shortages are other key contributors to disruptions. Recognizing these potential disruptions is the first step towards developing a robust response strategy.</p>


                            <p className="text-text-darkGray">Strategic Stock Management: Balancing Inventory and Demand
                                Effective inventory management is vital to mitigating the impact of supply chain disruptions.
                                Maintaining a balanced inventory that matches demand forecasts can help businesses avoid both overstocking and stockouts.
                                Additionally, businesses should consider diversifying their supplier base to minimize risks associated with relying on a single source.
                                Regularly reviewing and adjusting inventory policies based on market trends and disruptions can also enhance resilience. Establishing safety stock levels for critical items can further protect against unexpected supply interruptions.</p>


                            <p className="text-text-darkGray">Optimizing Shipping Practices for Resilience
                                Shipping practices play a pivotal role in managing supply chain disruptions. One effective strategy is to diversify shipping routes and methods to avoid potential bottlenecks.
                                For instance, using multiple carriers or integrating different transportation modes, such as rail, sea, and air, can provide flexibility and reduce dependency on a single method.
                                Moreover, businesses should invest in advanced tracking and monitoring systems to obtain real-time visibility into their shipments. This enables quicker responses to delays and provides the ability to reroute shipments if necessary.</p>


                            <p className="text-text-darkGray">Building Strong Relationships with Suppliers and Partners
                                Cultivating strong, collaborative relationships with suppliers and partners is essential for navigating supply chain disruptions.
                                Open and transparent communication helps identify potential issues early while working towards mutually beneficial solutions. Regular check-ins with suppliers can foster a proactive approach to problem-solving.
                                Furthermore, consider developing long-term contracts with key suppliers to ensure stability and trust. Building a network of backup suppliers can also provide alternatives in case of primary supplier failures.
                                Establishing these strong relationships not only helps in times of crisis but also contributes to overall supply chain efficiency.</p>

                            <p className="text-text-darkGray">Utilizing Freightcom to Manage Your End of the Supply Chain
                                As a shipper, the reality is that you have little control over supply chain disruptions. The best approach is to use the tools at your disposal to mitigate the effects of these disruptions on your business, and your customers.
                                Freightcom is here to help.
                                Freightcom’s easy-to-use all-in-one shipping management platform connects businesses with the most trusted freight and parcel carriers in the industry. We offer discounted rates on a wide range of shipping services—all in the most complete shipping management platform, and for zero upfront or monthly fees.
                                Talk to one of our shipping experts today and discover how Freightcom can help you manage your end of the supply chain with ease.</p>

                        </div>
                        <div className="p-4 py-8 h-max sm:order-2 order-1 flex flex-col gap-4 shadow-xl rounded-xl">
                            <BaseInput classNames={{ inputWrapper: "p-6" }} extraClass="w-full" control={control} placeholder="Search Blogs" endContent={<BiSearch size={20} />} />
                            <div className=" flex flex-col gap-4 items-start text-start">
                                <p className="text-text-blue text-2xl font-semibold">Table of Content</p>
                                <p className="text-text-blue">Utilizing Freightcom to Manage Your End of the Supply Chain</p>
                                <p className="text-text-blue">Building Strong Relationships with Suppliers and Partners</p>
                                <p className="text-text-blue">Optimizing Shipping Practices for Resilience</p>
                                <p className="text-text-blue">Strategic Stock Management: Balancing Inventory and Demand</p>
                                <p className="text-text-blue">Understanding the Root Causes of Supply Chain Disruptions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}