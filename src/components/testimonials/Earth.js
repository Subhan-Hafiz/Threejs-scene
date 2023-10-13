import { AdditiveBlending, BackSide, Matrix4, TextureLoader, Vector3 } from 'three';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useFrame } from '@react-three/fiber';
import { reviews } from './data';

const Earth = ({ mouse }) => {
  const ref = useRef()
  const dataRef = useRef()
  const groupRef = useRef()
  let isMouseDown = false;
  let touch = false;
  let raycasterIntersectsObj = false
  const mousePrev = {
    x: null,
    y: null,
    set: function (x, y) {
      this.x = x;
      this.y = y
    }
  }
  useFrame((_, delta) => {
    raycasterIntersectsObj = _.raycaster.intersectObject(ref.current).length > 0;
  })


  useEffect(() => {
    dataRef?.current?.children?.forEach(mesh => {
      mesh.lookAt(0, 0, 0)
      mesh.geometry.applyMatrix4(new Matrix4().makeTranslation(0, 0, -0.4))

    });
  }, [dataRef])

  const DataPoint = ({ coords, showOnClick }) => {
    const {lat, lng} = coords
    return (
      <mesh
      onClick={showOnClick}
        position={[
          Math.cos((lat / 180) * Math.PI) * Math.cos((lng / 180) * Math.PI) * 5,
          Math.sin((lat / 180) * Math.PI) * 5,
          Math.cos((lat / 180) * Math.PI) * Math.sin((lng / 180) * Math.PI) * 5,
        ]}>
        <boxGeometry
          args={[0.2, 0.2, 0.8]}
        />
        <meshBasicMaterial
          color={'#3BF7FF'}
          opacity={0.8}
          transparent={true}
        />
      </mesh>
    )
  }
  const showData = () => {
    const dataPoints = reviews.map((review, index) => {
      return <DataPoint key={index} coords={review} showOnClick={(e)=>showPopup(e, review)} />
    })
    return (
      dataPoints
    )
  }

  const showPopup = (e, review) => {
    console.log(e)
    alert(review)
  }

  const dragEarth = ({ clientX, clientY }) => {
    isMouseDown = true
    mousePrev.set(clientX, clientY)
  }
  window.addEventListener('mouseup', () => {
    isMouseDown = false
  })

  window.addEventListener('mousemove', (e) => {
    if (isMouseDown) {
      e.preventDefault()
      const xDelta = e.clientX - mousePrev.x
      const yDelta = e.clientY - mousePrev.y
      groupRef.current.rotation.x += yDelta * 0.005;
      groupRef.current.rotation.y += xDelta * 0.005;
      // mousePrev.x = e.clientX
      // mousePrev.y = e.clientY
      mousePrev.set(e.clientX, e.clientY)
    }
  })

  window.addEventListener('touchend', () => {
    touch = false
  })

  window.addEventListener('touchmove', (e) => {
    if (raycasterIntersectsObj) touch = true
    if (touch) {
      e.clientX = e.touches[0].clientX
      e.clientY = e.touches[0].clientY
      e.preventDefault()
      const xDelta = e.clientX - mousePrev.x
      const yDelta = e.clientY - mousePrev.y
      groupRef.current.rotation.x += yDelta * 0.005;
      groupRef.current.rotation.y += xDelta * 0.005;
      // mousePrev.x = e.clientX
      // mousePrev.y = e.clientY
      mousePrev.set(e.clientX, e.clientY)
    }
  }, { passive: false })
  return (
    <>
      <group ref={groupRef}>
        {/* Earth */}
        <mesh
          ref={ref}
          onPointerDown={dragEarth}
          rotateY={Math.PI / 2}
        >
          <sphereGeometry args={[5, 50, 50]} />
          <shaderMaterial
            uniforms={{
              globeTexture: {
                value: new TextureLoader().load("./img/earth-uv.jpg")
              }
            }}
            vertexShader={`
            varying vec2 vertexUV;
            varying vec3 vertexNormal;
            void main() {
              vertexUV = uv;
              vertexNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`}
            fragmentShader={`
          uniform sampler2D globeTexture; 
          varying vec2 vertexUV;
          varying vec3 vertexNormal;
  
          void main() {
            float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
            vec3 atmos = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);
            gl_FragColor = vec4(atmos + texture2D(globeTexture, vertexUV).xyz, 1.0);
        }`}
          />
        </mesh>

        {/* Data Points */}
        <group ref={dataRef}>
          {showData()}
        </group>
      </group>


      {/* Atmosphere */}
      <mesh
        scale={[1.7, 1.7, 1.7]}
      >
        <sphereGeometry args={[5, 50, 50]} />
        <shaderMaterial
          blending={AdditiveBlending}
          side={BackSide}
          vertexShader={`
            varying vec3 vertexNormal;
            void main() {
              vertexNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`}
          fragmentShader={`
          varying vec3 vertexNormal;
  
          void main() {
            float intensity = pow(0.5 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);
            gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }`}

        />
      </mesh>
    </>
  )
}

export default Earth;