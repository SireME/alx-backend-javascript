/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // get the name of a course using getter
  get name() {
    return this._name;
  }

  // set the name of a course using a setter method
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // get the length of a course?
  get length() {
    return this._length;
  }

  // setter method to set length
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // get list of students doing this course?
  get students() {
    return this._students;
  }

  // set a list of students doing this course?
  set students(studnts) {
    if (!Array.isArray(studnts) || !studnts.every((studnt) => typeof studnt === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = studnts;
  }
}
