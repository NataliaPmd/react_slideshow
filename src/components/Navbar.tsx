
type NavbarProps = {
  isFirstSlide: boolean
  isLastSlide: boolean
  restartSlide: () => void
  prevSlide: () => void
  nextSlide: () => void
}


export default function Navbar({isFirstSlide, isLastSlide, restartSlide, prevSlide, nextSlide} : NavbarProps) {


  return (
    <div className="flex flex-row justify-evenly items-center">
      <button
        className="bg-red-100 hover:bg-red-300  p-3 text-lg rounded-lg w-24 shadow-sm disabled:bg-gray-200"
        type="button"
        disabled={isFirstSlide}
        onClick={()=>restartSlide()}
      >Restart</button>
      <button 
        className="bg-red-100 hover:bg-red-300  p-3 text-lg rounded-lg w-24 shadow-sm disabled:bg-gray-200"
        type="button"
        disabled={isFirstSlide}
        onClick={()=>prevSlide()}
      >Prev</button>
      <button 
        className="bg-red-100 hover:bg-red-300  p-3 text-lg rounded-lg w-24 shadow-sm disabled:bg-gray-200"
        type="button"
        disabled={isLastSlide}
        onClick={()=>nextSlide()}
      >Next</button>

    </div>
  )
}
