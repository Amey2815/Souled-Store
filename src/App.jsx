import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import DropOfTheWeek from './components/DropOfTheWeek'
import Categories from './components/Categories'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <TopBar />
      <NavBar />
      <main>
        <Slider />
        <DropOfTheWeek />
        <Categories />
      </main>
      <Footer />
    </div>
  )
}