import NavBar from './sections/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/about.jsx'
import Services from './sections/Services.jsx'
import LogoShowcase from './sections/LogoShowcase.jsx'
import Projects from './sections/projects.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/contact.jsx'
import Footer from './sections/Footer.jsx'
import ScrollToTop from './sections/ScrollToTop.jsx'

const App = () => {
    return (
        <main className="bg-black text-white min-h-screen">
            <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }
                
                .animate-fade-in-delay {
                    animation: fade-in 1s ease-out 0.3s both;
                }
                
                .animate-fade-in-delay-2 {
                    animation: fade-in 1s ease-out 0.6s both;
                }
            `}</style>
            <NavBar />
            <Hero />
            <About />
            <Services />
            <LogoShowcase />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
            <ScrollToTop />
        </main>
    )
}

export default App
