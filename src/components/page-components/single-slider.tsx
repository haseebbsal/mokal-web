'use client'

import LinearGradientText from "../common/linear-gradient-text"
import TabWithSlider from "../common/tabs/tab-with-slider"

export default function SingleSlider({ header, buttons, description, cards }: {
    header?: [{ Value: string, Highlight: boolean }],
    imageUrl?: string,
    buttons?: [{ withBackground: boolean, url: { current: string }, text: string }],
    description?: string,
    cards: [{ imageUrl: string, description: string }]
}) {
    return (
        <>
            <div className="sm:w-[80%] m-auto">
                <TabWithSlider
                    buttons={buttons}
                    title={<h1 className="sm:!text-3xl text-xl font-bold" >
                        {
                            header!.map((e) => {
                                if (e.Highlight) {
                                    return <LinearGradientText extraClass="mr-2" key={e.Value} text={e.Value} />
                                }
                                return <span className="mr-2" key={e.Value}>{e.Value}</span>
                            })
                        }
                    </h1>}
                    description={[description!]}
                    carousel={cards.map((e) => ({ imageSrc: e.imageUrl, description: e.description }))} />

            </div >
        </>
    )
}