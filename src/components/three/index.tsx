import React, { useRef, useState, Suspense, useEffect } from 'react';
import './style.css';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import Model from './Kuisti';

const Box = (props: any) => {
  const mesh: any = useRef();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  );
};

const Plane = (props:any) => {
  return (
    <mesh
      {...props}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshStandardMaterial color={'green'} />
    </mesh>
  );
};

const Camera = (props: any) => {
  const [ angle, setAngle ] = useState(0.0);
  const ref: any = useRef();
  const { setDefaultCamera } = useThree();
  // Make the camera known to the system
  useEffect(() => void setDefaultCamera(ref.current), []);
  useFrame(() => {
    setAngle(angle + 0.01);
    const x = 9 * Math.cos(angle);
    const z = 9 * Math.sin(angle);

    ref.current.position.x = x;
    ref.current.position.z = z;
        
    ref.current.lookAt(new THREE.Vector3(0, 0, 0));

    ref.current.updateMatrixWorld();
  });
  return <perspectiveCamera ref={ref} {...props} />;
};

const Three = () => {
  return (
    <div className="three-container">
      <Canvas shadowMap>
        <Camera position={[0, 5, 10]} />
        <ambientLight />
        <directionalLight 
          color={'#FFF400'}
          intensity={2}
          castShadow position={[5, 4, 5]} 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={5000}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Suspense fallback={<Box position={[0, 0, 0]} />}>
          <Model receiveShadow castShadow scale={[0.02, 0.02, 0.02]}/>   
        </Suspense>
        <Plane receiveShadow scale={[30, 30]} rotation={[-Math.PI / 2, 0, 0]}/>
      </Canvas>
    </div>
  );
};

export default Three;