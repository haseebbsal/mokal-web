import { client } from "@/utils/constants";
import Image from "next/image";
import LinearGradientText from "../common/linear-gradient-text";
import BaseSlider from "../common/base-slider";
import { HeaderAndCards } from "@/utils/types";

export default async function ReasonsToChooseUs({reasonsToChooseUs}:{reasonsToChooseUs?:HeaderAndCards}) {

    const reasonsToChooseUss: HeaderAndCards = reasonsToChooseUs?? await client.fetch({
        query: `*[_type=='cards' && name=='Reasons To Choose Us'][0]{
  ...,
  "header":[...header[]{
    Highlight,
      Value
  }],
  "cards":[...cards[]{
    "imageUrl":icon.asset->url,
    heading,
    description
  }]
            }`,
        config: {
            cache: 'no-store',
        }
    });


// console.log(reasonsToChooseUss)

    return (
        <div className="bg-base-shadeBlue  p-8 flex flex-col gap-4 items-center ">
            <h1 className="sm:text-[2.3rem] flex flex-wrap gap-2 text-[1.5rem] font-bold">
                {reasonsToChooseUss.header.map((e) => {
                    if (e.Highlight) {
                        return <LinearGradientText key={e.Value} text={e.Value} />
                    }
                    return <span key={e.Value} >{e.Value}</span>
                })}
            </h1>
            <div className="sm:flex hidden gap-4 w-[80%] flex-wrap">
                {reasonsToChooseUss.cards.map((e) =>
                    <div key={e.heading} className="flex flex-col gap-2 bg-white shadow-lg flex-[1_1_23rem] rounded-xl p-4">
                        <Image src={e.imageUrl} alt={e.imageUrl} width={50} height={50} />
                        <LinearGradientText extraClass="font-bold text-2xl" text={e.heading} />
                        <p className="text-text-gray">{e.description}</p>
                    </div>
                )}
            </div>
            <BaseSlider extraClass="sm:hidden block">
                {reasonsToChooseUss.cards.map((e) =>
                    <div key={e.heading} className="h-full flex px-4">
                        <div key={e.heading} className="flex flex-col gap-2 bg-white shadow-lg flex-[1_1_23rem] rounded-xl p-4">
                            <Image src={e.imageUrl} alt={e.imageUrl} width={50} height={50} />
                            <LinearGradientText extraClass="font-bold text-2xl" text={e.heading} />
                            <p className="text-text-gray">{e.description}</p>
                        </div>
                    </div>
                )}
            </BaseSlider>
        </div>
    )
}