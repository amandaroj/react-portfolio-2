import SocialMediaIcons from "../Components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImage from "../assets/profile.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 "
    >
      {/* image section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-8 before:-left-8  before:w-full before:max-w-[300px] md:before:max-w-[400px] before:h-full before:border-2 before:bg-red before:border-red before:z-[-1] before:rounded-md">
            <img
              alt="profile"
              src={profileImage}
              className=" hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[350px] rounded-md"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src={profileImage}
            className="transition duration-500 z-10 w-full
        max-w-[300px] md:max-w-[400px] rounded-md"
          />
        )}
      </div>

      {/* main section */}

      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* headings */}
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
          <p className="text-6xl font-YesevaOne z-10 text-center md:text-start text-blue">
            Amanda Rojter
          </p>
          <p className="mt-10 mb-7 text-2xl text-center md:text-start font-JosefinSans text-blue ">
            Data Analyst
          </p>
        </motion.div>

        {/* call to actions */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-red text-white hover:border-2 hover:border-red hover:text-blue py-3 px-7 font-JosefinSans hover:bg-light-pink hover:text-deep-blue transition duration-500 rounded-md"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
