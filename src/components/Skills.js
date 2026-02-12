import '../App.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaJava,FaPython,
    FaAmilia,FaWordpress , FaFigma, FaRive, FaSpline, FaDocker, FaJenkins, FaGithub,
    
 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { SiMoodle,SiSonarqube,SiMysql  } from "react-icons/si";
import { AiOutlineTrademark } from "react-icons/ai";
import { PiGlobeHemisphereEastDuotone } from "react-icons/pi";




export default function Skills() {
  const Pskills = [
    { name: 'HTML', icon: <FaHtml5 />, percentagehtml: 90 },
    { name: 'CSS', icon: <FaCss3Alt />, percentagehtml: 80 },
    {name:'bootstrap',icon:<FaBootstrap />,percentagehtml:90},
    {name:'TailwindCss', icon:<RiTailwindCssFill />,percentagehtml:90},
    { name: 'JavaScript', icon: <FaJs />, percentagehtml: 75 },
    {name:'Jquery', icon:<DiJqueryLogo />, percentagehtml:70},
    { name: 'React', icon: <FaReact />, percentagehtml: 70 },
    {name:'Php', icon:<FaPhp />,percentagehtml:50},
    {name:'Python', icon:<FaPython />,percentagehtml:80},
    {name:'Java',icon:<FaJava />,percentagehtml:80},
    {name:'MySql', icon:<SiMysql  />,percentagehtml:70},
    
  ];

  const eskills = [
    { name: 'Articulate 360', icon: <FaAmilia />, percentagehtml: 90 },
    { name: 'Wordpress', icon: <FaWordpress  />, percentagehtml: 50 },
    {name:'Moodle',icon:<SiMoodle  />,percentagehtml:50}, 
  ];

  const dskills = [
    { name: 'Figma', icon: <FaFigma />, percentagehtml: 90 }, 
    { name: 'Rive', icon: <AiOutlineTrademark  />, percentagehtml: 70 }, 
    { name: 'Spline', icon: <PiGlobeHemisphereEastDuotone  />, percentagehtml: 70 },  
  ];


  const deskills = [
    { name: 'GitHub', icon: <FaGithub  />, percentagehtml: 90 },
    { name: 'Docker', icon: <FaDocker />, percentagehtml: 80 }, 
    { name: 'Jenkins', icon: <FaJenkins />, percentagehtml: 70 }, 
    { name: 'SonarQube', icon: <SiSonarqube  />, percentagehtml: 70 },  
  ];


  return (
    <section className="react-skills">
      <div className="overall-skills flex flex-col gap-3 p-3">
        <div className="overall-header flex justify-center">
          <div className="skills-header flex p-3">
            <span className="skills-text about-header text-2xl underline font-bold">Skills</span>
          </div>
        </div>

        <div className="skills-body flex flex-col gap-3 ">
          <div className="programming flex flex-col gap-3 w-full">
            <div className='programming-header'>
              <span className='programming-text about-header-01 text-xl font-bold'>Programming</span>
            </div>

            <div className='programming-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 w-full'>
              {Pskills.map((skill, index) => (
                <div className="skills-card rounded flex flex-col gap-3" key={index}>
                  <div className="header-card flex items-center gap-2">
                    <span className="icons-skill md:text-2xl">{skill.icon}</span>
                    <span className="card-text font-bold">{skill.name}</span>
                  </div>
                  <div className='progress-bar-overall'>
                    <div className='progress-bar-outer'>
                      <div
                        className='progress-bar-inner' style={{
                            width:`${skill.percentagehtml}%`,
                            animation:`grow 1s ease-out`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



          <div className="programming flex flex-col gap-3 w-full">
            <div className='programming-header'>
              <span className='programming-text about-header-01 text-xl font-bold'>E-Learning Tools</span>
            </div>

            <div className='programming-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 w-full'>
              {eskills.map((skill, index) => (
                <div className="skills-card rounded flex flex-col gap-3" key={index}>
                  <div className="header-card flex items-center gap-2">
                    <span className="icons-skill md:text-2xl">{skill.icon}</span>
                    <span className="card-text font-bold">{skill.name}</span>
                  </div>
                  <div className='progress-bar-overall'>
                    <div className='progress-bar-outer'>
                      <div
                        className='progress-bar-inner' style={{
                            width:`${skill.percentagehtml}%`,
                            animation:`grow 1s ease-out`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="programming flex flex-col gap-3 w-full">
            <div className='programming-header'>
              <span className='programming-text about-header-01 text-xl font-bold'>Design and Animation Tools</span>
            </div>

            <div className='programming-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 w-full'>
              {dskills.map((skill, index) => (
                <div className="skills-card rounded flex flex-col gap-3" key={index}>
                  <div className="header-card flex items-center gap-2">
                    <span className="icons-skill md:text-2xl">{skill.icon}</span>
                    <span className="card-text font-bold">{skill.name}</span>
                  </div>
                  <div className='progress-bar-overall'>
                    <div className='progress-bar-outer'>
                      <div
                        className='progress-bar-inner' style={{
                            width:`${skill.percentagehtml}%`,
                            animation:`grow 1s ease-out`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



          <div className="programming flex flex-col gap-3 w-full">
            <div className='programming-header'>
              <span className='programming-text about-header-01 text-xl font-bold'>DevOps Tools</span>
            </div>

          <div className='programming-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 w-full'>
              {deskills.map((skill, index) => (
                <div className="skills-card rounded flex flex-col gap-3" key={index}>
                  <div className="header-card flex items-center gap-2">
                    <span className="icons-skill md:text-2xl">{skill.icon}</span>
                    <span className="card-text font-bold">{skill.name}</span>
                  </div>
                  <div className='progress-bar-overall'>
                    <div className='progress-bar-outer'>
                      <div
                        className='progress-bar-inner' style={{
                            width:`${skill.percentagehtml}%`,
                            animation:`grow 1s ease-out`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
         


        </div>
      </div>
    </section>
  );
}
