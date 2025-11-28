import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const LoadingScreen = () => {
  const { progress } = useProgress()
  
  return (
    <Html center>
      <div style={{
        color: '#00ff88',
        fontSize: '1.2rem',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ marginBottom: '10px' }}>Loading 3D Model...</div>
        <div style={{
          width: '200px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #00ff88, #00ffff)',
            borderRadius: '2px',
            transition: 'width 0.3s ease'
          }}></div>
        </div>
        <div style={{ marginTop: '5px', fontSize: '0.9rem' }}>
          {Math.round(progress)}%
        </div>
      </div>
    </Html>
  )
}

export default LoadingScreen