/*
Optional Bot Neil component - use when GLB file is available
Add bot_neil_animation_by_oscar_creativo.glb to public folder to use this component
*/

import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function BotNeilOptional(props) {
  const group = useRef()
  const [loadError, setLoadError] = useState(false)
  
  try {
    const { nodes, materials, animations } = useGLTF('/bot_neil_animation_by_oscar_creativo.glb')
    const { actions } = useAnimations(animations, group)

    // Start animations when component mounts
    useEffect(() => {
      if (actions && Object.keys(actions).length > 0) {
        // Play all available animations
        Object.values(actions).forEach((action) => {
          if (action) {
            action.play()
          }
        })
      }
    }, [actions])

    // Optional: Add floating animation
    useFrame((state) => {
      if (group.current) {
        group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
        group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      }
    })

    if (!nodes || !materials || loadError) {
      return null
    }

    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="0bc5cf2519344cae801272ca9df08433fbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="CUERPO" position={[0.726, -3.578, 0.274]}>
                    <group
                      name="ALA_IZQ"
                      position={[-40.104, 39.706, 1.917]}
                      rotation={[0, 0, 0.046]}>
                      <mesh
                        name="ALA_IZQ_ALA_IZQ_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.ALA_IZQ_ALA_IZQ_0.geometry}
                        material={materials.ALA_IZQ}
                      />
                    </group>
                    <group
                      name="ALA_DERE"
                      position={[42.576, 39.581, 2.283]}
                      rotation={[0, 0, 0.046]}>
                      <mesh
                        name="ALA_DERE_ALA_DERE_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.ALA_DERE_ALA_DERE_0.geometry}
                        material={materials.ALA_DERE}
                      />
                    </group>
                    <group name="OJO" position={[21.113, 46.37, 38.206]}>
                      <mesh
                        name="OJO_OJO_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.OJO_OJO_0.geometry}
                        material={materials.material}
                      />
                    </group>
                    <group name="OJO_1" position={[-21.263, 46.183, 39.347]}>
                      <mesh
                        name="OJO_1_OJO_1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.OJO_1_OJO_1_0.geometry}
                        material={materials.OJO_1}
                      />
                    </group>
                    <group name="CUEPRO" position={[-2.322, 0.702, -0.274]}>
                      <mesh
                        name="CUEPRO_CUEPRO_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CUEPRO_CUEPRO_0.geometry}
                        material={materials.CUEPRO}
                      />
                    </group>
                  </group>
                  <group name="PISO_RUEDA" position={[-0.774, -16.135, 0.313]}>
                    <mesh
                      name="PISO_RUEDA_PISO_RUEDA_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.PISO_RUEDA_PISO_RUEDA_0.geometry}
                      material={materials.PISO_RUEDA}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    )
  } catch (error) {
    console.log('Bot Neil model not available, using fallback animation')
    return null
  }
}

// Only preload if the user wants to use this component
// useGLTF.preload('/bot_neil_animation_by_oscar_creativo.glb')