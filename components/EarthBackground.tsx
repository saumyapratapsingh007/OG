"use client"

import { useTexture } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useMemo, useRef } from "react"
import * as THREE from "three"

function Earth({ scrollProgress }: { scrollProgress: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const texture = useTexture(
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg"
  )

  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 8

  useFrame((_, delta) => {
    if (!ref.current) return

    ref.current.rotation.y += delta * (0.08 + scrollProgress * 0.14)
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, scrollProgress * 0.22, 0.05)
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, 1.6 - scrollProgress * 1.3, 0.05)
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, 1.1 - scrollProgress * 1.5, 0.05)
    ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, -1.6 - scrollProgress * 0.5, 0.05)

    const scale = 1.15 + scrollProgress * 0.55
    ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, scale, 0.08))
  })

  return (
    <mesh ref={ref} position={[1.6, 1.1, -1.6]}>
      <sphereGeometry args={[1.8, 104, 104]} />
      <meshStandardMaterial map={texture} emissive="#59a6ff" emissiveIntensity={0.48} roughness={0.7} metalness={0.08} />
    </mesh>
  )
}

function Sparkles({ scrollProgress }: { scrollProgress: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const vertices = new Float32Array(240 * 3)
    for (let i = 0; i < 240; i += 1) {
      const radius = 2.45 + Math.random() * 0.65
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      vertices[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      vertices[i * 3 + 1] = radius * Math.cos(phi)
      vertices[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
    }
    return vertices
  }, [])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * (0.04 + scrollProgress * 0.05)
    ref.current.rotation.x += delta * 0.015
  })

  return (
    <points ref={ref} position={[1.6, 1.1, -1.6]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#d8f3ff" size={0.045} sizeAttenuation transparent opacity={0.9} />
    </points>
  )
}

export default function EarthBackground({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{ opacity: 0.28 + scrollProgress * 0.22 }}
    >
      <Canvas camera={{ position: [0, 0, 6.2], fov: 34 }} dpr={[1.2, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.35} />
          <directionalLight position={[4, 2, 4]} intensity={1.75} color="#d5efff" />
          <pointLight position={[-2, -1, 5]} intensity={1.45} color="#4f8eff" />
          <pointLight position={[2.5, 1.8, 3.5]} intensity={1.1} color="#c1f3ff" />
          <pointLight position={[0.4, 3.2, 1.2]} intensity={0.7} color="#85b8ff" />
          <Earth scrollProgress={scrollProgress} />
          <Sparkles scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  )
}
