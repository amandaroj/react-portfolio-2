import LineGradient from "../Components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import React from "../assets/react.png";
import Ruby from "../assets/ruby.png";
import Rails from "../assets/rails.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import Git from "../assets/git.png";
import Figma from "../assets/figma.png";
import Sql from "../assets/sql.png";

const MySkills = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 1,
      src: css,
      title: "CSS",
    },
    {
      id: 1,
      src: Javascript,
      title: "Javascript",
    },
    {
      id: 1,
      src: React,
      title: "React",
    },
    {
      id: 1,
      src: Ruby,
      title: "Ruby",
    },
    {
      id: 1,
      src: Rails,
      title: "Ruby on Rails",
    },
    {
      id: 1,
      src: Bootstrap,
      title: "Bootstrap",
    },
    {
      id: 1,
      src: Tailwind,
      title: "Tailwind",
    },
    {
      id: 1,
      src: Git,
      title: "Git",
    },
    {
      id: 1,
      src: Figma,
      title: "Figma",
    },
    {
      id: 1,
      src: Sql,
      title: "SQL",
    },
  ];

  return (
    <section id="skills" className="pt-10 pb-24 md:h-screen">
      {/* Header */}
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full mt-20">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">My Skills</p>
          <LineGradient width="w-[200px]" />
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0">
            {technologies.map(({ id, src, title }) => (
              <div
                key={id}
                className={
                  "shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
                }
              >
                <img src={src} alt="html" className="w-14 mx-auto" />
                <p className="font-nanum text-xl mt-4">{title}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl my-6">About Me</p>
          <LineGradient width="w-[200px]" />
          <p className="mt-10 mb-7">
            Hello Thanks for stopping by to check out my profile. I'm a graduate
            of Le Wagon's Web Development program and hold a bachelor's degree
            in International Business from Florida International University. My
            financial background combined with technical skills gives me a
            unique perspective and ability to solve problems. I'm excited to
            apply my knowledge to real-world projects and collaborate with a
            team to make a positive impact while continuously growing and
            learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;