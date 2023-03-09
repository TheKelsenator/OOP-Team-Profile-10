const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, phone) {
    super(name, id, email)
    this.phone = phone;
  }
  getOfficePhone() {
    return this.phone;
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;