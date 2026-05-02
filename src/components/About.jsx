import React from "react";
import Skills from "./Skills";
function About() {
  return (
    <section className="pt-20 md:pt-28" id="about">
      <div className="container">
        <div>
          <h2 className="section-title mb-3.5">About Me</h2>
          <p className="">
            I’m a developer driven by curiosity and a love for problem-solving.
            What started as an interest in understanding how technology works
            gradually turned into a passion. Always striving to write code that is not just
            functional, but thoughtful and impactful. Feel free to reach out if you’d like to
            collaborate or discuss new opportunities.
          </p>
        </div>
        <div
          className="border mt-8 px-8 py-4 rounded-lg border-zinc-200
            dark:border-zinc-900"
        >
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;
