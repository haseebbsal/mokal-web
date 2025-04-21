// 'use client'
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import RefineTransport from "@/components/page-components/refine-transport";
import Title from "@/components/page-components/title";
import TabPageComponent from "@/components/page-components/tab";
import Content from "@/components/page-components/content";
import FAQSs from "@/components/page-components/faqs";
import CustomerBase from "@/components/page-components/customer-base";
import RefineTransportPage from "@/components/page-components/refine-transportPage";
import CardsContent from "@/components/page-components/cards-content";
import MainBlog from "@/components/page-components/main-blog";
import Testimonials from "@/components/page-components/testimonials";
import Content2 from "@/components/page-components/content2";
import GuideToBook from "@/components/page-components/guide-to-book";
import GrowYourBusiness from "@/components/page-components/grow-your-business";
import SingleSlider from "@/components/page-components/single-slider";
import { PagesContent } from "@/utils/types";
import { client } from "@/utils/constants";
import CareerOppurtunities from "@/components/page-components/career-oppurtunities";
import NoOpenForm from "@/components/forms/no-open-complete";
import BookADemoForm from "@/components/forms/book-a-demo";
import ReactOut from "@/components/page-components/client-for-now";
import TrackShipment from "@/components/page-components/track-shipment";
import GetAQuoteForm from "@/components/page-components/get-a-quote";


export default async function CarrierPartners() {

    const homeData: { content: [PagesContent] } = await client.fetch({
        query: `*[_type=='carrier-partner'][0]{
                                                          "content":[...contentBlocks[]->{
                                                            ...,
                                                            "singleSlider":[...slider[]{...,"cards":[...cards[]{
                                          ...,
                                          "imageUrl":imageUrl.asset->url
                                        }]}],
                                                            "images":[...images[]{...,"imageUrl":imageUrl.asset->url}],
                                                            "video":video.asset->url,
                                                             "testimonials":[...testimonials[]->{
                                                               ...,
                                                               "imageUrl":image.asset->url
                                                              }],
                                                             "blogs":[...blogs[]->{
                                                               ...,
                                                               "imageUrl":image.asset->url
                                                              }],
                                                            "imageUrl":imageUrl.asset->url,
                                                            "slider":[...slider[]->{
                                                              ...,
                                                              "imageUrl":imageUrl.asset->url,
                                                              "cards":[...cards[]->{
                                                                ...,
                                                                "imageUrl":imageUrl.asset->url
                                                              }],
                                                        
                                                              "slider":[...slider[]{
                                                                ...,
                                                                "imageUrl":imageUrl.asset->url,
                                                                "cards":[...cards[]{
                                                                  ...,
                                                                  "imageUrl":imageUrl.asset->url
                                                                  
                                                                }]}
                                                                       ]
                                                        
                                                              
                                                            }],
                                                            "cards":[...cards[]{
                                                              ...,
                                                              "imageUrl":icon.asset->url
                                                            }],
                                                            "content":[...content[]{
                                                              ...,
                                                              "description":[...description[]{
                                                                ...,
                                                                "imageUrl":imageUrl.asset->url
                                                              }],
                                                              "imageUrl":asset->url,
                                                              "arrayContent":[...arrayContent[]{
                                                                ...,
                                                                "imageUrl":imageUrl.asset->url
                                                              }]
                                                            }]
                                                            }
                                                            ],
                                                              "remaining":{...}
                                                            }`
    })
    const { content } = homeData


    return (
        <>
            <div className={`flex flex-col gap-4`}>
                {content.map((e, index) => {
                    return (<div key={e._type + index}
                        className={`${index != 0 ? index % 2 != 0 ? 'bg-white w-full' : 'bg-base-shadeBlue w-full' : ""}`}>
                        {e._type == 'title' && <Title identifier="1" breadCrumb={['Partnership', 'Carrier', 'Contract Carriers']} header={e.header!} title={e.title} buttons={e.buttons} imageUrl={e.imageUrl} description={e.description} />}
                        {e._type == 'tabs' && <TabPageComponent variation={e.variation!} header={e.header!} slider={e.slider as any} />}
                        {e._type == 'content' && <Content customerSpotlight content={e.content as any} />}
                        {e._type == 'faqs' && <FAQSs header={e.header!} questions={e.questions!} description={e.description!} />}
                        {e._type == 'mapComponent' && <CustomerBase header={e.header!} />}
                        {e._type == 'refineTransport' && <RefineTransportPage />}
                        {e._type == 'cards' && <CardsContent description={e.description!} header={e.header!} cards={e.cards as any} variation={e.variation!} buttons={e.buttons}/>}
                        {e._type == 'blogComponent' && <MainBlog header={e.header!} blogs={e.blogs} />}
                        {e._type == 'testimonialComponent' && <Testimonials header={e.header!} description={e.description} testimonials={e.testimonials} />}
                        {e._type == 'contentPageComponent' && <Content2 images={e.images} buttons={e.buttons} description={e.description} header={e.header!} video={e.video} />}
                        {e._type == 'guideComponent' && <GuideToBook />}
                        {e._type == 'growYourBusiness' || e._type == 'spotQuoteForm' && <GrowYourBusiness />}
                        {e._type == 'sliderComponent' && <SingleSlider header={e.singleSlider[0].header} description={e.singleSlider[0].description} cards={e.singleSlider[0].cards} buttons={e.singleSlider[0].buttons} imageUrl={e.singleSlider[0].imageUrl} />}
                        {e._type == 'career-oppurtuinities' && <CareerOppurtunities />}
                        {e._type == 'positionForm' && <NoOpenForm />}
                        {e._type == 'bookDemoForm' && <BookADemoForm />}
                        {e._type == 'reachOutForm' && <ReactOut />}
                        {e._type == 'trackShipment' && <TrackShipment />}
                        {e._type == 'getAQuoteForm' && <GetAQuoteForm />}


                    </div>)
                })}
            </div>
        </>
    )

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

                <RefineTransport />
            </div>
        </>
    )
}