"use client"

interface Candidate {
  srNo: number
  name: string
  party: string
  photo: string
  symbol: string
  active: boolean
}

interface EVMTableProps {
  candidates: Candidate[]
  hasVoted: boolean
  onVote: (candidate: Candidate) => void
}

export default function EVMTable({ candidates, hasVoted, onVote }: EVMTableProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full border-collapse">
        <thead>
           <tr className="bg-blue-900 text-white">
             <th className="border-2 border-gray-800 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">अनु. क्र.</th>
             <th className="border-2 border-gray-800 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold">उमेदवार तपशील</th>
             <th className="border-2 border-gray-800 px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold">पक्ष चिन्ह</th>
             <th className="border-2 border-gray-800 px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold">मतदान</th>
           </tr>
         </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr
              key={index}
              className={`${
                candidate.active ? "bg-blue-50 hover:bg-blue-100" : "bg-gray-100"
              } border-2 border-gray-800 transition-all duration-200 hover:shadow-md`}
            >
              {/* Sr. No Column */}
              <td className="border-r-2 border-gray-800 px-2 sm:px-4 py-2 sm:py-4 text-center font-semibold text-gray-800 text-sm sm:text-base">
                {candidate.srNo}
              </td>

              {/* Candidate Details Column */}
              <td className="border-r-2 border-gray-800 px-2 sm:px-4 py-2 sm:py-4">
                {candidate.active ? (
                  <div className="flex items-center gap-4">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <img
                        src={candidate.photo || "/placeholder.svg"}
                        alt={candidate.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover border-2 border-gray-400 rounded"
                      />
                    </div>

                    {/* Name and Party */}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-800 text-xs sm:text-sm truncate">{candidate.name}</p>
                      <p className="text-xs text-gray-600 mt-1 truncate">{candidate.party}</p>
                    </div>
                  </div>
                ) : (
                  <div className="h-12 sm:h-16 flex items-center">
                    <p className="text-gray-400 text-xs sm:text-sm italic">कोणताही उमेदवार नाही</p>
                  </div>
                )}
              </td>

              {/* Party Symbol Column */}
              <td className="border-r-2 border-gray-800 px-2 sm:px-4 py-2 sm:py-4 text-center">
                {candidate.active ? (
                  <img
                    src={candidate.symbol || "/placeholder.svg"}
                    alt={`${candidate.party} symbol`}
                    className="w-10 h-10 sm:w-14 sm:h-14 object-contain border-2 border-gray-400 p-1 bg-white rounded mx-auto"
                  />
                ) : (
                  <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto"></div>
                )}
              </td>

              {/* Vote Button Column */}
              <td className="px-2 sm:px-4 py-2 sm:py-4 text-center">
                <button
                  onClick={() => onVote(candidate)}
                  disabled={!candidate.active || hasVoted}
                  className={`
                    px-4 sm:px-6 py-2 font-bold text-xs sm:text-sm rounded-lg transition-all duration-200 transform
                    ${
                      candidate.active && !hasVoted
                        ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed opacity-50"
                    }
                  `}
                >
                  मतदान
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
