import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function Sphere(props: any) {
  return (
    <mesh {...props}>
      <sphereGeometry />
      <meshStandardMaterial color={"#16161d"} />
    </mesh>
  );
}

function Tetrahedron(props: any) {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.x += delta * 0.2));
  return (
    <mesh {...props} ref={ref}>
      <tetrahedronGeometry />
      <meshStandardMaterial color={"#16161d"} />
    </mesh>
  );
}

function Cone(props: any) {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.x += delta * 0.2));
  return (
    <mesh {...props} ref={ref}>
      <coneGeometry args={[1, 2]} />
      <meshStandardMaterial color={"#16161d"} />
    </mesh>
  );
}

function Torus(props: any) {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.x += delta * 0.2));
  return (
    <mesh {...props} ref={ref}>
      <torusGeometry />
      <meshStandardMaterial color={"#16161d"} />
    </mesh>
  );
}

function Box(props: any) {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.x += delta * 0.2));
  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color={"#16161d"} />
    </mesh>
  );
}

function Cylinder(props: any) {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.x -= delta * 0.2));
  return (
    <mesh {...props} ref={ref}>
      <cylinderGeometry args={[1, 1, 3]} />
      <meshStandardMaterial color={"#16161d"} />
    </mesh>
  );
}

function Icosahedron(props: any) {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.x += delta * 0.2));
  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry />
      <meshStandardMaterial color={"#16161d"} />
    </mesh>
  );
}

export default function CanvasContainer() {
  return (
    <Canvas>
      <ambientLight intensity={0.05} />
      <fog attach="fog" args={["white", 10, 40]} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Cone position={[-1.7, -0.8, 0]} rotation-y={-100} scale={0.7} />
      <Torus position={[-2, 1.7, 0]} rotation-y={-45} scale={0.8} />

      <Cylinder position={[1.5, -0.5, 0]} rotation-y={50} scale={0.5} />
      <Sphere position={[0.7, 0.8, -1]} rotation-y={-25} scale={0.1} />
      <Sphere position={[0.2, -0.7, -1]} rotation-y={-25} scale={0.1} />
      <Sphere position={[-1, 0.2, -1]} rotation-y={-25} scale={0.1} />
      <Icosahedron position={[0, 1.3, 0]} rotation-y={-25} scale={0.65} />
      <Tetrahedron position={[1.5, 1.5, 0]} rotation-y={-25} scale={0.5} />
      <Box position={[0, -1.5, 0]} rotation-y={-25} scale={0.5} />
    </Canvas>
  );
}
