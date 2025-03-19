'use client'

import { Video } from "@triyanox/react-video"

export default function BaseVideo({src}:{src:string}) {
    return (
        <Video
            autoPlay={false}
            className="max-h-96"
            icons={
                {
                    play: () => <div className="p-4 border-2 rounded-full border-white text-white"><p>PLAY</p></div>,
                    backBy10() {
                        return <></>
                    },
                    forwardBy10() {
                        return <></>
                    },
                }
            }
            poster=""
            src={src}
        />
    )
}