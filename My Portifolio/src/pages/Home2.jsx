import React from "react";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div className="bg-gray-100 py-10 h-screen flex justify-center items-center px-8 " id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
          <div className="md:col-span-5">
            <h1 className="text-4xl font-bold">
              UM POUCO SOBRE MIM
            </h1>
            <p className="mt-4 text-lg">
              Animador de informação, sempre me interessei pelo tech, principlamente na área de desenvolvimento de jogos, em 2023 me interessei por UX/UI e desde então sigo estudando.
              <br />
              <br />
              Atualmente estou cursando uma graduação em Engenharia de Software e uma pós em User Interface Design.
              <i>
                <b className="text-purple-00"> HTML 5, CSS, Javascript.</b>
              </i>
              <br />
              <br />
              Meus principais interesses:
              <i>
                <b className="text-purple-00">Desenvolvimento de interfaces web intuitivas</b>{" "}
                e também assuntos relacionados à{" "}
                <b className="text-purple-00">Design Thinking.</b>
              </i>
            
            </p>
          </div>
          <div className="md:col-span-3 flex justify-center">
            <Tilt>
              <div className="w-64 h-64 bg-gray-300 rounded-full flex justify-center items-center">
                <img src="./public/Foto 1.png" alt="foto do dev" className="object-cover rounded-full h-full" /> 
              </div>
            </Tilt>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-3xl font-bold">Vamos nos conectar?</h1>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/nandoantonio-git"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-purple-600 text-2xl"
            >
              <AiFillGithub />
            </a>
      
            <a
              href="https://www.linkedin.com/in/fernando-luiz-antonio-7b40221ab/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-purple-600 text-2xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/nando_luiz8/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-purple-600 text-2xl"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
