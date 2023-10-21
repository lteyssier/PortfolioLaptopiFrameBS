/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Environment } from "@react-three/drei"

const Scene = () => {
  return (
     <Canvas>
        <Environment preset="city" />
        <color args={['#241a1a']} attach={'background'}/>
        <Model/>
     </Canvas>
  )
}

export default Scene