let homeTitle = "Hello, I'm Liel Itzchak and I'm a Full-stack Developer...";
let homePageMain = document.getElementById("homePageMain");
let TitleHomePage = document.getElementById("TitleHomePage");
let projectsArticle = document.getElementById("projectsArticle");
// let projectsArticle = document.getElementById("projectsArticle");
let skillsInDom = document.getElementById("skills");
let i = 0;
let id = setInterval(() => {
  TitleHomePage.innerHTML += `${homeTitle[i++]}`;
  if (homeTitle.length == i) {
    clearInterval(id);
  }
}, 99);

const MY_PROJECTS = [
  new Project(
    "hotel project",
    "",
    "https://did.li/hZNw5",
    "https://did.li/1sINf"
  ),
  new Project("spotify", "", "https://did.li/Fvarl", "https://did.li/1sINf"),
  new Project("DJ Chekol", "", "", "https://did.li/1sINf"),
  new Project("landing page", "", "", "https://did.li/1sINf"),
  new Project(
    "Clothing-Store-project",
    "",
    "https://did.li/trrCN",
    "https://did.li/1sINf"
  ),
  new Project("join project", "", "", "https://did.li/1sINf"),
  new Project("calculator", "", "https://did.li/KCTfT", "https://did.li/1sINf"),
];

function printToDomAllProject() {
  for (const project of MY_PROJECTS) {
    skillsInDom.innerHTML += `<article id="projectNumber${project.counter}>
    <a href="${project.link}">
    <img src="${project.photo}" alt="">
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    </a>
    </article>`;
  }
}

printToDomAllProject();
