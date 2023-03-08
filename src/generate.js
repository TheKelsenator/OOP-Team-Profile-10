const {default: inquirer} = require('inquirer');

function generateEmployee(managerArray, internArray, engineerArray) {
  let html = "";
  html += managerCard(managerArray[0]);
  for (i = 0; i < internArray.length; i++) {
    html += internCard(internArray[i]);
  }
  for (i = 0; i < engineerArray.length; i++) {
    html += engineerCard(engineerArray[i]);
  }

  function managerCard(manager) {
    return `
    <div class="card container-body">
      <div class="card-content">
        <h4 class="heading">Manager</h4>
        <ul>
          <li><strong>Name: </strong>&nbsp; ${this.managerName}</li>
          <li><strong>I.D. Number: </strong>&nbsp; ${this.managerID}</li>
          <li><strong>Email: </strong>&nbsp; ${this.managerEmail}</li>
          <li><strong>Office Phone: </strong>&nbsp;<br>&nbsp;&nbsp;${this.managerPhone}</li>
        </ul>
      </div>  
    </div>`
  }

  function internCard(intern) {
    return `
    <div class="card container-body">
      <div class="card-content">
        <h4 class="heading">Intern</h4>
        <ul>
          <li><strong>Name: </strong>&nbsp; ${this.internName}</li>
          <li><strong>I.D. Number: </strong>&nbsp; ${this.internID}</li>
          <li><strong>Email: </strong>&nbsp; ${this.internEmail}</li>
          <li><strong>School: </strong>&nbsp;<br>&nbsp;&nbsp;${this.internSchool}</li>
        </ul>
      </div>  
    </div>`
  }

  function engineerCard(engineer) {
    return `
    <div class="card container-body">
      <div class="card-content">
        <h4 class="heading">Engineer</h4>
        <ul>
          <li><strong>Name: </strong>&nbsp; ${this.engineerName}</li>
          <li><strong>I.D. Number: </strong>&nbsp; ${this.engineerID}</li>
          <li><strong>Email: </strong>&nbsp; ${this.engineerEmail}</li>
          <li><strong>Github Username: </strong>&nbsp;<br>&nbsp;&nbsp;${this.engineerGithub}</li>
        </ul>
      </div>  
    </div>`
  }
  return html;
}

module.exports = generate;