/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
        
import React, { useRef } from 'react'
import { Clone, useGLTF, 

 } from '@react-three/drei'


export default function Chair(props) {
  const model = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf')
  return (
        <Clone {...props} object={model.scene} /> 

  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf')