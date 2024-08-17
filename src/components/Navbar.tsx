import { Dispatch, useMemo } from "react"
import { SlideAction } from "../reducers/slide-reducer"
import { SlideType } from "../types"

type NavbarProps = {
  dispatch: Dispatch<SlideAction>
  slide: SlideType,
  data: SlideType[]
}

export default function Navbar({dispatch, slide, data} : NavbarProps) {
  
  //state derivado
  const isLastSlide = useMemo(() => data[data.length - 1].id === slide.id, [slide, data])
  const isFirstSlide = useMemo(() => data[0].id === slide.id, [slide, data])

  return (
    <div className="flex flex-row justify-evenly items-center">
      <button
        className="bg-red-100 hover:bg-red-300  p-3 text-lg rounded-lg w-24 shadow-sm disabled:bg-gray-200"
        type="button"
        disabled={isFirstSlide}
        onClick={()=>dispatch({type: 'restart'})}
      >Restart</button>
      <button 
        className="bg-red-100 hover:bg-red-300  p-3 text-lg rounded-lg w-24 shadow-sm disabled:bg-gray-200"
        type="button"
        disabled={isFirstSlide}
        onClick={()=>dispatch({type: 'prev'})}
      >Prev</button>
      <button 
        className="bg-red-100 hover:bg-red-300  p-3 text-lg rounded-lg w-24 shadow-sm disabled:bg-gray-200"
        type="button"
        disabled={isLastSlide}
        onClick={()=>dispatch({type: 'next'})}
      >Next</button>

    </div>
  )
}
