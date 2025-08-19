import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Leaderboard from './components/Leaderboard'
import AuthModal from './components/AuthModal'
import FloatingElements from './components/FloatingElements'

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login') // 'login' or 'signup'
  const [user, setUser] = useState(null)

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  const closeAuthModal = () => {
    setIsAuthModalOpen(false)
  }

  const handleAuth = (userData) => {
    setUser(userData)
    closeAuthModal()
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden">
        <FloatingElements />
        
        <Header 
          user={user} 
          onLogin={() => openAuthModal('login')}
          onSignup={() => openAuthModal('signup')}
          onLogout={handleLogout}
        />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Hero onGetStarted={() => openAuthModal('signup')} />
                <Leaderboard />
              </>
            } />
          </Routes>
        </main>

        <AuthModal 
          isOpen={isAuthModalOpen}
          mode={authMode}
          onClose={closeAuthModal}
          onAuth={handleAuth}
          onSwitchMode={(mode) => setAuthMode(mode)}
        />
      </div>
    </Router>
  )
}

export default App
