import React from "react";
import Home2 from "./Home2";
import Type from "../Type";
import homeLogo from "../../src/assets/home-main.svg";

function Home() {
  return (
    <section className="bg-gray-500 pt-5">
      <div className="relative w-full h-screen py-10 px-4 sm:p-5" id="home">
        <div className="container mx-auto flex flex-col justify-center h-full py-2">
          <div className="grid grid-cols-2 md:grid-cols-7 sm:grid-cols-1 gap-x-4 align md:justify-around mt-6 ">
            <div className="md:col-span-4 flex flex-col justify-center mx-auto">
              <h1 className="text-7xl font-bold mb-4 text-purple-900">
                Oi!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-6xl font-bold mb-6 text-purple-900">
                Sou o
                <strong className="text-purple-200"> Nando</strong>
              </h1>

              <div className="py-4 text-left text-4xl text-purple-200">
                <Type />
              </div>
            </div>

            <div className="md:col-span-3 flex justify-center md:justify-end mr-12 ">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "800px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
