import { useMemo, useState } from 'react'
import { db } from '../data/db'
import { SlideType } from '../types'
const useSlide = () => {

    const [data] = useState(db)
    const [slide, setSlide] = useState(data[0])

    const isLastSlide = useMemo(() => data[data.length - 1].id === slide.id, [slide, data])
    const isFirstSlide = useMemo(() => data[0].id === slide.id, [slide, data])

    function restartSlide() {
        const newSlide: SlideType = data.find((item: SlideType) => item.id === 1) || data[0]
        setSlide(newSlide)
    }

    function prevSlide() {
        const newSlide: SlideType = data.find((item: SlideType) => item.id === slide.id - 1) || data[0]
        setSlide(newSlide)
    }

    function nextSlide() {
        const newSlide: SlideType = data.find((item: SlideType) => item.id === slide.id + 1) || data[0]
        setSlide(newSlide)
    }

    return {
        slide,
        isLastSlide,
        isFirstSlide,
        restartSlide,
        prevSlide,
        nextSlide,
    }
}

export default useSlide