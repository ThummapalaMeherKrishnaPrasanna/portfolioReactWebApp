import { useRef, useState } from "react";

const navIcons = [
  {
    id: 1,
    name: "mail",
    image: "mail.png",
    link: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbhGdctdknRVrgDSfTKmjDQNrfhtJXqfjdjTrbkcgJRJrPPkmhGlnqSqTSmZwXZMZbNlCW",
  },
  {
    id: 2,
    name: "Github",
    image: "github.png",
    link: "https://github.com/ThummapalaMeherKrishnaPrasanna",
  },
  {
    id: 3,
    name: "Linkedin",
    image: "linkedin1.png",
    link: "https://www.linkedin.com/in/meher-krishna-prasanna-thummapala/",
  },
];
const carousel = [
  {
    id: 1,
    image: "Photo.png",
    projectTitle: "Sweet Treats",
    gitLink:
      "https://github.com/ThummapalaMeherKrishnaPrasanna/Sweet-Treats-Responsive-website",

    description:
      "Developed a responsive website using HTML, CSS, Bootstrap, and JavaScript with add-to-cart,quantity selection, and price calculation features.",
  },
  {
    id: 2,
    image: "Quiz Photo.png",
    projectTitle: "Quiz App",
    gitLink:
      "https://github.com/ThummapalaMeherKrishnaPrasanna/Quiz-App-Dynamic-Website",

    description:
      "Developed a responsive website using HTML, CSS, Bootstrap, and JavaScript with add-to-cart,quantity selection, score board with and price calculation features.",
  },
  {
    id: 3,
    image: "weather forecast photo.png",
    projectTitle: "Weather Forecast",
    gitLink:
      "https://github.com/ThummapalaMeherKrishnaPrasanna/Weather-Forecast-API-Dynamic-Website",

    description:
      "Built a weather app using OpenWeather API to display real-time data and a 5-day forecast, improving API integration and async JavaScript skills.",
  },
  {
    id: 4,
    image: "shop react-app photo.png",
    projectTitle: "Shop App",
    gitLink:
      "https://github.com/ThummapalaMeherKrishnaPrasanna/shop-dynamic-web-app",

    description:
      "Built a responsive e-commerce demo with cart functionality and dynamic product listings using reusable React components.",
  },
  {
    id: 5,
    image: "usepopcorn-3.png",
    projectTitle: "Usepopcorn App",
    gitLink:
      "https://github.com/ThummapalaMeherKrishnaPrasanna/Usepopcorn-React-web-app",

    description:
      "Developed UsePopcorn, a React movie app that allows users to search, rate, and track watched movies.",
  },
  {
    id: 6,
    image: "job board platform.png",
    projectTitle: "Job Board Platform",
    gitLink:
      "https://github.com/ThummapalaMeherKrishnaPrasanna/Job-Board-Platform",

    description:
      "Developed a responsive Job Board website displaying IT job listings using HTML, CSS, and Bootstrap. And you can select company",
  },
];

const usingSkills = [
  {
    id: 1,
    name: "HTML",
    image: "html.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "css.png",
  },
  {
    id: 3,
    name: "JS",
    image: "js.png",
  },
  {
    id: 4,
    name: "BOOTSTRAP",
    image: "bootstrap.png",
  },
  {
    id: 5,
    name: "REACT",
    image: "logo192.png",
  },
  {
    id: 6,
    name: "GITHUB",
    image: "github.png",
  },
];
const learingSkill = [
  {
    id: 1,
    name: "NODE JS",
    image: "node_js.png",
  },
  {
    id: 2,
    name: "MY SQL",
    image: "my_sql.png",
  },
  {
    id: 3,
    name: "MONGODB",
    image: "mongodb.png",
  },
];

const OtherSkills = [
  {
    id: 1,
    name: "JAVA",
    image: "JAVA1.png",
  },
  {
    id: 2,
    image: "mainframes.png",
    name: "MAINFRAMES",
  },
];

