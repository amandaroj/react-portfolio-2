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
import Tableau from "../assets/tableau.png";
import Excel from "../assets/Excel.png";

const MySkills = () => {
  const technologies = [
    {
      id: 1,
      src: Excel,
      title: "Excel",
    },
    {
      id: 1,
      src: Sql,
      title: "SQL",
    },
    {
      id: 1,
      src: Tableau,
      title: "Tableau",
    },
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
      src: Git,
      title: "Git",
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
          <p className="font-YesevaOne font-semibold text-4xl mb-5 text-blue">
            My Skills
          </p>
          <LineGradient width="w-[135px]" />
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
                  "hover:scale-105 duration-500 py-2 rounded-md bg-light-pink text-blue"
                }
              >
                <img src={src} alt="html" className="w-14 mx-auto" />
                <p className="font-JosefinSans text-l mt-4">{title}</p>
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
          <p className="font-playfair font-semibold text-4xl my-6 font-YesevaOne text-blue">
            About Me
          </p>
          <LineGradient width="w-[135px]" />
          <p className="mt-10 mb-7 font-JosefinSans text-blue">
            Hello 👋 Thanks for stopping by! I'm a graduate of Le Wagon's Web
            Development program and a certificate holder of Coursera/Google's
            Data Analytics with a strong passion for data analysis and
            visualization. Combining my technical skills with a bachelor's
            degree in International Business from Florida International
            University, I bring a unique perspective to problem-solving. I
            thrive on applying data manipulation, statistical analysis, and
            data-driven decision-making to real-world projects, collaborating
            with teams to make a positive impact. Continuously growing and
            learning, I'm dedicated to expanding my data visualization abilities
            to present insights effectively. As a data analyst, I'm committed to
            contributing to informed business decisions and leveraging my
            expertise to drive growth and efficiency. Let's connect and explore
            exciting opportunities in the world of data analysis!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
