import React, {useRef} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import * as THREE from "three";

import EarthDayMap from "./daymap.jpg";
import EarthNormalMap from "./map.jpg";
import EarthSpecularMap from "./spec.jpg";
import EarthCloudsMap from "./сlouds.jpg";

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
        <>
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
        </>
)
}