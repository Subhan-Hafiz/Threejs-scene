/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
        
import React from 'react'
import { Clone, useGLTF, 

 } from '@react-three/drei'


export default function Bookcase1(props) {
  const model = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase/model.gltf')
  return (
    <Clone {...props} object={model.scene} /> 
    
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase/model.gltf')