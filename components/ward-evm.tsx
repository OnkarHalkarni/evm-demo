"use client"

import { useState } from "react"
import EVMTable from "./evm-table"
import ConfirmationModal from "./confirmation-modal"

interface WardEVMProps {
  wardName: string
  wardNumber: string
  candidates: Array<{
    srNo: number
    name: string
    party: string
    photo: string
    symbol: string
    voice: string
    active: boolean
  }>
  onVote?: (candidate: { srNo: number; name: string; party: string; photo: string; symbol: string; voice: string; active: boolean }) => void
}

export default function WardEVM({ wardName, wardNumber, candidates, onVote }: WardEVMProps) {
  const [hasVoted, setHasVoted] = useState(false)

  const bgColor = wardNumber.endsWith('-A') ? 'bg-white' :
                  wardNumber.endsWith('-B') ? 'bg-pink-100' :
                  wardNumber.endsWith('-C') ? 'bg-yellow-100' :
                  wardNumber.endsWith('-D') ? 'bg-blue-100' : 'bg-white'

  const headerBgColor = wardNumber.endsWith('-A') ? 'bg-white text-black' :
                        wardNumber.endsWith('-B') ? 'bg-pink-100 text-black' :
                        wardNumber.endsWith('-C') ? 'bg-yellow-100 text-black' :
                        wardNumber.endsWith('-D') ? 'bg-blue-100 text-black' : 'bg-white text-black'

  const handleVote = (candidate: (typeof candidates)[0]) => {
    playBuzzerSound()
    speakVote(candidate)
    setHasVoted(true)
    onVote?.(candidate)
  }

  const playBuzzerSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = 800
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.2)
  }

  const speakVote = (candidate: (typeof candidates)[0]) => {
    const audio = new Audio(candidate.voice || '/votingaudio.mpeg')
    audio.volume = 1
    audio.play().catch(console.error)
  }

  return (
    <div className="w-full mb-4 sm:mb-8">
      {/* Ward Container */}
      <div className={`${bgColor} rounded-lg border-4 border-blue-600 shadow-2xl hover:shadow-3xl transition-shadow duration-300`}>
        {/* Ward Header */}
        <div className={`${headerBgColor} text-white p-3 sm:p-4 text-center border-b-3 border-blue-700 rounded-t-lg`}>
          <h2 className="text-lg sm:text-2xl font-bold text-black">{wardName}</h2>
          <p className="text-xs sm:text-sm opacity-90 text-black">प्रभाग क्र. {wardNumber}</p>
        </div>

        {/* Candidate Table */}
        <div className="p-3 sm:p-6">
          <EVMTable candidates={candidates} hasVoted={hasVoted} onVote={handleVote} />
        </div>
      </div>
    </div>
  )
}
