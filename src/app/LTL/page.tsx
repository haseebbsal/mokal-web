import GuideToBook from "@/components/page-components/guide-to-book";
import Title from "@/components/page-components/title";
import TabPageComponent from "@/components/page-components/tab";
import Content from "@/components/page-components/content";
import FAQSs from "@/components/page-components/faqs";
import CustomerBase from "@/components/page-components/customer-base";
import RefineTransportPage from "@/components/page-components/refine-transportPage";
import CardsContent from "@/components/page-components/cards-content";
import MainBlog from "@/components/page-components/main-blog";
import Testimonials from "@/components/page-components/testimonials";
import { PagesContent } from "@/utils/types";
import { client } from "@/utils/constants";
import Content2 from "@/components/page-components/content2";
import GrowYourBusiness from "@/components/page-components/grow-your-business";
import SingleSlider from "@/components/page-components/single-slider";






export default async function LTL() {
    const homeData: { content: [PagesContent] } = await client.fetch({
        query: `*[_type=='LTL'][0]{
  "content":[...contentBlocks[]->{
    ...,
    "images":[...images[]{"imageUrl":asset->url}],
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
    "singleSlider":[...slider[]{...,"cards":[...cards[]{
      ...,
      "imageUrl":imageUrl.asset->url
    }]}],
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
    }`
    })
    const { content } = homeData
    console.log(content)
    return (
        <>
            {/* <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <p className="text-base-purple text-xl font-semibold">Unmatched Reliability</p>
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Less Than Truckload (LTL)" /> </h1>
                            <p className="text-text-gray text-lg">Tailored Solutions and Competitive Pricing from Trusted Carriers</p>
                        </div>
                        <BaseBreadCrumb items={['Services', 'Less Than Truckload (LTL)']} />
                    </div>
                </div>

                <div className="bg-white w-full">

                    <div className="bg-white w-full">
                        <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
                            <Image className="flex-1" src={'/images/ltl-shipping.svg'} alt="truckload" width={500} height={500} />
                            <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                                <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Less Than Truckload (LTL)" /> Shipping Services </h1>
                                <p className="text-text-gray text-md">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. packages and web page editors now use Lorem Ipsum as their default model.</p>
                                <p className="text-text-gray text-md">Packages and web page editors now use Lorem Ipsum as their default model textlayout. The point of using areIpsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here content normal distribution of letters as opposed to here making readable making.</p>
                                <div className="flex gap-4 flex-wrap">
                                    <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">Get Started Today<MdKeyboardDoubleArrowRight /></BaseButton>
                                    <Link href={'/book-a-demo'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple">Book a Demo<MdKeyboardDoubleArrowRight className="text-lg" /></Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="bg-white w-full">
                        <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
                            <h1 className="font-bold sm:text-[2.3rem] text-[1.5rem]">Trusted Courier Partner Solutions for <LinearGradientText text="Seamless Deliveries" /></h1>
                            <p className="text-text-gray">Enhance your shipping capabilities with MGC Freight’s reliable courier partnerships. We ensure timely deliveries, secure handling, and exceptional service, providing your business with the flexibility and efficiency needed to satisfy your customers every step of the way.</p>
                            <div className="w-full sm:flex hidden gap-2 flex-wrap justify-center">
                                <Image src={'/couriers/DHL.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/DayandRoss.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Canpar.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/gardewine.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/kindersley.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/M-O-2.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Artboard.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Morneau.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/FedEx-1.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/GLS.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/apex.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/ExcelTransportation.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Fastfrate.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/UPS.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Polaris.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Moto.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/Purolator-1.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/ab-courier.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/OneforFreight.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/midland-freightcom-1.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/minimax-freightcom.jpg.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/TForce.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/overland.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/western-canada.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/reddaway-freightcom-1.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/USPS.svg.svg'} alt="dhl" width={150} height={150} />
                                <Image src={'/couriers/transkid-freightcom.jpg.svg'} alt="dhl" width={150} height={150} />
                            </div>
                            <BaseSlider extraClass="sm:hidden" extraResponsive={responsiveCouriers}>
                                <Image src={'/couriers/DHL.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/DayandRoss.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Canpar.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/gardewine.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/kindersley.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/M-O-2.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Artboard.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Morneau.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/FedEx-1.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/GLS.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/apex.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/ExcelTransportation.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Fastfrate.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/UPS.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Polaris.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Moto.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/Purolator-1.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/ab-courier.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/OneforFreight.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/midland-freightcom-1.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/minimax-freightcom.jpg.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/TForce.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/overland.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/western-canada.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/reddaway-freightcom-1.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/USPS.svg.svg'} alt="dhl" width={100} height={100} />
                                <Image src={'/couriers/transkid-freightcom.jpg.svg'} alt="dhl" width={100} height={100} />
                            </BaseSlider>
                        </div>
                    </div>

                </div>

                <div>

                    <BenefitsOfServices />


                    <ExpertLogistics />

                </div>


                <GuideToBook />

                <CourierService />


                <HearFromUsAndBlogs hideBlogs={true} />
            </div > */}

            <div className={`flex flex-col gap-4`}>
                {content.map((e, index) => {
                    return (<div key={e._type + index}
                        className={`${index != 0 ? index % 2 != 0 ? 'bg-white w-full' : 'bg-base-shadeBlue w-full' : ""}`}>
                        {e._type == 'title' && <Title identifier="1" breadCrumb={['Services', 'Less Than Truckload (LTL)']} header={e.header!} title={e.title} buttons={e.buttons} imageUrl={e.imageUrl} description={e.description} />}
                        {e._type == 'tabs' && <TabPageComponent variation={e.variation!} header={e.header!} slider={e.slider as any} />}
                        {e._type == 'content' && <Content content={e.content as any} />}
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


                    </div>)
                })}
            </div>
        </>
    )
}