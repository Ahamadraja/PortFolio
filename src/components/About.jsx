import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About <span className="text-sm">( <a href="https://www.dropbox.com/scl/fi/sxq5midslxn4469ig5ud0/Ahamad_Resume_IT_.pdf?rlkey=0lyvjatp3l6ez0n7kjjc8n4l3&st=77wvdumv&dl=0" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Resume</a>)</span></h1>
        <p>
        Hello, I'm Ahamad Raja, an Electronics Engineering student at Kamla Nehru Institute of Technology with a GPA of 7.25/10. I am passionate about web development, especially using the MERN stack. I enjoy creating impactful and visually appealing software solutions. I have worked on several projects and internships and actively participate in coding competitions and extracurricular activities.
        </p>
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Education
        </h1>
        <span>
          B-Tech (2020 - 2024)<br/> Kamla Nehru Institute Of Technology, Sultanpur U.P.
        </span>
        <br />
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
        Programming Languages: C++, C, Python <br/>
        Web Technologies: HTML, CSS, JavaScript<br/>
        Tools/Frameworks: Node.js, React.js, Express.js, MongoDB, TypeScript, MySQL
        </span>
        <br />
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
        Front End Web Developer Intern (Sept. 18, 2023 - Oct. 18, 2023) <br/>
        Developed a landing page and designed a website page under expert mentorship.
        </span>
        <br />
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
        Solved 250+ coding problems <br/>
        3-star rating on CodeChef (max. rating: 1627) <br/>
        Second prize at Smart India Hackathon (college level)<br/>
        Winner of a quiz by the Department of Telecommunication, Government of India <br/>
        Robotics Head of College Hobby Club<br/>
        Organized photography exhibitions with PFAC
        </span>
        <br />
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission or aim is to utilize his technical and collaborative skills to innovate in web development and electronics engineering, continuously learning and contributing to impactful projects.
        </p>
      </div>
    </div>
  );
}

export default About;
