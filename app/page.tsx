"use client"
import EVMVotingInterface from "@/components/evm-voting-interface"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 p-2 sm:p-4 py-4 sm:py-8 flex justify-center">
      <EVMVotingInterface />
    </main>
  )
}
