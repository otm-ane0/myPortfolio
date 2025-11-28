import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera, Box } from '@react-three/drei'
import GLBModel from './GLBModel'
import LoadingScreen from './LoadingScreen'
import './ThreeScene.css'

// Advanced animated 3D robot when model is not available
// eslint-disable-next-line no-unused-vars
const AnimatedFallbackMesh = () => {
  const groupRef = useRef()
  const wingLeftRef = useRef()
  const wingRightRef = useRef()
  const orbRef = useRef()
  const bodyRef = useRef()
  const eyeLeftRef = useRef()
  const eyeRightRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      // Main floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    
    if (wingLeftRef.current && wingRightRef.current) {
      // Wing flapping animation
      const wingMovement = Math.sin(state.clock.elapsedTime * 3) * 0.4
      wingLeftRef.current.rotation.z = Math.PI / 6 + wingMovement
      wingRightRef.current.rotation.z = -Math.PI / 6 - wingMovement
    }
    
    if (orbRef.current) {
      // Core energy animation
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.3
      orbRef.current.scale.setScalar(scale)
      orbRef.current.rotation.x = state.clock.elapsedTime * 2
      orbRef.current.rotation.y = state.clock.elapsedTime * 1.5
    }

    if (bodyRef.current) {
      // Body breathing animation
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1
      bodyRef.current.scale.y = breathe
    }

    if (eyeLeftRef.current && eyeRightRef.current) {
      // Eye blinking animation
      const blink = Math.abs(Math.sin(state.clock.elapsedTime * 0.5)) > 0.95 ? 0.1 : 1
      eyeLeftRef.current.scale.y = blink
      eyeRightRef.current.scale.y = blink
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main body */}
      <Box ref={bodyRef} position={[0, 0, 0]} scale={[1.8, 2.2, 1.2]}>
        <meshStandardMaterial 
          color="#00ff88" 
          emissive="#003322"
          roughness={0.2}
          metalness={0.8}
        />
      </Box>
      
      {/* Head */}
      <Box position={[0, 1.8, 0]} scale={[1.2, 1.2, 1.2]}>
        <meshStandardMaterial 
          color="#00dd77" 
          emissive="#002211"
          roughness={0.3}
          metalness={0.7}
        />
      </Box>

      {/* Eyes */}
      <mesh ref={eyeLeftRef} position={[-0.3, 1.9, 0.6]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#0088aa"
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      <mesh ref={eyeRightRef} position={[0.3, 1.9, 0.6]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#0088aa"
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      
      {/* Left wing */}
      <Box 
        ref={wingLeftRef}
        position={[-2.2, 0.5, 0]} 
        scale={[1.2, 0.15, 2]} 
        rotation={[0, 0, Math.PI / 6]}
      >
        <meshStandardMaterial 
          color="#00cc6a" 
          emissive="#001111"
          roughness={0.3}
          metalness={0.8}
        />
      </Box>
      
      {/* Right wing */}
      <Box 
        ref={wingRightRef}
        position={[2.2, 0.5, 0]} 
        scale={[1.2, 0.15, 2]} 
        rotation={[0, 0, -Math.PI / 6]}
      >
        <meshStandardMaterial 
          color="#00cc6a" 
          emissive="#001111"
          roughness={0.3}
          metalness={0.8}
        />
      </Box>

      {/* Wing tips */}
      <mesh position={[-3.2, 0.5, 0]}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshStandardMaterial 
          color="#00ffaa" 
          emissive="#003333"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      <mesh position={[3.2, 0.5, 0]}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshStandardMaterial 
          color="#00ffaa" 
          emissive="#003333"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      
      {/* Center energy core */}
      <mesh ref={orbRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#0099bb"
          roughness={0.1}
          metalness={0.9}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
      
      {/* Base/feet */}
      <Box position={[0, -1.8, 0]} scale={[1.5, 0.6, 1.5]}>
        <meshStandardMaterial 
          color="#00aa55" 
          emissive="#002211"
          roughness={0.4}
          metalness={0.6}
        />
      </Box>

      {/* Antenna */}
      <Box position={[0, 2.8, 0]} scale={[0.1, 0.8, 0.1]}>
        <meshStandardMaterial 
          color="#00ffaa" 
          emissive="#004444"
          roughness={0.2}
          metalness={0.9}
        />
      </Box>
      <mesh position={[0, 3.4, 0]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial 
          color="#ff6600" 
          emissive="#ff3300"
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </group>
  )
}

const ThreeScene = () => {
  return (
    <div className="three-scene-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 15]} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 8]} intensity={2.5} castShadow />
        <directionalLight position={[-10, 5, -5]} intensity={1.5} />
        <pointLight position={[-10, -10, -8]} intensity={2.0} color="#00ff88" />
        <pointLight position={[10, 5, 5]} intensity={1.5} color="#ffffff" />
        <spotLight position={[0, 15, 0]} intensity={1.2} angle={0.6} penumbra={0.5} color="#ffffff" />
        
        <Suspense fallback={<LoadingScreen />}>
          <Environment background={false}>
            <mesh scale={100}>
              <sphereGeometry args={[1, 64, 64]} />
              <meshBasicMaterial color="#0a0a0a" side={2} />
            </mesh>
          </Environment>
          <GLBModel 
            modelPath="/glb/animated_venus_flytrap_robot_loop.glb" 
            position={[0, -1.5, 0]} 
            scale={3}
            autoRotate={true}
          />
        </Suspense>
        
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          autoRotate={true}
          autoRotateSpeed={2}
          zoomSpeed={1}
          panSpeed={1}
          rotateSpeed={1}
        />
      </Canvas>
    </div>
  )
}

export default ThreeScene