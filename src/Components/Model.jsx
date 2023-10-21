/* eslint-disable react/no-unknown-property */
import { ContactShadows, Float, Html, PresentationControls, Text, useGLTF } from "@react-three/drei"

const Model = () => {

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

  return (
    <>
    <PresentationControls 
    global
    rotation={[0.3,0.5,0]}
    polar={[-0.4,0.2]}
    azimuth={[-1,0.75]}
    config={{mass:2, tension:400}}
    snap={{mass:4, tension:400}}
    >
        <Float rotationIntensity={0.4}>
        <rectAreaLight
            width={1.5}
            height={1.65}
            intensity={25}
            opacity={0.5}
            color={'#dbdbdb'}
            rotation={[0.1,Math.PI, 0]}
            position={[0,0.55,-1.15]}
        />
            <primitive 
                object={computer.scene}
                position-y={-1.2}
                scale={1.2}
            >
            <Text
                font="./knewave.woff"
                fontSize={1}
                position={[2,1.75,0.75]}
                rotation-y={-1.25}
                maxWidth={2}
            >Luis Teyssier
            </Text>
       <Html 
            transform 
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0,1.56,-1.4]}
            rotation-x={-0.256}
        >
        <iframe src="https://lteyssier.dev/"/>
        </Html> 
    </primitive>
     
    </Float>
    </PresentationControls>
    <ContactShadows 
        position-y={-1.4}
        opacity={0.4}
        scale={5}
        blur={2.4}
    />
    </>
  )
}

export default Model