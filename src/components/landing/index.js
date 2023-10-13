import { OrbitControls } from "@react-three/drei"
import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { useEffect } from "react"
import { TextureLoader, WebGLCubeRenderTarget } from "three"

const Landing = () => {

    return (
        <div className='container mw-100 vh-100 bg-black'>
            <Canvas 
                camera={{
                    fov: 90
                }}
            >
                <Helper />
                <OrbitControls />
            </Canvas>
        </div>
    )
}

const Helper = () => {
    const state = useThree()
    // const t2 = useLoader(TextureLoader, "tears_of_steel_bridge_2k.jpg", (e)=>console.log(e))
    const texture = new TextureLoader().load("img/tears_of_steel_bridge_2k.jpg", () => {
        console.log("hi")
        const rt = new WebGLCubeRenderTarget(texture.image.height)
        rt.fromEquirectangularTexture(state.gl, texture)
        state.scene.background = rt.texture
    })

}

export default Landing