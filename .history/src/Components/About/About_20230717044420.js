import React from "react";
import './About.css'
import { Link } from "react-scroll";


const About = () => {
  return (

    <div id="about-btn" to="about" className="hero"> 
    <div className=" bg-gray-900 mt-2 p-20 "   >
      <div className="text-center font-extrabold text-3xl p-4 text-white " >
        ABOUT
      </div>
      <div className="mt-5  ">
      <div className="card lg:card-side bg-gray-800  shadow-xl  ">
        <div className="text-stone-300 p-8 text-justify">
        <p>I am recent graduate with a degree in computer science and have a solid educational background. I have a strong passion for continuous learning and constantly strive to explore and develop new skills in programming languages, web development, software engineering and etc.</p>

        <p className="font-medium underline text-xl">If you have any opportunities where I can contribute, feel free to reach out.</p>
           
        <div className="text-center mt-5">
       <Link className="btn " to="contact">Hire Me </Link> 
        </div>
        </div>
        

        <div className="card-body w-full text-stone-300  ">
        <ul className=" list-inline font-medium  ">
              <li className="list-inline-item">FRONT END</li>
              <li className="list-inline-item">BACK END</li>
              <li className="list-inline-item">HTML5</li>
              <li className="list-inline-item">CSS3</li>
              <li className="list-inline-item">JAVASCRIPT</li>
              <li className="list-inline-item">REACTJS</li>
              <li className="list-inline-item">NODEJS</li>
              <li className="list-inline-item">EXPRESSJS</li>
              <li className="list-inline-item">MONGODB</li>
              <li className="list-inline-item">FIREBASE</li>
              <li className="list-inline-item">PYTHON</li>
              <li className="list-inline-item">COMPUTER NETWORKING</li>
              <li className="list-inline-item">PROJECT METHODOLOGIES</li>
              <li className="list-inline-item">MORE...</li>
            </ul>
          
        </div>
      </div>

      <div className="lg:hidden">
        <ul className="list">
          <li> <i class="fa-brands fa-html5 fa-fade" style={{color:"#e8b445"}}> </i> </li>
          <li> <i class="fa-brands fa-css3 fa-fade" style={{color:"#e8b445"}}> </i> </li>
          <li> <i class="fa-brands fa-js fa-fade" style={{color:"#e8b445"}}> </i> </li>
          <li> <i class="fa-brands fa-react fa-fade" style={{color:"#e8b445"}}> </i> </li>
          <li> <i class="fa-brands fa-node-js fa-fade" style={{color:"#e8b445"}}> </i> </li>
          
        </ul>
      </div>
      </div>
    </div>

     </div>
  );
};

export default About;
