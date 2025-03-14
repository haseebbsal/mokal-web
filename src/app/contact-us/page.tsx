import CardsContent from "@/components/page-components/cards-content";
import Content from "@/components/page-components/content";
import CustomerBase from "@/components/page-components/customer-base";
import FAQSs from "@/components/page-components/faqs";
import MainBlog from "@/components/page-components/main-blog";
import RefineTransportPage from "@/components/page-components/refine-transportPage";
import TabPageComponent from "@/components/page-components/tab";
import Testimonials from "@/components/page-components/testimonials";
import Title from "@/components/page-components/title";
import { client } from "@/utils/constants";
import { PagesContent } from "@/utils/types";

export default async function ContactUs() {
    const homeData: { content: [PagesContent] } = await client.fetch({
        query: `*[_type=='contact'][0]{
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
                        <h1 className="sm:text-[3rem] text-[1.8rem] font-bold"><LinearGradientText text="Contact Us" /> </h1>
                        <BaseBreadCrumb items={['About Us', 'Contact Us']} />
                    </div>
                </div>

                <FAQS />

                <div className="bg-base-shadeBlue  w-full">
                    <CustomerBase />
                </div>

                <RefineTransport />

            </div> */}

            <div className={`flex flex-col gap-4`}>
                {content.map((e, index) => {
                    return (<div key={e._type + index}
                        className={`${index != 0 ? index % 2 != 0 ? 'bg-white w-full' : 'bg-base-shadeBlue w-full' : ""}`}>
                        {e._type == 'title' && <Title identifier="contact" breadCrumb={['About Us', 'Contact Us']} header={e.header!} title={e.title} buttons={e.buttons} imageUrl={e.imageUrl} description={e.description} />}
                        {e._type == 'tabs' && <TabPageComponent variation={e.variation!} header={e.header!} slider={e.slider as any} />}
                        {e._type == 'content' && <Content content={e.content as any} />}
                        {e._type == 'faqs' && <FAQSs header={e.header!} questions={e.questions!} description={e.description!} />}
                        {e._type == 'mapComponent' && <CustomerBase header={e.header!} />}
                        {e._type == 'refineTransport' && <RefineTransportPage />}
                        {e._type == 'cards' && <CardsContent buttons={e.buttons} description={e.description!} header={e.header!} cards={e.cards as any} variation={e.variation!} />}
                        {e._type == 'blogComponent' && <MainBlog header={e.header!} blogs={e.blogs} />}
                        {e._type == 'testimonialComponent' && <Testimonials description={e.description} header={e.header!} testimonials={e.testimonials} />}

                    </div>)
                })}
            </div>
        </>
    )
}