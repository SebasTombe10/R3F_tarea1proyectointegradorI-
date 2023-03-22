import { Environment, OrbitControls, GizmoHelper,GizmoViewport,
        Stars,OrthographicCamera,plane

        } from "@react-three/drei";
import { useFrame, useThree} from "@react-three/fiber"
import { useRef } from "react";

export function Experience(){
    const boxRef = useRef()

    // const {camera, gl} = useThree()
   
    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta  ;
    })
    
    return <>
        
        <pointLight position={[10,15,15]} color="570c0c" castShadow intensity={5} shadow-camera-near={0.1} 
            shadow-camera-far={200}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
            shadow-camera-width={1024}
            shadow-camera-height={1024}
            />

            <directionalLight position={[10,15,-5]} color="570c0c" castShadow intensity={5} shadow-camera-near={0.1}
            shadow-camera-far={200}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
            shadow-camera-width={1024}
            shadow-camera-height={1024}
            />
 
        <Environment preset='city'/>

        /*<GizmoHelper 
        alignment="bottom-right"
        margin={[100, 100]}>
        <GizmoViewport axisColors={['red','green','blue']} labelColor="black" />
        </GizmoHelper>*/

        <Stars radius={50} depth={50} count={5000} factor={20} saturation={0} fade speed={1}/>

        <OrthographicCamera position={[0, 0, 10]}>
        <group position={[0,-3,0]}>
        
        <mesh ref={boxRef} position={[4,6.5,0]}>
            <boxGeometry args={[2, 2, 2]}/>
            <meshStandardMaterial color={"mediumpurple"} envMapIntensity={0.5} roughness={0.2} metalness={0.8}/>
        </mesh>

        <mesh position={[0,6.5,0]} >
            <sphereGeometry args={[1.5, 32, 64]}/>
            <meshStandardMaterial color={"mediumpurple"} envMapIntensity={0.5} roughness={0.2} metalness={0.8}/>
        </mesh>

         {/*Base*/}
        <mesh position={[0,0,0]}>
            <cylinderGeometry args={[10,10,10,64]}/> 
            <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0} metalness={0}/>
        </mesh>
        </group>

        </OrthographicCamera>

        

    </>
}