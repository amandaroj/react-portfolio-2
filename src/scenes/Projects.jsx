import LineGradient from "../Components/LineGradient";
import { motion } from "framer-motion";
import FoodVisualizer from "../assets/food-visualizer.gif";
import CamperRental from "../assets/camper-rental.gif";
import Calculator from "../assets/calculator.png";
import QuoteGenerator from "../assets/quote-generator.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
bg-blue z-30 flex flex-col justify-center items-center text-center text-white p-16 rounded-lg shadow-md `;

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-YesevaOne font-semibold text-4xl">
            <span className="text-red">Pro</span>jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 font-nanum text-l font-JosefinSans">
          Hover over for more info!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2 sm:h-3/4 sm:w-3/4 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}

          <motion.div variants={projectVariant} className="relative rounded-lg">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Food Visualizer</p>
              <p className="mt-7">This is my app</p>
            </div>
            <img src={FoodVisualizer} alt="food visualizer" />
          </motion.div>
          <motion.div
            variants={projectVariant}
            className="relative rounded-lg  bg-light-pink"
          >
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Food Visualizer</p>
              <p className="mt-7">This is my app</p>
            </div>
            <img src={Calculator} alt="food visualizer" />
          </motion.div>
          <motion.div
            variants={projectVariant}
            className="relative rounded-lg  bg-light-pink"
          >
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Food Visualizer</p>
              <p className="mt-7">This is my app</p>
            </div>
            <img src={QuoteGenerator} alt="food visualizer" />
          </motion.div>
          <motion.div
            variants={projectVariant}
            className="relative rounded-lg "
          >
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">Food Visualizer</p>
              <p className="mt-7">This is my app</p>
            </div>
            <img src={CamperRental} alt="food visualizer" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
