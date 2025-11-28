import React, { useRef, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAnimations } from '@react-three/drei'

const GLBModel = ({ modelPath, position = [0, 0, 0], scale = 1, autoRotate = true }) => {
  const modelRef = useRef()
  const gltf = useLoader(GLTFLoader, modelPath)
  const { actions, mixer } = useAnimations(gltf.animations, modelRef)

  // Play all animations when model loads
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach(action => {
        action?.play()
      })
    }
  }, [actions])

  // Auto-rotate and floating animation
  useFrame((state) => {
    if (modelRef.current && autoRotate) {
      // Floating animation only (removed auto rotation)
      modelRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2
    }
  })

  return (
    <group ref={modelRef} position={position} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  )
}

export default GLBModel