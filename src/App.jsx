
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import projects from "./data/project";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Cursor position
  const [cursorPosition, setCursorPosition] = useState({
    x: -500,
    y: -500,
  });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Skills
  const skills = {
    Frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    Backend: ["Node.js", "Express.js", "MongoDB"],
    Tools: ["Git", "GitHub", "VS Code", "Postman"],
    Programming: ["C", "Python", "TypeScript"],
  };

  const skillIcons = {
    HTML: "html5/html5-original.svg",
    CSS: "css3/css3-original.svg",
    JavaScript: "javascript/javascript-original.svg",
    React: "react/react-original.svg",
    "Next.js": "nextjs/nextjs-original.svg",
    "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
    "Node.js": "nodejs/nodejs-original.svg",
    "Express.js": "express/express-original.svg",
    MongoDB: "mongodb/mongodb-original.svg",
    Git: "git/git-original.svg",
    GitHub: "github/github-original.svg",
    "VS Code": "vscode/vscode-original.svg",
    Postman: "postman/postman-original.svg",
    C: "c/c-original.svg",
    Python: "python/python-original.svg",
    TypeScript: "typescript/typescript-original.svg",
  };

  // Education
  const education = [
    {
      degree: " School Certificate (JSC)",
      institution:
        "Haji Mohammad Ekhlas Uddin Bhuiyan High School & College",
      result: "GPA 5.00",
      status: "Completed | 2018",
      subjects: ["English", "Mathematics", "Science"],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution:
        "Haji Mohammad Ekhlas Uddin Bhuiyan High School & College",
      result: "GPA 5.00",
      status: "Completed | 2021",
      subjects: [
        "Higher Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "ICT",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      result: "GPA 5.00",
      status: "Completed | 2023",
      subjects: [
        "Higher Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "ICT",
      ],
    },
    {
      degree: "B.Sc. in Electronics & Communication Engineering",
      institution: "Institute of Science and Technology (IST)",
      result: "3rd Semester",
      status: "Currently Ongoing",
      subjects: [
        "Structured Programming Language",
        "Integral Calculus",
        "Electrical Circuit",
        "Electronic Circuit",
      ],
    },
  ];

  return (
    <>
      {/* Cursor Glow */}
      <div
        className="cursor-glow"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />

      {/* Navbar */}
      <Navbar />

      <main>
        {/* Home Section */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="hero-greeting">HELLO, I'M</p>

            <h1>
              Md Abid <span>Khan.</span>
            </h1>

            <h2 className="hero-role">
               Full Stack Developer
            </h2>

            <p className="hero-description">
              I build modern, responsive and user-friendly web
              applications. Currently pursuing Electronics &
              Communication Engineering and exploring new
              technologies to solve real-world problems.
            </p>

            <div className="hero-buttons">
              <a href="/resume.pdf" download className="btn">
                Download Resume
              </a>

              <a href="#projects" className="btn btn-outline">
                Explore Projects
              </a>
            </div>

            <div className="social-links">
  <a
    href="https://github.com/the-abidkhan"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/abidkhan-dev"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a 
    href="https://www.facebook.com/abidkhan0676"
    target="_blank"
    rel="noreferrer"
  >
    Facebook ↗
  </a>  
</div>
          </div>

          <div className="hero-image">
            <div className="hero-image-glow"></div>
            <img src="/profile.jpg" alt="Md Abid Khan" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <h2 className="section-title">About Me</h2>

          <div className="about-container">
            <div className="about-content">
              <p className="about-subtitle">GET TO KNOW ME</p>

              <h3>
                Turning ideas into <span>digital experiences.</span>
              </h3>

              <p>
                I am Md Abid Khan, an Electronics and Communication
                Engineering student with a strong interest in Full
                Stack Web Development.
              </p>

              <p>
                I enjoy building practical web applications,
                learning modern technologies and improving my
                problem-solving skills through hands-on projects.
              </p>

              <p>
                My goal is to become a skilled developer and create
                useful digital solutions that make everyday tasks
                easier.
              </p>
            </div>

            <div className="about-highlights">
              <div className="about-card">
                <span>01</span>
                <h4>Engineering Background</h4>
                <p>Studying Electronics & Communication Engineering.</p>
              </div>

              <div className="about-card">
                <span>02</span>
                <h4>Web Development</h4>
                <p>Building frontend and backend applications.</p>
              </div>

              <div className="about-card">
                <span>03</span>
                <h4>Continuous Learning</h4>
                <p>Exploring technologies through practical projects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2 className="section-title">My Skills</h2>

          <p className="section-subtitle">
            Technologies and tools I use to build web applications.
          </p>

          <div className="skills-container">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-card" key={category}>
                <h3>{category}</h3>

                <div className="skill-list">
                  {items.map((skill) => (
                    <div className="skill-item" key={skill}>
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skillIcons[skill]}`}
                        alt={`${skill} logo`}
                        loading="lazy"
                      />

                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <h2 className="section-title">Education</h2>

          <p className="section-subtitle">
            My academic journey and key subjects.
          </p>

          <div className="education-container">
            {education.map((item, index) => (
              <div className="education-card" key={index}>
                <div className="education-header">
                  <span className="education-number">
                    0{index + 1}
                  </span>

                  <span className="education-result">
                    {item.result}
                  </span>
                </div>

                <div className="education-details">
                  <span className="education-duration">
                    {item.status}
                  </span>

                  <h3>{item.degree}</h3>

                  <p className="education-institution">
                    {item.institution}
                  </p>

                  <div className="education-subjects">
                    <h4>Key Subjects</h4>

                    <div className="subject-list">
                      {item.subjects.map((subject) => (
                        <span key={subject}>{subject}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h2 className="section-title">Experience</h2>

          <p className="section-subtitle">
            My professional journey and practical experience.
          </p>

          <div className="experience-container">
            {/* Frontend & Web Developer */}
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <span className="experience-type">
                    Professional Experience
                  </span>

                  <h3>Frontend & Web Developer</h3>
                </div>

                <span className="experience-duration">
                  Jun 2026 - Present
                </span>
              </div>

              <p className="experience-description">
                Developing full-stack and frontend web applications
                with a focus on responsive user interfaces, clean code
                and practical solutions.
              </p>

              <div className="experience-responsibilities">
                <h4>Key Responsibilities & Achievements</h4>

                <ul>
                  <li>
                    Engineered full-stack and frontend applications
                    using React.js, Next.js, TypeScript and Node.js.
                  </li>

                  <li>
                    Developed FitLog, a workout tracking platform
                    with client-side state management and dynamic
                    API endpoints.
                  </li>

                  <li>
                    Built BookNook, a library management system
                    featuring CRUD operations and MongoDB database
                    integration.
                  </li>

                  <li>
                    Implemented authentication using Better Auth
                    with Google and GitHub OAuth providers.
                  </li>

                  <li>
                    Managed version control workflows using
                    Git and GitHub.
                  </li>
                </ul>
              </div>

              <div className="experience-subjects">
                <h4>Technologies</h4>

                <div className="experience-tags">
                  <span>React.js</span>
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Better Auth</span>
                  <span>Git</span>
                  <span>GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title">My Projects</h2>

          <p className="section-subtitle">
            Some of the projects I have built and worked on.
          </p>

          <div className="projects-container">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn-outline"
                    >
                      GitHub ↗
                    </a>

                    <button
                      className="project-btn project-btn-outline"
                      onClick={() =>
                        setSelectedProject(
                          selectedProject === project.id
                            ? null
                            : project.id
                        )
                      }
                    >
                      {selectedProject === project.id
                        ? "Show Less"
                        : "Details"}
                    </button>
                  </div>

                  {selectedProject === project.id && (
                    <div className="project-details">
                      <h4>Project Overview</h4>

                      <p>{project.description}</p>

                      <p>
                        Technologies used:{" "}
                        {project.technologies.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Resume Section */}
        <section id="resume" className="section">
          <h2 className="section-title">MY RESUME</h2>
          
          <p className="section-subtitle">
            My education, skills and projects.
          </p>
          <div className="resume-container" id="resume-content">
            <div className="resume-header">
              <h1>MD ABID KHAN</h1>
              <h3>Full Stack Developer</h3>
              
              <p>
                Rupganj, Narayanganj, Bangladesh
              </p>
              <p>
                +880 1819-282166 | theabidkhan.me@gmail.com
              </p>
              <p>
                <a href="https://github.com/the-abidkhan" target="_blank" rel="noreferrer">
                GitHub
                </a>
                {" | "}
                <a href="https://www.linkedin.com/in/abidkhan-dev" target="_blank" rel="noreferrer">
                LinkedIn
                </a>
                </p>
                </div>
                <div className="resume-block">
                  <h3>CAREER OBJECTIVE</h3>
                  <p>
                    Motivated Full Stack Developer with hands-on experience
        in building responsive web applications using modern
        frontend and backend technologies. Seeking opportunities
        to contribute to real-world projects and build reliable,
        user-friendly web solutions.
      </p>
    </div>

    <div className="resume-block">
      <h3>TECHNICAL SKILLS</h3>
      <p><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS</p>
      <p><strong>Backend:</strong> Node.js, Express.js</p>
      <p><strong>Database:</strong> MongoDB</p>
      <p><strong>Tools:</strong> Git, GitHub, VS Code, Postman</p>
      <p><strong>Languages:</strong> C, Python</p>
    </div>

    <div className="resume-block">
      <h3>PROJECTS</h3>

      <h4>BookNook — Full Stack Online Library</h4>
      <p>
        An online library where users can explore books,
        add books, borrow available copies and return books.
      </p>
      <p>Features: Book browsing, book management, borrowing and returning.</p>
      <p>
        <a href="https://booknook-client-theta.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
        {" | "}
        <a href="https://github.com/the-abidkhan/booknook-client" target="_blank" rel="noreferrer">GitHub</a>
      </p>

      <h4>FitLog — Fitness Tracking Application</h4>
      <p>
        A fitness application for managing workout plans
        and saving favorite exercises.
      </p>
      <p>Features: Workout plans, exercise browsing and saved exercises.</p>
      <p>
        <a href="https://fit-log-psi-five.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
        {" | "}
        <a href="https://github.com/the-abidkhan/Fit-Log" target="_blank" rel="noreferrer">GitHub</a>
      </p>

      <h4>Bazardor — Vegetable Price Tracking Platform</h4>
      <p>
        A platform for checking daily vegetable prices
        per kilogram across different areas.
      </p>
      <p>Features: Daily price information and area-wise price comparison.</p>
      <p>
        <a href="https://pha-7-bazardor.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
        {" | "}
        <a href="https://github.com/the-abidkhan/PHA-7-Bazardor" target="_blank" rel="noreferrer">GitHub</a>

        <h4>MentorLagbe — Full Stack Tuition Management Platform</h4>
<p>
  A tuition management platform where students can find tutors,
  apply for tuition, and manage applications. Tutors can post
  tuition opportunities and manage their tuition activities.
</p>
<p>Features: Tuition posting, tutor discovery, student applications, role-based dashboards and Stripe payment integration.</p>
<p>
  <a href="https://mentorlagbe-client-ebon.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
  {" | "}
  <a href="https://github.com/the-abidkhan/mentorlagbe-client" target="_blank" rel="noreferrer">GitHub</a>
</p>
      </p>
    </div>

    <div className="resume-block">
      <h3>EDUCATION</h3>

      <p><strong>B.Sc. in Electronics & Communication Engineering — Institute of Science and Technology (IST) </strong></p>
      <p>2024 – Present | Expected Graduation: 2029</p>

      <p><strong>HSC — Dhaka College (2023)</strong> | GPA: 4.92 / 5.00</p>
      <p><strong>SSC — Haji Mohammad Ekhlas Uddin Bhuiyan High School & College (2021)</strong> | GPA: 5.00 / 5.00</p>
      <p><strong>JSC — Haji Mohammad Ekhlas Uddin Bhuiyan High School & College (2018)</strong> | GPA: 5.00 / 5.00</p>
    </div>

    <div className="resume-block">
      <h3>LANGUAGES</h3>
      <p>Bengali — Native | English — Fluent | Hindi — Fluent</p>
    </div>
  </div>

  <div className="resume-actions">
    <button onClick={() => window.print()}>
      Save as PDF
    </button>
   <a
  href="/resume.pdf"
  download="Md_Abid_Khan_Resume.pdf"
  className="resume-download-btn"
>
  Download Resume
</a>
  </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <h2 className="section-title">Get In Touch</h2>

          <p className="section-subtitle">
            Have a project or opportunity in mind? Feel free to
            contact me.
          </p>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's Talk</h3>

              <p>
                I'm open to discussing new projects, opportunities
                and collaborations. Choose your preferred way to
                get in touch.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <span>Email</span>

                  <a href="mailto:theabidkhan.me@gmail.com">
                    theabidkhan.me@gmail.com
                  </a>
                </div>

                <div className="contact-item">
                  <span>Phone</span>

                  <a href="tel:+8801819282166">
                    +880 1819-282166
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              {/* WhatsApp */}
              <a
                href="https://wa.me/8801819282166"
                target="_blank"
                rel="noreferrer"
                className="contact-action whatsapp-action"
              >
                <span className="contact-icon whatsapp-icon">
                  <FaWhatsapp />
                </span>

                <span>
                  <strong>WhatsApp Message</strong>
                  <small>Send me a direct message</small>
                </span>

                <span className="contact-arrow">↗</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801819282166"
                className="contact-action call-action"
              >
                <span className="contact-icon call-icon">
                  <FaPhoneAlt />
                </span>

                <span>
                  <strong>Call Me</strong>
                  <small>Call me directly</small>
                </span>

                <span className="contact-arrow">↗</span>
              </a>

              {/* Email */}
              <a
                href="mailto:theabidkhan.me@gmail.com"
                className="contact-action email-action"
              >
                <span className="contact-icon email-icon">
                  <FaEnvelope />
                </span>

                <span>
                  <strong>Send Email</strong>
                  <small>Let's discuss your project</small>
                </span>

                <span className="contact-arrow">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
