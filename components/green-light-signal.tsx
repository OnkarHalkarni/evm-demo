"use client"

interface GreenLightSignalProps {
  isActive: boolean
}

export default function GreenLightSignal({ isActive }: GreenLightSignalProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        {/* Light box */}
        <div className="w-24 h-24 border-4 border-gray-800 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center">
          {/* Light bulb circle */}
          <div
            className={`
              w-20 h-20 rounded-full transition-all duration-300
              ${isActive ? "bg-green-400 shadow-lg shadow-green-500" : "bg-gray-600"}
            `}
          />
        </div>
        {/* Light glow effect when active */}
        {isActive && (
          <div className="absolute inset-0 w-24 h-24 rounded-lg bg-green-400 opacity-20 blur-xl animate-pulse" />
        )}
      </div>
      <p className="text-sm font-semibold text-gray-700">{isActive ? "VOTE CONFIRMED" : "VOTE HERE"}</p>
    </div>
  )
}
