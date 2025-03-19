import Image from "next/image";
import LinearGradientText from "../common/linear-gradient-text";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


interface ContentProps {
    content: [{
        imageUrl?: string
        description?: [{ imageUrl: string, description: string, name?: string, list?: string[] }]
        header?: [{ Value: string, Highlight: boolean }],
        arrayContent?: [{ imageUrl: string, name: string, description: string }]
        buttons?: [{ withBackground: boolean, url: { current: string }, text: string }]
    }]
    customerSpotlight?: boolean
}


export default function Content({ content}: ContentProps) {
    return (
        <>



            {<div className={`flex sm:flex-row flex-col m-auto sm:px-8 px-4 sm:py-20 py-16 sm:w-[80%] text-center gap-16`}>
                {content.map((e) => {

                    if (e.imageUrl) return <Image key={e.imageUrl} className="flex-1" src={e.imageUrl} alt="metrics" width={500} height={500} />
                    return (
                        <div key={e.header![0].Value} className="flex flex-1 flex-col sm:items-start items-center sm:text-start text-center gap-4">

                            <h1 className="sm:text-[3rem] text-[1.5rem] font-bold">
                                {
                                    e.header!.map((e) => {
                                        if (e.Highlight) {
                                            return <LinearGradientText extraClass="mr-2" key={e.Value} text={e.Value} />
                                        }
                                        return <span className="mr-2" key={e.Value}>{e.Value}</span>
                                    })
                                }
                            </h1>

                            {e.description?.map((e) => {
                                {
                                    if (e.imageUrl) {
                                        return (
                                            <div key={e.description} className="p-4 shadow-lg rounded-lg flex gap-4">
                                                <Image src={e.imageUrl} alt="worldwide" width={50} height={50} />
                                                <div className="flex flex-col gap-4 text-start">
                                                    <p className="text-base-blue font-semibold">{e.name}</p>
                                                    <p>{e.description}</p>
                                                </div>
                                            </div>)
                                    }
                                    if (e.list) return (
                                        <div className="grid grid-cols-2 gap-4 w-full">
                                            {e.list.map((e) => <div key={e} className="flex gap-4 items-center">
                                                <div className="p-[0.3rem] border-2 border-base-lightBlue  bg-base-blue rounded-full">
                                                </div>
                                                <p>{e}</p>
                                            </div>)}
                                        </div>
                                    )
                                    return <p key={e.description} className="text-text-gray text-md">{e.description}</p>
                                }
                            })}
                            <div className="flex ">
                                {e.arrayContent?.map((e) => <div key={e.name} className="flex flex-col h-full flex-1 sm:items-start items-center sm:text-start text-center gap-2">
                                    {e.imageUrl && <Image src={e.imageUrl} alt="hand" width={40} height={40} />}
                                    <h2 className="font-bold">{e.name}</h2>
                                    <p className="text-text-gray">{e.description}</p>
                                </div>)}
                                {/* <div className="flex flex-col h-full flex-1 sm:items-start items-center sm:text-start text-center gap-2">
                                    <Image src={'/icons/hand.svg'} alt="hand" width={40} height={40} />
                                    <h2 className="font-bold">Best Rates</h2>
                                    <p className="text-text-gray">Best Shipping rates across all the freights</p>
                                </div>
                                <div className="flex flex-col h-full flex-1 sm:items-start items-center sm:text-start text-center gap-2">
                                    <Image src={'/icons/globe-search.svg'} alt="globe search" width={40} height={40} />
                                    <h2 className="font-bold">15% at Least</h2>
                                    <p className="text-text-gray">Average Shipping Cost Savings</p>
                                </div> */}
                            </div>

                            <div className="flex gap-4 flex-wrap">
                                {e.buttons?.map((e) => {
                                    if (e.withBackground) {
                                        return <Link key={e.url.current + e.text} href={e.url.current} className="bg-base-purple min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-white border-2 py-2 ">{e.text}<MdKeyboardDoubleArrowRight className="text-lg" /></Link>
                                    }
                                    return <Link key={e.url.current + e.text} href={e.url.current} className="bg-transparent min-w-[9rem] flex justify-between items-center rounded-xl px-2 text-base-purple border-2  border-base-purple py-2">{e.text}<MdKeyboardDoubleArrowRight className="text-lg" /></Link>
                                })}
                            </div>
                        </div>
                    )
                })}
                {/* <Image className="flex-1" src={'/images/metrics.svg'} alt="metrics" width={500} height={500} /> */}
            </div>}
        </>
    )
}