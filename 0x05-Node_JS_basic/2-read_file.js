const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const csvRows = fs.readFileSync(path, 'utf-8').split('\n').slice(1); // Removing header
  const fieldCounts = {};

  let allStudents = 0;

  csvRows.forEach(row => {
    allStudents++;
    const columns = row.split(',');
    const fieldKey = columns[columns.length - 1];
    fieldCounts[fieldKey] = fieldCounts[fieldKey] || [];
    fieldCounts[fieldKey].push(columns[0]);
  });

  console.log(`Number of students: ${allStudents}`);
  for (const key in fieldCounts) {
    const list = fieldCounts[key].join(', ');
    console.log(`Number of students in ${key}: ${fieldCounts[key].length}. List: ${list}`);
  }
}

module.exports = countStudents;
