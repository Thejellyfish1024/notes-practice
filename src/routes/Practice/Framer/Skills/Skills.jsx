
import "./skills.css";

import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import SkillsTabs from "./SkillsTabs";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 200,
    });
  }, []);
  return (
    <div className="w-screen h-[80vh] bg-black flex justify-center items-center">
      <section className="max-w-7xl md:mx-auto mx-3">
        <div data-aos="fade-down"
          data-aos-duration="1000" className="mt-10">
          <SkillsTabs />
        </div>
      </section>
    </div>
  );
};

export default Skills;
