import { OrbitControls } from "@react-three/drei";
import Table from "../../models/Table";
import { useThree } from "@react-three/fiber"
import Chair from "../../models/Chair";
import Bear from "../../models/Bear";
import { Suspense } from "react";
export default function Student({ table, chair, student }) {

    const { camera, gl } = useThree()
    return (
        <>
            <OrbitControls args={[camera, gl.domElement]} />
            <Suspense>
                <Table {...table} />
            </Suspense>
            <Suspense>
                <Chair {...chair} />
            </Suspense>
            <Suspense>
                <Bear {...student} />
            </Suspense>
        </>
    )
}