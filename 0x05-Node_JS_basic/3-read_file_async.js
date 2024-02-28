const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n');
            const students = {};

            for (const line of lines) {
                const [firstName, lastName, age, field] = line.split(',');
                if (firstName && lastName && age && field) {
                    if (!students[field]) {
                        students[field] = [];
                    }
                    students[field].push(firstName);
                }
            }

            console.log(`Number of students: ${lines.length - 1}`);
            let init = 1
            for (const field in students) {
                if (init === 1) {
                    init = 0
                    continue
                }
                console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
            }

            resolve();
        });
    });
}

module.exports = countStudents;
