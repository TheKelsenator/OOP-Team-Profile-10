class Manager {
  constructor(name, id, email, phone) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.phone = phone;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getOfficePhone() {
    return this.phone;
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;