/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const inCity = students.filter((student) => student.location === city);

  inCity.map((student) => {
    const matchingGrade = newGrades.find((grade) => student.id === grade.studentId);

    if (matchingGrade) {
      student.grade = matchingGrade.grade;
    } else {
      student.grade = 'N/A';
    }

    return student;
  });

  return inCity;
}
