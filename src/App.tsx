import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const [activeSection, setActiveSection] = useState<string>('home')

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        {activeSection === 'home' && <Home />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  )
}

export default App
