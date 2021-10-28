// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#9b59b6, #ff7f7f",
  firstName: "Deepika",
  middleName: "",
  lastName: "Chudi",
  message: " Web Developer | Programmer | Problem Solver ",
  icons: [
    {
      image: "fa-github",
      url: " ",
    },
    {
      image: "fa-instagram",
      url: " ",
    },
    {
      image: "fa-linkedin",
      url: " ",
    },
    {
      image: "fa-twitter",
      url: " ",
    },
  ],
};

//ABOUT SECTION

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/picture.jpg"),
  imageSize: 375,
  message:
    "Hello!! I'm Deepika, a Information Systems Graduate student at Northeastern University, Boston. Being a technology enthusiast, I enjoy learning new technologies and implementing in the websites/web pages I design. Actively looking for full-time Internship/Co-op opportunity from Spring 2022. ",
  resume: require("../assets/Resume.pdf"),
};

// PROJECTS SECTION https://drive.google.com/file/d/1wzQeTiL-hNSqaVo56bazpcERLtX1Ll_p/view?ths=true
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "deepikachudi16", 
  reposLength: 8,
  specificRepos: [],
};


const skills = {
  show: true,
  heading: "Skills",
  "icons": [
    {
      "name": "Java8",
      "class": "cib:java",
      "level": "75"
    },
    {
      "name": "React",
      "class": "cib:react",
      "level": "80"
    },
    {
      "name": "C/C++",
      "class": "cib:coreui-c",
      "level": "65"
    },
    {
      "name": "Python",
      "class": "cib:python",
      "level": "85"
    },
    {
      "name": "JavaScript",
      "class": "cib:js",
      "level": "70"
    },
    {
      "name": "HTML 5",
      "class": "cib:html5",
      "level": "95"
    },
    {
      "name": "CSS 3",
      "class": "cib:css3",
      "level": "95"
    },
    {
      "name": "Git",
      "class": "cib:git",
      "level": "85"
    },
    {
      "name": "SQL",
      "class": "fontisto:oracle",
      "level": "65"
    },
    {
      "name": "Android",
      "class": "cib:android-alt",
      "level": "60"
    },
    {
      "name": "TypeScript",
      "class": "cib:typescript",
      "level": "90"
    },
    
    {
      "name": "MySql",
      "class": "cib:mysql",
      "level": "60"
    },
    {
      "name": "Maven",
      "class": "simple-icons:apachemaven",
      "level": "60"
    },
    {
      "name": "Spring",
      "class": "cib:spring",
      "level": "85"
    }
  ]
};

// SKILLS SECTION
const skills1 = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  
};


const experiences = [
  {
    "company": "Digithon",
    "title": "Frontend Developer",
    "years": "June 2019 - Sept 2019",
    "mainTech": [
      "HTML, CSS, Node JS, React"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "Bootstrap",
      "Node JS",
      "React"
    ]
  },
  {
    "company": "Freelancer",
    "title": "Web Developer",
    "years": "Jan 2018 - Dec 2018",
    "mainTech": [
      "SASS, Angular  JS"
    ],
    "technologies": [
      "Angular JS",
      "Rest API",
      "SQL"
      
    ]
  }
];

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Deepika Reddy Chudi",
  message:
    "Boston, Massachusetts",
  
  email: "deepikachudi16@gmail.com",
  contact: "+1 413 275 6281"

};

export { navBar, mainBody, about, repos, skills, skills1, getInTouch, experiences};
