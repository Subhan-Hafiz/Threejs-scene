import { Canvas } from '@react-three/fiber';
import Earth from './Earth';
// import

const Testimonials = () => {
    const mouse = {
        x: null,
        y: null
    }
    const normalizeMouseMove = (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = (e.clientY / window.innerHeight) * 2 + 1;
    }

    return (
        <div className='container mw-100 vh-100 bg-black'>
            <div className='row h-100 w-100'>
                <div className={"col-sm d-flex flex-column justify-content-center align-items-center text-white"}>Abcbdbcb</div>
                <div className={"col-sm"}>
                    <Canvas
                        onPointerMove={(e) => normalizeMouseMove(e)}
                        style={{ background: "black" }}
                        camera={{ position: [0, 0, 15] }}
                        gl={{
                            antialias: true,
                            pixelRatio: window.devicePixelRatio
                        }}
                    >
                        <Earth mouse={mouse} />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

export default Testimonials