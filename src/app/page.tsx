import { client } from "@/utils/constants";
import CustomerBase from "@/components/page-components/customer-base";
import { PagesContent } from "@/utils/types";
import FAQSs from "@/components/page-components/faqs";
import Title from "@/components/page-components/title";
import TabPageComponent from "@/components/page-components/tab";
import Content from "@/components/page-components/content";
import RefineTransportPage from "@/components/page-components/refine-transportPage";
import CardsContent from "@/components/page-components/cards-content";
import MainBlog from "@/components/page-components/main-blog";
import Testimonials from "@/components/page-components/testimonials";
import Content2 from "@/components/page-components/content2";
import GuideToBook from "@/components/page-components/guide-to-book";
import GrowYourBusiness from "@/components/page-components/grow-your-business";
import SingleSlider from "@/components/page-components/single-slider";

export default async function Home() {

  const homeData: { content: [PagesContent] } = await client.fetch({
    query: `*[_type=='home'][0]{
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

  // console.log(content)

  return (
    <>
      <div className={`flex flex-col gap-4`}>
        {content.map((e, index) => {
          return (<div key={e._type + index}
            className={`${index != 0 ? index % 2 != 0 ? 'bg-white w-full' : 'bg-base-shadeBlue w-full' : ""}`}>
            {e._type == 'title' && <Title header={e.header!} title={e.title} buttons={e.buttons} imageUrl={e.imageUrl} description={e.description} />}
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
          // if (e._type == 'title') return <Title key={e._type + index} header={e.header!} title={e.title} buttons={e.buttons} imageUrl={e.imageUrl} description={e.description} />
          // if (e._type == 'tabs') return <TabPageComponent key={e._type + index} header={e.header!} slider={e.slider as any} />
          // if(e._type=='content') return <Content key={e._type + index} content={e.content as any}/>
          // if(e._type=='faqs') return <FAQSs key={e._type + index} header={e.header!} questions={e.questions!} description={e.description!}  />
          // if(e._type=='mapComponent') return <CustomerBase key={e._type + index} header={e.header!}/>
          // if(e._type=='refineTransport') return <RefineTransportPage key={e._type + index}/>
          // if(e._type=='cards') return <CardsContent description={e.description!} key={e._type + index} header={e.header!} cards={e.cards as any} variation={e.variation!} />
        })}

        {/* <div className="bg-white">
          <div className={`flex flex-col items-center m-auto sm:px-8 px-4 sm:py-20 py-16  text-center gap-4`}>
            <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">Complete <LinearGradientText text="Freight & Logistics" /> Solutions</h1>
            <div className="flex flex-col sm:w-[80%] w-full gap-4">
              <BaseTabs keys={HomePageTabs} />
            </div>
          </div>
        </div> */}

        {/* <ReasonsToChooseUs reasonsToChooseUs={homeData.contentBlocks[0] as HeaderAndCards} /> */}

        {/* <div className="bg-white w-full">
          <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
            <Image className="flex-1" src={'/images/metrics.svg'} alt="metrics" width={500} height={500} />
            <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
              <h1 className="sm:text-[3rem] text-[1.5rem] font-bold">Your <LinearGradientText extraClass="" text="Shipping Metrics" />, Simplified</h1>
              <p className="text-text-gray text-md">Gain real-time insights into your shipping performance with detailed metrics, helping you track, analyze, and optimize every aspect of your freight operations.</p>
              <div className="flex ">
                <div className="flex flex-col h-full flex-1 sm:items-start items-center sm:text-start text-center gap-2">
                  <Image src={'/icons/hand.svg'} alt="hand" width={40} height={40} />
                  <h2 className="font-bold">Best Rates</h2>
                  <p className="text-text-gray">Best Shipping rates across all the freights</p>
                </div>
                <div className="flex flex-col h-full flex-1 sm:items-start items-center sm:text-start text-center gap-2">
                  <Image src={'/icons/globe-search.svg'} alt="globe search" width={40} height={40} />
                  <h2 className="font-bold">15% at Least</h2>
                  <p className="text-text-gray">Average Shipping Cost Savings</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="bg-base-shadeBlue  p-8 flex flex-col w-full gap-4 items-center ">
          <h1 className="sm:text-[2.3rem] text-[1.5rem] text-center font-bold">Powered by Our Robust, Innovative Shipping <LinearGradientText text="Management Platform" /></h1>
          <div className="sm:w-[80%] w-full">
            <BaseTabs keys={managementPlatformTabs} />
          </div>
        </div> */}


        {/* <div className="bg-white w-full">
          <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
            <div className="flex sm:order-0 order-2 flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
              <h1 className="sm:text-[3rem] text-[1.5rem] font-bold">Track Your Shipments <LinearGradientText extraClass="" text="Over Time" /></h1>
              <p className="text-text-gray text-md">Visualize your shipping trends with interactive graphs, providing you with valuable insights to monitor performance and optimize delivery timelines.</p>
              <div className="flex ">
                <div className="flex flex-col h-full flex-1 sm:items-start items-center sm:text-start text-center gap-2">
                  <h2 className="font-bold text-3xl">15.1K+</h2>
                  <p className="text-text-gray">Total Shipments Tracked Overtime</p>
                </div>
                <div className="flex flex-col h-full flex-1 sm:items-start items-center sm:text-start text-center gap-2">
                  <h2 className="font-bold text-3xl">105K</h2>
                  <p className="text-text-gray">Shipments Delivered Overtime</p>
                </div>
              </div>
            </div>
            <Image className="order-0 sm:order-2 flex-1" src={'/images/track-shipments.svg'} alt="metrics" width={500} height={500} />
          </div>
        </div> */}


        {/* <div className="bg-base-shadeBlue  p-8  w-full">
          <div className="sm:w-[80%] m-auto flex flex-col  gap-4 items-center">
            <h1 className="sm:text-[2.3rem] text-[1.5rem] text-center font-bold">All Your <LinearGradientText text="Freight Operations" /> in One Platform </h1>
            <p className="text-text-gray text-center">There are many solutions available, but most are limited in scope. MGC Freight brings together tracking, cost optimization, and logistics management, offering a seamless experience for your business needs.</p>
            <div className="flex gap-4 flex-wrap w-full">
              <div className=" bg-base-lightBlue   relative p-8 overflow-hidden  rounded-xl flex-[1_1_15rem]">
                <div className="flex flex-col gap-2 relative z-30">
                  <h1 className="font-bold text-base-blue sm:text-2xl text-lg" >Global Shipping Made Simple</h1>
                  <p className="text-text-lighterDarkBlue">Effortlessly manage logistics with end-to-end supply chain precision across air, sea, and land.</p>
                  <Image src={'/images/shipment1.svg'} alt="shipment1" width={500} className="w-full sm:h-[15rem]" height={500} />
                </div>
                <LinearGradientCircle />
              </div>

              <div className=" bg-linearPurple  relative p-8 overflow-hidden  rounded-xl flex-[1_1_15rem]">
                <div className="flex flex-col gap-2 relative z-30">
                  <h1 className="font-bold text-base-purple sm:text-2xl text-lg ">Global Connections, Local Deliveries</h1>
                  <p className="text-base-purple">Effortlessly manage logistics with end-to-end supply chain precision across air, sea, and land.</p>
                  <Image src={'/images/shipment2.svg'} alt="shipment2" width={500} className="w-full sm:h-[15rem]" height={500} />
                </div>
                <LinearGradientCircle />
              </div>

              <div className=" bg-linearBlue p-8 flex sm:flex-row flex-col sm:gap-8 gap-4 items-center rounded-xl w-full">
                <div className="flex flex-1 text-white flex-col sm:gap-8 gap-4 relative z-30">
                  <h1 className="font-bold  sm:text-4xl text-lg">Connecting the World Through Logistics</h1>
                  <p className="">Streamline your global supply chain with reliable shipping solutions by air, land, and sea. From small parcels to large freight, our network ensures fast, efficient, and secure delivery to every corner of the world.</p>
                  <div className="sm:flex hidden gap-8">
                    <BaseButton className="flex min-w-[10rem] bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                    <BaseButton className="flex min-w-[10rem] !bg-transparent border-white rounded-xl border-2 text-white justify-between">Get A Quote <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                  </div>
                </div>
                <div className=" flex-1 flex flex-col gap-2">
                  <Image src={'/images/shipment.svg'} alt="shipment" width={100} className="w-full h-full" height={100} />
                  <div className="flex sm:hidden gap-2 flex-wrap">
                    <BaseButton className="flex min-w-[10rem] sm:w-max w-full bg-base-purple text-white justify-between">Get Started Today <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                    <BaseButton className="flex min-w-[10rem] sm:w-max w-full !bg-transparent border-white rounded-xl border-2 text-white justify-between">Get A Quote <MdKeyboardDoubleArrowRight className="text-xl" /></BaseButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="bg-white w-full">
          <CustomerBase />
        </div> */}

        {/* <div className="bg-base-shadeBlue w-full">
          <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
            <h1 className="font-bold sm:text-[2.3rem] text-[1.5rem]">Our Customer Base Reaches <LinearGradientText text="Worldwide" /></h1>
            <div className="w-full">
              <Image src={'/images/map.svg'} alt="map" width={1000} height={1000} className="w-full"/>
            </div>
          </div>
        </div> */}




      </div>
    </>
  );
}
