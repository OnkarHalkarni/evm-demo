"use client"

import { useEffect } from "react"

interface ConfirmationModalProps {
  candidateName: string
  partyName: string
  onClose: () => void
}

export default function ConfirmationModal({ candidateName, partyName, onClose }: ConfirmationModalProps) {
  useEffect(() => {
    const speakVoteConfirmation = () => {
      const utterance = new SpeechSynthesisUtterance(`तुम्ही ${candidateName} ला मत दिले आहे`)
      utterance.rate = 1
      utterance.pitch = 1
      utterance.volume = 1
      utterance.lang = 'hi-IN'
      window.speechSynthesis.speak(utterance)
    }

    speakVoteConfirmation()
  }, [candidateName])

  const handleWhatsAppShare = () => {
    const message = `मी ${partyName} च्या ${candidateName} ला महानगर पालिका निवडणुकीत मत दिले! #VoteMatters`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-white rounded-lg border-4 border-blue-900 shadow-2xl max-w-sm sm:max-w-md w-full transform transition-all duration-300 scale-100 hover:scale-105">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white p-4 sm:p-6 text-center border-b-4 border-blue-900 rounded-t-lg">
          <h2 className="text-lg sm:text-2xl font-bold">✓ मत निश्चित</h2>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-8 text-center">
          <div className="bg-blue-50 border-2 border-blue-600 rounded-sm p-4 sm:p-6 mb-4 sm:mb-6">
            <p className="text-lg sm:text-xl font-bold text-blue-900">{candidateName}</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">{partyName}</p>
          </div>

          <p className="text-gray-600 text-xs sm:text-sm mb-6 sm:mb-8">तुमचे मत नोंदवले गेले आहे. सहभागासाठी धन्यवाद!</p>

          {/* Buttons */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <button
              onClick={handleWhatsAppShare}
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 font-bold text-sm sm:text-base rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg w-full"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.74 5.402 2.144 7.718l-2.256 6.59 6.754-2.23c2.25 1.217 4.76 1.86 7.297 1.86 9.933 0 18.024-8.091 18.024-18.024 0-4.823-1.998-9.374-5.223-12.601-3.225-3.226-7.778-5.223-12.601-5.223" />
              </svg>
              व्हॉट्सअॅप वर शेअर करा
            </button>

            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-6 sm:px-8 py-2 font-bold text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              बंद करा
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
