// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css3.svg"
import reactIcon from "./images/react.svg"
import js from "./images/js.svg"
import codeIcon from "./images/code.svg"
import Redux from "./images/redux.svg"
import ts from "./images/ts.svg"
import next from "./images/next.svg"
import bs from "./images/bs.svg"
import antd from "./images/antd.svg"
import ld from "./images/ld.svg"
import stof from "./images/stof.svg"
import resume from "./images/resume.png"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Kamran Davar",
  headerTagline: [
    //Line 1 For Header
    "Front-end Development",
  ],
  //   Header Paragraph
  headerParagraph:
    "If you need a interactive, responsive, and beautiful website with the latest software engineering technologies, You are in the right place.",
  //Contact Email
  contactEmail: "Kamran.davar.kd@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Darsup", //Project Title - Add Your Project Title Here
      para: "online education system that I worked on at Mehr-Pars Company.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s6.uupload.ir/files/screenshot_from_2022-02-27_14-39-47_06d5.png",
      //Project URL - Add Your Project Url Here
      url: "https://darsup.org/",
      disable: false,
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Comprehensive warehouse system(سامانه جامع انبارها)", //Project Title - Add Your Project Title Here
      para:
        "A national project for warehouse management that I worked on at Mehre-Pars Company.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s6.uupload.ir/files/screenshot_from_2022-02-27_14-40-39_h1q2.png",
      //Project URL - Add Your Project Url Here
      url: "https://www.nwms.ir/",
      disable: false,
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Forlocal.online", //Project Title - Add Your Project Title Here
      para:
        "this project help people to find nearest vendors and has some services for vendors.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s6.uupload.ir/files/screenshot_from_2022-02-27_14-41-35_2fde.png",
      //Project URL - Add Your Project Url Here
      url: "#",
      disable: true,
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "SabaService", //Project Title - Add Your Project Title Here
      para:
        "Back-office for a company that operates in the installation and maintenance of elevators and escalators.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s6.uupload.ir/files/screenshot_from_2022-02-27_14-52-50_fknh.png",
      //Project URL - Add Your Project Url Here
      url: "",
      disable: true,
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Galiverse", //Project Title - Add Your Project Title Here
      para: "Nft market Place", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s6.uupload.ir/files/screenshot_from_2022-02-27_14-46-21_y2zn.png",
      //Project URL - Add Your Project Url Here
      url: "",
      disable: true,
    },
  ],
  miniProjects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Github trending page", //Project Title - Add Your Project Title Here
      para:
        "I used: typescript, react(functional components), react-bootstrap, scss, axios, react-query", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s6.uupload.ir/files/screenshot_from_2022-02-27_17-15-22_u1b4.png",
      //Project URL - Add Your Project Url Here
      url: "https://wonderful-mirzakhani-093bd0.netlify.app/",
      github: "https://github.com/KamranDavar/github-trending",
      disable: false,
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "task Crud project with landing page And about page", //Project Title - Add Your Project Title Here
      para:
        "I used: js, react(functional components), redux, antd, less, axios, mock rest api.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://s6.uupload.ir/files/screenshot_from_2022-02-27_17-14-51_0q30.png",
      //Project URL - Add Your Project Url Here
      url: "https://nostalgic-lalande-580ec9.netlify.app",
      github: "https://github.com/KamranDavar/todo2",
      disable: false,
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "After that, in 2018, I graduated from Bushehr Persian Gulf University with a degree in civil engineering. I started learning front-end programming because of my great interest. ",
  aboutParaTwo:
    "started working as a freelance developer for Front End and continued for 7 months.",
  aboutParaThree:
    "Then I was hired by Mehr Pars Company as a front and developer and worked there for a year.",
  aboutParaFour:
    "Then I got a job at the Circle Company and worked there for a year. I am currently developing an nft market place in a team.",
  aboutImage:
    "https://s6.uupload.ir/files/whatsapp_image_2022-02-27_at_12.33.09_pm_(1)_pj1y.jpeg",
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para: "html5",
    },
    {
      id: 2,
      img: cssIcon,
      para: "css3",
    },
    {
      id: 3,
      img: js,
      para: "Javascript",
    },
    {
      id: 4,
      img: reactIcon,
      para: "React Js",
    },
    {
      id: 5,
      img: Redux,
      para: "Redux",
    },
    {
      id: 6,
      img: ts,
      para: "Typescript",
    },
    {
      id: 7,
      img: next,
      para: "NextJs",
    },
    {
      id: 8,
      img: antd,
      para: "Ant design",
    },
    {
      id: 8,
      img: bs,
      para: "React-bootsrap",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/KamranDavar" },
    {
      img: stof,
      url: "https://stackoverflow.com/users/12510464/kamran-davar",
    },
    {
      img: ld,
      url: "https://www.linkedin.com/in/kamran-davar-4a4557177/",
    },
    {
      img: resume,
      url: "https://docs.google.com/document/d/e/2PACX-1vR_I6TpT9tHuX-ve0Vx0c9BRee5XCB8JmpDRSWfkGJFZbnISMOpUQZ01UVmuyRMw2vzi-XxJBQzZMc8/pub",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
