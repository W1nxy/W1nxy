import React from 'react'

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-green rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-pulse"></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '2s' }}
      ></div>
      <div 
        className="absolute top-1/2 right-1/3 w-32 h-32 bg-neon-green/5 rounded-full blur-2xl animate-pulse" 
        style={{ animationDelay: '4s' }}
      ></div>

      {/* Code Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[
          '01001000 01100001 01100011 01101011',
          'SELECT * FROM users WHERE security = 0;',
          'import sys; import os; exec(payload)',
          '#!/bin/bash\nfor i in {1..254}; do',
          'nmap -sS -O target.com',
          'grep -r "password" /etc/',
          'sudo nc -lvp 4444',
          'python exploit.py --target'
        ].map((text, i) => (
          <div
            key={i}
            className="absolute text-neon-green font-mono text-xs whitespace-nowrap animate-code-rain"
            style={{
              left: `${i * 12.5}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FloatingElements