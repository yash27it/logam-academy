import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Courses from './sections/Courses'
import WhyLogam from './sections/WhyLogam'
import LeadForm from './sections/LeadForm'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <WhyLogam />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}
