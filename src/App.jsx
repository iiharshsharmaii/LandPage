import './style.scss'
import { Navbar } from './components/Navbar'
import { FirstSection } from './components/FirstSection'
import { SecondSection } from './components/SecondSection'
import { ThirdSection } from './components/ThirdSection'
import { FourthSection } from './components/FourthSection'
import { FifthSection } from './components/FifthSection'
import { SixthSection } from './components/SixthSection'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </>
  )
}

export default App
