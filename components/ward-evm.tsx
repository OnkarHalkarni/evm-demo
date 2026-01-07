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
    active: boolean
  }>
  onVote?: (candidate: { srNo: number; name: string; party: string; photo: string; symbol: string; active: boolean }) => void
}

export default function WardEVM({ wardName, wardNumber, candidates, onVote }: WardEVMProps) {
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = (candidate: (typeof candidates)[0]) => {
    playBuzzerSound()
    speakVote(candidate.name)
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

  const speakVote = (candidateName: string) => {
    const utterance = new SpeechSynthesisUtterance(`आपण ${candidateName} यांना मत दिले`)
    utterance.rate = 1
    utterance.pitch = 1
    utterance.volume = 1
    utterance.lang = 'hi-IN'
    window.speechSynthesis.speak(utterance)
  }

  return (
    <div className="w-full mb-4 sm:mb-8">
      {/* Ward Container */}
      <div className="bg-white rounded-lg border-4 border-blue-600 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        {/* Ward Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-3 sm:p-4 text-center border-b-3 border-blue-700 rounded-t-lg">
          <h2 className="text-lg sm:text-2xl font-bold">{wardName}</h2>
          <p className="text-xs sm:text-sm opacity-90">प्रभाग क्र. {wardNumber}</p>
        </div>

        {/* Candidate Table */}
        <div className="p-3 sm:p-6">
          <EVMTable candidates={candidates} hasVoted={hasVoted} onVote={handleVote} />
        </div>
      </div>
    </div>
  )
}
