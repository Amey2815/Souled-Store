import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Mens from './pages/Mens/Mens'
import Womens from './pages/Womens/Womens'
import Kids from './pages/Kids/Kids'

export default function App() {
  return (
    <div className="font-sans">
      <TopBar />
      <NavBar />
      <Routes>
        <Route path='/' element={<Mens />}/>
        <Route path='/men' element={<Mens />} />
        <Route path='/women' element={<Womens />} />
        <Route path='/kids' element={<Kids/>} />
      </Routes>
      <Footer />
    </div>
  )
}