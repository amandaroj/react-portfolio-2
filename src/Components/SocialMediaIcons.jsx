import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-40 rounded-md transition duration-500 hover:scale-105"
        href="https://www.linkedin.com/in/amandaroj/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcon} alt="linkedin-link" />
      </a>
      <a
        className="hover:opacity-40 rounded-md transition duration-500 hover:scale-105"
        href="https://github.com/amandaroj"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubIcon} alt="github-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
