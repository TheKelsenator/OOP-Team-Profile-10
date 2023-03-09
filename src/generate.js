const {default: inquirer} = require('inquirer');

function generateHTML(managerArray, internArray, engineerArray) {
  console.log(managerArray, internArray, engineerArray);
  let html = '';
  for (i = 0; i < managerArray.length; i++) {
    html += managerCard(managerArray[i]);
  }
  for (i = 0; i < internArray.length; i++) {
    html += internCard(internArray[i]);
  }
  for (i = 0; i < engineerArray.length; i++) {
    html += engineerCard(engineerArray[i]);
  }

  function managerCard(managerArray) {
    return `
    <div class="card container-body">
      <div class="card-content">
        <h4 class="heading">Manager</h4>
        <ul>
          <li><strong>Name: </strong>&nbsp; ${managerArray.getName()}</li>
          <li><strong>I.D. Number: </strong>&nbsp; ${managerArray.getId()}</li>
          <li><strong>Email: </strong>&nbsp; ${managerArray.getEmail()}</li>
          <li><strong>Office Phone: </strong>&nbsp;<br>&nbsp;&nbsp;${managerArray.getOfficePhone()}</li>
        </ul>
      </div>  
    </div>`
  }

  function internCard(internArray) {
    return `
    <div class="card container-body">
      <div class="card-content">
        <h4 class="heading">Intern</h4>
        <ul>
          <li><strong>Name: </strong>&nbsp; ${internArray.getName()}</li>
          <li><strong>I.D. Number: </strong>&nbsp; ${internArray.getId()}</li>
          <li><strong>Email: </strong>&nbsp; ${internArray.getEmail()}</li>
          <li><strong>School: </strong>&nbsp;<br>&nbsp;&nbsp;${internArray.getSchool()}</li>
        </ul>
      </div>  
    </div>`
  }

  function engineerCard(engineerArray) {
    return `
    <div class="card container-body">
      <div class="card-content">
        <h4 class="heading">Engineer</h4>
        <ul>
          <li><strong>Name: </strong>&nbsp; ${engineerArray.getName()}</li>
          <li><strong>I.D. Number: </strong>&nbsp; ${engineerArray.getId()}</li>
          <li><strong>Email: </strong>&nbsp; ${engineerArray.getEmail()}</li>
          <li><strong>Github Username: </strong>&nbsp;<br>&nbsp;&nbsp;${engineerArray.getGithub()}</li>
        </ul>
      </div>  
    </div>`
  }
  return html;
}

function generate(managerArray, internArray, engineerArray) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./style.css">
      <title>Document</title>
    </head>

    <header>
      <h1 class="is-size-1">My Team</h1>
    </header>

    <body>

      <div class="contents">
        ${generateHTML(managerArray, internArray, engineerArray)}
      </div>  

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="index.js"></script>

    </body>

    <footer>
      <p>Made with 💛 by &nbsp;<a href="https://github.com/TheKelsenator">TheKelsenator</a></p>
    </footer>

    </html>
  `;
};

module.exports = generate;