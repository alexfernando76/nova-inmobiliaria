import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Properties from './components/Properties'
import ContactForm from './components/ContactForm'
import ValuationForm from './components/ValuationForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="max-w-[1600px] mx-auto">
        <Hero />
        <Properties />
        <ContactForm />
        <ValuationForm />
      </main>
      <Footer />
    </div>
  )
}
