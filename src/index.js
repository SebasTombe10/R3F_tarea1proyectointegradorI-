import './style.css'
import ReactDom from "react-dom/client";
import { Experience } from './experience';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(

    <>

    <main className="app"  >
      <section className='hero'>
        <h1>Sebastian Tombe</h1>
        <h3>Por Sebas Tombe</h3>
      </section>
    </main>

    <Canvas
    className='canvas'
    shadows
    camera={{ position: [0,20,100], fov:15}}
    
    >
        <Experience/>
    </Canvas>
    
    </>
    
  
)