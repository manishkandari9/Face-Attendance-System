'use client'

import React, { useState } from 'react'
import { Button } from '@mui/material'
import CameraIcon from '@mui/icons-material/Camera'
import StopIcon from '@mui/icons-material/Stop'
import FaceIcon from '@mui/icons-material/Face'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'

export default function Scan() {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">
          <FaceIcon className="mr-2 text-5xl" />
          Face Recognition
        </h1>
        
        <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-6">
          {isActive ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-2xl text-gray-500">Camera feed will appear here</p>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-indigo-100">
              <FaceIcon className="text-indigo-300 text-9xl" />
            </div>
          )}
        </div>
        
        <div className="flex justify-center space-x-4 mb-6">
          <Button
            variant="contained"
            color={isActive ? "secondary" : "primary"}
            startIcon={isActive ? <StopIcon /> : <CameraIcon />}
            onClick={toggleActive}
            className={`py-3 px-6 text-lg ${isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-500 hover:bg-indigo-600'}`}
          >
            {isActive ? 'Stop' : 'Start'} Recognition
          </Button>
        </div>
        
        <div className="bg-indigo-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800 flex items-center">
            <SentimentSatisfiedAltIcon className="mr-2" />
            Detected Emotions
          </h2>
          <p className="text-gray-600 text-center">
            Emotion detection results will appear here once the recognition is active.
          </p>
        </div>
      </div>
    </div>
  )
}