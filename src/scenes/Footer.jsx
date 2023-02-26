import SocialMediaIcons from "../Components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="md:h-10 bg-red p-10">
      <div className="w-4/5 mx-auto">
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-YesevaOne font-semibold text-l text-light-pink">
            Amanda Rojter
          </p>
          <div className="w-10 h-5"></div>
          <p className="font-JosefinSans text-sm text-light-pink">
            Developed and Designed with 🤍 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
