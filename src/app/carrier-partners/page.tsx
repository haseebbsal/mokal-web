'use client'
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import RefineTransport from "@/components/page-components/refine-transport";


export default function CarrierPartners() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Carrier Partners" /> </h1>
                        </div>
                        <BaseBreadCrumb items={['Partnership', 'Carrier', 'Contract Carriers']} />
                    </div>
                </div>

                <div className="bg-white w-full ">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-16 sm:w-[90%]  text-center gap-4`}>
                        <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">We Partner With <LinearGradientText text="Leading Carriers" /></h1>
                        <p className="text-text-darkGray">At Freightcom, we know that the heart of our business is the relationships that we’ve proudly fostered with North America’s leading carriers.</p>
                        <div className={`flex flex-wrap  text-center gap-4`}>
                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%]  sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/Morneau.svg'} alt='artboard' width={200} height={200} />
                                <p>One of the largest LTL
                                    networks in Canada, including
                                    refrigerated freight service</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%]  flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/FedEx-1.svg'} alt='artboard' width={200} height={200} />
                                <p>Committed to getting your
                                    package to its destination on
                                    time.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/GLS.svg'} alt='artboard' width={200} height={200} />
                                <p>Shipping, courier, and
                                    expedited transport services
                                    within the US and Canada</p>
                            </div>

                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/DayandRoss.svg'} alt='artboard' width={200} height={200} />
                                <p>Logistics company that
                                    operates in various sectors,
                                    including logistics solutions</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/gardewine.svg'} alt='artboard' width={200} height={200} />
                                <p>Leading trucking company
                                    providing logistics services
                                    across Canada for 70+ years.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/Artboard.svg'} alt='artboard' width={200} height={200} />
                                <p>Shipping, courier, and
                                    expedited transport services
                                    within the US, Canada.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/M-O-2.svg'} alt='artboard' width={200} height={200} />
                                <p>Canada’s most trusted
                                    transport carrier for over 60
                                    years.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/kindersley.svg'} alt='artboard' width={200} height={200} />
                                <p>Providing truckload and LTL
                                    service throughout North
                                    America</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/DHL.svg'} alt='artboard' width={200} height={200} />
                                <p>American-founded German
                                    logistics company delivering
                                    over 1.8 billion parcels per
                                    year.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/Canpar.svg'} alt='artboard' width={200} height={200} />
                                <p>Helping small parcel delivery
                                    companies’ shipping processes
                                    on a day-to-day basis.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/apex.svg'} alt='artboard' width={200} height={200} />
                                <p>Your reliable logistics partner,
                                    offering you new solutions
                                    through high-quality service.</p>
                            </div>



                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/ArtboardOther.svg'} alt='artboard' width={200} height={200} />
                                <p>The largest provider of asset-
                                    based LTL freight transport
                                    shipping in North America.</p>
                            </div>



                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/ExcelTransportation.svg'} alt='artboard' width={200} height={200} />
                                <p>Full suite of freight and
                                    logistics services including LTL,
                                    FTL, and 3PL solutions</p>
                            </div>



                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/Fastfrate.svg'} alt='artboard' width={200} height={200} />
                                <p>Offers a full suite of logistic
                                    services such as LTL freight,
                                    drayage, and last-mile.</p>
                            </div>



                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/UPS.svg'} alt='artboard' width={200} height={200} />
                                <p>Ship and track deliveries
                                    worldwide with one of the
                                    largest global shipping
                                    companies.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/Polaris.svg'} alt='artboard' width={200} height={200} />
                                <p>Providing shipping within
                                    North America, warehousing,
                                    distribution, and more.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/Moto.svg'} alt='artboard' width={200} height={200} />
                                <p>Cutting-edge freight solutions,
                                    warehousing, distribution,
                                    freight forwarding, customs
                                    clearance, and more.</p>
                            </div>



                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/Purolator-1.svg'} alt='artboard' width={200} height={200} />
                                <p>Business solutions, shipping,
                                    and tracking on Canada’s
                                    largest courier network.</p>
                            </div>



                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/ab-courier.svg'} alt='artboard' width={200} height={200} />
                                <p>Sameday messenger, next day,
                                    ground and international
                                    parcel services.</p>
                            </div>



                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/cct-canada-freightcom-1.svg'} alt='artboard' width={200} height={200} />
                                <p>Expedited freight from
                                    Ontario and Quebec to
                                    Western Canada.</p>
                            </div>




                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/OneforFreight.svg'} alt='artboard' width={200} height={200} />
                                <p>Domestic and cross-border
                                    LTL and FTL services across
                                    Canada and the US.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/Hi-Way.svg'} alt='artboard' width={200} height={200} />
                                <p>Overnight and same-day
                                    freight services across Alberta.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/midland-freightcom-1.svg'} alt='artboard' width={200} height={200} />
                                <p>LTL, courier, and specialized
                                    shipping services across North
                                    America.</p>
                            </div>



                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/minimax-freightcom.jpg.svg'} alt='artboard' width={200} height={200} />
                                <p>Next-day LTL Freight services
                                    across Ontario and Quebec.</p>
                            </div>



                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/TForce.svg'} alt='artboard' width={200} height={200} />
                                <p>Standard, Guaranteed, and
                                    Expedited LTL freight services
                                    across North America.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/overland.svg'} alt='artboard' width={200} height={200} />
                                <p>Extensive LTL and FTL services
                                    across Western Canada.</p>
                            </div>



                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/transkid-freightcom.jpg.svg'} alt='artboard' width={200} height={200} />
                                <p>Standard and same-day LTL
                                    and FTL services across
                                    Quebec and through North
                                    America.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/western-canada.svg'} alt='artboard' width={200} height={200} />
                                <p>Intermodal LTL services from
                                    Ontario and Quebec to
                                    Manitoba, Saskatchewan,
                                    Alberta and BC.</p>
                            </div>


                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/reddaway-freightcom-1.svg'} alt='artboard' width={200} height={200} />
                                <p>Intermodal, LTL, Specialized
                                    and Cross-Border freight
                                    services across Canada and
                                    the US.</p>
                            </div>



                            <div className='flex flex-col sm:flex-[1_0_17%] flex-[1_0_100%] sm:max-w-[17%] gap-4 p-8 shadow-lg h-auto rounded-2xl text-center items-center'>
                                <Image src={'/couriers/USPS.svg.svg'} alt='artboard' width={200} height={200} />
                                <p>Domestic US Priority, Express,
                                    and Ground Advantage parcel
                                    services.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <RefineTransport/>
            </div>
        </>
    )
}