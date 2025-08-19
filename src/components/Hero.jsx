import React from 'react'
import { Terminal, Shield, Code, Lock } from 'lucide-react'

const Hero = ({ onGetStarted }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Content */}
        <div className="relative z-10">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="neon-text">W1nxy</span>
              <br />
              <span className="text-white">Cybersecurity Hub</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ethical hacking, penetration testing, and cybersecurity mastery. 
              <br />
              <span className="text-neon-green">Securing the future, one line of code at a time.</span>
            </p>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-neon-green/20 to-transparent border border-neon-green/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Terminal className="w-8 h-8 text-neon-green" />
              </div>
              <p className="text-sm text-gray-400">Pentesting</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-neon-blue/20 to-transparent border border-neon-blue/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-neon-blue" />
              </div>
              <p className="text-sm text-gray-400">Defense</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-neon-purple/20 to-transparent border border-neon-purple/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-neon-purple" />
              </div>
              <p className="text-sm text-gray-400">CTFs</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-neon-pink/20 to-transparent border border-neon-pink/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-8 h-8 text-neon-pink" />
              </div>
              <p className="text-sm text-gray-400">Analysis</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="cyber-button text-lg px-8 py-4"
            >
              Get Started
            </button>
            
            <a
              href="#leaderboard"
              className="px-8 py-4 bg-transparent border-2 border-gray-500 text-gray-300 font-semibold uppercase tracking-wider hover:border-gray-300 hover:text-white transition-all duration-300"
            >
              View Leaderboard
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-neon-green mb-2">500+</div>
              <div className="text-gray-400">CTF Challenges</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-neon-blue mb-2">150+</div>
              <div className="text-gray-400">Security Audits</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-neon-purple mb-2">24/7</div>
              <div className="text-gray-400">Threat Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero