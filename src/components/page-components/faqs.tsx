import { client} from "@/utils/constants";
import LinearGradientText from "../common/linear-gradient-text";
import { FAQS } from "@/utils/types";
import AccordionFaqs from "./accordion.faq";

export default async function FAQSs({data}:{data?:FAQS}) {

    const faqsData: FAQS =data??  await client.fetch(
        {
            query: `*[_type == 'faqs'][0]{
  // ...,
   description,
     "header":[...header[]{
       Value,
         Highlight
     }],
               "questions":[...questions[]{answer,question}]
 }`, config: {
                cache: 'no-store',
            }
        },

    )

    console.log(faqsData)


    return (

        <div className="bg-white w-full">
            <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
                <h1 className="font-bold sm:text-[2.3rem] justify-center flex gap-2 text-[1.5rem]">
                    {
                        faqsData.header.map((e) => {
                            if (e.Highlight) {
                                return <LinearGradientText key={e.Value} text={e.Value} />
                            }
                            return <span key={e.Value}>{e.Value}</span>
                        })
                    }
                </h1>
                <p className="text-text-gray">{faqsData.description}</p>
              <AccordionFaqs questions={faqsData.questions}/>
            </div>
        </div>

    )
}