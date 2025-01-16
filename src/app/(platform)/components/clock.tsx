'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock } from 'lucide-react'

export default function ClassroomClock() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="flex flex-col items-end bg-white shadow-md p-3 text-gray-700">
      <div className="flex items-center space-x-2">
        <Clock className="w-5 h-5" />
        <time className="text-lg font-semibold" dateTime={currentTime.toISOString()}>
          {formatTime(currentTime)}
        </time>
      </div>
      <div className="flex items-center space-x-2 mt-1">
        <Calendar className="w-4 h-4" />
        <time className="text-sm" dateTime={currentTime.toISOString()}>
          {formatDate(currentTime)}
        </time>
      </div>
    </div>
  )
}

