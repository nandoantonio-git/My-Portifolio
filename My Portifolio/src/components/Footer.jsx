import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  
  return (
    <div className="bg-gray-800 py-6 px-9">
      <div className="container mx-auto text-center md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-white text-lg">
            Nandin
          </h3>
        </div>
        
        <div>
          <ul className="flex justify-center space-x-6">
            <li className="social-icons">
              <a
                href="https://github.com/nandoantonio-git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-purple-500"
              >
                <AiFillGithub />
              </a>
            </li>
          
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/fernando-luiz-antonio-7b40221ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-purple-500"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/nando_luiz8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-purple-500"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
