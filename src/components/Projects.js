import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
    MdOutlineLightMode,MdLightMode
} from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";




import project1 from '../assets/google clone.png';
import project2 from '../assets/game.png';
import project3 from '../assets/clock.png';
import project4 from '../assets/bus.jpg';
import project5 from '../assets/face-de.webp';
import project6 from '../assets/python-tesseract-ocr.png';
import project7 from '../assets/moving.png';
import project8 from '../assets/image encrypt.jpg';
import project9 from '../assets/smart waste.webp';
import project10 from '../assets/twitter.avif';


import React, { useState } from "react";
import Slider from "react-slick";
import { link } from "motion/react-client";

export default function Projects() {
  const projects = [
    { id: 1, title: "Google Clone Using Tailwind Css", image:project1,link:'https://googleclonepandidurai.netlify.app/' },
    { id: 2, title: "Fighting Game Using Canvas Api, Js", image: project2,link:'https://pandidurais-fighting-game.netlify.app/' },
    { id: 3, title: "Analag Clock Using Js", image: project3,link:'https://analogclockpandidurai.netlify.app/' },
    { id: 4, title:'Bus Booking System Using Java', image: project4, link:'https://github.com/Pandidurai-22/Bus_Reservation'}
  ];

  const projects02 = [
    { id: 1, title: "Face Detection Using Python", image:project5, link: 'https://github.com/Pandidurai-22/Projects/blob/main/AI/FaceDetection/facedetection/.py'},
    { id: 2, title: "label Recognition Tesseract + Python", image: project6, link: 'https://github.com/Pandidurai-22/Projects/blob/main/Label%20recognition/code.py'},
    { id: 3, title: "Moving Object Detection Using Opencv", image: project7, link:'https://github.com/Pandidurai-22/Projects/blob/main/Object%20Recognition/code.py'},
  ];

  const projects03 = [
    { id: 1, title: "Image Encrypt and Decrypt Using Java", image:project8, link:'https://github.com/Pandidurai-22/ImageEncrypt_decrypt/blob/master/src/SourceCode.java' },
    { id: 2, title: "Smart Waste Management system IBM", image: project9,link:'https://drive.google.com/file/d/1HnlWZj_lfdxcKS9p3PjUnHjUhhAkWlGk/view?usp=drive_link'},
    { id: 3, title: "Twitter Fake Dataset - LSTM Algorithm", image: project10, link:'https://colab.research.google.com/drive/1jh1SDqqp4TMg3mZUq1ygaf3fXFQEPxHj?usp=sharing'},
  ];

  const [Toggle,setToggle]= useState(false);

  const styles = Toggle
    ? {
        backgroundColor: "black",
        color: "white",
        transition:'2s ease-in-out',
      }
    : {
        backgroundColor: "white",
        color: "black",
        transition:'2s ease-in-out',
      };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  


  return (
    <section className="projects bg-gray-100 py-8" style={styles}>
      <div className="overall-projects flex flex-col">
        {/* Header */}
        <div className="projects-header flex items-center gap-3 p-3 justify-between">
          <span className="about-header text-2xl font-bold underline">
            Projects
          </span>
          {!Toggle && (
          <button className="text-black text-3xl icon-dark" onClick={()=> setToggle(true)}>
          <MdOutlineLightMode />
          </button>
)}
          {Toggle && ( <button className="icon-light text-3xl text-white" onClick={
            () => setToggle(false)
          }>
          <MdLightMode />
          </button>)}
        </div>


        <div className="project-body-overall mt-6">
          <Slider {...settings}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-slide text-center p-4"
              >
                {/* Project Image */}
                <a href={project.link}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                  onError={(e) => (e.target.src = "/images/fallback.png")}
                />
                {/* Project Title */}
                <h3 className="text-lg font-semibold mt-4">
                  {project.title}
                </h3>
                </a>
              </div>
            ))}
          </Slider>
        </div>

        <div className="project-body-overall mt-6">
          <Slider {...settings}>
            {projects02.map((project) => (
              <div
                key={project.id}
                className="project-slide text-center p-4"
              >
                {/* Project Image */}
                <a href={project.link}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                  onError={(e) => (e.target.src = "/images/fallback.png")}
                />
                {/* Project Title */}
                <h3 className="text-lg font-semibold mt-4">
                  {project.title}
                </h3>
                </a>
              </div>
            ))}
          </Slider>
        </div>

        <div className="project-body-overall mt-6">
          <Slider {...settings}>
            {projects03.map((project) => (
              <div
                key={project.id}
                className="project-slide text-center p-4"
              >
                {/* Project Image */}
                <a href={project.link}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                  onError={(e) => (e.target.src = "/images/fallback.png")}
                />
                {/* Project Title */}
                <h3 className="text-lg font-semibold mt-4">
                  {project.title}
                </h3>
                </a>
              </div>
            ))}
          </Slider>
        </div>



      


      </div>
    </section>
  );
}
