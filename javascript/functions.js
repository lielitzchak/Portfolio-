class Project {
  id;
  name;
  description;
  link;
  photo;
  constructor(id, name, description, link, photo) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.link = link;
    this.photo = photo;
  }
  static addId = 0
}
