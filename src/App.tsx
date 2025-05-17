import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [theme, setTheme] = useState<string>(() => {
    // Check if theme preference is saved in localStorage
    const savedTheme = localStorage.getItem('theme')
    // Check if user has system-level preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    
    // Return saved theme or system preference or default to light
    return savedTheme || (prefersDark ? 'dark' : 'light')
  })
  
  useEffect(() => {
    // Update data-theme attribute on document.documentElement when theme changes
    document.documentElement.setAttribute('data-theme', theme)
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="app">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main>
        {activeSection === 'home' && <Home setActiveSection={setActiveSection} />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  )
}

export default App 