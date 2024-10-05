import React, {Suspense, useRef} from "react";
import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import * as THREE from "three";

import EarthDayMap from "./8k_earth_daymap.jpg";
import EarthNormalMap from "./8k_earth_normal_map.jpg";
import EarthSpecularMap from "./8k_earth_specular_map.jpg";
import EarthCloudsMap from "./8k_earth_clouds.jpg";

import { TextureLoader } from "three";

export function Earth () {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
        TextureLoader,
        [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
    );

    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 6;
        cloudsRef.current.rotation.y = elapsedTime / 6;
    });

    return (
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight intensity={5}/>
                <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2}/>
                <mesh ref={cloudsRef} position={[0, 0, 3]}>
                    <sphereGeometry args={[1.005, 32, 32]}/>
                    <meshPhongMaterial
                        map={cloudsMap}
                        opacity={0.4}
                        depthWrite={true}
                        transparent={true}
                        side={THREE.DoubleSide}
                    />
                </mesh>
                <mesh ref={earthRef} position={[0, 0, 3]}>
                    <sphereGeometry args={[1, 32, 32]}/>
                    <meshPhongMaterial specularMap={specularMap}/>
                    <meshStandardMaterial
                        map={colorMap}
                        normalMap={normalMap}
                        metalness={0.4}
                        roughness={0.7}
                    />
                </mesh>
            </Suspense>
        </Canvas>
    )
}