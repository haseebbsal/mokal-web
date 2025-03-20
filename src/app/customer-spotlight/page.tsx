// 'use client'
import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
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
import CareerOppurtunities from "@/components/page-components/career-oppurtunities";
import NoOpenForm from "@/components/forms/no-open-complete";
import { PagesContent } from "@/utils/types";
import { client } from "@/utils/constants";
import BookADemoForm from "@/components/forms/book-a-demo";
import ReactOut from "@/components/page-components/client-for-now";
import TrackShipment from "@/components/page-components/track-shipment";
import GetAQuoteForm from "@/components/page-components/get-a-quote";


export default async function CustomerSpotlight() {

    const homeData: { content: [PagesContent] } = await client.fetch({
        query: `*[_type=='customer-spotlight'][0]{
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
                        {e._type == 'title' && <Title identifier="1" breadCrumb={['About Us', 'Customer Spotlight']} header={e.header!} title={e.title} buttons={e.buttons} imageUrl={e.imageUrl} description={e.description} />}
                        {e._type == 'tabs' && <TabPageComponent variation={e.variation!} header={e.header!} slider={e.slider as any} />}
                        {e._type == 'content' && <Content customerSpotlight content={e.content as any} />}
                        {e._type == 'faqs' && <FAQSs header={e.header!} questions={e.questions!} description={e.description!} />}
                        {e._type == 'mapComponent' && <CustomerBase header={e.header!} />}
                        {e._type == 'refineTransport' && <RefineTransportPage />}
                        {e._type == 'cards' && <CardsContent description={e.description!} header={e.header!} cards={e.cards as any} variation={e.variation!} />}
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
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Customer Spotlight" /> </h1>
                            <p className="text-text-gray text-lg">Unlock Exclusive Rates for Specialized and Time-Sensitive Shipments</p>
                        </div>
                        <BaseBreadCrumb items={['About Us', 'Customer Spotlight']} />
                    </div>
                </div>

                <div className="flex flex-col gap-8 bg-white py-16">

                    <div className="bg-white w-full">
                        <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] sm:items-start items-center sm:rounded-r-full shadow-xl  text-center sm:gap-16 gap-4`}>
                            <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                                <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Streamlining Logistics for a Growing E-Commerce Business" /></h1>
                                <p className="text-text-gray text-md">When <span className="font-semibold text-xl text-black">Sarah</span>, the owner of a booming e-commerce store specializing in handmade goods, struggled with increasing order volumes, she turned to MGC Freight for help. Her business needed reliable shipping solutions to manage her growth and maintain customer satisfaction.
                                    MGC Freight stepped in with its comprehensive logistics platform, offering Sarah tailored LTL and PTL options to match her shipping needs. By leveraging our multi-location fulfillment services, her orders were processed faster, reducing transit times and shipping costs. With real-time tracking, Sarah could monitor shipments end-to-end, ensuring timely delivery and transparent communication with her customers.
                                    Since partnering with MGC Freight, Sarah’s business has grown by 40%, her customer satisfaction scores have soared, and she’s saved countless hours previously spent on managing logistics.
                                    “Working with MGC Freight has been a game-changer for my business,” says Sarah. “They’ve allowed me to focus on what I love—creating unique products—while they take care of the shipping.”</p>
                                <div className="flex gap-4 flex-wrap">
                                    <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">See Current openings <MdKeyboardDoubleArrowRight /></BaseButton>
                                </div>

                            </div>
                            <Image className="flex-1" src={'/images/spotlight1.svg'} alt="truckload" width={200} height={200} />
                        </div>

                    </div>


                    <div className="bg-white w-full">
                        <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] sm:items-start items-center sm:rounded-l-full shadow-xl  text-center sm:gap-16 gap-4`}>
                            <Image className="flex-1" src={'/images/spotlight1.svg'} alt="truckload" width={200} height={200} />
                            <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                                <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Streamlining Logistics for a Growing E-Commerce Business" /></h1>
                                <p className="text-text-gray text-md">When <span className="font-semibold text-xl text-black">Sarah</span>, the owner of a booming e-commerce store specializing in handmade goods, struggled with increasing order volumes, she turned to MGC Freight for help. Her business needed reliable shipping solutions to manage her growth and maintain customer satisfaction.
                                    MGC Freight stepped in with its comprehensive logistics platform, offering Sarah tailored LTL and PTL options to match her shipping needs. By leveraging our multi-location fulfillment services, her orders were processed faster, reducing transit times and shipping costs. With real-time tracking, Sarah could monitor shipments end-to-end, ensuring timely delivery and transparent communication with her customers.
                                    Since partnering with MGC Freight, Sarah’s business has grown by 40%, her customer satisfaction scores have soared, and she’s saved countless hours previously spent on managing logistics.
                                    “Working with MGC Freight has been a game-changer for my business,” says Sarah. “They’ve allowed me to focus on what I love—creating unique products—while they take care of the shipping.”</p>
                                <div className="flex gap-4 flex-wrap">
                                    <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">See Current openings <MdKeyboardDoubleArrowRight /></BaseButton>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}