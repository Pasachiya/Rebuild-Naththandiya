import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import FundStatus from './components/FundStatus'
import ItemsList from './components/ItemsList'
import WhyNaththandiya from './components/WhyNaththandiya'
import DonationMethods from './components/DonationMethods'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <FundStatus />
      <ItemsList />
      <WhyNaththandiya />
      <DonationMethods />
      <Sponsors />
      <Footer />
    </main>
  )
}