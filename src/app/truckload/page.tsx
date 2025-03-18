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


export default async function Truckload() {
  const homeData: { content: [PagesContent] } = await client.fetch({
    query: `*[_type=='truckload'][0]{
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
  return (
    <>
      {/* <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <div className="flex flex-col ">
                            <p className="text-base-purple text-xl font-semibold">Unmatched Reliability</p>
                            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Truckload" /> </h1>
                            <p className="text-text-gray text-lg">Tailored Solutions and Competitive Pricing from Trusted Carriers</p>
                        </div>
                        <BaseBreadCrumb items={['Services', 'Truckload']} />
                    </div>
                </div>

                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
                        <Image className="flex-1" src={'/images/truckload.svg'} alt="truckload" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[2rem] text-[1.5rem] font-bold"><LinearGradientText extraClass="" text="Truckload" /> Shipping Services </h1>
                            <p className="text-text-gray text-md">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. packages and web page editors now use Lorem Ipsum as their default model.</p>
                            <p className="text-text-gray text-md">Packages and web page editors now use Lorem Ipsum as their default model textlayout. The point of using areIpsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here content normal distribution of letters as opposed to here making readable making.</p>
                            <div className="flex gap-4 flex-wrap">
                                <Link href={'/book-a-demo'} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple">Book a Demo<MdKeyboardDoubleArrowRight className="text-lg" /></Link>


                                <BaseButton extraClass="flex !min-w-52 sm:w-max w-full justify-between">Get Started Today<MdKeyboardDoubleArrowRight /></BaseButton>
                            </div>

                        </div>
                    </div>
                </div>


                <CourierService />

                <ReasonsToChooseUs />

                <HearFromUsAndBlogs />
            </div> */}

      <div className={`flex flex-col gap-4`}>
        {content.map((e, index) => {
          return (<div key={e._type + index}
            className={`${index != 0 ? index % 2 != 0 ? 'bg-white w-full' : 'bg-base-shadeBlue w-full' : ""}`}>
            {e._type == 'title' && <Title identifier="1" breadCrumb={['Services', 'Truckload']} header={e.header!} title={e.title} buttons={e.buttons} imageUrl={e.imageUrl} description={e.description} />}
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