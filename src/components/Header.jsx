import React from 'react'
import { Shield, Menu, User, LogOut } from 'lucide-react'

const Header = ({ user, onLogin, onSignup, onLogout }) => {
  return (
    <header className="relative z-20 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-neon-green animate-glow" />
            <span className="text-xl font-bold neon-text">W1nxy</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-neon-green transition-colors duration-300">
              Home
            </a>
            <a href="#leaderboard" className="text-gray-300 hover:text-neon-green transition-colors duration-300">
              Leaderboard
            </a>
            <a href="#about" className="text-gray-300 hover:text-neon-green transition-colors duration-300">
              About
            </a>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-neon-green" />
                  <span className="text-sm text-gray-300">{user.username}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-300"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onLogin}
                  className="text-gray-300 hover:text-neon-green transition-colors duration-300 font-medium"
                >
                  Login
                </button>
                <button
                  onClick={onSignup}
                  className="cyber-button text-sm px-4 py-2"
                >
                  Sign Up
                </button>
              </>
            )}
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-400 hover:text-neon-green transition-colors duration-300">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header