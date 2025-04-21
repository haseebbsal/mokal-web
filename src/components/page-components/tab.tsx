import BaseTabs from "../common/base-tabs";
import LinearGradientText from "../common/linear-gradient-text";



interface TabProps {
    // title?: string,
    header: [{ Value: string, Highlight: boolean }]
    slider: [{
        header?: [{ Value: string, Highlight: boolean }],
        imageUrl?: string,
        buttons?: [{ withBackground: boolean, url: { current: string }, text: string }],
        name: string, description?: string,
        cards: [{ imageUrl: string, description: string }]
    }],
    variation:number
}


export default function TabPageComponent({ header, slider,variation }: TabProps) {
    // console.log('sliderrr',slider)
    return (
      
            <div className={`flex flex-col items-center m-auto sm:px-8 px-4 sm:py-20 py-16  text-center gap-4`}>
                <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">
                    {
                        header.map((e) => {
                            if (e.Highlight) {
                                return <LinearGradientText extraClass="mr-2" key={e.Value} text={e.Value} />
                            }
                            return <span className="mr-2" key={e.Value}>{e.Value}</span>
                        })
                    }
                </h1>
                <div className="flex flex-col sm:w-[80%] w-full gap-4">
                    <BaseTabs variation={variation} keys={slider as any} />
                </div>
            </div>
    )
}