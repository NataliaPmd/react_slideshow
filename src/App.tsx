import Slides from './components/Slides'
import './App.css'

function App() {

  return (
    <div
      className='bg-gray-50 h-screen w-auto' 
    >
      <header className="bg-gray-800 py-5">
        <h1 className="text-center text-2xl font-bold text-red-200">Slideshow App</h1>
      </header>
      <Slides 
        />
    </div>
     
  )
}

export default App
