import { Link } from 'react-router-dom'
import './App.scss'

export default function Home() {
  return (
    <>
      <div className="bg-cyan-700 h-screen flex items-center justify-center">
            
            <div id="welcomeBoard" className=" h-4/6 w-6/12 text-white justify-center items-center flex flex-col">
            <div className='background absolute'></div>
              <h1 className=' w-fit lg:text-5xl md:text-4xl font-bold text-center mb-20 py-5 px-1 text-slate-50'>Welcome to your Food&nbsp;-&nbsp;Suggest</h1>
             
              <button className='bg-slate-500 px-8 py-4 rounded-3xl w-10/12 lg:w-6/12 text-xl'>
              <Link to='/foodSuggest'>
                Get Started
              </Link>
              </button>
            </div>
        
        
      </div>

    </>
  )
}
