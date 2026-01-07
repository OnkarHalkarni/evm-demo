"use client"

import { useState, useEffect } from "react"
import EVMDisclaimer from "./evm-disclaimer"
import WardEVM from "./ward-evm"
import ConfirmationModal from "./confirmation-modal"

export default function EVMVotingInterface() {
  const [totalVotes, setTotalVotes] = useState(0)
  const [showFinalConfirmation, setShowFinalConfirmation] = useState(false)

  useEffect(() => {
    if (totalVotes === 4) {
      setShowFinalConfirmation(true)
    }
  }, [totalVotes])

  const wards = [

    {
      wardName: "प्रभाग क्रमांक 12 गट अ",
      wardNumber: "12-A",
      candidates: [
        { srNo: 1, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 2, name: "", party: "", photo: "", symbol: "", active: false },
        {
          srNo: 3,
          name: "सौ. सुरेखा परमेश्वर म्हारगुडे (थोरात)",
          party: " काँग्रेस ",
          photo: "/surekha.jpg",
          symbol: "/congress.png",
          active: true,
        },
        { srNo: 4, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 5, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 6, name: "", party: "", photo: "", symbol: "", active: false },
      ],
    },
    {
      wardName: "प्रभाग क्रमांक 12 गट ब",
      wardNumber: "12-B",
      candidates: [
        { srNo: 1, name: "", party: "", photo: "", symbol: "", active: false },
        {
          srNo: 2,
          name: "सौ.शिंदे आशा नितीन (काका) ",
          party: "राष्ट्रवादी",
          photo: "/Asha.JPG",
          symbol: "/ncp.jpg",
          active: true,
        },
        { srNo: 3, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 4, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 5, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 6, name: "", party: "", photo: "", symbol: "", active: false },
      ],
    },
    {
      wardName: "प्रभाग क्रमांक 12 गट क",
      wardNumber: "12-C",
      candidates: [
        { srNo: 1, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 2, name: "", party: "", photo: "", symbol: "", active: false },
        {
          srNo: 3,
          name: "श्री.प्रमोद (भैय्या) प्र. सूर्यवंशी",
          party: "काँग्रेस",
          photo: "/promod.jpg",
          symbol: "/congress.png",
          active: true,
        },
        { srNo: 4, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 5, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 6, name: "", party: "", photo: "", symbol: "", active: false },
      ],
    },
    {
      wardName: "प्रभाग क्रमांक 12 गट ड",
      wardNumber: "12-D",
      candidates: [
        { srNo: 1, name: "", party: "", photo: "", symbol: "", active: false },
        {
          srNo: 2,
          name: "श्री.मनोज उर्फ अभिजीत हणमंतराव फार्णे",
          party: "राष्ट्रवादी",
          photo: "/Manoj.jpg",
          symbol: "/ncp.jpg",
          active: true,
        },
        { srNo: 3, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 4, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 5, name: "", party: "", photo: "", symbol: "", active: false },
        { srNo: 6, name: "", party: "", photo: "", symbol: "", active: false },
      ],
    },
  ]

  return (
    <div className="w-full max-w-5xl px-2 sm:px-0">
      {/* Company Header */}
      <div className="bg-gray-800 text-white p-2 text-center mb-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-center gap-4">
          <img src="/logo.jpg" alt="Takht India Logo" className="h-8 w-8" />
          <h2 className="text-lg font-bold">Takht India</h2>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 text-white p-4 sm:p-6 text-center border-b-4 border-pink-800 mb-6 sm:mb-8 rounded-lg shadow-2xl">
        <h1 className="text-2xl sm:text-4xl font-bold">सांगली मिरज कुपवाड शहर महानगरपालिका सार्वत्रिक निवडणूक २०२६</h1>
        <p className="text-base sm:text-lg mt-2 opacity-90">४ विभाग • विविध उम्मेदवार</p>
      </div>

      {/* Vote Counter */}
      <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg text-center mb-6">
        <h3 className="text-lg font-bold">एकूण मतदान संख्या</h3>
        <p className="text-2xl font-mono">{totalVotes}</p>
      </div>

      {/* Wards Container */}
      <div className="space-y-4 sm:space-y-8">
        {wards.map((ward, index) => (
          <WardEVM key={index} wardName={ward.wardName} wardNumber={ward.wardNumber} candidates={ward.candidates} onVote={() => setTotalVotes(prev => prev + 1)} />
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-12">
        <EVMDisclaimer />
      </div>

      {/* Footer */}
      <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 text-center rounded-lg shadow-2xl">
        <div className="flex items-center justify-center gap-3 mb-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <h3 className="text-lg font-bold">Contact Us</h3>
        </div>
        <p className="text-green-100 mb-3">For more information about the election process</p>
        <a href="https://wa.me/9657114882" className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          WhatsApp: +91 96571 14882
        </a>
      </div>

      {/* Final Confirmation Modal */}
      {showFinalConfirmation && (
        <ConfirmationModal
          candidateName="सर्व उमेदवार"
          partyName="सर्व पक्ष"
          onClose={() => setShowFinalConfirmation(false)}
        />
      )}
    </div>
  )
}

