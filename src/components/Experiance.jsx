import React from "react";
import html from "../../public/htmlLogo.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
import express from "../../public/express.png";
import mysql from "../../public/mysqlLogo.png";
import python from "../../public/python.webp";
import cppLang from "../../public/c++Logo.png";
import mongoDB from "../../public/mongodb.jpg";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: reactjs,
      name: "React-JS",
    },
    {
      id: 5,
      logo: node,
      name: "Node-JS",
    },
    {
      id: 6,
      logo: express,
      name: "Express-JS",
    },
    {
      id: 7,
      logo: mysql,
      name: "My-SQL",
    },
    {
      id: 8,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 9,
      logo: cppLang,
      name: "C++",
    },
    {
      id: 10,
      logo: python,
      name: "Python",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've experiance in below technologies...
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
