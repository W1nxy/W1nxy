import React, { useState, useEffect } from 'react'
import { Trophy, Crown, Medal, Users, AlertTriangle } from 'lucide-react'

// Demo data for when API is unavailable
const demoLeaderboardData = [
  { id: 1, username: 'W1nxy', score: 9850, rank: 1, avatar: '👑', ctfsSolved: 45, country: 'MA' },
  { id: 2, username: 'CyberNinja', score: 9420, rank: 2, avatar: '🥷', ctfsSolved: 42, country: 'US' },
  { id: 3, username: 'H4ck3rQueen', score: 8950, rank: 3, avatar: '👸', ctfsSolved: 38, country: 'UK' },
  { id: 4, username: 'ByteBuster', score: 8670, rank: 4, avatar: '💀', ctfsSolved: 35, country: 'DE' },
  { id: 5, username: 'SecuritySage', score: 8420, rank: 5, avatar: '🧙', ctfsSolved: 32, country: 'FR' },
  { id: 6, username: 'CodeBreaker', score: 8150, rank: 6, avatar: '🔓', ctfsSolved: 30, country: 'CA' },
  { id: 7, username: 'PentestPro', score: 7890, rank: 7, avatar: '🛡️', ctfsSolved: 28, country: 'AU' },
  { id: 8, username: 'VirusHunter', score: 7650, rank: 8, avatar: '🏹', ctfsSolved: 26, country: 'JP' },
]

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([])
  const [loading, setLoading] = useState(true)
  const [apiUnavailable, setApiUnavailable] = useState(false)
  const [selectedTab, setSelectedTab] = useState('all')

  useEffect(() => {
    fetchLeaderboard()
  }, [])

  const fetchLeaderboard = async () => {
    setLoading(true)
    try {
      // Simulate API call
      const response = await fetch('/api/leaderboard')
      
      if (!response.ok) {
        throw new Error('API unavailable')
      }
      
      const data = await response.json()
      setLeaderboardData(data)
      setApiUnavailable(false)
    } catch (error) {
      console.log('API unavailable, using demo data')
      setApiUnavailable(true)
      setLeaderboardData(demoLeaderboardData)
    } finally {
      setLoading(false)
    }
  }

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />
      default:
        return <span className="text-lg font-bold text-gray-400">#{rank}</span>
    }
  }

  const getRankBadge = (rank) => {
    if (rank <= 3) {
      return 'bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-yellow-400/30'
    } else if (rank <= 10) {
      return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30'
    }
    return 'bg-gray-800/50 border-gray-600/30'
  }

  if (loading) {
    return (
      <section id="leaderboard" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-2 border-neon-green border-t-transparent rounded-full mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading leaderboard...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="leaderboard" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Leaderboard</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Top cybersecurity professionals and CTF champions
          </p>
          
          {apiUnavailable && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-300 text-sm">
              <AlertTriangle className="w-4 h-4" />
              Showing demo data - API unavailable
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="glass-card p-1 flex space-x-1">
            {['all', 'monthly', 'weekly'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-2 rounded-md font-medium capitalize transition-all duration-300 ${
                  selectedTab === tab
                    ? 'bg-neon-green text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {leaderboardData.slice(0, 3).map((player, index) => (
            <div
              key={player.id}
              className={`glass-card p-6 text-center relative overflow-hidden ${
                index === 0 ? 'md:order-2 transform md:scale-110' : 
                index === 1 ? 'md:order-1' : 'md:order-3'
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green to-neon-blue"></div>
              
              <div className="text-6xl mb-4">{player.avatar}</div>
              <div className="flex items-center justify-center mb-2">
                {getRankIcon(player.rank)}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{player.username}</h3>
              <div className="text-2xl font-bold text-neon-green mb-2">{player.score.toLocaleString()}</div>
              <div className="text-sm text-gray-400">{player.ctfsSolved} CTFs solved</div>
            </div>
          ))}
        </div>

        {/* Full Leaderboard */}
        <div className="glass-card">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-neon-green" />
              Global Rankings
            </h3>
            <button
              onClick={fetchLeaderboard}
              className="text-sm text-neon-green hover:text-neon-blue transition-colors duration-300"
            >
              Refresh
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">Player</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">CTFs</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-400 uppercase tracking-wider">Country</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {leaderboardData.map((player) => (
                  <tr key={player.id} className="hover:bg-white/5 transition-colors duration-300">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getRankIcon(player.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{player.avatar}</span>
                        <div>
                          <div className="text-sm font-medium text-white">{player.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-neon-green">{player.score.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{player.ctfsSolved}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">{player.country}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leaderboard