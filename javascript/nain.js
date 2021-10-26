let homeTitle = "Hello, I'm Liel Itzchak and I'm a software developer...";
let homePageMain = document.getElementById("homePageMain");
let TitleHomePage = document.getElementById("TitleHomePage");
let projectsArticle = document.getElementById("projectsArticle");
// let projectsArticle = document.getElementById("projectsArticle");
let i = 0;
let id = setInterval(() => {
  TitleHomePage.innerHTML += `${homeTitle[i++]}`;
  if (homeTitle.length == i) {
    clearInterval(id);
  }
}, 110);

const MY_PROJECTS = [
  {
    id: 1,
    name: "hotel project",
    description: "my first project in HTML and CSS",
    link: "https://did.li/hZNw5",
    photo: "",
  },
  {
    id: 2,
    name: "spotify",
    description: "i tried to do that alone",
    link: "",
    photo: "",
  },
  {
    id: 3,
    name: "DJ Chekol",
    description: "its was my first project in HTML and CSS",
    link: "https://did.li/Fvarl",
    photo: "",
  },
  {
    id: 4,
    name: "landing page",
    description: "my first work to friend",
    link: "",
    photo: "",
  },
  {
    id: 5,
    name: "Clothing-Store-project,",
    description: "",
    link: "https://did.li/trrCN",
    photo: "",
  },
  {
    id: 6,
    name: "join project",
    description: "me and my friend project",
    link: "",
    photo: "",
  },
  {
    id: 7,
    name: "calculator",
    description: "",
    link: "https://did.li/KCTfT",
    photo: "",
  },
];
// projectsArticle.innerHTML += ` <img src="https://did.li/Mggaa" alt="" />`;
