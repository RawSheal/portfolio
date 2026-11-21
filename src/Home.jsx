import Header from './Header'
import Hero from './Hero'
import About from './About'
import Tech from './Tech'
import Contact from './Contact'
import Footer from './Footer'
import Work from './Work'
import Blog from './blog'

function Home() {
    
  return (
    <>
        <div className=' w-full'>
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Fine-grain Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.08]  bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
      </div>
            <Header />
            <Hero />
            <About />
            <Tech />
            <Work />
            <Blog />
            <Contact />
            <Footer />
        </div>
    </>
  )
}

export default Home