export default function createIteratorObject(report) {
  const iterator = {
    departments: Object.keys(report.allEmployees),
    currentDepartmentIndex: 0,
    currentEmployeeIndex: 0,

    next() {
      while (this.currentDepartmentIndex < this.departments.length) {
        const department = this.departments[this.currentDepartmentIndex];
        const employees = report.allEmployees[department];

        if (this.currentEmployeeIndex < employees.length) {
          const employee = employees[this.currentEmployeeIndex];
          this.currentEmployeeIndex += 1;
          return { value: employee, done: false };
        }
        // Move to the next department
        this.currentDepartmentIndex += 1;
        this.currentEmployeeIndex = 0;
      }

      // No more items to iterate
      return { done: true };
    },
  };

  // Make the iterator iterable
  // eslint-disable-next-line func-names
  iterator[Symbol.iterator] = function () {
    return this;
  };

  return iterator;
}
