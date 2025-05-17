import React from 'react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header>
      <div className="container">
        <div className="logo">JD</div>
        
        <div className="nav-wrapper">
          <nav>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Navbar; 