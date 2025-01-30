'use client'
import { BaseSliderProps } from '@/utils/types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        partialVisibilityGutter: 2000
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 2000
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 2000
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 2000
    }
};


export default function BaseSlider({ children ,extraClass,extraResponsive,extraSliderClass,...props}: BaseSliderProps) {
    return (
        <div className={`w-full ${extraClass}`}>
            <Carousel {...props} className={`p-4 ${extraSliderClass}`}  infinite shouldResetAutoplay responsive={extraResponsive?extraResponsive:responsive} arrows={false} autoPlay>
                {children}
            </Carousel>
        </div>
    )
}