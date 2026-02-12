import '../App.css';
import aboutimg from '../assets/about_2.jpg';
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";





export default function About(){
    
    return (
        <section className='react-about flex px-3'>
            <div className='about-overall flex flex-col justify-around gap-3'>

                <div className='about-top flex justify-center p-3'>
                    <span className='about-header underline font-bold text-2xl'>About Me</span>
                </div>

                <div className='about-middle flex flex-col md:flex-row'>
                <div className=' aboutimg p-3 w-full flex justify-center items-center'>
                 <img className='img-about rounded h-1/2' src={aboutimg} />
            </div>

            <div className='about-left-overall flex'>

            <div className='About-text w-full flex flex-col justify-center md:gap-3'>
              <span className='para-about-head font-bold'>
              I'm Pandi Durai S<br/>
              I’m currently working as a Junior Software Engineer at IITM Research Park.
              </span>
              <span className='about-Me'>
              I am a driven Full Stack Developer, currently pursuing a BS in Data Science from IIT Madras. With experience in web development, I am continuously enhancing my skills in MySQL, PHP, Node.js, and DevOps tools. Passionate about applying my technical expertise in both development and data science, I am eager to contribute and grow in a dynamic role
              </span>
              <span className='about-end font-semibold'>
              Feel free to check out my portfolio to see some of the projects I've worked on. If you'd like to get in touch, please don't hesitate to contact me!
              </span>
              </div>
            </div>
                </div>

                <div className='about-bottom flex justify-around'>
                    <span className='social-icons text-4xl'>
                        <a href='https://www.linkedin.com/in/pandidurai-s-6a30b8212'>
                    <SlSocialLinkedin />
                    </a>
                    </span>
                    <span className='social-icons text-4xl'>
                        <a href='https://github.com/Pandidurai-22'>
                    <FaGithub /></a></span>
                    <span className='social-icons text-4xl'>
                        <a href='https://wa.me/9751391299'>
                    <FaWhatsapp />
                    </a>
                    </span>
                    
                </div>

            </div>
            
           
            
        </section>
    )
}