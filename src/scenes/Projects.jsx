import LineGradient from "../Components/LineGradient";
import { motion } from "framer-motion";
import FoodVisualizer from "../assets/food-visualizer.gif";
import CamperRental from "../assets/camper-rental.gif";
import Calculator from "../assets/calculator.png";
import QuoteGenerator from "../assets/quote-generator.png";
import CovidDashboard from "../assets/CovidDashboard.png";

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
          <p className="font-YesevaOne font-semibold text-4xl">Projects</p>
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
          className="sm:grid sm:grid-cols-2 sm:h-3/4 gap-5 sm:w-3/4 lg:max-w-[1200px]"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-YesevaOne mt-10">Food Visualizer</p>
              <p className="mt-7 font-JosefinSans">
                A web app designed and developed using Ruby on Rails that allows
                guests to view pictures of the menu items before ordering by
                scanning a QR code, and provides statistics on dish performance
                for owners.
              </p>
              <div className="mb-10 mt-4">
                <button className="sm:mt-20 bg-red text-white hover:border-2 hover:border-red hover:text-blue sm:py-3 sm:px-7 py-2 px-4 font-JosefinSans hover:bg-light-pink hover:text-deep-blue transition duration-500 rounded-md">
                  <a
                    href="https://github.com/amandaroj/FoodVisualizer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>
                <button className="sm:ml-20 ml-5 sm:mt-20 bg-red text-white hover:border-2 hover:border-red hover:text-blue sm:py-3 sm:px-7 py-2 px-4 font-JosefinSans hover:bg-light-pink hover:text-deep-blue transition duration-500 rounded-md">
                  <a
                    href="http://www.foodvisualizer.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </button>
              </div>
            </div>
            <img src={FoodVisualizer} alt="food visualizer" />
          </motion.div>
          <motion.div
            variants={projectVariant}
            className="relative bg-light-pink"
          >
            <div className={overlayStyles}>
              <p className="text-xl md:text-2xl font-YesevaOne mt-10">
                COVID-19 Population Analysis Dashboard
              </p>
              <p className="mt-7 font-JosefinSans">
                a data project utilizing SQL and Tableau to analyze COVID-19
                deaths among different populations. The project integrates
                various datasets to provide valuable insights into the impact of
                the pandemic on specific demographics, regions, and age groups,
                presenting the findings in an interactive and visually engaging
                Tableau dashboard.
              </p>
              <div className="mb-10 sm:mt-10 ">
                <button className="sm:mt-20 bg-red text-white hover:border-2 hover:border-red hover:text-blue sm:py-3 sm:px-7 py-2 px-4 font-JosefinSans hover:bg-light-pink hover:text-deep-blue transition duration-500 rounded-md">
                  <a
                    href="https://github.com/amandaroj/PortfolioProjects/blob/main/CovidAnalysis.sql"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>
                <button className="sm:ml-20 ml-5 sm:mt-20 bg-red text-white hover:border-2 hover:border-red hover:text-blue sm:py-3 sm:px-7 py-2 px-4 font-JosefinSans hover:bg-light-pink hover:text-deep-blue transition duration-500 rounded-md">
                  <a
                    href="https://public.tableau.com/views/COVID-19PopulationAnalysisDashboard/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </button>
              </div>
            </div>
            <img
              src={CovidDashboard}
              alt="Calculator app"
              height="600px"
              width="600px"
            />
          </motion.div>
          <motion.div
            variants={projectVariant}
            className="relative bg-light-pink"
          >
            <div className={overlayStyles}>
              <p className="text-xl sm:text-2xl font-YesevaOne mt-10">
                Quote Generator
              </p>
              <p className="mt-7 font-JosefinSans">
                Built with JavaScript, this app fetches a random quote from an
                API and displays it in the browser upon clicking a button. It
                also has the added functionality of sharing the quote to
                Twitter.
              </p>
              <div className="mb-10 sm:mt-10 ">
                <button className="sm:mt-20 bg-red text-white hover:border-2 hover:border-red hover:text-blue sm:py-3 sm:px-7 py-2 px-4 font-JosefinSans hover:bg-light-pink hover:text-deep-blue transition duration-500 rounded-md">
                  <a
                    href="https://github.com/amandaroj/quote-generator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>
                <button className="sm:ml-20 ml-5 sm:mt-20 bg-red text-white hover:border-2 hover:border-red hover:text-blue sm:py-3 sm:px-7 py-2 px-4 font-JosefinSans hover:bg-light-pink hover:text-deep-blue transition duration-500 rounded-md">
                  <a
                    href="https://amandaroj.github.io/quote-generator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </button>
              </div>
            </div>
            <img
              src={QuoteGenerator}
              alt="Quote Generator"
              height="600px"
              width="600px"
            />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-YesevaOne mt-10">Camper Rentals</p>
              <p className="mt-7 font-JosefinSans">
                In five days, a team of four developers built a Ruby on Rails
                clone of Airbnb. The app includes essential features such as
                browsing listings, booking accommodations, and managing
                reservations.
              </p>
              <div className="mb-10 sm:mt-8 ">
                <button className="sm:mt-20 bg-red text-white hover:border-2 hover:border-red hover:text-blue sm:py-3 sm:px-7 py-2 px-4 font-JosefinSans hover:bg-light-pink hover:text-deep-blue transition duration-500 rounded-md">
                  <a
                    href="https://github.com/EvaHaverkort/camper-rental"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>
                <button className="sm:ml-20 ml-5 sm:mt-20 bg-red text-white hover:border-2 hover:border-red hover:text-blue sm:py-3 sm:px-7 py-2 px-4 font-JosefinSans hover:bg-light-pink hover:text-deep-blue transition duration-500 rounded-md">
                  <a
                    href="https://camperrental.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </button>
              </div>
            </div>
            <img src={CamperRental} alt="Camper Rental" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
