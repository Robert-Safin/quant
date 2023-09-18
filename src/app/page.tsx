import About from '@/components/About/About'
import Company from '@/components/company/Company'
import Contact from '@/components/contact/Contact'
import Exchange from '@/components/exchnage/Exchange'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Join from '@/components/join/Join'
import Market from '@/components/market/Market'
import Navbar from '@/components/nav/Navbar'
import Partners from '@/components/partners/Partners'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Market/>
    <Exchange/>
    <Partners/>
    <Company/>
    <Join/>
    <Contact/>
    <Footer/>
    </>
  )
}
