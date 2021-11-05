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
