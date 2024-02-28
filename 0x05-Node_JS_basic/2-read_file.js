const fs = require('fs');

function countStudents (path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  let csv = fs
  .readFileSync(path, 'utf-8')
  .toString('utf-8')
  .trim()
  .split('\n');
  csv = csv.slice(1);
  let allStudents = 0;
  const field = {};

  csv.forEach((value, index) => {
    allStudents += 1;
    const vls = value.split(',');
    const lastIndex = vls.length - 1;
    if ((field[`${vls[lastIndex]}`]) === undefined) {
      field[`${vls[lastIndex]}`] = [];
      field[`${vls[lastIndex]}`].push(vls[0]);
    } else {
      field[`${vls[lastIndex]}`].push(vls[0]);
    }
  });

  console.log(`Number of students: ${allStudents}`);
  for (const key in field) {
    const list = field[key].join(', ');
    console.log(`Number of students in  ${key}: ${field[key].length}. List: ${list}`);
  }
}

module.exports = countStudents;
