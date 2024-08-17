
import { useReducer } from "react"
import { initialState, slideReducer } from "../reducers/slide-reducer"
import Navbar from "./Navbar"
import Slide from "./Slide"

export default function Slides() {

  const[state, dispatch] = useReducer(slideReducer, initialState)

  return (
    <div
      className="max-w-7xl flex flex-col justify-center m-auto mt-48"
    >
      <Navbar
        dispatch={dispatch}
        slide={state.slide}
        data={state.data}
      />
      <Slide
        slide={state.slide}
      />
    </div>
  )
}

