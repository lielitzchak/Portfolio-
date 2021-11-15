function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}

const homeTitle = "Hello, I'm Liel Itzchak and I'm a Full-stack Developer...";
let homePageMain = document.getElementById("homePageMain");
let TitleHomePage = document.getElementById("TitleHomePage");
let projectsArticle = document.getElementById("projectsArticle");
let projectSection = document.getElementById("projectsArticle");
let i = 0;
let id = setInterval(() => {
  TitleHomePage.innerHTML += `${homeTitle[i++]}`;
  if (homeTitle.length == i) {
    clearInterval(id);
  }
}, 99);

class Project {
  name;
  description;
  link;
  photo;
  id;
  constructor(name, description, link, photo) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.photo = photo;
    this.id = ++Project.id;
  }
  static id = 0;
}

const MY_PROJECTS = [
  new Project(
    "hotel project",
    '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat autem minima voluptatem reiciendis ipsam id quisquam quod! Laborum libero pariatur impedit maxime molestias consectetur neque voluptatum temporibus, minima"',
    "https://did.li/hZNw5",
    "https://did.li/1sINf"
  ),
  new Project(
    "spotify",
    '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat autem minima voluptatem reiciendis ipsam id quisquam quod! Laborum libero pariatur impedit maxime molestias consectetur neque voluptatum temporibus, minima"',
    "https://did.li/Fvarl",
    "https://did.li/1sINf"
  ),
  new Project(
    "DJ Chekol",
    '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat autem minima voluptatem reiciendis ipsam id quisquam quod! Laborum libero pariatur impedit maxime molestias consectetur neque voluptatum temporibus, minima"',
    "",
    "https://did.li/1sINf"
  ),
  new Project(
    "landing page",
    '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat autem minima voluptatem reiciendis ipsam id quisquam quod! Laborum libero pariatur impedit maxime molestias consectetur neque voluptatum temporibus, minima"',
    "",
    "https://did.li/1sINf"
  ),
  new Project(
    "Clothing-Store-project",
    '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat autem minima voluptatem reiciendis ipsam id quisquam quod! Laborum libero pariatur impedit maxime molestias consectetur neque voluptatum temporibus, minima"',
    "https://did.li/trrCN",
    "https://did.li/1sINf"
  ),
  new Project(
    "join project",
    '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat autem minima voluptatem reiciendis ipsam id quisquam quod! Laborum libero pariatur impedit maxime molestias consectetur neque voluptatum temporibus, minima"',
    "",
    "https://did.li/1sINf"
  ),
  new Project(
    "calculator",
    '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat autem minima voluptatem reiciendis ipsam id quisquam quod! Laborum libero pariatur impedit maxime molestias consectetur neque voluptatum temporibus, minima"',
    "https://did.li/KCTfT",
    "../media/photos/calculator.jpg"
  ),
  new Project(
    "movie",
    "my first project with API ' that i didn't build",
    "https://did.li/Qkgaa",
    ""
  ),
];

function printToDomAllProject() {
  for (const project of MY_PROJECTS) {
    projectSection.innerHTML += `<article id="projectNumber${project.counter}>
    <a href="${project.link}">
    <img src="${project.photo}" alt="">
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    </a>
    </article>`;
  }
}

console.log(MY_PROJECTS);
printToDomAllProject();
