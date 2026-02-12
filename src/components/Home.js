import '../App.css';
import homeimg from '../assets/home1.png';
import { Application } from '@splinetool/runtime';
import { useEffect } from 'react';

export default function Home(){
    
    useEffect(()=>{
        const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/7G23JLxC6Byu0QlF/scene.splinecode');
    },[])

    

    return (
        <section className='react-home flex flex-col justify-around md:flex-row p-3' style={{
        }}>

            <div className='home-page flex flex-col justify-center gap-4 md:w-1/2'>
                <h1>Hi,</h1>
                <h1>I'm <span className='pandi'>Pandidurai S</span></h1>
                <h1 className='typing'>Junior Software Engineer</h1>
                <button className='btn-contact '><a href='/contact'>Contact Me</a> </button>
            </div>
            <div className=' homeimg flex justify-center md:w-1/2 items-center'>
                {/* <img className='img-home' src={homeimg} /> */}
                
                <canvas id="canvas3d" style={{ width: '100%', height: '100vh' }} />
            </div>
        </section>
    )
}