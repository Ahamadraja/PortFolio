import React from "react";
import cppLang from "../../public/c++Logo.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import typescript from "../../public/typescript.png";
import javascript from "../../public/javascript.png";
function PortFolio() {
  const cardItem = [
    {
      id: 3,
      logo: javascript,
      name: "JaavScript",
      content:"Key for web interactivity, runs on client/server, easy syntax, extensive libraries."
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      content:"Library for UI building, component-based, virtual DOM, declarative syntax, efficient rendering, widely adopted.",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      content:"Runtime for server-side JavaScript, built on V8 engine, event-driven, non-blocking I/O, scalable, extensive npm ecosystem.",
    },
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      content:"NoSQL database, stores data in BSON format, flexible schema, scalable, powerful querying, widely used in web development and data analytics.",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      content:"Minimalist Node.js web framework, simplifies building web apps and APIs with robust routing and middleware support."
    },

    {
      id: 6,
      logo: typescript,
      name: "TypeScript",
      content:"Superset of JavaScript, adds static typing, developed by Microsoft, enhances code quality and maintainability, increasingly popular for large-scale projects."
    },
    {
      id: 5,
      logo: cppLang,
      name: "C++",
      content:" High-performance programming language, versatile, strong support for object-oriented programming, widely used in system/software development and game development."
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, content }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 mx-auto border-[2px] rounded-full "
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mt-2">{name}</div>
                <div className="text-xs mt-2">{content}</div>
                {/* <p className="px-2 mx-auto text-gray-700">
                  Lorem ipsum, dolotur adipisicing elit.
                </p> */}
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button> */}
                <button className="bg-blue-600 hover:bg-green-700 text-white font-bold px-4 py-2 mx-8 border rounded-full ring-2 ring-black ring-inset" >
                <a href="https://github.com/Ahamadraja">Source code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
