
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPAge from './pages/PokedexPAge'
import PokeInfoPage from './pages/PokeInfoPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() { 

  return (
   
      <div> 

          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route element={<ProtectedRoutes/>}>

            <Route path='/pokedex' element={<PokedexPAge/>} />
            <Route path='/pokemon/:name' element={<PokeInfoPage/>} />

            </Route>
          </Routes>

        
      </div>
    
  )
}

export default App
