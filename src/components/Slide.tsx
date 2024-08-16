import { SlideType } from "../types";

type SlideProps = {
  slide: SlideType
}

export default function Slide({slide}: SlideProps) {
  return (
    <div
      className="flex flex-col justify-evenly items-center  py-60 rounded-lg mt-20 bg-white shadow-2xl"
    >
      <div
        className="font-sans text-5xl font-bold p-6"
      >
        {slide.title}
      </div>
      <div
        className="font-serif text-xl p-4"
      >
        {slide.text}
      </div>
    </div>
    
  )
}
