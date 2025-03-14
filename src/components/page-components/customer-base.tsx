import LinearGradientText from "../common/linear-gradient-text";
import Map from "./map/map";

interface CustomerProps {
    header: { Highlight: boolean, Value: string }[]
}

export default function CustomerBase({ header }: CustomerProps) {
    return (
        <>
            <div className={`flex flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-4`}>
                <h1 className="sm:text-[2.3rem] text-[1.5rem] font-bold">
                    {header.map((e) => {
                        if (e.Highlight) {
                            return <LinearGradientText extraClass="mr-2" key={e.Value} text={e.Value} />
                        }
                        return <span className="mr-2" key={e.Value}>{e.Value}</span>
                    })}
                </h1>
            </div>
            <Map />
        </>
    )
}