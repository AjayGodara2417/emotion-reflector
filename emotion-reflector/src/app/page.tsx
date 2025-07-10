'use client'

import { useState } from 'react'

type EmotionResponse = {
  emotion: string
  confidence: number
}

export default function HomePage() {
  const [text, setText] = useState('')
  const [result, setResult] = useState<EmotionResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch('https://emotion-reflector-production.up.railway.app/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })

      if (!res.ok) throw new Error('Failed to fetch analysis.')

      const data: EmotionResponse = await res.json()
      setResult(data)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Something went wrong.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-6 transition-all">
        <h1 className="text-3xl font-bold text-center text-blue-700">Emotion Reflection</h1>
        <p className="text-sm text-gray-500 text-center">
          Share how you feel — and we’ll give you a quick emotional insight.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="E.g. I feel nervous about my first job interview..."
            rows={5}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition text-sm resize-none placeholder-gray-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-medium transition text-white ${
              loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Analyzing...' : 'Analyze Emotion'}
          </button>
        </form>

        {result && (
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center shadow-sm animate-fade-in">
            <p className="text-lg font-medium text-blue-800">Emotion: {result.emotion}</p>
            <p className="text-sm text-blue-600">Confidence: {Math.round(result.confidence * 100)}%</p>
          </div>
        )}

        {error && (
          <p className="text-red-500 text-center text-sm">{error}</p>
        )}
      </div>
    </main>
  )
}
