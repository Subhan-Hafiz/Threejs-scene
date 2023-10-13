/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
        
import React, { useEffect, useRef } from 'react'
import { Clone, useAnimations, useFBX, useGLTF, 

 } from '@react-three/drei'


export default function Teacher(props) {
  const ref = useRef()
  const model = useFBX('./textures/teacher.fbx')
  const action = useAnimations(model.animations, ref)
  useEffect(() => {
    action.actions[action.names[0]].reset().fadeIn(0.5).play()
  }, [])
  return (
    <Clone ref={ref} {...props} object={model} />     
  )
}

useFBX.preload('./textures/teacher.fbx')