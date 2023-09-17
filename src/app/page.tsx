import About from '@/components/About/About'
import Exchange from '@/components/exchnage/Exchange'
import Hero from '@/components/hero/Hero'
import Market from '@/components/market/Market'
import Navbar from '@/components/nav/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Market/>
    <Exchange/>

    </>
  )
}
