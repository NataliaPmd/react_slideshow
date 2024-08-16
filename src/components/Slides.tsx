
import useSlide from "../hooks/UseSlide"
import Navbar from "./Navbar"
import Slide from "./Slide"

export default function Slides() {

  const{slide, isFirstSlide, isLastSlide, restartSlide, prevSlide, nextSlide} = useSlide()
  return (
    <div
      className="max-w-7xl flex flex-col justify-center m-auto mt-48"
    >
      <Navbar
        restartSlide={restartSlide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        isFirstSlide={isFirstSlide}
        isLastSlide={isLastSlide}
      />
      <Slide
        slide={slide}
      />
    </div>
  )
}

