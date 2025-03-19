import BaseButton from "@/components/common/base-button";
import LinearGradientText from "@/components/common/linear-gradient-text";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BaseBreadCrumb from "@/components/common/base-breadcrumb";
import Link from "next/link";
import { PagesContent } from "@/utils/types";
import { client } from "@/utils/constants";
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
import BookADemoForm from "@/components/forms/book-a-demo";
import ReactOut from "@/components/page-components/client-for-now";
import TrackShipment from "@/components/page-components/track-shipment";
import GetAQuoteForm from "@/components/page-components/get-a-quote";






export default async function Claims() {

    const homeData: { content: [PagesContent] } = await client.fetch({
        query: `*[_type=='claims'][0]{
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
                        {e._type == 'title' && <Title identifier="1" breadCrumb={['Claims']} header={e.header!} title={e.title} buttons={e.buttons} imageUrl={e.imageUrl} description={e.description} />}
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
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Claims" /> </h1>
                        </div>
                        <BaseBreadCrumb items={['Claims']} />
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
                                <Link href={'/book-a-demo'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple">Book a Demo<MdKeyboardDoubleArrowRight className="text-lg" /></Link>


                                {/* <BaseButton extraClass="flex !min-w-36 sm:w-max w-full justify-between border-2 text-base-purple border-base-purple bg-transparent">Book a Demo <MdKeyboardDoubleArrowRight /></BaseButton> */}
                            </div>
                        </div>


                        {/* <BaseTabs keys={[
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
                        ]} /> */}

                        { }
                    </div>
                </div>
            </div >
        </>
    )
}