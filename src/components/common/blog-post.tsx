'use client'

import Image from "next/image"
import { FaQuoteRight } from "react-icons/fa"
import ReactStars from "react-stars"

export default function BlogPost({index}:{index:number}) {
    return (
        <div className="px-8">
            <div className={`p-4 ${index%2==0?'text-white bg-base-blue': 'text-base-blue bg-white'} items-start text-start shadow-xl  rounded-xl flex flex-col gap-2`}>
                <div className="flex justify-between w-full">
                    <Image src={'/people/person.svg'} alt="person" height={70} width={70} />
                    <FaQuoteRight className="text-base-purple text-2xl" />
                </div>
                <div>
                    <p className="font-semibold">Patrick, Lubbock, TX</p>
                    <p className="text-xs text-text-gray">July 2024</p>
                </div>
                <ReactStars
                    edit={false}

                    value={5}
                    count={5}
                    onChange={() => { }}
                    size={24}
                    color2={'yellow'} />
                <p>The team’s insights saved us time and money on our taxes.</p>
            </div>
        </div>
    )
}