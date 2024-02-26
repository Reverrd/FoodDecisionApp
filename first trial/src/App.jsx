import { Routes, Route} from 'react-router-dom'

import FoodSuggest from './FoodSuggest'
import Home from './Home'
import './App.scss'
import FoodPositive from './FoodPositive'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' exact Component={Home}></Route> 
      <Route path='/foodSuggest' Component={FoodSuggest} />
      <Route path='/foodPositive' Component={FoodPositive} />
    </Routes>
      
    </>
  )
}

export default App
