import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {Earth} from "./Earth";


export function EarthContainer() {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <Earth/>
            </Suspense>
        </Canvas>
    );
}