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



export default async function WhoWeAre() {

    const homeData: { content: [PagesContent] } = await client.fetch({
        query: `*[_type=='who-we-are'][0]{
  "content":[...contentBlocks[]->{
    ...,
     "testimonials":[...testimonials[]->{
       ...,
       "imageUrl":image.asset->url
      }],
     "blogs":[...blogs[]->{
       ...,
       "imageUrl":image.asset->url
      }],
    "imageUrl":imageUrl.asset->url,
    "slider":[...slider[]{
      ...,
      "imageUrl":imageUrl.asset->url,
      "cards":[...cards[]{
        ...,
        "imageUrl":imageUrl.asset->url
      }]
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
    ]}`
    })
    const { content } = homeData

    return (
        <>
            {/* <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-8 min-h-64">
                    <div className={`flex flex-col items-center m-auto sm:px-8 px-4 py-4 sm:w-1/2  text-center gap-4`}>
                        <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Who We Are" /> </h1>
                        <BaseBreadCrumb items={['Who We Are']} />
                    </div>
                </div>

                <div className="bg-white w-full">
                    <div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
                        <Image className="flex-1" src={'/images/flexible.svg'} alt="metrics" width={500} height={500} />
                        <div className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">
                            <h1 className="sm:text-[3rem] text-[1.5rem] font-bold">Efficient, Flexible, and Reliable Freight  <LinearGradientText extraClass="" text="Solutions" /></h1>
                            <p className="text-text-gray text-md">We work with a network of more than 160,000+ carriers to create greater supply chain efficiencies for our customers. This network, combined with our industry leading technology and unmatched service, has been the key to our growth, plain and simple.</p>
                            <div className="p-4 shadow-lg rounded-lg flex gap-4">
                                <Image src={'/icons/worldwide-delivery.svg'} alt="worldwide" width={50} height={50} />
                                <div className="flex flex-col gap-4 text-start">
                                    <p className="text-base-blue font-semibold">Our Future</p>
                                    <p>We will continue to grow through our commitment to be the leading service provider in the industry. New customers and carriers turn to us daily to solve their transportation needs with competitive pricing, continuous communication and a commitment to do it right every time.</p>
                                </div>
                            </div>
                            <div className="text-text-gray">
                                <p>24/7/365</p>
                                <p>By delivering the highest level of professional service, reliability, and peace of mind to customers and carriers 24/7/365.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ReasonsToChooseUs />

                <HearFromUsAndBlogs />

            </div> */}


            <div className={`flex flex-col gap-4`}>
                {content.map((e, index) => {
                    return (<div key={e._type + index}
                        className={`${index != 0 ? index % 2 != 0 ? 'bg-white w-full' : 'bg-base-shadeBlue w-full' : ""}`}>
                        {e._type == 'title' && <Title identifier="who-we-are" breadCrumb={['Who We Are']} header={e.header!} title={e.title} buttons={e.buttons} imageUrl={e.imageUrl} description={e.description} />}
                        {e._type == 'tabs' && <TabPageComponent variation={e.variation!} header={e.header!} slider={e.slider as any} />}
                        {e._type == 'content' && <Content content={e.content as any} />}
                        {e._type == 'faqs' && <FAQSs header={e.header!} questions={e.questions!} description={e.description!} />}
                        {e._type == 'mapComponent' && <CustomerBase header={e.header!} />}
                        {e._type == 'refineTransport' && <RefineTransportPage />}
                        {e._type == 'cards' && <CardsContent buttons={e.buttons} description={e.description!} header={e.header!} cards={e.cards as any} variation={e.variation!} />}
                        {e._type == 'blogComponent' && <MainBlog header={e.header!} blogs={e.blogs} />}
                        {e._type == 'testimonialComponent' && <Testimonials header={e.header!} description={e.description} testimonials={e.testimonials} />}

                    </div>)
                })}
            </div>
        </>
    )
}