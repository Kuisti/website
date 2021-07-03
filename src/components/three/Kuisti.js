import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import kuisti from './kuisti.glb';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, kuisti)

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Tinkercad GLTF Scene">
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            material={materials['lambert2SG.001']}
            geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
            name="Mesh_Mesh_head_geo001_lambert2SG001"
          />
        </group>
      </scene>
    </group>
  )
}
