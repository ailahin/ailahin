import React from "react";
import "./Home.css";
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div className="" id="home">
      <div className="hero min-h-screen bg-neutral-900" id="home">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="hidden md:block mx-md:hidden">
            <img
              src="../../images/ailahin.png"
              className="max-w-sm  mr-11 " 
            />
          </div>
          <div className=" p-11 text-slate-500 font-semibold">
            <h1 className="text-5xl font-extrabold text-orange-500">Welcome to</h1>
            <h1 className="text-4xl font-extrabold mt-4 text-base-300">
              Aminul Islam Lahin <span className="text-green-600">World!</span>
            </h1>
            <p className="py-6  text-justify">
              {/* I am a full-stack web developer based in the United Kingdom, and I
              have recently completed my bachelor's degree in Computer Science
              in May 2023. With a solid educational background and a passion for
              continuous learning, I am constantly exploring and developing new
              skills in the ever-evolving field of web development */}
            </p>
            <div className="flex items-center max-[400px]:flex flex-wrap ">
 
   <Link className="btn btn-primary mr-2" to="about-btn">About Me  </Link> 
   
   <a className="" target="_blank" href="https://www.linkedin.com/in/ailahin"> <i className="icon fa-brands fa-linkedin text-blue-600 text-4xl ml-16 mr-4"></i> </a>
    
  <a target={"_blank"} href="https://github.com/ailahin">   <i className="icon fa-brands fa-github text-blue-600 text-4xl mr-4"></i></a>
  <a className="" href="mailto:aminulislamlahin@gmail.com" target={"_blank"}> <i className="icon fa-solid fa-envelope text-blue-600 text-4xl mr-2"></i></a>
    
  </div>
          </div>
        </div>
        
      </div>
      <div className="" id="about"> </div>
     
    </div>
  );
};

export default Home;
