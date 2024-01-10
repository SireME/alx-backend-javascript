/* eslint-disable no-undef */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stud1: Student = {
  firstName: 'Mbang',
  lastName: 'Ernest',
  age: 27,
  location: 'Limbe',
};

const stud2: Student = {
  firstName: 'Mbang',
  lastName: 'ernesto',
  age: 50,
  location: 'Vaden',
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [stud1, stud2];

// Render a table using Vanilla JavaScript
const table = document.createElement('table');

// Append new row for each student in the array
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
