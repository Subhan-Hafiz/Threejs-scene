
import { Canvas } from "@react-three/fiber"
import "./stle.scss"
import Student from "./Student"
import { Perf } from "r3f-perf"
import Podium from "../../models/Podium"
import Teacher from "../../models/Teacher"
import { Suspense } from "react"
import Laptop from "../../models/Laptop"
import { AdditiveBlending, BackSide, BoxGeometry, DoubleSide, FrontSide, TextureLoader } from "three"
import { Environment, Sky, Stars } from "@react-three/drei"
import Plant1 from "../../models/Plant1"
import Plant2 from "../../models/Plant2"
import Bookcase1 from "../../models/Bookcase1"
import Bookcase2 from "../../models/Bookcase2"
const Landing2 = () => {
    return (
        <div className="vh-100 ">
            <Canvas
            shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [4, 3, 10]
                }}
                gl={{
                    antialias: true,
                    pixelRatio: window.devicePixelRatio,
                    // shadowMap: {enabled: true}
                    
                }}
                scene={{
                    background: 'blue'
                }}
            >
                <Perf />
                {/* <Environment preset="park"  background/> */}

                <Sky distance={450000} sunPosition={[1, 0.2, 0]} inclination={0} azimuth={0.25}/>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <directionalLight position={[1, 2, 3]} intensity={1.5} />
                <ambientLight intensity={0.5} />

                {/* Teacher */}
                <group>
                    <Suspense>
                        <Teacher
                            position={[-2.5, -0.85, -3]}
                            rotation-y={0.5}
                            scale={[1.7, 1.7, 1.7]}
                        />
                    </Suspense>
                    <Suspense>
                        <Podium
                            scale={[4, 4, 4]}
                            position={[-2, -1, -2]}
                        />
                    </Suspense>

                    <Suspense>
                        <Laptop
                            scale={[0.3, 0.3, 0.3]}
                            position={[-2, 0.15, -2]}
                            rotation-y={-2.7}
                        />
                    </Suspense>
                </group>
                {/* Students */}
                <group>
                    <group castShadow>
                        <Suspense>
                            <Student
                                table={{ position: [0.4, -1, 3.8], "rotation-y": 0.6 }}
                                chair={{ position: [1.2, -1, 4.5], "rotation-y": -2.5 }}
                                student={{ position: [1.2, -0.5, 4.5], "rotation-y": -2.5, scale: 0.55 }}
                            />
                        </Suspense>
                        <Suspense>
                            <Laptop
                                scale={[0.25, 0.25, 0.25]}
                                position={[0.7, -0.65, 3.8]}
                                rotation-y={0.7}
                            />
                        </Suspense>
                    </group>
                    <group>
                        <Suspense>
                            <Student
                                table={{ position: [1.9, -1, 2.8], "rotation-y": 0.8 }}
                                chair={{ position: [2.8, -1, 3.5], "rotation-y": -2.3 }}
                                student={{ position: [2.8, -0.5, 3.5], "rotation-y": -2.3, scale: 0.55 }}
                            />
                        </Suspense>
                        <Suspense>
                            <Laptop
                                scale={[0.25, 0.25, 0.25]}
                                position={[2.1, -0.65, 2.8]}
                                rotation-y={0.7}
                            />
                        </Suspense>
                    </group>
                    <group position={[0, 0, -0.5]}>
                        <Suspense>
                            <Student
                                table={{ position: [2.7, -1, 1.3], "rotation-y": 1.4 }}
                                chair={{ position: [3.7, -1, 1], "rotation-y": -1.7 }}
                                student={{ position: [3.7, -0.5, 1], "rotation-y": -1.7, scale: 0.55 }}
                            />
                        </Suspense>
                        <Suspense>
                            <Laptop
                                scale={[0.25, 0.25, 0.25]}
                                position={[2.8, -0.65, 1.1]}
                                rotation-y={1.3}
                            />
                        </Suspense>

                    </group>
                </group>


                {/* Floor */}
                <mesh position={[0, - 1, 2.5]} rotation-x={- Math.PI * 0.5} scale={[10, 15, 0.3]} >
                    <boxGeometry />
                    <meshStandardMaterial
                        side={DoubleSide}
                        map={new TextureLoader().load("./textures/wood/15.jpg")}
                    />
                </mesh>

                {/* Back Wall
                <mesh position={[0, 1, -5]} scale={[10, 4.3, 0.3]} >
                    <boxGeometry />
                    <meshStandardMaterial
                        color={"pink"}
                        map={new TextureLoader().load("./textures/concrete/15.jpg")}
                    />

                </mesh>
                 Right Wall
                <mesh position={[5, 1, 2.5]} rotation-y={-Math.PI * 0.5} scale={[15.3, 4.3, 0.3]} >
                    <planeGeometry />
                    <meshStandardMaterial
                        color={"pink"}
                        map={new TextureLoader().load("./textures/concrete/15.jpg")}
                    />

                </mesh>
                window 
                <mesh position={[4.95, 1.2, 2.5]} rotation-y={-Math.PI * 0.5} scale={[4, 2.5, 0.1]} >
                    <planeGeometry  position={[-1, 1, 1]}/>
                    <meshStandardMaterial
                        // color={"blue"}
                        map={new TextureLoader().load("./textures/window.png")}
                    />

                </mesh>

                <mesh  position={[-5, 1, 2.5]} rotation-y={Math.PI * 0.5} scale={[15.3, 4.3, 0.3]} >
                    <planeGeometry />
                    <meshStandardMaterial
                        color={"pink"}
                        map={new TextureLoader().load("./textures/concrete/15.jpg")}
                    />

                </mesh> */}
                {/* Plants */}
                <mesh position={[5, 0, 2.5]} rotation-y={-Math.PI * 0.5} >
                    <Plant1 position={[-4, -0.67, 0.75]} scale={[0.4, 0.4, 0.4]} />
                    <Plant2 scale={[0.4, 0.4, 0.4]} position={[1, -0.9, 0.5]} />
                </mesh>

                {/* Bookcase 1 */}
                <mesh position={[-4, 0, -5]}>
                    <Bookcase1
                        position-y={-0.8}
                        position-z={0.5}
                        scale={[1.5, 1.5, 1]} />
                </mesh>
                {/* Bookcase 2 */}
                {/* <mesh position={[-5, 1, 2.5]} rotation-y={Math.PI * 0.5}>
                    <Bookcase2 
                        position-z={0.3}
                    />
                </mesh> */}
            </Canvas>
        </div>
    )
}
export default Landing2