function App() {
  const [redirect, setRedirect] = useState("");
  function handleIcon(link) {
    setRedirect(link);
  }
  const [result, setResult] = useState("");
  return (
    <div>
      <div>
        <Header />
        <Main />
        <Details>
          <NavIcons redirect={redirect} handleIcon={handleIcon} />
        </Details>
        <Section className="projectsection">
          <AboutMe>
            <Box>
              <p className="aboutText fw-bold fs-4" id="about">
                ABOUT ME
              </p>
            </Box>
          </AboutMe>
          <Certification />
          <MyProjects />
        </Section>
        <Section>
          <Box>
            <p className="aboutText fw-bold fs-4" id="skill">
              Skills
            </p>
          </Box>
          <Skills />
        </Section>
        <Section>
          <Box>
            <p className="aboutText fw-bold fs-4" id="contact">
              CONTACT
            </p>
          </Box>
          <div>
            <Contact />
            <div
              className="d-flex justify-content-center mt-3"
              style={{ height: "50px" }}
            >
              <NavIcons redirect={redirect} handleIcon={handleIcon} />
            </div>
            <FormInput result={result} setResult={setResult} />
            <Toast result={result} />
          </div>
        </Section>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <p className="navbar-brand fs-2">
            <ion-icon className="logo" name="briefcase-outline"></ion-icon>
          </p>

          <div className="navbar-nav w-50">
            <div className="anchour d-flex justify-content-between  w-75 mt-3">
              <a className="link " aria-current="page" href="#about">
                About
              </a>
              <a className="link" href="#project">
                Projects
              </a>
              <a className="link" href="#skill">
                Skills
              </a>
              <a className="link" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Main() {
  return (
    <div className="main-outer">
      <div className="bg-dark main">
        <div className="front-page">
          <img className="front-size" src="Web_dev2.png" alt="image1" />
        </div>
      </div>
    </div>
  );
}

function Details({ children }) {
  return (
    <>
      <div className="details ">
        <p className="fw-bold fs-5">Hi, I am</p>
        <h1 className="mb-0 ms-2">Meher Krishna</h1>
        <p className="fs-6 ms-2">Aspiring Front-end Developer</p>
      </div>
      {children}
    </>
  );
}

function NavIcons({ redirect, handleIcon }) {
  return (
    <div className="navicon  d-flex justify-content-center w-50">
      {navIcons.map((icon) => (
        <div key={icon.id}>
          <a
            href={redirect}
            target="_blank"
            rel="noreferrer"
            onClick={() => handleIcon(icon.link)}
          >
            <img
              className="me-3 bg-white p-2 rounded-4"
              src={icon.image}
              alt={icon.name}
              style={{ width: "45px", height: "45px" }}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
function Section({ children, className }) {
  return <div className={`About-me ${className}`}>{children}</div>;
}

function AboutMe({ children }) {
  return (
    <>
      {children}

      <div className="d-flex justify-content-center mt-5 ">
        <p className="w-50" style={{ textAlign: "center" }}>
          Aspiring Frontend Developer with hands-on experience in building
          responsive web applications using HTML, CSS, JavaScript, and React. I
          enjoy turning ideas into interactive digital experiences and
          continuously improving my problem-solving and development skills.
        </p>
      </div>
    </>
  );
}

const Certifications = [
  {
    id: 1,
    Certificate:
      "Participated in hackathon on street light automation & fault detection.",
  },
  {
    id: 2,
    Certificate:
      "Participated in two days IOT Bootcamp & 31 hours of overnight at BVCE Engineering college in collaboration with ABTechville.",
  },
  {
    id: 3,
    Certificate:
      "I completed 4 months long-term on internship in Java Full Stack Development organized by Talent Shine India Pvt.Ltd.",
  },
  {
    id: 4,
    Certificate:
      "IBM Mainframe: Completed Hands-on training in JCL, COBOL, VSAM, DB2, CICS.",
  },
  {
    id: 5,
    Certificate:
      "I completed 6 – weeks internship in Employability Skill leveraging IBM SkillBuild platform (APSSDC).",
  },
];
function Box({ children }) {
  return <div className="d-flex justify-content-center">{children}</div>;
}
function Certification() {
  return (
    <div>
      <div>
        <h4 className="ms-5 ps-4">My Certification :</h4>
      </div>
      <div className="d-flex justify-content-center m-3">
        <div className="w-75  p-3">
          {Certifications.map((item) => (
            <div key={item.id}>
              <p>{item.Certificate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function MyProjects() {
  const [project, settProject] = useState("");
  function handleProject(gitLink) {
    settProject(gitLink);
  }
  return (
    <div className="mt-3 projectsOuter">
      <h4 className="ms-5 ps-4" id="project">
        My Latest Projects :
      </h4>
      <div className="d-flex justify-content-center ">
        <div className="cardOuter d-flex justify-content-center flex-wrap p-5 ">
          {carousel.map((item) => (
            <div key={item.id}>
              <a
                href={project}
                className="text-decoration-none card  ms-3 me-4 mb-4 shadow-lg"
                style={{ width: "18rem" }}
                onClick={() => handleProject(item.gitLink)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.image}
                  className="card-img-top p-2 rounded-3"
                  alt={item.projectTitle}
                />
                <div className="card-body">
                  <h5 className="card-title text-light">{item.projectTitle}</h5>
                  <p className="card-text text-light">{item.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <>
      <div className="w-25 ms-5 mt-2 d-flex justify-content-center">
        <h4 className="letter-space ">USING NOW :</h4>
      </div>

      <div className="skills container text-center">
        <div className="row  g-2 ">
          <div className="col-12">
            <div className="p-3 d-flex justify-content-center">
              {usingSkills.map((skill) => (
                <div key={skill.id}>
                  <img
                    className="skill me-5 mt-5 using-skill-img"
                    src={skill.image}
                    alt={skill.name}
                  />
                  <p
                    className=" fw-semibold mt-3"
                    style={{ marginLeft: "-45px" }}
                  >
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-25 ms-3 mt-5 d-flex justify-content-center">
        <h4 className="letter-space">LEARING :</h4>
      </div>
      <div className="d-flex justify-content-center mt-5">
        {learingSkill.map((lerSkill) => (
          <div key={lerSkill.id}>
            <img
              className="skill me-5 learing-skills"
              src={lerSkill.image}
              alt={lerSkill.name}
            />
            <p className="mt-2 fw-semibold learing-skills-name">
              {lerSkill.name}
            </p>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center w-25 ms-5 mt-4">
        <h4 style={{ letterSpacing: "4px" }}>OTHER SKILLS :</h4>
      </div>
      <div className="d-flex justify-content-center mt-5">
        {OtherSkills.map((other) => (
          <div key={other.id}>
            <img
              className="skill me-5 other-skills"
              src={other.image}
              alt={other.name}
            />
            <p className="mt-3 fw-semibold other-skils-names">{other.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function Contact() {
  return (
    <>
      <div className="contact-info d-flex justify-content-center mt-5">
        <p>
          I'm currently seeking frontend developer opportunities where I can
          contribute and grow. Let’s connect and build something amazing
          together.
        </p>
      </div>
    </>
  );
}
function FormInput({ result, setResult }) {
  // Toast message at bottom
  const showToast = () => {
    const toastEl = document.getElementById("liveToast");
    const toast = new window.bootstrap.Toast(toastEl);
    toast.show();
  };

  // When you submit message will sent mail through access key & API
  const onSubmit = async (event) => {
    event.preventDefault();
    // To reset form
    setResult("");
    if (!event.target.checkValidity()) {
      setResult("Error");

      return;
    }
    const formData = new FormData(event.target);
    formData.append("access_key", "4a024156-c664-4dec-8940-4450603e7bc2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    event.target.reset();
  };
  const textareaRef = useRef(null);
  // Textarea will expand
  const handleInput = () => {
    const el = textareaRef.current;
    el.style.height = "auto"; // reset height
    el.style.height = el.scrollHeight + "px"; // expand
  };
  return (
    <div className="d-flex justify-content-center mt-5 pt-5">
      <div className="w-50">
        <form onSubmit={onSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="name"
              className="form-control contactFormColor"
              id="floatingInput"
              placeholder="Name"
              required
            />
            <label htmlFor="floatingInput">Enter Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              className="form-control contactFormColor"
              id="floatingInputDisabled"
              placeholder="Mail id"
              required
            />
            <label htmlFor="floatingInputDisabled">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              name="phone"
              className="form-control contactFormColor"
              id="floatingInputDisabled"
              placeholder="Mobile Number"
              required
            />
            <label htmlFor="floatingInput">Phone Number</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control contactFormColor"
              name="message"
              ref={textareaRef}
              onInput={handleInput}
              placeholder="Leave a comment here"
              id="floatingTextareaDisabled"
              required
            ></textarea>
            <label htmlFor="floatingTextareaDisabled">Comments</label>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              className="btn btn-dark mt-5 fw-semibold"
              type="submit"
              onClick={showToast}
            >
              Submit
            </button>
            <p className="d-none">{result}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

function Toast({ result }) {
  return (
    <>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast">
          <div className="toast-header">
            <img
              src="mail1-removebg-preview.png"
              className="rounded me-2"
              style={{ height: "25px", width: "25px" }}
              alt="..."
            />
            {result === "Success!" ? (
              <>
                <strong className="me-auto">Email has sent</strong>
                <small>Just Now</small>
              </>
            ) : (
              <>
                <strong className="me-auto">Email has not sent</strong>
                <small>Just Now</small>
              </>
            )}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
            ></button>
          </div>
          {result === "Success!" ? (
            <>
              <div className="toast-body text-success fw-semibold">
                Thank You
              </div>
            </>
          ) : (
            <>
              <div className="toast-body text-danger fw-semibold">
                Please check above fields
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default App;
